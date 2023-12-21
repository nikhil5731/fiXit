"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const session = useSession();

  const handleLogin = () => {
    if(session.status === "authenticated"){
      signOut();
    }
    else{
      signIn("google")
    }
  }

  return (
    <button onClick={() => handleLogin()}>
      {session.status === "authenticated" ? "LogOut" : "Login with Google"}
    </button>
  );
};

export default Login;
