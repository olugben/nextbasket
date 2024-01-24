import React from "react";
import CartListAndCount from "./CartListAndCount";
import { useRouter } from "next/router";
interface IDropDown {
  isOpen: boolean;
  isProductPage?: boolean;
}

const MobileDropDown = ({ isOpen, isProductPage = false }: IDropDown) => {
  const options = ["Home", "Product", "Pricing", "Contact"];

  const router = useRouter();
  const handleClick = (id: string) => {
    if (id === "Home") {
      router.push("/");
    }
    return;
  };
  return (
    <div
      className={`bg-white z-10 border rounded-md shadow-md  ${
        isOpen
          ? "translate-y-[0%] mt-[100px]   !duration-300 !ease"
          : "translate-y-[-100vh] mt-[-200px] h-[400px] !duration-300 !ease"
      }   overflow-y-hidden lg:hidden   font-[500] ease-in transition-all  duration-75  `}
    >
      <ul className="p-[36px] flex flex-col items-center gap-[30px] ">
        {options?.map((item) => (
          <li
            className="hover:font-[400] cursor-pointer hover:bg-[ghostwhite] w-full text-center p-2"
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      {isProductPage ? <CartListAndCount isMobile /> : null}
    </div>
  );
};

export default MobileDropDown;
