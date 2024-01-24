import React from "react";
import { IServiceData } from "./data";

const ServiceCard = ({ Icon, description, title }: IServiceData) => {
  return (
    <div className="px-[35px] py-[40px] flex flex-col justify-center items-center gap-[20px]">
      {Icon}
      <p className="uppercase text-mainBlack font-bold text-[24px] leading-[30px] tracking-[0.2px] text-center">
        {title}
      </p>
      <p className="text-mainGrey text-sm text-center max-w-[300px]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
