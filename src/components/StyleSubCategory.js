"use client";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StyleTypeItem from "./StyleTypeItem";

const contentVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

const plusVariants = {
  closed: { rotate: 0 },
  open: { rotate: 45 },
};

export default function StyleSubCategory({ code, data, isOpen, onToggle }) {
  const containerRef = useRef(null);
  // Prevent scroll on initial mount
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    if (isOpen && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="border-2 border-black bg-black rounded-[25px] overflow-hidden"
    >
      <div
        onClick={onToggle}
        className="flex justify-between items-center px-[4rem] py-[1.5rem] cursor-pointer bg-black m-2 max-5xl:px-[2rem]"
      >
        <h2 className="text-[2rem] text-white ">{data.name}</h2>
        <motion.span
          className="text-[2rem] text-gold"
          animate={isOpen ? "open" : "closed"}
          variants={plusVariants}
        >
          +
        </motion.span>
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
