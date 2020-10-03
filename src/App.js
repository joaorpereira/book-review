import React, { useEffect, useState } from 'react';
import ThemeContext from './constants/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import { auth } from './services/firebase';

function App() {
  
  const [ user, setUser] = useState(null)
  
  useEffect(() => {

      const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if(authUser) {
              setUser(authUser)
          } else {
              setUser(null)
          }
      })

      return () => { unsubscribe() }
  },[])

  return (
      <ThemeContext>
        <CssBaseline />
        <BrowserRouter>
          <Navbar user={user}/>
          <Router/>
        </BrowserRouter>
      </ThemeContext>
  );
}

export default App;
