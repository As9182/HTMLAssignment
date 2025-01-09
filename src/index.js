import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './Global/theme';
import Home from './Widgets/Home';

const ele = document.getElementById('root');
const root = ReactDOM.createRoot(ele);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Home />
  </ThemeProvider>
);
