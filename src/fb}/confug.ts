// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_cGU8dM7759dDbXt9y8kFJmp5h1bUWnA",
  authDomain: "curso-svelte-73a9a.firebaseapp.com",
  projectId: "curso-svelte-73a9a",
  storageBucket: "curso-svelte-73a9a.appspot.com",
  messagingSenderId: "443866157546",
  appId: "1:443866157546:web:03e093ae683e642280e293"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const provider  = new GoogleAuthProvider()

export {firebase , provider, auth, signInWithRedirect, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword}
