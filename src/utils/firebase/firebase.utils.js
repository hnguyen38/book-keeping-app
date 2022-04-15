// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

//Step 1: this is set up for google and user authentication to firebase
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  //lets us access user info with unique uid
  //doc takes 3 arguments: database, collection (we're gonna call it users), & a unique id
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  //gets data from specified user
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if doesn't exist, set docs with objects and store in firebase
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  //if it exists, we get the user doc
  return userDocRef;
};

//step 3 creating user (sign up)
export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//step 4 signing into existing account
export const signInAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

//open listener - using this in usercontext. permentent open listener and will give callback everytime auth state changes
//need to tell when to stop listening when unmounts to prevent memory leaks
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
