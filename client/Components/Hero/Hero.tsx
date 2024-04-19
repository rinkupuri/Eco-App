import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const bannerDetails = [
    {
      id: 1,
      url: "https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?w=1380&t=st=1713423451~exp=1713424051~hmac=485589b78cdbd0d3cedfd9a832a5a2db3c919cf9c2289b238dd4437c998cdf04",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?w=1380&t=st=1713423451~exp=1713424051~hmac=485589b78cdbd0d3cedfd9a832a5a2db3c919cf9c2289b238dd4437c998cdf04",
    },
    {
      id: 3,
      url: "https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?w=1380&t=st=1713423451~exp=1713424051~hmac=485589b78cdbd0d3cedfd9a832a5a2db3c919cf9c2289b238dd4437c998cdf04",
    },
    {
      id: 4,
      url: "https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?w=1380&t=st=1713423451~exp=1713424051~hmac=485589b78cdbd0d3cedfd9a832a5a2db3c919cf9c2289b238dd4437c998cdf04",
    },
  ];
  return (
    <>
      <Carousel>
        <CarouselContent>
          {bannerDetails.map((item, index) => (
            <CarouselItem key={index}>
              <img
                src={item.url}
                alt=""
                className="w-full h-fit object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </>
  );
};

export default Hero;
