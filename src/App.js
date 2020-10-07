import React, { useEffect, useState } from 'react';
import ThemeContext from './constants/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import { db } from './services/firebase';
import { AuthProvider } from './services/Auth';

function App() {

  const [ posts, setPosts] = useState([])
  
  useEffect(() => {
    async function getItems() { 
      try {
        db.collection("posts")
          .orderBy("timestamp", "desc")
          .onSnapshot(snapshot => {
            setPosts(
              snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
              }))
            )
          })
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();

  },[])

  return (
      <ThemeContext>
        <CssBaseline />
        <AuthProvider>
          <BrowserRouter>
            <Navbar/>
            <Router posts={posts}/>
          </BrowserRouter>
        </AuthProvider>
      </ThemeContext>
  );
}

export default App;
