import React from "react";
import {
  HooliIcon,
  LyftIcon,
  StripeIcon,
  AwsIcon,
  PiperIcon,
  RedditIcon,
} from "../icons";
const ClientsList = () => {
  return (
    <div className="py-[50px] px-[40px] mx-auto bg-[#FAFAFA] mb-[161px] lg:mb-[40px] ">
      <div className="flex flex-col max-w-[1100px]  justify-center items-center gap-[60px] mt-[110px] md:mt-0 md:grid md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] mx-auto">
        <HooliIcon />
        <LyftIcon />
        <StripeIcon />
        <AwsIcon />
        <PiperIcon />
        <RedditIcon />
      </div>
    </div>
  );
};

export default ClientsList;
