// Import the functions you need from the SDKs you need

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
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

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
export const db = getFirestore(firebaseApp);

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
  } //if it exists, we get the user doc
  else {
    return userDocRef;
  }
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

export const signOutUser = async () => {
  //firebase signout
  await signOut(auth);
};

//open listener - using this in usercontext. permenent open listener and will give callback everytime auth state changes
//need to tell when to stop listening when unmounts to prevent memory leaks
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//set data collection in each user
export const createUserDataFromAuth = async (userAuth, inputs) => {
  //lets us access user info with unique uid
  if (!userAuth) {
    return alert("Sign In to Add Item");
  }
  //wrapping collection in doc creates unique id for data collection
  //creates new collection called 'data' in each 'users'
  const userDataRef = doc(collection(db, "users", userAuth.uid, "data"));
  console.log(userDataRef);
  try {
    await setDoc(userDataRef, { ...inputs });
  } catch (error) {
    console.log("error creating item", error.message);
  }
  return userDataRef;
};

//get data for populating table
export const getUserData = async (userAuth) => {
  //query docs in collection to get data: users collection -> data collection
  if (!userAuth) {
    return;
  }
  try {
    const dataSnapshot = await getDocs(
      collection(db, `users/${userAuth.uid}/data`)
    );
    console.log(dataSnapshot);
    return dataSnapshot;
  } catch (e) {
    console.log("Error fetching data", e);
  }
};

//data doc reference
export const docDataRef = async (userAuth, id) => {
  const dataDoc = doc(db, `users/${userAuth.uid}/data/${id}`);
  const response = await getDoc(dataDoc);
  return response;
};

//delete doc
export const deleteDocData = async (userAuth, id) => {
  const dataDoc = doc(db, `users/${userAuth.uid}/data/${id}`);
  return await deleteDoc(dataDoc);
};

//update doc
export const updateDocData = async (userAuth, id, info) => {
  const dataDoc = doc(db, `users/${userAuth.uid}/data/${id}`);
  return await updateDoc(dataDoc, { ...info });
};
