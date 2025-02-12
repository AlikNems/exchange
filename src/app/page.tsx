import "@/app/globals.css";

// import AuthDetails from "@/components/auth/AuthDetails";
import SignIn from "@/components/auth/SignIn";
// import SignUp from "@/components/auth/SignUp";

export default function Home() {
 return (
  <div className="content-block">
   <SignIn/>
   {/* <SignUp/> */}
   {/* <AuthDetails/> */}
  </div>
 );
}
