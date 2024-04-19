import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";

type Props = {};

const Categories = (props: Props) => {
  const Categories = [
    {
      name: "Laptop",
      url: "laptop",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/np750xgk-kg1in/gallery/in-galaxy-book4-156-inch-np750xgka-np750xgk-kg1in-thumb-540423952?imwidth=800",
    },
    {
      name: "Mobile",
      url: "mobile",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-sm-s921blgcins-thumb-539572366?imwidth=800",
    },
    {
      name: "Desktop",
      url: "desktop",
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/optiplex-desktops/optiplex-d13-aio/media-gallery-standard/optiplex-7410-plus-aio-front-wired.png?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=465&qlt=100,1&resMode=sharp2&size=465,402&chrss=full",
    },
    {
      name: "Electronics",
      url: "electronics",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-538070792?$1300_1038_PNG$",
    },
    {
      name: "Electronics",
      url: "electronics",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-538070792?$1300_1038_PNG$",
    },
    {
      name: "Electronics",
      url: "electronics",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-538070792?$1300_1038_PNG$",
    },
    {
      name: "Electronics",
      url: "electronics",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-538070792?$1300_1038_PNG$",
    },
    {
      name: "Electronics",
      url: "electronics",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-538070792?$1300_1038_PNG$",
    },
  ];
  return (
    <div className="w-full flex-col  my-10 flex justify-center items-center">
      <div className="flex w-11/12">
        <h1 className="font-[800] text-[20px] md:text-[22px] xl:text-[26px] mb-3">
          Categories
        </h1>
      </div>
      <Card className="  rounded-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6   w-11/12 justify-evenly items-center">
        {Categories.map((item, index) => (
          <Link
            href={`/${item.url}`}
            key={index}
            className="flex flex-col   w-[180px] justify-center items-center h-[180px] object-contain bg-white/40 dark:bg-black/40"
          >
            <Image width={120} height={120} src={item.image} alt={item.name} />
            {item.name}
          </Link>
        ))}
      </Card>
    </div>
  );
};

export default Categories;
