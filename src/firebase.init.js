// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa4w6RVPZTMgpx9FenN4ra78Y5EQncODE",
  authDomain: "furniturelink-2f045.firebaseapp.com",
  projectId: "furniturelink-2f045",
  storageBucket: "furniturelink-2f045.appspot.com",
  messagingSenderId: "75142969641",
  appId: "1:75142969641:web:85c85096169bd66d269f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;