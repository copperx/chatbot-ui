// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo86hkXYIj0HwlkPqs_44MJKZQYDrKFxo",
  authDomain: "chatbot-ui-6ef8e.firebaseapp.com",
  projectId: "chatbot-ui-6ef8e",
  storageBucket: "chatbot-ui-6ef8e.appspot.com",
  messagingSenderId: "997935677605",
  appId: "1:997935677605:web:f1b99ea627ec9d97190d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication Module
const auth = getAuth();

export { auth, app };
