import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCZj87im-P8cjIrWIRopsVY8Jj64D_kDFE",
  authDomain: "exchange-3901e.firebaseapp.com",
  projectId: "exchange-3901e",
  storageBucket: "exchange-3901e.appspot.com",
  messagingSenderId: "158985213489",
  appId: "1:158985213489:web:db959ec7a0932459eae710",
  measurementId: "G-6MCHSYHY9F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore вместо Realtime Database
