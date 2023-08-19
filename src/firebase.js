// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx1mvsbKDhsV6Q3cnSGOWv_5CCap-rA9A",
  authDomain: "wow-chat-81966.firebaseapp.com",
  projectId: "wow-chat-81966",
  storageBucket: "wow-chat-81966.appspot.com",
  messagingSenderId: "134004996716",
  appId: "1:134004996716:web:aac1ca7261b3d2b4753649",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
