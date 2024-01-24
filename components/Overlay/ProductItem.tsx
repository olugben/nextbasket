import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { ProductItem } from "../../pages";
import { IStoreState } from "../../store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit/dist/createAction";

interface IProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  item: ProductItem;
  images: string[];
  thumbnail: string;
  quantity: () => number;
  ItemPrice: number;
  remove:
    | ActionCreatorWithPayload<any, "wishList/removeFromWishList">
    | ActionCreatorWithPayload<any, "cart/removeFromCart">;
  increase:
    | ActionCreatorWithPayload<any, "cart/increaseQuantity">
    | ActionCreatorWithPayload<any, "wishList/increaseWishListItemQuantity">;
  decrease:
    | ActionCreatorWithPayload<any, "cart/decreaseQuantity">
    | ActionCreatorWithPayload<any, "wishList/decreaseWishListItemQuantity">;
  add:
    | ActionCreatorWithPayload<any, "cart/addToCart">
    | ActionCreatorWithPayload<any, "wishList/addToWishList">;
}

const ProductItem = ({
  id,
  title,
  description,
  price,
  item,
  images,
  thumbnail,
  remove,
  increase,
  decrease,
  add,
  quantity,
  ItemPrice,
}: IProductItem) => {
  const dispatch = useDispatch();

  return (
    <div className="grid gap-4 mb-8 border-b border-b-[#7e7d7d] pb-8 ">
      <Image
        src={images?.[0] || thumbnail}
        alt="item"
        width={300}
        height={300}
      />
      <div className="grid gap-1">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between mb-2">
          {title}
          <button
            onClick={() => dispatch(remove(item))}
            className="cursor-pointer rounded-none border-none flex items-center justify-center  text-red-500"
          >
            <DeleteIcon />
          </button>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[300px]">
          {description}
        </p>
      </div>
      <div className="">
        <div className="flex items-center  justify-between gap-2 w-full">
          <span
            className="w-4 h-4 text-green-500 cursor-pointer"
            onClick={() => dispatch(increase(item))}
          >
            <AddIcon />
          </span>
          <span className="mt-4 text-sm text-gray-900 dark:text-gray-100">
            Quantity : {quantity()}
          </span>
          <span
            className="w-4 h-4 text-red-500 cursor-pointer"
            onClick={() => dispatch(decrease(item))}
          >
            <RemoveIcon />
          </span>
        </div>
        <div className="mt-10 flex items-center justify-center flex-col gap-4">
          <p className="text-sm text-gray-900 dark:text-gray-100">
            Price: $ {ItemPrice ? ItemPrice : price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
