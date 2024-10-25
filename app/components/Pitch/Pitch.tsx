import React from "react";
import LeftColumn from "./leftColumn/LeftColumn";
import RightColumn from "./rightColumn/RightColumn";

function Pitch() {
  return (
    <div className="pt-5 pb-12 px-8 max-w-[1100px] mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <LeftColumn />
        </div>
        <div className="col-span-4">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}

export default Pitch;
