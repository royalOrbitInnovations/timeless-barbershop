import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";

export default function Contact() {
  return (
    <div className="bg-black text-white px-[15rem] pt-[5rem] pb-[2rem]">
      <div className=" flex items-center justify-center gap-[5rem]">
        <div className="w-[30%] flex flex-col items-center justify-center gap-[3rem]">
          <div className="h-[17rem] w-[22rem]">
            <Logo type="black" />
          </div>
          <Button text="Book a Chair" />
        </div>
        <div className="w-[70%] h-[40rem] rounded-[25px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.047512667923!2d51.4294193759308!3d25.235324630154384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dbf029a0a365%3A0xa501ac46a3fdde7!2sTimeless%20Salon!5e0!3m2!1sen!2sqa!4v1744670761760!5m2!1sen!2sqa"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <h3 className="text-center pt-[3rem] text-[1.3rem] font-bold text-grey">
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
  );
}
