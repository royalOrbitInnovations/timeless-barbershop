// StyleCategory.js
"use client";
import { motion, AnimatePresence } from "framer-motion";
import SubCategoryList from "./SubCategoryList";

const contentVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

export default function StyleCategory({ type, data, isOpen, onToggle }) {
  return (
    <div className="border-2 border-gold rounded-[25px] overflow-hidden">
      <div
        onClick={onToggle}
        className="flex justify-between items-center px-[5rem] py-[2rem] cursor-pointer bg-white m-2"
      >
        <h2 className="text-[3rem] text-black text-xl font-bold">
          {type === "hair" ? "Hair Styles" : "Beard Styles"}
        </h2>
        <span className="text-[2rem] text-gold">{isOpen ? "▲" : "▼"}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
          >
            <SubCategoryList data={data} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
