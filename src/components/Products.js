import React from "react";
import data from "../Data";
import Logo from "../components/Logo";
import { SlArrowRight } from "react-icons/sl";
import Category from "./Category";

import { ProductDetail } from "./ProductDetail";

const Products = () => {
  return (
    <>
      <div className="flex py-6 items-center bg-custom-gray">
        <div className="flex items-center gap-8 px-80 w-full justify-between">
          <div className="xl:flex xl:text-xl xl:font-bold xl:items-start xl:w-1/2 md:hidden">
            {data.productList.shop}
          </div>
          <div className="xl:flex xl:items-center xl:p-3 xl:gap-4 md:hidden">
            {data.productList.home}
            <SlArrowRight />
            {data.productList.shop}
          </div>
        </div>
      </div>
      <Category />
      <ProductDetail />
      <Logo />
    </>
  );
};

export default Products;
