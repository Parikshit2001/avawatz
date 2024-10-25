"use client";
import React, { useState } from "react";
import Updates from "../Updates/Updates";
import Pitch from "../Pitch/Pitch";
import { CiWarning } from "react-icons/ci";

function Content() {
  const options = ["pitch", "updates"];
  const [current, setCurrent] = useState("pitch");
  return (
    <div className="pb-12">
      <div className="flex border-b-[1px]">
        <div className="px-8 max-w-[1100px] mx-auto w-full flex gap-8">
          {options.map((option) => (
            <button
              className={`py-4 ${
                option === current
                  ? "text-blue-600 font-semibold border-b-4 border-b-blue-600"
                  : "text-gray-500 font-semibold hover:text-blue-600"
              }`}
              key={option}
              onClick={() => setCurrent(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center py-1 gap-1 text-sm text-gray-500 border-b-[1px]">
        <CiWarning color="gold" strokeWidth={2}/>
        <p>
          Campaign closed on October 1, 2024. Information displayed may not be
          up-to-date.
        </p>
      </div>
      <div className="pt-10 pb-12 px-8 max-w-[1100px] mx-auto">
        {current == "pitch" ? <Pitch /> : <Updates />}
      </div>
    </div>
  );
}

export default Content;
