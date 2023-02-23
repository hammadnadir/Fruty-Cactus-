import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Slide from "react-reveal/Slide";
import { card5 } from "../data";

export default function Tripletap_D11_cards() {
  const { productData } = useSelector((state) => state.Products);

  return (
    <>
      <div className="pb-[60px] ">
        <div className="grid grid-col md:grid-cols-2  md:px-[20px]  lg:grid-cols-5 md:gap-9  items-center justify-items-center md:pt-[20px] pt-[120px]">
          <Slide top>
            {productData &&
              productData[3]?.product_images.map((items, index) => {
                return (
                  <div className="mt-[2px]  about" key={index}>
                    <div className="card max-w-[300px]">
                      <img src={items.image} alt="item-img" className="hover:scale-110 ease-in-out duration-700  transition shadow-black" />
                      <p className="mt-[15px] font-bold text-[14px] md:text-[16px] text-black text-center ">
                        {items.title}
                      </p>
                    </div>

                    <div className="flex justify-center py-[5px] gap-[10px]">
                      <a href={items.links === null ? `https://vapeandgummy.com//product-category/delta-11-live-resin-triple-tap/` : items.links}> 
                        <button className="px-6  py-[4px] bg-orange-600 text-white text-[17px] rounded-md font-medium">
                          Buy Now
                        </button>
                      </a>
                      <a href={items.cos} target="_blank">
                        <button className="px-6  py-[4px] bg-green-600 text-white text-[17px] rounded-md font-medium">
                          cos
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
          </Slide>
        </div>
      </div >
    </>
  );
}
