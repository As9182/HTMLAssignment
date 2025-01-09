const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]'
                // localIdentName: '[local]___[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    open: true,
    port: 1234,
    proxy: [
      {
        context: ['/api'],
        target:
          'http://equitas-sf-email-srch-5-env.eba-fju9v6j6.us-east-1.elasticbeanstalk.com',
        secure: false
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
