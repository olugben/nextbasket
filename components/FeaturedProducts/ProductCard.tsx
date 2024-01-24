import React from "react";
import Image from "next/image";
import { ProductItem } from "../../pages";
import { useSelector, useDispatch } from "react-redux";
import BtnSnackbar from "../SnackBar/CartSnackBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
interface IProductCardProp {
  isCenterAligned?: boolean;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  item: ProductItem;
}
const ProductCard = ({
  isCenterAligned = false,
  id,
  title,
  price,
  discountPercentage,
  brand,
  images,
  item,
}: IProductCardProp) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white ${
        isCenterAligned ? "scale-105 ease duration-200 hover:scale-110" : ""
      }`}
    >
      <Image
        src={images[0]}
        alt="product card"
        width={295}
        height={105}
        className="flex flex-1"
      />
      <div
        className={`flex flex-col  ${
          isCenterAligned
            ? "items-center justify-center text-center "
            : "items-start justify-start text-left"
        } p-[25px] gap-[10px]`}
      >
        <p className="font-bold leading-[24px] tracking-[0.2px] text-center">
          {brand}
        </p>
        <p className="text-sm text-[#737373] font-bold leading-[24px] tracking-[0.2px] ">
          {title}
        </p>
        <p
          className={`font-bold leading-[24px] tracking-[0.1px] text-[#BDBDBD] `}
        >
          ${price}{" "}
          <span className="ml-[5px] text-[#23856D]">${discountPercentage}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
