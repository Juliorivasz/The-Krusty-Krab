// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWLkFfYOgIfaul5SeJz4IKq-6EnxpydHk",
  authDomain: "thekrustykrab-60926.firebaseapp.com",
  projectId: "thekrustykrab-60926",
  storageBucket: "thekrustykrab-60926.appspot.com",
  messagingSenderId: "58571096995",
  appId: "1:58571096995:web:26e3de58c0c6a2418b1016",
  measurementId: "G-3W9026HQBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();