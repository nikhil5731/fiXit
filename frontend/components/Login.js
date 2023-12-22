"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Login = () => {
  const session = useSession();

  const handleLogin = () => {
    if (session.status === "authenticated") {
      signOut();
    } else {
      signIn("google");
    }
  };

  return (
    <div className="flex gap-5 items-center">
      <button
        className=" flex items-center gap-4"
        onClick={() => handleLogin()}
      >
        {session.status === "authenticated" ? "LogOut" : "Login with Google"}
      </button>
      {session.status === "authenticated" && <img
        src={session.data?.user?.image}
        alt=""
        width={"25px"}
        className=" rounded-full cursor-pointer"
        
      />}
    </div>
  );
};

export default Login;
