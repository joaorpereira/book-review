import firebase from 'firebase';

const firebaseApp = {
    apiKey: "AIzaSyBhjerVhKAtOPiJA9m3CGm0V8wCYxKezD0",
    authDomain: "book-reviews-63de0.firebaseapp.com",
    databaseURL: "https://book-reviews-63de0.firebaseio.com",
    projectId: "book-reviews-63de0",
    storageBucket: "book-reviews-63de0.appspot.com",
    messagingSenderId: "323321599482",
    appId: "1:323321599482:web:19c122dfbae632a47bc043"
  };

firebase.initializeApp(firebaseApp)

// Database
const db = firebase.firestore()

// Authentication
const auth = firebase.auth()

// Storage 
const storage = firebase.storage()

export {db, auth, storage} 