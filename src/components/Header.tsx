"use client";
import { useEffect, useState } from "react";
import { auth } from "@/api/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { Button } from "@mui/material";
import Link from "next/link";
import "@/app/globals.css";

const Header = () => {
 const [authUser, setAuthUser] = useState<User | null>(null);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   setAuthUser(user);
  });

  return () => unsubscribe();
 }, []);

 return (
  <div className="header-block">
   {/* Логотип с динамическим маршрутом */}
   <Link href={authUser ? "/pages/auth/details" : "/"} passHref>
    <div className="logo-block"></div>
   </Link>

   <div className="routing-buttons-block">
    <Link href="/pages/about" passHref>
     <Button
      variant="contained"
      color="primary"
      sx={{
       height: "8vh",
       width: "10vw",
       bgcolor: "rgb(69, 65, 65)",
       "&:hover": { bgcolor: "rgb(100, 95, 95)" },
      }}
     >
      ABOUT US
     </Button>
    </Link>

    {/* Отключаем ссылки, но текст остается таким же */}
    <Link href={authUser ? "/pages/inventory" : "#"} passHref>
     <Button
      variant="contained"
      color="primary"
      disabled={!authUser}
      sx={{
       height: "8vh",
       width: "10vw",
       bgcolor: "rgb(69, 65, 65)",
       "&:hover": authUser ? { bgcolor: "rgb(100, 95, 95)" } : {},
      }}
     >
      INVENTORY
     </Button>
    </Link>

    <Link href={authUser ? "/pages/barter" : "#"} passHref>
     <Button
      variant="contained"
      color="primary"
      disabled={!authUser}
      sx={{
       height: "8vh",
       width: "10vw",
       bgcolor: "rgb(69, 65, 65)",
       "&:hover": authUser ? { bgcolor: "rgb(100, 95, 95)" } : {},
      }}
     >
      BARTER
     </Button>
    </Link>

    <Link href={authUser ? "/pages/collection" : "#"} passHref>
     <Button
      variant="contained"
      color="primary"
      disabled={!authUser}
      sx={{
       height: "8vh",
       width: "10vw",
       bgcolor: "rgb(69, 65, 65)",
       "&:hover": authUser ? { bgcolor: "rgb(100, 95, 95)" } : {},
      }}
     >
      COLLECTION
     </Button>
    </Link>
   </div>
  </div>
 );
};

export default Header;
