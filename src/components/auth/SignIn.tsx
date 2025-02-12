"use client";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import  '@/components/auth/auth-styles/styles.css'

const SignIn = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");

 const logIn = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
   .then((user) => {
    console.log(user);
    setError("");
    setEmail("");
    setPassword("");
   })
   .catch((error) => {
    console.log(error);
    setError("SORRY, COULDN'T FIND YOUR ACCOUNT");
   });
 };

 return (
  <div className="signup-out-content-block">
   <form onSubmit={logIn}>
    <h2>Log in</h2>
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
    <button type="submit">Login</button>
    {error && <p style={{ color: "red" }}>{error}</p>}
   </form>
  </div>
 );
};

export default SignIn;
