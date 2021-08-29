import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsN0s808s1P9nJh3ABjefcSX96QokEsf0",
  authDomain: "music-1f77e.firebaseapp.com",
  projectId: "music-1f77e",
  storageBucket: "music-1f77e.appspot.com",
  appId: "1:563368708290:web:07862ed69caa00b565935b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const usersCollection = collection(db, "users");

/* eslint-disable */
export { auth, db, createUserWithEmailAndPassword, usersCollection, addDoc };
