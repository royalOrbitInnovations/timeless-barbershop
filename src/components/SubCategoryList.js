// SubCategoryList.js
"use client";
import { useState } from "react";
import StyleSubCategory from "./StyleSubCategory";

export default function SubCategoryList({ data }) {
  const [openSub, setOpenSub] = useState(null);

  return (
    <div className="flex flex-col gap-4 rounded-[25px] overflow-hidden">
      {Object.entries(data).map(([code, group]) => (
        <StyleSubCategory
          key={code}
          code={code}
          data={group}
          isOpen={openSub === code}
          onToggle={() => setOpenSub((prev) => (prev === code ? null : code))}
        />
      ))}
    </div>
  );
}
