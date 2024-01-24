import React from "react";
import {
  ProfileIcon,
  BlueSearchIcon,
  BlueWishListIcon,
  BlueCartIcon,
  ShopArrowIcon,
} from "../icons";
import BreadCrumb from "../BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
// import { toggleCartView } from "../../store/reducers/cartSlice";
// import { IStoreState } from "../../store";
// import { toggleWishListView } from "../../store/reducers/wishListSlice";
interface ICartAndCount {
  isMobile?: boolean;
}
const CartListAndCount = ({ isMobile = false }: ICartAndCount) => {
  const mobileClasses = isMobile ? "flex-col" : "flex-row";
  // const dispatch = useDispatch();
  // const cartItems = useSelector((store: IStoreState) => store?.cart?.cartItems);
  // const wishListItems = useSelector(
  //   (store: IStoreState) => store?.wishList?.wishListItems
  // );

  // const cartItemsCount = cartItems?.length !== 0 ? cartItems?.length : null;
  // const wishListItemsCount =
  //   wishListItems?.length !== 0 ? wishListItems?.length : null;
  return (
    <div className={`items-center flex gap-0 ${mobileClasses}`}>
      <div className="items-center flex justify-between gap-1.5 p-4 rounded-[37px]">
        <ProfileIcon />
        <div className="text-sky-500 text-center text-sm font-bold leading-6 tracking-wide grow whitespace-nowrap">
          Login / Register
        </div>
      </div>
      <div className={`flex items-center ${mobileClasses}`}>
        <button className="aspect-square object-contain object-center w-[46px] flex justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto">
          <BlueSearchIcon />
        </button>
        <div
          // onClick={() => dispatch(toggleCartView())}
          className="items-stretch self-center flex my-auto p-4  rounded-[37px] hover:bg-[ghostwhite] ease duration-150 transition-all cursor-pointer"
        >
          <button className=" aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full flex justify-center items-center">
            <BlueCartIcon />
          </button>
          <div className="text-sky-500 text-center text-xs leading-4 tracking-wide relative -top-2 left-[2px]">
            {/* {cartItemsCount} */}
          </div>
        </div>
        <div
          // onClick={() => dispatch(toggleWishListView())}
          className="items-stretch self-center flex  my-auto p-4  rounded-[37px] hover:bg-[ghostwhite] ease duration-150 transition-all cursor-pointer"
        >
          <button className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full flex justify-center items-center">
            <BlueWishListIcon />
          </button>
          <div className="text-sky-500 text-center text-xs leading-4 tracking-wide relative -top-2 left-[2px]">
            {/* {wishListItemsCount} */}
          </div>
        </div>
      </div>
      {isMobile ? <BreadCrumb /> : null}
    </div>
  );
};

export default CartListAndCount;
