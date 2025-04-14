// Styles.js
"use client";
import { useState } from "react";
import styles from "@/data/stylesData";
import StyleCategory from "./StyleCategory";

export default function Services() {
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggle = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="px-[15rem] py-[5rem] bg-white">
      <h2 className="text-[3rem] pb-[2rem]">
        We Provide the follwoing Services
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
