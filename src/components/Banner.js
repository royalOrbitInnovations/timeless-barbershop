// components/Banner.js
"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Logo from "./Logo";
import Button from "./Button";
import AppointmentPopup from "./AppointmentPopup";
import { barber } from "@/data/stylesData";

export default function Banner() {
  const [showPopup, setShowPopup] = useState(false);

  // Create refs for the elements to animate
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline for sequential animations
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.from(logoRef.current, { opacity: 0, y: -50 }); // Animate logo in from above
    tl.from(headingRef.current, { opacity: 0, y: 50 }, "-=0.5"); // Overlap the heading animation
    tl.from(buttonContainerRef.current, { opacity: 0, scale: 0.8 }, "-=0.5"); // Animate button into view
  }, []);

  return (
    <>
      <div className="relative h-[100vh] w-[100vw] bg-[#081518] overflow-hidden">
        <div className="absolute top-0 right-0 w-[100%] h-full">
          <Image
            className="object-cover object-top"
            fill
            alt="banner-image"
            src="/images/banner4.jpg"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex">
          <div
            className="absolute top-[10rem] left-1/2 -translate-x-1/2"
            ref={logoRef}
          >
            <div className="h-[25rem] w-[35rem] max-5xl:h-[18rem] max-5xl:w-[25rem]">
              <Logo bg="black" />
            </div>
          </div>
          <div className="absolute w-full h-full flex flex-col gap-[3rem] items-center top-[60%]">
            <h2
              ref={headingRef}
              className="text-white text-[5rem] text-center font-bold uppercase max-5xl:text-[3.5rem]"
            >
              <span>Look Sharp - </span>
              <span>Feel Sharper</span>
            </h2>
            <div ref={buttonContainerRef}>
              <Button text="BOOK A CHAIR" onClick={() => setShowPopup(true)} />
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <AppointmentPopup
          barbers={barber}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
