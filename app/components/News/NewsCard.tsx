import Image from "next/image";
import React from "react";

function NewsCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden relative">
      <Image
        width={250}
        height={250}
        src="/images/avawatz.webp"
        alt="Picture of Avawatz Logo"
      />
      <div className="absolute left-5 top-28">
        <Image
          width={50}
          height={50}
          src="/images/logo_1.jpeg"
          alt="Picture of Avawatz Logo"
        />
      </div>
      <div className="px-3 pt-8 flex flex-col gap-2">
        <p className="text-2xl font-bold text-black">Avawatz</p>
        <p>Transforming Safety Across High-Risk and Tedio...</p>
        <div className="text-xs flex gap-2 items-center pt-3">
          <p>Republic funding portal</p>
          <div className="w-1 h-1 bg-gray-500 rounded-full" />
          <p>Ref CF</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
