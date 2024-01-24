import React from "react";
import Image from "next/image";
import { CommentsIcon, RightArrowIcon, ClockIcon } from "../icons";

interface IPracticeAdviceCard {
  imgVal: string;
}
const PracticeAdviceCard = ({ imgVal }: IPracticeAdviceCard) => {
  return (
    <div className="max-w-[300px] lg:w-full flex flex-col items-center justify-center relative mb-[30px]">
      <div className="rounded-[3px] bg-[#E74040] px-[10px] uppercase font-bold text-white w-[58px] absolute top-[10px] left-[10px]">
        new
      </div>
      <Image
        src={imgVal}
        alt="practice advice "
        width={300}
        height={400}
        className="object-contain flex-1 flex"
      />
      <div className="p-[25px] pb-[35px] shadow-lg w-full">
        <p className="flex items-center self-start gap-[15px] text-[12px] ease duration-100 ease-in-out">
          <span className="hover:text-[#8EC2F2] text-[#8ec2f2] leading-[16px] tracking-[0.2px]">
            Google{" "}
          </span>
          <span className="hover:text-[#8EC2F2] leading-[16px] tracking-[0.2px]">
            Trending
          </span>
          <span className="hover:text-[#8EC2F2] leading-[16px] tracking-[0.2px]">
            New
          </span>
        </p>
        <p className="leading-[30px] tracking-[0.2px] text-[20px] mt-[10px] text-mainBlack">
          Loudest à la Madison #1 (L'integral)
        </p>
        <p className="leading-[20px] tracking-[0.2px] text-sm text-mainGrey mt-[10px]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>

        <p className="flex items-center justify-between my-[25px]">
          <span className="flex items-center gap-[5px] text-[12px]">
            <ClockIcon />
            22 April 2021
          </span>
          <span className="flex items-center gap-[5px] text-[12px]">
            <CommentsIcon /> 10 comments
          </span>
        </p>
        <p className="leading-[24px] tracking-[0.2px] font-bold text-sm text-mainGrey flex items-center gap-[10px] ">
          Learn More
          <RightArrowIcon />
        </p>
      </div>
    </div>
  );
};

export default PracticeAdviceCard;
