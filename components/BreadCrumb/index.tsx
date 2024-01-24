import React from "react";
import { ShopArrowIcon } from "../icons";
import Link from "next/link";

const BreadCrumb = () => {
  return (
    <div className="mb-4 md:mb-0 capitalize flex items-center text-sm text-mainBlack font-bold leading-6 tracking-[.2px] gap-[15px] mt-[24px]">
      <Link href="/">Home</Link>
      <ShopArrowIcon />
      <Link href="/" className="text-[#BDBDBD]">
        shop
      </Link>
    </div>
  );
};

export default BreadCrumb;
