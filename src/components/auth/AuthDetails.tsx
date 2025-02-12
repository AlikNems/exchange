'use client'
import {auth} from '@/firebase'
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import  '@/components/auth/auth-styles/styles.css'

const AuthDetails = () => {
 const [authUser, setAuthUser] = useState<User | null>(null);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   setAuthUser(user);
  });

  return () => unsubscribe();
 }, []);

 const userSignOut = () => {
  signOut(auth)
   .then(() => console.log("success"))
   .catch((e) => console.log(e));
 };

 return (
  <div className='signup-out-content-block'>
   {authUser ? (
    <div>
     <p>{`Signed in as ${authUser.email}`}</p>
     <button onClick={userSignOut}>Sign Out</button>
    </div>
   ) : (
    <p>Signed Out</p>
   )}
  </div>
 );
};

export default AuthDetails;
