import React from "react";
import ProductCard from "../Product/ProductCard";

type Props = {};

const FeaturedProduct = (props: Props) => {
  return (
    <div className="flex w-full flex-col justify-center items-center mb-10">
      <div className="flex w-11/12">
        <h1 className="font-[800] text-[20px] md:text-[22px] xl:text-[26px] mb-3">
          Featured Product
        </h1>
      </div>
      <div className=" w-11/12 gap-4 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProduct;
