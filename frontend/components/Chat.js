"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

const Chat = () => {
  const session = useSession();
  const [query, setQuery] = useState("");
  const [response,setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = (await axios.get(`http://127.0.0.1:8000/items/${query}`)).data;
    console.log(res);
    setResponse(res.response);
  };

  return (
    <>
      {session.status === "authenticated" && (
        <div className=" h-[91vh] flex text-white">
          {/* Side Navbar */}
          <div className="hidden lg:block w-1/5 text-sm bg-[#212520] px-12 h-full">
            {/* Back Button */}
            <button className="mt-3 mb-5">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                role="img"
                viewBox="0 0 24 24"
                data-testid="ArrowCircleLeftOutlinedIcon"
                width={"25px"}
                fill="white"
              >
                <path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zM8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16l-4-4z"></path>
                <title>Back</title>
              </svg>
            </button>

            <div className="flex flex-col mt-5 gap-3 items-start">
              <span className=" text-[#84C2FD]">Call Audit</span>
              <li className=" flex gap-2 items-center">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="SummarizeIcon"
                  width={"25px"}
                  fill="white"
                >
                  <path d="M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 1V4.5l5.5 5.5H14z"></path>
                </svg>
                <span>Summary</span>
              </li>
              <li className=" flex gap-2 items-center">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ScoreboardIcon"
                  width={"25px"}
                  fill="white"
                >
                  <path d="M17.5 13.5H16v-3h1.5v3zM20 4h-3V2h-2v2H9V2H7v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5zm3.25 6.5h-1.5v-1.5h1.5V18zm0-3.5h-1.5V13h1.5v1.5zm0-3.5h-1.5V9.5h1.5V11zm0-3.5h-1.5V6h1.5v1.5zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4z"></path>
                </svg>
                <span>Data Score</span>
              </li>
              <button className="flex items-center justify-center border-2 p-3 rounded-lg w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  fontSize="20"
                  className="mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11 8 15.01z"></path>
                </svg>
                <span>Upload Call Records</span>
              </button>
            </div>

            <div className="flex flex-col mt-5 gap-3 items-start">
              <span className="text-[#84C2FD]">AI Agent</span>
              <li className=" flex gap-2 items-center">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="SummarizeIcon"
                  width={"25px"}
                  fill="white"
                >
                  <path d="M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 1V4.5l5.5 5.5H14z"></path>
                </svg>
                <span>Summary</span>
              </li>
              <li className=" flex gap-2 items-center">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ChatIcon"
                  width={"25px"}
                  fill="white"
                >
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>
                </svg>
                <span>Chat</span>
              </li>
              <button className="flex items-center justify-between border-2 rounded-lg p-3 w-full">
                <span>Select a Document</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <button className="flex items-center justify-center border-2 p-3 rounded-lg w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  fontSize="20"
                  className="mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11 8 15.01z"></path>
                </svg>
                <span>Upload Document</span>
              </button>
            </div>
          </div>

          {/* ChatBox */}
          <div className="flex text-[#212520] flex-col gap-8 w-full lg:w-4/5 items-center mt-8 px-8 bg-[#FBFAF9]">
            {/* Logo */}
            <div className="hidden lg:flex gap-3 items-center">
              <img
                src="https://www.fix-it.ai/_next/static/media/fixit_gray_bg.1049c903.svg"
                alt=""
                width={"50px"}
              />
              <span className="text-[#263238] text-5xl">fiXit</span>
            </div>

            {/* ChatInput */}
            <div className="bg-white flex items-center justify-between w-full border-[1px] border-[#404550] rounded-lg p-4">
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                name="query"
                type="text"
                className="text-black w-full outline-none"
                placeholder="SalesGPT can help you to browse uncovered topics"
              />
              <button
                className="bg-gray-100 p-2 rounded-full"
                onClick={handleSubmit}
              >
                <svg
                  stroke="#404550"
                  fill="#404550"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  fontSize="25"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Search</title>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
              </button>
            </div>

            {/* Response Box */}
            {(response.length > 0) && <div className="bg-white border-2 w-full p-5">
                  {response}
            </div>}

            {/* Training Nudges */}
            <div className="w-full">
              <div className="font-semibold bg-white md:bg-transparent py-2 drop-shadow-md md:border-b-2 md:pb-2 border-opacity-30 border-[#212520] w-full flex justify-center md:justify-between mb-2 lg:mb-7">
                <div className="flex gap-2">
                  <svg
                    stroke="#212520"
                    fill="#212520"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    fontSize="20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:inline"
                  >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path>
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
                  </svg>
                  <span>Training Nudges</span>
                </div>
                <div className="md:gap-4 hidden md:flex">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    fontSize="20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Previous</title>
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    ></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    fontSize="20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Next</title>
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span className="">No nudges to show</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
