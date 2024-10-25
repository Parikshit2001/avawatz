import React from "react";

function NavBarTab({
  title,
  hoverEffect = false,
}: {
  title: string;
  hoverEffect?: boolean;
}) {
  return (
    <div
      className={`cursor-pointer h-full py-5 ${
        hoverEffect
          ? "hover:border hover:border-x-0 hover:border-t-0 hover:border-b-2 hover:border-b-blue-600"
          : ""
      }`}
    >
      <p className="text-[0.95rem]">{title}</p>
    </div>
  );
}

export default NavBarTab;
