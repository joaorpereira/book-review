import { Box, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState, createContext } from "react";
import {app} from "./firebase.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {

    async function getAuth() { 
      try {
        await app.auth().onAuthStateChanged((user) => {
          setCurrentUser(user)
          })
          setPending(false)
      } catch (error) {
        alert("Ocorreu um erro ao tentar a autentificação");
      }
    }
    getAuth()

  }, []);

  if(pending){
    return  <Box style={{display: 'flex', justifyContent: 'center', marginTop: '150px'}}><CircularProgress/></Box>
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
