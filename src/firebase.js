// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvdcOMcwPXEq3ap7zdx0_-kBdevvqIRKM",
  authDomain: "wow-chat-app-558d7.firebaseapp.com",
  projectId: "wow-chat-app-558d7",
  storageBucket: "wow-chat-app-558d7.appspot.com",
  messagingSenderId: "205933589084",
  appId: "1:205933589084:web:be3dc55cb3e80fe535ac99",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
