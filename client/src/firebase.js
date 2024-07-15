// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-867c2.firebaseapp.com",
  projectId: "mern-blog-867c2",
  storageBucket: "mern-blog-867c2.appspot.com",
  messagingSenderId: "554435976965",
  appId: "1:554435976965:web:b3003b7eae15a1c393616c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);