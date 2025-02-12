"use client";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import  '@/components/auth/auth-styles/styles.css'

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
  <div className="signup-out-content-block">
   <form onSubmit={register}>
    <h2>Create an account</h2>
    <input
     type="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     placeholder="Input your email"
    />
    <input
     type="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     placeholder="Input your password"
    />
    <input
     type="password"
     value={copyPassword}
     onChange={(e) => setCopyPassword(e.target.value)}
     placeholder="Input your password again"
    />
    <button>Create</button>
    {error ? <p style={{ color: "red"}}>{error}</p> : ""}
   </form>
  </div>
 );
};

export default SignUp;
