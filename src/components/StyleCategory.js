// StyleCategory.js
"use client";

import { useState } from "react";
import SubCategoryList from "./SubCategoryList";

export default function StyleCategory({ type, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-gold rounded">
      <div
        className="flex justify-between items-center px-[5rem] py-[2rem] cursor-pointer bg-white m-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="text-[3rem] text-black text-xl font-bold">
          {type === "hair" ? "Hair Styles" : "Beard Styles"}
        </h2>
        <span className="text-[2rem] text-gold">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="p-4">
          <SubCategoryList data={data} />
        </div>
      )}
    </div>
  );
}
