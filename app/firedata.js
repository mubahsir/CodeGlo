// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWmX58he399p0g7yaq-zj9Y15yEk-yrpE",
  authDomain: "codeglodevelpoment.firebaseapp.com",
  projectId: "codeglodevelpoment",
  storageBucket: "codeglodevelpoment.appspot.com",
  messagingSenderId: "358475688071",
  appId: "1:358475688071:web:3dca8e45ef9aface5ff022",
  measurementId: "G-DPLY0DRZJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth();
export default app;
