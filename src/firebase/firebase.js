import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth';
// import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3nFqUCMQIiOHw-8dnHKKRyWNy4gCxYVw",
  authDomain: "webescuelacantilo.firebaseapp.com",
  projectId: "webescuelacantilo",
  storageBucket: "webescuelacantilo.appspot.com",
  messagingSenderId: "754651584052",
  appId: "1:754651584052:web:4215550f84bdba33075c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export { signInWithEmailAndPassword }; 