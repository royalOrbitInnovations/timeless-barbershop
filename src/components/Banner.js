import Image from "next/image";
import Logo from "./Logo";
import Button from "./Button";

export default function Banner() {
  return (
    <div className="relative h-[100vh] w-[100vw] bg-[#081518] overflow-hidden">
      <div className="absolute top-0 right-0 w-[100%] h-full">
        <Image
          className="object-cover object-top"
          fill
          alt="banner-image"
          src="/images/banner4.jpg"
          //   src="/images/banner4.jpg"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex">
        <div className="absolute top-[10rem] left-1/2 -translate-x-1/2">
          <Logo bg="black" />
        </div>
        <div className="absolute w-full h-full flex flex-col gap-[3rem] items-center top-[60%]">
          <h2 className="text-white text-[5rem] text-center font-bold uppercase">
            <span>Look Sharp - </span>
            <span>Feel Sharper</span>
          </h2>
          <Button text="BOOK A CHAIR" />
        </div>
      </div>
    </div>
  );
}
