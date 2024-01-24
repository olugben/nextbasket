import React from "react";
import BannerCard from "./BannerCard";
// import { useSelector } from "react-redux";
// import { IStoreState } from "../../store";
const Banner = () => {
  const bannerImgItems: string[] = [
    "/card-cover-5.jpg",
    "/card-cover-8.jpg",
    "/media-bg-cover.png",
    "/media-bg-cover-2.png",
  ];

  // const { isOpen } = useSelector((state: IStoreState) => state?.mobileDropDown);
  return (
    <section className={`max-w-[1100px] mx-auto `}>
      <div className="grid grid-flow-row-dense gap-[15px]  md:grid-cols-2  md:auto-col-fr lg:hidden px-[40px] ">
        {bannerImgItems?.map((item, index) => (
          <React.Fragment key={index}>
            <BannerCard bgSrc={item} />
          </React.Fragment>
        ))}
      </div>
      <div className="hidden lg:flex w-full gap-[15px] my-[80px] px-[20px] ">
        <div className="flex flex-1 gap-[15px]">
          <BannerCard bgSrc={bannerImgItems[0]} />
        </div>
        <div className="flex flex-col gap-[15px]">
          <div>
            <BannerCard bgSrc={bannerImgItems[1]} />
          </div>
          <div className="flex gap-[15px] ">
            <BannerCard bgSrc={bannerImgItems[2]} />
            <BannerCard bgSrc={bannerImgItems[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
