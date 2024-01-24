import React from "react";
import { FooterFaceBookIcon, FooterInstaIcon, FooterXIcon } from "../icons";
import FooterLinksBlock from "./FooterLinksBlock";
import { data } from "./data";
import GetInTouch from "./GetInTouch";
const SocialsAndFooter = () => {
  return (
    <section className="mt-[56px] px-[45px]">
      <div className="border-b border-b-[#efefef] pb-8 flex flex-col justify-start items-start  md:flex-row md:justify-between md:items-center md:px-[20px] mb-[100px] max-w-[1290px] mx-auto">
        <p className="text-2xl text-mainBlack font-bold mb-6 md:mb-0">
          Bandage
        </p>
        <div className="flex items-center gap-[20px]">
          <FooterFaceBookIcon />
          <FooterInstaIcon />
          <FooterXIcon />
        </div>
      </div>
      <footer>
        <div className="flex flex-col gap-[30px] md:grid md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]  pl-0 lg:pl-[50px] ">
          {data?.map((item) => (
            <React.Fragment key={item?.heading}>
              <FooterLinksBlock {...item} />
            </React.Fragment>
          ))}
          <GetInTouch />
        </div>
        <p className="mt-[70px] text-center md:text-left md:pl-[45px]  text-mainGrey text-sm font-bold mb-[10px] leading-[24px] tracking-[0.2px]  ">
          Made With Love By <br className="md:hidden" /> Tunde. All Right
          Reserved{" "}
        </p>
      </footer>
    </section>
  );
};

export default SocialsAndFooter;
