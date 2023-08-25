import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCLTimuJQYRRykzrtpMjWEPe8LdmgHPMEU",
    authDomain: "th-project-61d02.firebaseapp.com",
    projectId: "th-project-61d02",
    storageBucket: "th-project-61d02.appspot.com",
    messagingSenderId: "202042322793",
    appId: "1:202042322793:web:9c257a70ff8cd286a4d7f8",
    measurementId: "G-QMJ4QKD7RP"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export default firebase.database();