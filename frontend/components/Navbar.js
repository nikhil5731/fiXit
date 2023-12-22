"use client";
import Link from "next/link";
import Login from "../components/Login";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarOn, setIsNavbarOn] = useState(false);

  return (
    <div className="fixed px-10 top-0 h-[60px] md:px-20 py-5 bg-[#212520] text-white flex justify-between items-center w-full">
      {/* Logo */}
      <div className=" flex items-center gap-2">
        <img
          src="https://www.fix-it.ai/_next/static/media/fixit_white_bg.3734d2d4.svg"
          alt="logo"
          width={"25px"}
          height={"25px"}
        />
        <span className=" text-2xl">fiXit</span>
      </div>

      {/* Navbar Links - Desktop */}
      <div className="hidden md:flex gap-5 items-center">
        <Link href={"/about"}>About Us</Link>
        <Login />
      </div>

      {/* Navbar Links - Mobile */}
      <div className="block md:hidden">
        <button
          onClick={() => {
            console.log(isNavbarOn);
            setIsNavbarOn((prev) => !prev);
          }}
        >
          {!isNavbarOn ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-[30px] h-[28px] border-2 border-white rounded-md"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-[30px] h-[28px]"
              // style="width: 30px; height: 28px; margin-top: 1px;"
            >
              <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
            </svg>
          )}
        </button>
        {isNavbarOn && (
          <div className="absolute flex flex-col gap-4 left-0 top-14 bg-[#212520] px-10 py-5 w-full">
            <Link href={"/about"}>About Us</Link>
            <Login />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
