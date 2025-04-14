// StyleSubCategory.js
"use client";

import { useState } from "react";
import StyleTypeItem from "./StyleTypeItem";

export default function StyleSubCategory({ code, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-gold rounded">
      <div
        className="flex justify-between items-center px-[4rem] py-[1.5rem] cursor-pointer bg-white m-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="text-[2rem] text-black font-bold">{data.name}</h2>
        <span className="text-[2rem] text-gold">{isOpen ? "▲" : "+"}</span>
      </div>
      {isOpen && (
        <div className="p-4 space-y-4">
          {data.type.map((item, index) => (
            <StyleTypeItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
