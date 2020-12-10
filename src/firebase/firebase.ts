import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBvoB52SNCXbGjv8pzENeohURidOhYudlE",
  authDomain: "dome-cd504.firebaseapp.com",
  databaseURL: "https://dome-cd504.firebaseio.com",
  projectId: "dome-cd504",
  storageBucket: "dome-cd504.appspot.com",
  messagingSenderId: "416952278030",
  appId: "1:416952278030:web:a3792290358ffd9b1db05f"
};

// Export Firestore instance
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const groups = db.collection("groups");
const projects = db.collection("projects");
const todos = db.collection("todos");
const users = db.collection("users");

export { db, auth, groups, projects, todos, users };
