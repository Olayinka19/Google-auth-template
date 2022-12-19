// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANUqc-wGTX9Qp0EpP15uVi3fEsJGQyxBw",
  authDomain: "majo-349b7.firebaseapp.com",
  projectId: "majo-349b7",
  storageBucket: "majo-349b7.appspot.com",
  messagingSenderId: "322715951472",
  appId: "1:322715951472:web:6dc9a6f3270b64f22e6fb5",
  measurementId: "G-3P94ZDZCS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);