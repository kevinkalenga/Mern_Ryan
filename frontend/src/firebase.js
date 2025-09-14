// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1FlnkeP5Y41c9-UgchTnoukN5dT0jYTo",
  authDomain: "mernecommerce-50299.firebaseapp.com",
  projectId: "mernecommerce-50299",
  storageBucket: "mernecommerce-50299.firebasestorage.app",
  messagingSenderId: "1006715348408",
  appId: "1:1006715348408:web:57ef08f462c23ed0755b4d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export

// export const auth = firebase.auth()

// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// Initialisation de l’app
const app = initializeApp(firebaseConfig);

// Initialisation des services
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();