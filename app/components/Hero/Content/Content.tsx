import React from "react";
import Video from "./Video";
import News from "./News";

function Content() {
  return (
    <div className="w-full grid grid-cols-12 my-2">
      <div className="col-span-8">
        <Video />
      </div>
      <div className="col-span-4">
        <News />
      </div>
    </div>
  );
}

export default Content;
