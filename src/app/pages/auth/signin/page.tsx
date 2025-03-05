"use client";
import { auth } from "@/api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/styles/auth-styles/styles.css";

const SignIn = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const router = useRouter();

 const logIn = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
   .then(() => {
    setError("");
    setEmail("");
    setPassword("");
    router.push("/pages/auth/details");
   })
   .catch(() => {
    setError("SORRY, COULDN'T FIND YOUR ACCOUNT");
   });
 };

 return (
  <div className="content-block">
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
     {error && <p className="error-message">{error}</p>}

     <p className="register-text">Don't have an account?</p>
     <Link href="/pages/auth/signup">
      <button type="button" className="register-button">
       Sign up
      </button>
     </Link>
    </form>
   </div>
  </div>
 );
};

export default SignIn;
