// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlCKlyClwWy-yF6ObFU8I9oARXSxrrJfI",
  authDomain: "lahacks2023-384518.firebaseapp.com",
  projectId: "lahacks2023-384518",
  storageBucket: "lahacks2023-384518.appspot.com",
  messagingSenderId: "353911752254",
  appId: "1:353911752254:web:b7c399f375c33fafeab36f",
  measurementId: "G-D0HZC3XT9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
