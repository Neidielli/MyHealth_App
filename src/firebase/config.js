// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzNcJF0BlwYOzWsCUgxIxGpgIQgO8t69A",
  authDomain: "auth-mobile-82dfe.firebaseapp.com",
  projectId: "auth-mobile-82dfe",
  storageBucket: "auth-mobile-82dfe.appspot.com",
  messagingSenderId: "823569003519",
  appId: "1:823569003519:web:cde6099cc5014f57b8adca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app)

export { auth, db, storage }