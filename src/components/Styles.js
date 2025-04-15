// Styles.js
"use client";
import { useState } from "react";
import { styles, imageData } from "@/data/stylesData";
import StyleCategory from "./StyleCategory";
import Slideshow from "./Slideshow";

export default function Styles() {
  // Default open category is "hair"
  const [openCategory, setOpenCategory] = useState("hair");

  const handleToggle = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="px-[15rem] py-[5rem] bg-white max-12xl:px-[10rem] max-6xl:px-[2rem]">
      <h2 className="text-[3rem] pb-[2rem]">Pick the style that FEELS you</h2>
      <div className="flex flex-col gap-[1rem]">
        <StyleCategory
          type="hair"
          data={styles.hair}
          isOpen={openCategory === "hair"}
          onToggle={() => handleToggle("hair")}
        />
        <StyleCategory
          type="beard"
          data={styles.beard}
          isOpen={openCategory === "beard"}
          onToggle={() => handleToggle("beard")}
        />
      </div>

      <div className="py-[10rem]">
        <Slideshow slides={imageData} interval={3000} />
      </div>

      <h2 className="text-[3rem] pb-[2rem]">
        We Provide the following Services
      </h2>
      <div className="flex flex-col gap-[1rem]">
        <StyleCategory
          type="services"
          data={styles.hair}
          isOpen={openCategory === "services"}
          onToggle={() => handleToggle("services")}
        />
      </div>
    </div>
  );
}
