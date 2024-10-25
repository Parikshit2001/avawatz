"use client";
import Link from "next/link";
import React, { useState } from "react";
import link from "./constant";

function Tags() {
  const [links] = useState(link);

  const getClassName = (index: number) => {
    if (index === 0) {
      return "bg-yellow-200";
    } else if (index == 1) {
      return "bg-red-200";
    } else if (index == 2) {
      return "bg-cyan-200";
    } else {
      return "bg-gray-100";
    }
  };

  return (
    <div className="flex gap-1 pt-5">
      {links.map((link, index) => (
        <Tag
          key={index}
          text={link.text}
          className={getClassName(index)}
          to={link.to}
        />
      ))}
    </div>
  );
}

function Tag({
  text,
  className = "bg-gray-100",
  to,
}: {
  text: string;
  className?: string;
  to: string;
}) {
  return (
    <Link href={to} className={`text-xs py-1 px-2 rounded ${className}`}>
      {text}
    </Link>
  );
}

export default Tags;
