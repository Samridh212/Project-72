import firebase from 'firebase'
require("@firebase/firestore")


// Initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyA87ocwh1MUAo9kAf45LyGhe6vqSYhmEvk",
    authDomain: "story-hub-2-fcad0.firebaseapp.com",
    databaseURL: "https://story-hub-2-fcad0-default-rtdb.firebaseio.com",
    projectId: "story-hub-2-fcad0",
    storageBucket: "story-hub-2-fcad0.appspot.com",
    messagingSenderId: "145255550037",
    appId: "1:145255550037:web:ffee599ec14294146d58dc"
  };

  // Initialize firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()