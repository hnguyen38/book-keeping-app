// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDprxJdwLWeXRtFdE8IX9HMHf8Ef68eNaY",
  authDomain: "book-keeping-app-edb06.firebaseapp.com",
  databaseURL: "https://book-keeping-app-edb06-default-rtdb.firebaseio.com",
  projectId: "book-keeping-app-edb06",
  storageBucket: "book-keeping-app-edb06.appspot.com",
  messagingSenderId: "345880609636",
  appId: "1:345880609636:web:bd7a4c31538053edfdb071",
  measurementId: "G-RK6V39SQB0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
