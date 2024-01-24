import React from "react";
import Image from "next/image";
const DetailsAndImage = () => {
  return (
    <section className="py-[24px] mt-[22px] flex gap-[125px] w-full max-w-[1100px] mx-auto">
      <div className="w-full flex flex-col gap-[30px] justify-start items-start flex-1">
        <h4 className="text-mainBlack text-2xl font-bold">
          the quick fox jumps over{" "}
        </h4>
        <div className="flex flex-col gap-[30px] justify-start items-start">
          <p className="leading-[20px] tracking-[0.2px] text-sm max-w-[513px] text-mainGrey">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="leading-[20px] tracking-[0.2px] text-sm max-w-[513px] text-mainGrey border-l-[3px] border-l-[#23856D] pl-[24px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="leading-[20px] tracking-[0.2px] text-sm max-w-[513px] text-mainGrey">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
      </div>
      <Image src="/details-img.png" width={413} height={372} alt="details" />
    </section>
  );
};

export default DetailsAndImage;
