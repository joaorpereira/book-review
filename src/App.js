import React from 'react';
import ThemeContext from './constants/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <ThemeContext>
        <CssBaseline />
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ThemeContext>
  );
}

export default App;
