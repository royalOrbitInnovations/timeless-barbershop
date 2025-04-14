export default function Button({ text }) {
  return (
    <button className="border border-gold text-white px-[5rem] py-[2rem] text-[2.5rem] rounded-full bg-gold hover:bg-black hover:cursor-pointer transition-all duration-300 ease-in-out">
      {text}
    </button>
  );
}
