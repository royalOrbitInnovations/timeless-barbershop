"use client";
import StyleTypeItem from "./StyleTypeItem";

export default function StyleSubCategory({ code, data, isOpen, onToggle }) {
  return (
    <div className="border-2 border-black bg-black rounded-[25px] overflow-hidden">
      <div
        className="flex justify-between items-center px-[4rem] py-[1.5rem] cursor-pointer bg-black m-2"
        onClick={onToggle}
      >
        <h2 className="text-[2rem] text-white font-bold">{data.name}</h2>
        <span className="text-[2rem] text-gold">{isOpen ? "▲" : "+"}</span>
      </div>
      {isOpen && (
        <div className="p-4 space-y-4 flex flex-col gap-[2rem]">
          {data.type.map((item, index) => (
            <StyleTypeItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
