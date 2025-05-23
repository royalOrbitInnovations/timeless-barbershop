// components/Contact.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import AppointmentPopup from "./AppointmentPopup";
import { barber } from "@/data/stylesData";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    // Animate the left side container (Logo and Button)
    tl.from(leftRef.current, { opacity: 0, x: -50 });
    // Animate the map iframe container (right side)
    tl.from(rightRef.current, { opacity: 0, x: 50 }, "-=0.5");
    // Animate the footer text
    tl.from(footerRef.current, { opacity: 0, y: 20 }, "-=0.5");
  }, []);

  return (
    <>
      <div className="bg-black text-white px-[15rem] pt-[5rem] pb-[2rem] max-12xl:px-[10rem] max-6xl:px-[2rem]">
        <div className="flex items-center justify-center gap-[5rem] max-11xl:flex-col">
          <div
            ref={leftRef}
            className="w-[30%] flex flex-col items-center justify-center gap-[3rem] max-11xl:w-[100%]"
          >
            <div className="h-[17rem] w-[22rem]">
              <Logo type="black" />
            </div>
            {/* Book a Chair Button */}
            <Button text="Book a Chair" onClick={() => setShowPopup(true)} />
          </div>

          <div
            ref={rightRef}
            className="w-[70%] h-[40rem] rounded-[25px] overflow-hidden max-11xl:w-[100%]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.7977767713382!2d51.53844307538445!3d25.277387277659383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzM4LjYiTiA1McKwMzInMjcuNyJF!5e0!3m2!1sen!2sqa!4v1745305390357!5m2!1sen!2sqa"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <h3
          ref={footerRef}
          className="text-center pt-[3rem] text-[1.3rem] font-bold text-grey"
        >
          Designed and Developed by{" "}
          <Link
            href="https://portfolio.roi.qa"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Royal Orbit Innovations
          </Link>
        </h3>
      </div>

      {/* Appointment Popup */}
      {showPopup && (
        <AppointmentPopup
          barbers={barber}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
