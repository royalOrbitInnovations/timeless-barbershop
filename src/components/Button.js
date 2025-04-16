import Link from "next/link";

export default function Button({ text }) {
  return (
    <Link href="tel:55360324">
      <button className="border border-gold text-white px-[5rem] py-[2rem] text-[2.5rem] rounded-full bg-gold hover:bg-black hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 max-5xl:text-[2rem] shadow-2xl">
        {text}
      </button>
    </Link>
  );
}
