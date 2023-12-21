import Link from "next/link";
import logo from "../public/fixit_logo.png";
import Login from "../components/Login"

const Navbar = () => {
  return (
    <div className="fixed px-20 py-5 text-white flex justify-between w-full">
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

      {/* Navbar Links */}
      <div className=" flex gap-5 items-center">
        <Link href={"/about"}>About Us</Link>
        <Login/>
      </div>
    </div>
  );
};

export default Navbar;
