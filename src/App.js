import React from 'react';
import ThemeContext from './constants/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
      <ThemeContext>
        <CssBaseline />
        <BrowserRouter>
          <Navbar/>
          <Router/>
        </BrowserRouter>
      </ThemeContext>
  );
}

export default App;
