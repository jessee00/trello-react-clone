// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxXTFsV6rcTUqO5yrslnkyRArSfRvCx50",
  authDomain: "trello-clone-app-2bc56.firebaseapp.com",
  projectId: "trello-clone-app-2bc56",
  storageBucket: "trello-clone-app-2bc56.appspot.com",
  messagingSenderId: "226310719775",
  appId: "1:226310719775:web:93e01ef40d19d6f0d2082a",
  measurementId: "G-04X8CLCX95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);