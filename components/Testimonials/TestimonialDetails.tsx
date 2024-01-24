import React from "react";
import Image from "next/image";
import Rating from "./Rating";

const TestimonialDetails = () => {
  return (
    <div className="p-4 md:p-2 flex flex-col items-center justify-center ">
      <h5 className="text-mainBlack text-2xl tracking-[0.2px] font-bold mb-[28px] text-center md:mb-[18px]">
        What they say <br className="md:hidden" /> about us
      </h5>
      <Image
        src="/user-profile.jpg"
        width={100}
        height={100}
        alt="user profile"
        className="rounded-full"
      />
      <Rating />
      <div className="tracking-[0.2px] text-sm font-bold text-center">
        <p className="text-mainGrey    max-w-[288px] md:max-w-full mb-[20px]">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
        <p className="text-mainBlue">Regina Miles</p>
        <p className="text-mainBlack">Designer</p>
      </div>
    </div>
  );
};

export default TestimonialDetails;
