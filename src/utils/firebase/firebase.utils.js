// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

//Step 1: this is set up for google and user authentication to firebase
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

//Step 2: set up firestore db
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

//step 1
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//step 2
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  if (!userAuth) return;
  //lets us access user info with unique uid
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  //gets data from specified user
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if doesn't exist, doc is set with objects and stored in firebase
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
