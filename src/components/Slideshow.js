"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Slideshow({ slides, interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change slide every `interval` milliseconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden max-6xl:h-[60vh]">
      {/* Slide Image Section */}
      <div className="w-full h-full relative rounded-[25px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[activeIndex].image}
              alt={`Slide ${activeIndex}`}
              className="w-full h-full object-cover"
              fill
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-10 left-0 right-0 flex gap-[2rem] justify-center">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`border border-black h-3 w-3 mx-5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-gold scale-200 border-grey"
                  : "bg-white bg-opacity-60"
              }`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Text Overlay & Decorative Arrows Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="absolute top-10 left-0 w-full"
        >
          <div
            className="relative bg-black border border-gold text-white text-[3rem] py-[2rem] px-[3rem] w-[40%] h-[10rem] text-center flex items-center max-15xl:w-[50%] max-12xl:w-[60%] max-10xl:w-[70%] max-8xl:w-[80%] max-7xl:text-[2rem] max-4xl:w-[90%] max-4xl:text-[1.7rem]"
            style={{
              clipPath: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)",
            }}
          >
            {/* Largest arrow: 10% width, 10rem tall, flush with the right edge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bg-gold z-[-1]"
              style={{
                width: "10%",
                height: "10rem",
                right: "-1rem",
                top: "0",
                clipPath:
                  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 100%, 50% 50%, 0% 0%)",
              }}
            />

            {/* Middle arrow: 8% width, 8rem tall, with a 1rem gap */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bg-gold z-[-2]"
              style={{
                width: "8%",
                height: "8rem",
                right: "6%",
                top: "1rem",
                clipPath:
                  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 100%, 50% 50%, 0% 0%)",
              }}
            />

            {/* Smallest arrow: 6% width, 6rem tall, with another 1rem gap */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bg-gold z-[-3]"
              style={{
                width: "6%",
                height: "6rem",
                right: "12%",
                top: "2rem",
                clipPath:
                  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 100%, 50% 50%, 0% 0%)",
              }}
            />

            {/* Text content */}
            {slides[activeIndex].text}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Slideshow;
