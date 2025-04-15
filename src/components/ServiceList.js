"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

const plusVariants = {
  closed: { rotate: 0 },
  open: { rotate: 45 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceList({ data, isOpen, onToggle }) {
  return (
    <div className="border-2 border-gold rounded-[25px] overflow-hidden flex flex-col items-center justify-center shadow-xl">
      <div
        onClick={onToggle}
        className="flex justify-between items-center px-[5rem] py-[2rem] cursor-pointer bg-white m-2 w-full max-6xl:px-[2rem]"
      >
        <h2 className="text-[3rem] text-black text-xl font-bold">
          Service List
        </h2>
        <motion.span
          className="text-[5rem] text-gold"
          animate={isOpen ? "open" : "closed"}
          variants={plusVariants}
        >
          +
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-4 w-fit"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <div className="grid grid-cols-3 max-15xl:grid-cols-2 gap-[5rem] justify-items-center max-10xl:gap-[2rem] max-9xl:grid-cols-1">
              {data.map((service, index) => (
                <motion.div
                  key={index}
                  className="border border-gold p-4 flex flex-col items-center rounded-[25px] overflow-hidden shadow-xl"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <div className="relative w-[30rem] h-[30rem] rounded-[25px] overflow-hidden shadow-2xl max-4xl:w-[25rem] max-4xl:h-[25rem]">
                    <Image
                      src={service.image}
                      alt={service.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <h3 className="text-[2rem] font-bold text-center">
                    {service.name}
                  </h3>
                  <p className="text-[1.5rem] text-gray-700">{service.cost}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
