import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor, regularColor} from './colors';

const ThemeContext = ({ children }) => {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: primaryColor,
          constrastText: "white",
        },
        secondary: {
          main: secondaryColor,
        },
        text: {
          primary: regularColor,
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    });
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      );
};
    
export default ThemeContext;