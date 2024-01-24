import React from "react";
import Rating from "../Testimonials/Rating";
import { RatingCircleIcon, RatingViewIcon } from "../icons";
import { ProductItem } from "../../pages";

interface IProductRating {
  title: string;
  price: number;
  description: string;
  id: number;
  item: ProductItem;
}
const ratingColors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

const ProductRating = ({
  title,
  price,
  description,
  id,
  item,
}: IProductRating) => {
  return (
    <div className="px-[25px] mt-[30px] w-full lg:w-2/3 lg:mt-24 ">
      <p className="text-mainBlack text-[20px] leading-[30px] tracking-[0.2px]">
        {title}
      </p>
      <div className="flex items-center gap-[10px]">
        <Rating />
        <span className="text-sm font-bold leading-[24px]  text-mainGrey tracking-[0.2px]">
          10 reviews
        </span>
      </div>
      <p className="text-2xl text-mainBlack font-bold">${price}</p>
      <div className="text-sm font-bold leading-[24px] tracking-[0.2px] mt-[5px] ">
        <span className=" text-[#858585] ">Availability :</span>

        <span className="text-[#23A6F0] ml-[5px]">In Stock </span>
      </div>
      <p className="text-sm font-bold leading-[24px] mt-[32px] text-[#737373] tracking-[0.2px] border-b border-b-[#BDBDBD] pb-4">
        {description}
      </p>
      <div className="flex items-center gap-[10px] mt-[19px]">
        {ratingColors?.map((item, index) => (
          <React.Fragment key={index}>
            <RatingCircleIcon color={item} />
          </React.Fragment>
        ))}
      </div>
      <div className="mt-[48px] flex items-center gap-[10px] flex-wrap sm:gap-2">
        <button className=" font-bold leading-[24px] tracking-[0.2px] text-center uppercase text-sm outline-none  bg-[#23A6F0] text-white rounded-[5px] px-[40px] py-[15px]  hover:text-[#23A6F0] border border-transparent hover:border-[#23A6F0] hover:bg-white transition-all duration-500 ease">
          Select Options
        </button>
        <div className="flex items-center gap-[10px]">
          <button className="outline-none border border-[#E8E8E8] rounded-full p-[10px]">
            <RatingViewIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
