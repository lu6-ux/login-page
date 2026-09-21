// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSj6Zk9hvbWIfDuGrPxojrkcbr0_jJ8fc",
  authDomain: "loginpage-a5fc4.firebaseapp.com",
  projectId: "loginpage-a5fc4",
  storageBucket: "loginpage-a5fc4.firebasestorage.app",
  messagingSenderId: "301842160451",
  appId: "1:301842160451:web:cf4e03aa046b38d1022df6",
  measurementId: "G-C258LKZMF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();