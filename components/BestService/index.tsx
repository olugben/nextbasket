import React from "react";
import ServiceCard from "./ServiceCard";
import { data } from "./data";

const BestService = () => {
  return (
    <div className="w-full mt-[80px] lg:mt-[168px]">
      <div className="flex mt-[80px] flex-col gap-[10px] mb-[80px] ">
        <h2 className="text-mainGrey leading-[30px] tracking-[0.2px] text-[20px] text-center font-medium ">
          Featured Products
        </h2>
        <h3 className="uppercase font-bold text-mainBlack text-[24px] text-center leading-[32px] ">
          the best service
        </h3>
        <p className="leading-[20px] max-w-[240px] md:max-w-full mx-auto tracking-[0.2px] text-sm text-center mt-[10px] font-medium text-[#737373]">
      
        </p>
      </div>
      <div className="max-w-[1270px] mx-auto grid md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] w-full gap-[30px]">
        {data?.map((item, index) => (
          <React.Fragment key={index}>
            <ServiceCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BestService;
