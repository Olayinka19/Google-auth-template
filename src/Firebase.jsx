// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYrAizgRcLoDLbjT1Z9J8um6G23oiszdw",
  authDomain: "pawster-capstone.firebaseapp.com",
  projectId: "pawster-capstone",
  storageBucket: "pawster-capstone.appspot.com",
  messagingSenderId: "465105046179",
  appId: "1:465105046179:web:1a9126267c672751c60d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);