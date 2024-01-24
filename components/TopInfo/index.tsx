import React from "react";
import { useRouter } from "next/router";
import {
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
  XIcon,
} from "../icons";
const TopInfo = () => {
  const router = useRouter();
  const isProductPage = router?.pathname.includes("/product");
  return (
    <div className="hidden justify-center items-stretch bg-teal-700 lg:flex w-full flex-col pt-2.5 pb-1 px-px max-md:max-w-full">
      <span
        className={`justify-between items-center flex w-full gap-5 px-6 max-md:max-w-full max-md:flex-wrap max-md:px-5 ${
          isProductPage ? "!max-w-[1100px] !mx-auto text-center" : ""
        }`}
      >
        <div className="items-stretch self-stretch flex justify-between gap-2.5 py-px">
          <span className="items-center shadow-sm flex justify-between gap-1.5 p-2.5 rounded-md">
            <PhoneIcon />
            <div className="text-white text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
              (225) 555-0118
            </div>
          </span>
          <span className="items-center flex justify-between gap-1.5 p-2.5 rounded-md">
            <MailIcon />
            <div className="text-white text-sm font-bold leading-6 tracking-wide self-stretch grow whitespace-nowrap">
              michelle.rivera@example.com
            </div>
          </span>
        </div>
        <div className="text-white text-sm font-bold leading-6 tracking-wide grow shrink basis-auto my-auto">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="self-stretch  items-center flex justify-between gap-2.5 p-2.5 ">
          <span className="text-white text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
            Follow Us :
          </span>
          <div className="flex items-center gap-[15.5px]">
            <InstagramIcon />
            <YoutubeIcon />
            <FacebookIcon />
            <XIcon />
          </div>
        </div>
      </span>
    </div>
  );
};

export default TopInfo;
