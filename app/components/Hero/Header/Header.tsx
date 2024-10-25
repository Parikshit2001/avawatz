import Image from "next/image";
import React from "react";
import Tags from "./Tags";

function Header() {
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-8">
        <div className="flex items-center">
          <Image
            src="/images/logo_1.jpeg"
            width={40}
            height={40}
            alt="Picture of Avawatz Logo"
          />
          <p className="text-5xl font-bold ml-2">Avawatz</p>
        </div>
        <div>
          <p className="text-lg text-gray-500">
            Trusted AI Robotics: Transforming Safety Across High-Risk and
            Tedious Tasks
          </p>
        </div>
        <Tags />
      </div>
      <div className="col-span-4"></div>
    </div>
  );
}

export default Header;
