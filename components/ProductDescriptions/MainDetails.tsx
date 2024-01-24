import React from "react";

const MainDetails = () => {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-center border-b border-b[#ECECEC] mt-[42px] w-full pb-[40px]">
      <div className="flex items-center gap-[48px] text-mainGrey font-semibold">
        <p className="leading-[20px] tracking-[0.2px] text-sm  mt-[10px]">
          Description
        </p>
        <p className="leading-[20px] tracking-[0.2px] text-sm  mt-[10px]">
          Additional Information
        </p>
        <p className="leading-[20px] tracking-[0.2px] text-sm  mt-[10px] ">
          Reviews <span className="ml-2 text-[#23856D]">(0)</span>
        </p>
      </div>
    </div>
  );
};

export default MainDetails;
