import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvoB52SNCXbGjv8pzENeohURidOhYudlE",
  authDomain: "dome-cd504.firebaseapp.com",
  databaseURL: "https://dome-cd504.firebaseio.com",
  projectId: "dome-cd504",
  storageBucket: "dome-cd504.appspot.com",
  messagingSenderId: "416952278030",
  appId: "1:416952278030:web:a3792290358ffd9b1db05f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
