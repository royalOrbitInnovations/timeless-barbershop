import Image from "next/image";

export default function Logo({ bg = "black" }) {
  return (
    <div className="relative h-[25rem] w-[35rem]">
      <Image
        alt="timeless-barbershop-logo"
        src={`${
          bg === "black"
            ? "/timeless-logo-white.png"
            : "/timeless-logo-black.png"
        }`}
        className="object-fit"
        fill
      />
    </div>
  );
}
