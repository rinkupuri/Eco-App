import React, { FC } from "react";
import { BiCart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { IoAddOutline, IoHeartOutline } from "react-icons/io5";
import { Card } from "../ui/card";

type Props = {
  data?: {};
};

const ProductCard: FC<Props> = ({ data }) => {
  return (
    <Card className=" cursor-pointer min-w-[150px] rounded-md">
      <div className="flex flex-col p-2">
        <div className="flex relative my-2">
          <img
            className="w-full min-h-[100px] object-contain"
            src="https://img.tatacliq.com/images/i8/658Wx734H/MP000000012588645_658Wx734H_202203250352481.jpeg"
          />
          <div className="absolute flex rounded-sm flex-col gap-3 bg-[#00000001] p-2 -top-2 -right-2">
            <BsEye size={18} title="Quick View" />
            <BiCart size={18} title="Cart" />
            <IoHeartOutline size={18} title="Heart" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-[3] ">
            <h1 className="font-[600] text-[11px]  sm:text-[12px] md:text-[13px] lg:text-[16px] ">
              RC5G012M0085 Uomo Classico Watch for Men
            </h1>
          </div>
          <div className="flex flex-[1] justify-center items-center">
            <div className="flex  justify-center items-center w-7 p-1 cursor-pointer hover:bg-black/70 h-7 rounded-full bg-black dark:bg-white">
              <IoAddOutline title="Add to Cart" size={28} color="#fff" />
            </div>
          </div>
        </div>
        <div className="flex font-[600] my-2  text-[9px]  sm:text-[10px] md:text-[12px] lg:text-[15px]">
          $38.00
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
