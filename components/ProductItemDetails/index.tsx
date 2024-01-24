import React from "react";
import Gallery from "./Gallery";
import ProductRating from "./ProductRating";

const ProductItemDetails = ({
  title,
  id,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
  item,
}) => {
  return (
    <section className="md:flex  md:items-start md:gap-[34px] max-w-[1100px] mx-auto">
      <Gallery {...{ images, thumbnail }} />
      <ProductRating {...{ title, price, description, id, item }} />
    </section>
  );
};

export default ProductItemDetails;
