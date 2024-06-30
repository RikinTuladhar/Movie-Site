import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  return (
    <div className="w-full fixed bg-navColor h-[10vh]">
      <div className="flex items-center justify-between h-full px-10 ">
        <h1 className="text-2xl font-bold text-white">Logo</h1>
        <div className="flex items-center justify-between gap-5">
          <input
            type="text"
            placeholder="Search..."
            className="p-1 w-96 border-2 rounded-md bg-[#15121E] text-white "
          />
        </div>
        <ul className="flex">
          <li className="px-3 py-2 text-white bg-btnColor rounded-2xl">
            Sign in
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
