"use client";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SubCategoryList from "./SubCategoryList";

const contentVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

const arrowVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

export default function StyleCategory({ type, data, isOpen, onToggle }) {
  const containerRef = useRef(null);
  // Prevent scroll on initial mount
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    if (isOpen && containerRef.current) {
      // Use block "start" to align the element to the top
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="border-2 border-gold rounded-[25px] overflow-hidden shadow-xl"
    >
      <div
        onClick={onToggle}
        className="flex justify-between items-center px-[5rem] py-[2rem] cursor-pointer bg-white m-2 max-6xl:px-[2rem]"
      >
        <h2 className="text-[3rem] text-black text-xl font-bold">
          {type === "hair" ? "Hair Styles" : "Beard Styles"}
        </h2>
        <motion.span
          className="text-[2rem] text-gold"
          animate={isOpen ? "open" : "closed"}
          variants={arrowVariants}
        >
          ▼
        </motion.span>
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
