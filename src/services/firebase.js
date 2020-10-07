import firebase from 'firebase';
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCgL0ZHTQpYP0SU9iYzQ6FWmcBbf-FtWXQ",
  authDomain: "bookreview-56c7d.firebaseapp.com",
  databaseURL: "https://bookreview-56c7d.firebaseio.com",
  projectId: "bookreview-56c7d",
  storageBucket: "bookreview-56c7d.appspot.com",
  messagingSenderId: "947076511336",
  appId: "1:947076511336:web:06e8adf6a85274244c6ddd"
});

// Database
const db = firebase.firestore()

// Authentication
const auth = firebase.auth()

// Storage 
const storage = firebase.storage()

export {db, auth, storage, app} 