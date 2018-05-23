import React, { Children } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../assets/Fonts/DINPro-Regular.otf';

export const bitsoColors = {
  mediumGreen: '#86af6b',
  regularGreen: '#80c156',
  lightGreen: '#98d372',
  darkRed: '#722837',
  regularRed: '#cc4458',
  mediumRed: '#ba3040',
  darkNavy: '#161a1e',
  backgroundNavy: '#191e23',
  regularNavy: '#252c36',
  mediumNavy: '#384555',
  navyHeaders: '#313d4c',
  darkText: '#4e5863',
  lightText: '#b0bac1',
  sidebarBackground: '#23292d',
  sidebar: '#2e353d',
  sidebarHeader: '#727c84',
  sidebarText: '#747f89',
  sidebarLightText: '#b0bac1',
  neutralGray: '#cccccc',
  bitcoinYellow: '#ebc256',
};

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#191e23',
    },
  },
  typography: {
    fontFamily: ['DINPro-Regular', 'Arial', 'sans-serif'].join(','),
    button: {
      color: bitsoColors.lightText,
      textTransform: 'none',
    },
  },
  bitsoColors,
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
