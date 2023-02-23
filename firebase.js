import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvLAvz_B2QEwMtJMSXP7Vh7hEd3klrmSw",
  authDomain: "navigatin-57612.firebaseapp.com",
  projectId: "navigatin-57612",
  storageBucket: "navigatin-57612.appspot.com",
  messagingSenderId: "217303947610",
  appId: "1:217303947610:web:ba08b7373d02ce0e48bb63",
  measurementId: "G-40W572S0SD",
};

const app = firebase.initializeApp(firebaseConfig);
const fireDB = app.firestore();
const auth = app.auth();
export { app, fireDB, auth };
