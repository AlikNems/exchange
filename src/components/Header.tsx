"use client";
import { Button } from "@mui/material";
import "@/app/globals.css";
import Link from "next/link";

const Header = () => {
 return (
  <div className="header-block">
   <Link href="/" passHref>
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
       "&:hover": {
        bgcolor: "rgb(100, 95, 95)",
       },
      }}
     >
      ABOUT US
     </Button>
    </Link>
    <Link href="/pages/inventory" passHref>
     <Button
      variant="contained"
      color="primary"
      sx={{
       height: "8vh",

       width: "10vw",
       bgcolor: "rgb(69, 65, 65)",
       "&:hover": {
        bgcolor: "rgb(100, 95, 95)",
       },
      }}
     >
      INVENTORY
     </Button>
    </Link>

    <Link href="/pages/barter" passHref>
     <Button
      variant="contained"
      color="primary"
      sx={{
       height: "8vh",

       width: "10vw",
       bgcolor: "rgb(69, 65, 65)",
       "&:hover": {
        bgcolor: "rgb(100, 95, 95)",
       },
      }}
     >
      BARTER
     </Button>
    </Link>
    <Link href="/pages/collection" passHref>
     <Button
      variant="contained"
      color="primary"
      sx={{
       height: "8vh",

       width: "10vw",
       bgcolor: "rgb(69, 65, 65)",
       "&:hover": {
        bgcolor: "rgb(100, 95, 95)",
       },
      }}
     >
      COLLECTION
     </Button>
    </Link>
   </div>
   <div className="login-out-block">LOGIN/Out</div>
  </div>
 );
};

export default Header;
