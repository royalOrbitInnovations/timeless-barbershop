// StyleSubCategory.js
"use client";
import { useState } from "react"; // Needed for use client context
import { motion, AnimatePresence } from "framer-motion";
import StyleTypeItem from "./StyleTypeItem";

const contentVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

export default function StyleSubCategory({ code, data, isOpen, onToggle }) {
  return (
    <div className="border-2 border-black bg-black rounded-[25px] overflow-hidden">
      <div
        onClick={onToggle}
        className="flex justify-between items-center px-[4rem] py-[1.5rem] cursor-pointer bg-black m-2"
      >
        <h2 className="text-[2rem] text-white font-bold">{data.name}</h2>
        <span className="text-[2rem] text-gold">{isOpen ? "▲" : "+"}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-4 space-y-4 flex flex-col gap-[2rem]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
          >
            {data.type.map((item, index) => (
              <StyleTypeItem key={index} item={item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
