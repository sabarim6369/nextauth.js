"use client";

import { signIn } from "next-auth/react";
import "./Login.css";

export default function LoginPage() {
  const handleGitHubLogin = () => {
    signIn("github", { callbackUrl: "/" });
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="login-title">Login</h2>

        <button
          onClick={handleGitHubLogin}
          className="login-button github-button"
          type="button"
        >
          Login with GitHub
        </button>

        <button
          onClick={handleGoogleLogin}
          className="login-button google-button"
          type="button"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
}
