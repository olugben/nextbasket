import React from "react";
import PracticeAdviceCard from "./Card";
import { data } from "./data";
const PracticeAdvice = () => {
  return (
    <section className="px-4 flex items-center justify-center flex-col w-full mt-[205px] lg:mt-[243px]">
      <div className="mb-[80px]">
        <h4 className="text-[#23A6F0] leading-[24px] tracking-[0.2px] text-sm text-center font-bold ">
          Practice Advice
        </h4>
        <h5 className="text-mainBlack leading-[50px] tracking-[0.2px] text-[40px] text-center font-bold mt-[10px] ">
          Featured <br className="md:hidden" /> Products
        </h5>
      </div>
      <div className="flex items-center justify-center flex-col lg:grid   lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  w-full max-w-[930px] mx-auto ">
        {data?.map((item, index) => (
          <React.Fragment key={index}>
            <PracticeAdviceCard imgVal={item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default PracticeAdvice;
