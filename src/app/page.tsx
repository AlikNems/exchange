import Link from "next/link";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="content-block">
      <div className="welcome-text">
        <p>Welcome to exchange</p>
        <div className="auth-buttons">
          <Link href="/pages/auth/signin" passHref>
            <button>Login</button>
          </Link>
          <Link href="/pages/auth/signup" passHref>
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
