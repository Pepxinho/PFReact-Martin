// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHbQfxqddQ5hPHtYxjlBK-UiZfbMzTlbY",
  authDomain: "em-componentes.firebaseapp.com",
  projectId: "em-componentes",
  storageBucket: "em-componentes.appspot.com",
  messagingSenderId: "732495962712",
  appId: "1:732495962712:web:de6acfc49e4f9055c8202d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)