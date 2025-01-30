// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZj87im-P8cjIrWIRopsVY8Jj64D_kDFE",
  authDomain: "exchange-3901e.firebaseapp.com",
  projectId: "exchange-3901e",
  storageBucket: "exchange-3901e.firebasestorage.app",
  messagingSenderId: "158985213489",
  appId: "1:158985213489:web:db959ec7a0932459eae710",
  measurementId: "G-6MCHSYHY9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
