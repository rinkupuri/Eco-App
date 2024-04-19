"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/avatar";

const Navbar = () => {
  const [freeze, setFreeze] = useState(false);
  const navitems = [
    { name: "Home", url: "/" },
    { name: "Catalog", url: "/catalog" },
    { name: "Catagories", url: "/catagories" },
    { name: "Tracking", url: "/tracking" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  });

  const handleScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 60) {
      setFreeze(true);
    } else {
      setFreeze(false);
    }
  };
  return (
    <div
      className={`w-full z-[99999] bg-white dark:bg-black h-[60px] ${
        freeze ? "fixed top-0 left-0" : ""
      } flex border-b-[1px] justify-center items-center `}
    >
      <div className="flex w-11/12  justify-between items-center h-full">
        <div className="flex">ShopCado</div>
        <div className="flex gap-2">
          {navitems.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex">
          <Avatar
            showFallback
            className="w-[46px] bg-slate-300/40 dark:bg-black/40 h-[46px] rounded-full"
            src=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
