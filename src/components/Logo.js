import Image from "next/image";

export default function Logo({ bg = "black" }) {
  return (
    <div className="relative h-full w-full">
      <Image
        alt="timeless-barbershop-logo"
        src={`${
          bg === "black"
            ? "/timeless-logo-white.png"
            : "/timeless-logo-black.png"
        }`}
        className="object-fit hover:scale-105 transition-all duration-300 ease-in-out"
        fill
      />
    </div>
  );
}
