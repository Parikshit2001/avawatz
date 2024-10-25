import React from "react";
import { FaLock } from "react-icons/fa";

function Campaign() {
  return (
    <div className="flex mb-8 text-neutral-500 items-center">
      <div className="flex-grow border-t-[1px] mt-1 pt-1" />
      <div className="flex mx-4 gap-2 items-center">
        <FaLock  size={13}/>
        <p>Campaign ended</p>
      </div>
      <div className="flex-grow border-t-[1px] mt-1 pt-1" />
    </div>
  );
}

export default Campaign;
