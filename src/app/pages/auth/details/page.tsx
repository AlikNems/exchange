"use client";
import { auth } from "@/api/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/styles/auth-styles/styles.css";

const AuthDetails = () => {
 const [authUser, setAuthUser] = useState<User | null>(null);
 const router = useRouter();

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   setAuthUser(user);
  });

  return () => unsubscribe();
 }, []);

 const userSignOut = () => {
  signOut(auth)
   .then(() => {
    console.log("Signed out successfully");
    router.push("/"); 
   })
   .catch((e) => console.log(e));
 };

 return (
  <div className="content-block">
   <div className="profile-block">
    {authUser ? (
     <div>
      <p>{`Signed in as ${authUser.email}`}</p>
      <button onClick={userSignOut}>Sign Out</button>
     </div>
    ) : (
     <p>Signed Out</p>
    )}
   </div>
  </div>
 );
};

export default AuthDetails;
