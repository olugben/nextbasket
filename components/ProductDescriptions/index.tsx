import React from "react";
import MainDetails from "./MainDetails";
import DetailsAndImage from "./DetailsAndImage";

const ProductDescription = () => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-between w-full max-w-[1300px]  mx-auto">
      <MainDetails />
      <DetailsAndImage />
    </div>
  );
};

export default ProductDescription;
