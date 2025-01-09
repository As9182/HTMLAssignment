const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = () => {
  return {
    entry: commonPaths.entryPath,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/
        },
        {
          test: /\.(png|jpe?g|gif|svg|JPE?G|PNG|WebP|webp|ico)$/,
          type: 'asset/resource',
          generator: {
            filename: `${commonPaths.imagesFolder}/[name].[contenthash].[ext]`
          }
        },
        {
          test: /\.(woff2|ttf|woff|eot)$/,
          type: 'asset/resource',
          generator: {
            filename: `${commonPaths.fontsFolder}/[name].[contenthash].[ext]`
          }
        }
      ]
    },
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.*', '.js', '.jsx', '.css', '.webp', '.jpeg', '.jpg'],
      alias: {
        __GLOBAL__: commonPaths.globalPath,
        __SHARED__: commonPaths.sharedPath,
        __ASSETS__: commonPaths.assetsPath
      }
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: commonPaths.templatePath,
        favicon: commonPaths.faviconPath
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
        fix: true,
        emitWarning: false,
        failOnWarning: false
      })
    ]
  };
};
