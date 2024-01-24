import React from "react";

const GetInTouch = () => {
  return (
    <div className="">
      <p className="text-mainBlack font-bold leading-[24px] tracking-[0.2px] mb-[20px]">
        Get In Touch
      </p>
      <div className="flex items-center flex-wrap gap-4 sm:flex-nowrap sm:gap-0">
        <input
          type="email"
          placeholder="Your Email"
          className=" border rounded-[5px] border-[#e6e6e6] sm:rounded-r-none outline-none  flex-1 px-[20px] pr-0 py-[15px]  rounded-l-[5px] rounded-b-[5px] rounded-r-0 rounded- bg-white"
        />
        <div className="bg-[#23A6F0] text-white px-[20px] relative lg:right-2 py-[15px]  h-full rounded-[5px] sm:rounded-r-[5px] sm:rounded-l-none">
          {" "}
          Subscribe
        </div>
      </div>
      <p className="text-mainGrey text-[12px] leading-[28px]">
        Lore imp sum dolor Amit
      </p>
    </div>
  );
};

export default GetInTouch;
