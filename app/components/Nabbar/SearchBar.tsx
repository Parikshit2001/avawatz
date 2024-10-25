import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="flex items-center justify-between gap-3 bg-neutral-100 rounded-full hover:bg-gray200 hover:brightness-96 px-2 text-[0.9rem]">
      <div className="flex items-center gap-1 px-2">
        <CiSearch size={18} strokeWidth={1} color="gray"/>
        <input
          type="text"
          placeholder="Search"
          className="outline-none py-0.5 bg-neutral-100 placeholder:text-gray-500 placeholder:text-sm rounded-full text-lg px-1 w-20"
        />
      </div>
      <div>

      </div>
    </div>
  );
}

export default SearchBar;
