"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const containerVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

export default function StyleTypeItem({ item }) {
  // Open by default
  const [isOpen, setIsOpen] = useState(true);
  const imagesRef = useRef([]);

  useEffect(() => {
    if (isOpen && imagesRef.current.length) {
      // Stagger the animations for each image card using GSAP
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5 }
      );
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-[25px] border-2 border-gold my-4">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center px-[5rem] py-[2rem] cursor-pointer"
      >
        <h3 className="text-[2rem] font-bold">{item.name}</h3>
        <span className="text-[2rem] text-gold">{isOpen ? "✖" : "☰"}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-[5rem] pb-[2rem]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <div className="flex gap-[4rem] h-[35rem] overflow-x-auto items-start justify-center">
              {item.images.map((img, idx) => (
                <div
                  key={idx}
                  ref={(el) => (imagesRef.current[idx] = el)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
