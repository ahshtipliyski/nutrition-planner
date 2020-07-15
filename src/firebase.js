import firebase from "firebase";

const config = {
  apiKey: "AIzaSyChDOHE1COGlK-K2oU4QGBda1WMiLXBxRE",
  authDomain: "firedabse-react-app.firebaseapp.com",
  databaseURL: "https://firedabse-react-app.firebaseio.com",
  projectId: "firedabse-react-app",
  storageBucket: "firedabse-react-app.appspot.com",
  messagingSenderId: "825636366070",
  appId: "1:825636366070:web:40a468e57fe6332a8aeed7"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;