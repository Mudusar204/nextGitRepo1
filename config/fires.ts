// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { FirebaseStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb05pIwuTMlbjE3s4BT25KFAzLNpxSiuM",
  authDomain: "todoapp-6f9cd.firebaseapp.com",
  projectId: "todoapp-6f9cd",
  storageBucket: "todoapp-6f9cd.appspot.com",
  messagingSenderId: "404661725015",
  appId: "1:404661725015:web:d7cd98b516387c5db68012",
  // storageBucket:'gs://todoapp-6f9cd.appspot.com'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const storage = getStorage(app);
const auth = getAuth(app);

// const storage=firestore.storage(app)
// const storage=Firebase.storage()
export {db,storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}
