import React from "react";

const Heading = () => {
  return (
    <>
      <div className="mobile lg:hidden">
        <h3 className="uppercase font-bold text-[#252B42] text-[24px] text-center leading-[32px] mt-[80px]">
          Bestseller <br />
          products
        </h3>
        <p className="leading-[20px] tracking-[0.2px] text-sm text-center mt-[10px]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="hidden lg:flex mt-[80px] lg:flex-col lg:gap-[10px] ">
        <h2 className="text-[#737373] leading-[30px] tracking-[0.2px] text-[20px] text-center font-medium ">
          Featured Products
        </h2>
        <h3 className="uppercase font-bold text-[#252B42] text-[24px] text-center leading-[32px] ">
          Bestseller products
        </h3>
        <p className="leading-[20px] tracking-[0.2px] text-sm text-center mt-[10px] font-medium">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
    </>
  );
};

export default Heading;
