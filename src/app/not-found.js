"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 h-[20rem] w-[30rem]"
      >
        <Logo bg="black" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-[7rem] font-bold text-gold pb-[2rem]"
      >
        Page Not Found
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link
          href="/"
          className="text-white text-[2rem] border border-gold px-[2rem] py-[2rem] rounded-full"
        >
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
}
