'use client'
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// import './SignUp.css'
import '@/components/auth/SignUp.css'

const SignUp = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [copyPassword, setCopyPassword] = useState("");
 const [error, setError] = useState("");

 const register = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (copyPassword !== password) {
   setError("Passwords didn`t matched");
   return;
  }
  createUserWithEmailAndPassword(auth, email, password)
   .then((user) => {
    console.log(user);
    setError("");
    setEmail("");
    setPassword("");
    setCopyPassword("");
   })
   .catch((error) => console.log(error));
 };

 return (
  <div className="signup-block">
   <form onSubmit={register}>
    <h2>Create an account</h2>
    <input
     type="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    />
    <input
     type="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
    <input
     type="password"
     value={copyPassword}
     onChange={(e) => setCopyPassword(e.target.value)}
    />
    <button>Create</button>
   </form>
  </div>
 );
};

export default SignUp;
