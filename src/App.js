import React from 'react';
import ThemeContext from './constants/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './routes/Router';
import Navbar from './components/Navbar/Navbar'
import { AuthProvider } from './services/Auth';
import { PostProvider } from './services/Post';

function App() {

  return (
      <ThemeContext>
        <CssBaseline />
        <AuthProvider>      
          <PostProvider>
            <Navbar/>
            <Router/>
          </PostProvider>
        </AuthProvider>
      </ThemeContext>
  );
}

export default App;
