import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import { Products, ProductItem } from "../../pages";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";
import Link from "next/link";
import { useDispatch } from "react-redux";

const FeaturedProducts = ({ products, skip, total }: Products) => {
  const [pageSkip, setPageSkip] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [productList, setProductList] = useState([]);
  const handlePageChange = () => {
    setLoadingMore(true);
    setPageSkip((pageSkip) => pageSkip + 10);

    const queryParams = { skip: pageSkip, page: pageSkip / 10 };

    router.push({ pathname: "/", query: queryParams });
  };

  return (
    <section className="px-[20px] mt-[104px] lg:mt-[168px]">
      <Heading />
      <div className="p-6 md:px-20 mt-[56px] grid gap-[30px] grid-cols-[repeat(auto-fill,minmax(190px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {productList?.map((item, index) => (
          <Link
            href={`/product/${item?.id}`}
            key={index}
            className="cursor-pointer"
          >
            <ProductCard isCenterAligned {...item} />
          </Link>
        ))}
      </div>
      {total !== productList?.length ? (
        <div className="flex items-center justify-center mt-[56px]">
          <button
            onClick={handlePageChange}
            disabled={loadingMore}
            className="disabled:bg-[#23A6F0] disabled:text-white flex items-center gap-2 font-bold leading-[24px] tracking-[0.2px] text-center uppercase text-sm outline-none border border-[#23A6F0] rounded-[5px] px-[40px] py-[15px] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-all duration-500 ease"
          >
            Load more products{" "}
            {loadingMore ? (
              <ReactLoading type="spin" color="#fff" height={20} width={20} />
            ) : null}
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default FeaturedProducts;
