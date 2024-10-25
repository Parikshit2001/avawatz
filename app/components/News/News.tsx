import React from "react";
import { CarouselNews } from "./CarouselNews";

function News() {
  return (
    <div className="bg-gray-100">
      <div className="pt-10 pb-12 px-8 max-w-[1100px] mx-auto text-gray-600">
        <div className="flex justify-between mb-4">
          <p className="text-2xl font-bold">Open for investment</p>
          <p>
            Investors in Avawatz also invested in these companies.{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              View more
            </span>
          </p>
        </div>
        <div>
          <CarouselNews />
        </div>
      </div>
    </div>
  );
}

export default News;
