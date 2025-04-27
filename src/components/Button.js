// components/Button.jsx
"use client";

import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        border border-gold bg-gold text-white
        px-20 py-8 text-2xl
        rounded-full shadow-2xl
        transition-all duration-300 ease-in-out
        hover:bg-black hover:scale-105 hover:cursor-pointer
        max-5xl:text-2xl
      "
    >
      {text}
    </button>
  );
}
