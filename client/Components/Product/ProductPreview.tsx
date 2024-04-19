import React from "react";

const ProductPreview = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-[#00000024]">
      <div className="flex md:w-[80%] lg:w-[60%] w-[90%] bg-white dark:bg-black">
        <div className="flex flex-col flex-[1]">
          <img className="w-full h-full" src="" alt="" />
        </div>
        <div className="flex flex-col flex-[1]"></div>
      </div>
    </div>
  );
};

export default ProductPreview;
