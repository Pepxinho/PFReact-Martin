import { initializeApp } from "firebase/app";
import { getFireStore} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyBHbQfxqddQ5hPHtYxjlBK-UiZfbMzTlbY",
  authDomain: "em-componentes.firebaseapp.com",
  projectId: "em-componentes",
  storageBucket: "em-componentes.appspot.com",
  messagingSenderId: "732495962712",
  appId: "1:732495962712:web:de6acfc49e4f9055c8202d"
};


const app = initializeApp(firebaseConfig);
export const db = getFireStore(app)