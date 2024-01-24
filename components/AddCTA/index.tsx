import React from "react";
import Image from "next/image";
const AddCTA = () => {
  return (
    <div className="flex-col relative flex h-full w-full py-[72px] md:py-[160px] md:mt-[100px]">
      <Image
        src={"/cta-banner.png"}
        fill
        alt="CTA Banner"
        className="absolute h-full w-full object-cover object-center inset-0 bg-center"
      />
      <div className="relative z-50 flex items-center justify-center flex-col w-full h-full gap-[30px] px-[28px] max-w-[900px] mx-auto">
        <h5 className="text-mainBlue text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
          Designing Better Experience
        </h5>
        <h6 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center md:max-w-[570px]">
        
        </h6>
        <div className="flex items-center justify-center flex-col md:flex-col-reverse gap-[30px]">
          <p className="text-2xl text-[#23856D] font-bold">$16.48</p>
          <p className="text-mainGrey text-sm  leading-[20px] tracking-[0.2px] text-center md:max-w-[447px]">
      
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className=" font-bold leading-[24px] tracking-[0.2px] text-center uppercase text-sm outline-none  bg-[#23A6F0] text-white rounded-[5px] px-[40px] py-[15px]  hover:text-[#23A6F0] hover:bg-white transition-all duration-500 ease">
            Add Your CAll To Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCTA;
