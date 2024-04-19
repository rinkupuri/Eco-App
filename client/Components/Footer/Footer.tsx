import React from "react";
import { Button } from "../ui/button";
import { styles } from "@/Style/styles";

const Footer = () => {
  return (
    <div className="w-full bg-black flex justify-center dark:bg-white">
      <div className="flex w-11/12 md:flex-row flex-col justify-between items-center">
        <div className="flex w-full flex-col py-4">
          <h1 className="text-[18px]  dark:text-black text-white md:text-[28px] xl:text-[34px]">
            ShopCado
          </h1>
          <p className="text-white/40 dark:text-black/40">
            Shop Dreams. from there
          </p>
        </div>
        <div className="flex w-full flex-col justify-center items-end">
          <h1 className={`${styles.heading} w-7/12  text-start text-white`}>
            Subscribe Us
          </h1>
          <div className="flex ring-2 h-10 justify-center items-center bg-white ring-white rounded-sm dark:bg-black ">
            <input
              className="border-none w-full pl-3 h-10 focus:border-none outline-none focus:outline-none"
              type="subscribe"
              name=""
              placeholder="Subscribe"
              id=""
            />
            <Button className="m-[1px] h-full bg-blue-800">Subscribe</Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">All Copyrights Reserved@2024</div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
