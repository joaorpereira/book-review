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
        }
    },
    });
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      );
};
    
export default ThemeContext;