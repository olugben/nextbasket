import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { HamburgerIcon, CartIcon, DropIcon } from "./icons";
import MobileDropDown from "./MobileDropDown";
import CartListAndCount from "./CartListAndCount";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleView } from "../store/reducers/mobileDropDownSlice";
// import { IStoreState } from "../store";
// import { toggleCartView } from "../store/reducers/cartSlice";
import { useRouter } from "next/router";
interface INavProp {
  isProductPage: boolean;
}

const Nav = ({ isProductPage }: INavProp) => {
  const router = useRouter();
 
  // const isCartOpened = useSelector(
  //   (state: IStoreState) => state?.cart?.isCartOpened
  // );

  // const isWishListOpened = useSelector(
    // (state: IStoreState) => state?.wishList?.isWishListOpened
  // );

  // const dispatch = useDispatch();
  // const toggleDropDown = () => dispatch(toggleView());
c
  return (
    <nav
      className={`w-full  bg-white 
    `
    }

    >

      {/* mobile nav  - */}

      <header className="fixed  lg:relative -top-0 lg:top-0 !z-[100] mobile-nav flex justify-between items-center lg:hidden p-[42px] bg-white  w-full ">
        <h3
          onClick={() => router.push("/")}
          className="cursor-pointer capitalize font-mont !font-bold text-[#252B42] text-[24px]"
        >
          bandage
        </h3>
        <div className="flex items-center gap-[24px]">
          {!isProductPage ? (
            <>
              <SearchIcon />
              <button 
              // onClick={() =>
              //  dispatch(toggleCartView())} 
               >
                <CartIcon />
              </button>
            </>
          ) : null}
          <button 
          // onClick={toggleDropDown}
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>
      <MobileDropDown 
      isOpen={false}
       isProductPage={isProductPage} />

      {/* desktop-nav */}
      <header
        className={`lg-nav w-full hidden lg:block ${
          isProductPage ? "max-w-[1100px]" : "max-w-[1400px]"
        } mx-auto `}
      >
        <div className="flex items-center justify-between gap-5 mt-3.5 mx-7 px-px max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
          <span className="flex justify-between gap-5 my-auto items-start max-md:max-w-full max-md:flex-wrap">
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer text-slate-800 text-2xl font-bold leading-8 tracking-normal"
            >
              Bandage
            </div>
            <div className="items-start flex justify-between gap-3 px-px py-1.5">
              <div
                onClick={() => router.push("/")}
                className="text-neutral-500 text-center text-sm font-bold cursor-pointer ease duration-100 hover:font-medium leading-6 tracking-wide grow whitespace-nowrap self-start"
              >
                Home
              </div>
              <div className="text-neutral-500 text-sm font-bold cursor-pointer ease duration-100 hover:font-medium leading-6 tracking-wide self-start">
                Shop
              </div>
              <button className="aspect-[2] object-contain object-center w-2.5 fill-slate-800 overflow-hidden self-center shrink-0 max-w-full my-auto">
                <DropIcon />
              </button>
              <div className="text-neutral-500 text-center text-sm font-bold  cursor-pointer ease duration-100 hover:font-medium leading-6 tracking-wide self-start">
                About
              </div>
              <div className="text-neutral-500 text-center text-sm font-bold cursor-pointer ease duration-100 hover:font-medium leading-6 tracking-wide self-start">
                Blog
              </div>
              <div className="text-neutral-500 text-center text-sm font-bold cursor-pointer ease duration-100 hover:font-medium leading-6 tracking-wide self-start">
                Contact
              </div>
              <div className="text-neutral-500 text-center text-sm font-bold cursor-pointer ease duration-100 hover:font-medium leading-6 tracking-wide grow whitespace-nowrap self-start">
                Pages
              </div>
            </div>
          </span>
          <CartListAndCount />
        </div>
      </header>
    </nav>
  );
};

export default Nav;
