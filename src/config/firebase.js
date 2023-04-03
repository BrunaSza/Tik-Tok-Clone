// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIN6aDcGcflO3GgVskJrfdWG0ytBEeOp4",
  authDomain: "tiktok-clone---jornadadev.firebaseapp.com",
  projectId: "tiktok-clone---jornadadev",
  storageBucket: "tiktok-clone---jornadadev.appspot.com",
  messagingSenderId: "769616135571",
  appId: "1:769616135571:web:256f08be46cdafda279466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
