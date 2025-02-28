"use client";
import { auth } from "@/api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/styles/auth-styles/styles.css";

const SignUp = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [copyPassword, setCopyPassword] = useState("");
 const [error, setError] = useState("");
 const router = useRouter();

 const register = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (copyPassword !== password) {
   setError("Passwords didn't match");
   return;
  }
  createUserWithEmailAndPassword(auth, email, password)
   .then(() => {
    setError("");
    setEmail("");
    setPassword("");
    setCopyPassword("");
    router.push("/pages/auth/details"); // Перенаправление после успешной регистрации
   })
   .catch((error) => console.log(error));
 };

 return (
  <div className="content-block">
   <div>
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
     {error ? <p style={{ color: "red" }}>{error}</p> : ""}

     <p className="register-text">Already have an account?</p>
     <Link href="/pages/auth/signin">
      <button type="button" className="register-button">
       Log in
      </button>
     </Link>
    </form>
   </div>
  </div>
 );
};

export default SignUp;
