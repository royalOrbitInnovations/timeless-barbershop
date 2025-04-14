"use client";

import { useState } from "react";
import Image from "next/image";

// StyleTypeItem.js
export default function StyleTypeItem({ item }) {
  // Open by default
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-[25px] border-2 border-gold my-4">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center px-[5rem] py-[2rem] cursor-pointer"
      >
        <h3 className="text-[2rem] font-bold">{item.name}</h3>
        {/* Different symbols: "✖" when open and "☰" when closed */}
        <span className="text-[2rem] text-gold">{isOpen ? "✖" : "☰"}</span>
      </div>
      {isOpen && (
        <div className="px-[5rem] pb-[2rem]">
          <div className="flex gap-[4rem] h-[35rem] overflow-x-auto items-start justify-center">
            {item.images.map((img, idx) => (
              <div
                key={idx}
                className="relative h-[30rem] w-[30rem] rounded-[25px] overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${item.name} ${idx + 1}`}
                  className="object-cover"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
