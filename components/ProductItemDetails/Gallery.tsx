import React from "react";
import Image from "next/image";
import { WhiteRightArrowIcon } from "../icons";
import BreadCrumb from "../BreadCrumb";
interface IGallery {
  images: string[];
  thumbnail: string;
}

const Gallery = ({ images, thumbnail }: IGallery) => {
  return (
    <div className="px-[30px] relative flex items-start justify-start flex-col w-1/2">
      <div className="hidden lg:block mb-8">
        <BreadCrumb />
      </div>
      <div className="flex items-start justify-start w-full">
        <Image
          src={images[0]}
          alt="single product cover"
          width={200}
          height={300}
          className=" max-h-[500px] max-w-[430px] w-full h-full "
        />
      </div>

      <button className="absolute top-[10px] right-20 bottom-[100px] outline-none border-none">
        <WhiteRightArrowIcon />
      </button>
      <div className="flex items-center gap-[18px] mt-[42px]">
        <Image
          src={images[1] || thumbnail || images[0]}
          alt="single product thumb"
          width={100}
          height={75}
        />
        <Image
          src={images[2] || thumbnail || images[0]}
          alt="single product thumb"
          width={100}
          height={75}
        />
      </div>
    </div>
  );
};

export default Gallery;
