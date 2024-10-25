import React from "react";
import { FaLock } from "react-icons/fa";

const News = () => {
  return (
    <div className="flex flex-col pl-14 justify-between text-gray-500 h-full">
      <div>
        <div className="border-b-[1px] pb-5">
          <p className="text-black text-3xl font-bold">$385,384</p>
          <p className="">Committed</p>
        </div>
        <div className="py-5 border-b-[1px]">
          <p className="text-3xl font-bold">26</p>
          <p>Investors</p>
        </div>
        <div className="pt-8">
          Successfully funded and closed on October 1, 2024.
        </div>
      </div>
      <div className="">
        <button
          className="flex items-center justify-center py-3 text-white bg-indigo-400 rounded-lg w-full gap-2"
          disabled
        >
          <FaLock />
          <p>Invest in Avawatz</p>
        </button>
      </div>
    </div>
  );
};

export default News;
