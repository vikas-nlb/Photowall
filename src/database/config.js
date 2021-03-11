import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCv0_aHdlVnADEXC6lYZcNERmAqdfrvv54",
  authDomain: "photowall-80253.firebaseapp.com",
  databaseURL: "https://photowall-80253-default-rtdb.firebaseio.com",
  projectId: "photowall-80253",
  storageBucket: "photowall-80253.appspot.com",
  messagingSenderId: "451367589728",
  appId: "1:451367589728:web:3fd0c79f1579b23677b005",
  measurementId: "G-FXVDEZ9CDM"
 }
 
 
 firebase.initializeApp(config)
 const database = firebase.database()
 export {database}