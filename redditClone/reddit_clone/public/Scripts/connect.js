var firebaseConfig = {
    apiKey: "AIzaSyBUjU1OuJUnvueOI9FSvPGnnAg5w3uBQog",
    authDomain: "ourreddit-1572579679058.firebaseapp.com",
    databaseURL: "https://ourreddit-1572579679058.firebaseio.com",
    projectId: "ourreddit-1572579679058",
    storageBucket: "ourreddit-1572579679058.appspot.com",
    messagingSenderId: "759250034016",
    appId: "1:759250034016:web:612e3bb641ced9e02c1205",
    measurementId: "G-64PCTQ8QLZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  //firebase.database().ref("hi").set("there");

  //make firestone references
  const db = firebase.firestore();