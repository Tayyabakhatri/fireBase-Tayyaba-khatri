
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  deleteUser,
  updateEmail,
  updatePassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  collection
  ,addDoc,
  doc,
  serverTimestamp,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAvGFBbP_R95PBzLmRnpDUN9Z5i43c4_54",
  authDomain: "fir-tayyaba-khatri.firebaseapp.com",
  projectId: "fir-tayyaba-khatri",
  storageBucket: "fir-tayyaba-khatri.appspot.com",
  messagingSenderId: "418367597730",
  appId: "1:418367597730:web:78f467965214c81f53fbfb",
  measurementId: "G-4Z89Q14EM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get auth instance
const provider = new GoogleAuthProvider();
const db = getFirestore(app);



export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  deleteUser,
  updateEmail,
  updatePassword,
  signOut,
  GoogleAuthProvider,
  provider,
  signInWithPopup,
  auth,
  getFirestore,
  db,
  collection,
  addDoc, doc,
  serverTimestamp
  , getDocs
};
