"use client";
import { useState } from "react";
import styles from "@/data/stylesData";
import StyleCategory from "./StyleCategory";

export default function Styles() {
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggle = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="px-[15rem] py-[5rem] bg-white">
      <h2 className="text-[3rem] pb-[2rem]">Pick the style that FEELS you!</h2>
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
    </div>
  );
}
