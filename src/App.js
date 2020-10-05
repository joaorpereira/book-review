import React, { useEffect, useState } from 'react';
import ThemeContext from './constants/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import { auth, db } from './services/firebase';

function App() {
  
  const [ user, setUser] = useState(null)
  const [ posts, setPosts] = useState([])
  
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
        <BrowserRouter>
          <Navbar user={user}/>
          <Router user={user} posts={posts}/>
        </BrowserRouter>
      </ThemeContext>
  );
}

export default App;
