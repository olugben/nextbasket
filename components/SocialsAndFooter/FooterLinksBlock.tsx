import React from "react";
import { IFooterData } from "./data";

const FooterLinksBlock = ({ heading, items }: IFooterData) => {
  return (
    <div>
      <p className="text-mainBlack font-bold leading-[24px] tracking-[0.2px] mb-[20px]">
        {heading}
      </p>
      <ul>
        {items?.map((val, index) => (
          <li
            className="text-mainGrey text-sm font-bold mb-[10px] leading-[24px] tracking-[0.2px] first-letter:capitalize"
            key={index}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksBlock;
