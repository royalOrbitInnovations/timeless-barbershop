"use client";

import React, { useState } from "react";
import Image from "next/image";
import { prices } from "@/data/stylesData";

export default function AppointmentPopup({ barbers, onClose }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const times = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
  ];

  const toggleService = (svc) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.name === svc.name)
        ? prev.filter((s) => s.name !== svc.name)
        : [...prev, svc]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !selectedBarber) return;

    const servicesText = selectedServices.length
      ? selectedServices.map((s) => `${s.name}`).join(", ")
      : "None";

    const msg = `
Hello, I’d like to book an appointment.
Name: ${name}
Date: ${date}
Time: ${time}
Barber: ${selectedBarber.name}
Services: ${servicesText}
    `.trim();

    const url = `https://api.whatsapp.com/send?phone=97455360324&text=${encodeURIComponent(
      msg
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative bg-white rounded-2xl p-12 w-[90vw] h-[90vh] shadow-2xl overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-4xl font-bold text-gray-600 hover:text-red-500"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-5xl font-semibold mb-8 text-center">
          Book Your Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8 text-xl">
          {/* Name */}
          <div>
            <label className="block mb-3 font-semibold text-xl">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-4 text-xl focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="e.g. John Doe"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-3 font-semibold text-xl">
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg p-4 text-xl focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-3 font-semibold text-xl">
              Select Time
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded-lg p-4 text-xl focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {times.map((t) => (
                <option key={t} value={t} className="py-3 text-lg">
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Barber Selection */}
          <div>
            <p className="mb-6 font-semibold text-xl">Choose Barber</p>
            <div className="grid grid-cols-3 gap-8 max-6xl:grid-cols-1">
              {barbers.map((b) => (
                <div
                  key={b.name}
                  onClick={() => setSelectedBarber(b)}
                  className={`cursor-pointer border rounded-2xl p-6 flex flex-col items-center transition-shadow 
                    ${
                      selectedBarber?.name === b.name
                        ? "border-gold shadow-xl"
                        : "hover:shadow-lg"
                    }`}
                >
                  <div className="w-40 h-40 relative mb-6">
                    <Image
                      src={b.image}
                      alt={b.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-2xl font-medium">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Selection */}
          <div className="pb-[1rem]">
            <p className="pt-[1.5rem] font-semibold text-xl">Select Services</p>
            <div className="grid grid-cols-2 gap-6">
              {prices.map((svc) => (
                <label key={svc.name} className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    className="h-6 w-6 text-gold focus:ring-gold"
                    checked={selectedServices.some((s) => s.name === svc.name)}
                    onChange={() => toggleService(svc)}
                  />
                  <div>
                    <p className="text-lg font-medium pl-[1rem]">{svc.name}</p>
                    <p className="text-md text-gray-500 pl-[1rem]">
                      {svc.cost}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gold text-white py-6 rounded-full text-2xl font-semibold hover:bg-black transition-colors duration-200"
          >
            Confirm & WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
