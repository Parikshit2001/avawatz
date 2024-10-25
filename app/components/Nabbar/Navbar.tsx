import Image from "next/image";
import React from "react";
import { IoIosGlobe } from "react-icons/io";
import NavBarTab from "./NavBarTab";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="w-screen border border-b-2">
      <div className="flex max-w-[1050px] mx-auto justify-between h-full pr-5">
        <div className="flex items-center gap-8 h-full">
          <div className="flex items-center cursor-pointer my-3">
            <Image
              src="/images/republic.jpeg"
              width={40}
              height={40}
              alt="Picture of Republic Logo"
            />
            <h1 className="text-xl font-semibold">Republic</h1>
          </div>
          <div className="flex items-center gap-10 h-full">
            <NavBarTab title="Investors" hoverEffect={true} />
            <NavBarTab title="Businesses" hoverEffect={true} />
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex cursor-default items-center gap-1 hover:bg-neutral-100 rounded-lg px-2 py-1">
            <IoIosGlobe size={20} strokeWidth={5} />
            <p>US</p>
          </div>
          <NavBarTab title="Log in" />
          <NavBarTab title="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
