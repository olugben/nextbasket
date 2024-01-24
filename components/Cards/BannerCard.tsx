import React from "react";
import Image from "next/image";

interface IBannerProp {
  bgSrc: string;
}

const BannerCard = ({ bgSrc }: IBannerProp) => {
  return (
    <div className="flex-col overflow-hidden relative flex aspect-[1.1066666666666667] pb-12">
      <Image
        src={bgSrc}
        alt="Banner"
        fill
        sizes="(max-width: 700px) 30vw, 80px"
        className="absolute h-full w-full object-cover object-center inset-0 bg-center"
      />

      <span className="relative justify-center flex flex-col mb-20 pl-6 pr-20 py-6 items-start">
        <div className="text-green-500 text-sm font-bold leading-6 tracking-wide">
          5 Items
        </div>
        <div className="text-slate-800 text-2xl font-bold leading-8 tracking-normal whitespace-nowrap mt-1.5">
          FURNITURE
        </div>
        <div className="text-slate-800 text-sm font-bold leading-6 tracking-wide mt-1.5">
          Read More
        </div>
      </span>
    </div>
  );
};

export default BannerCard;
