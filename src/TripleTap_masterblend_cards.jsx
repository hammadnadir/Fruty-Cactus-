import React from "react";
import Slide from "react-reveal/Slide";
import Disposable_card from "./Disposable_card";
import { card7 } from "../data";
import { useDispatch, useSelector } from "react-redux";
export default function TripleTap_masterblend_cards() {
  const { productData } = useSelector((state) => state.Products);

  return (
    <div className="pb-[60px] ">
      <div className="grid grid-col md:grid-cols-2  md:px-[20px]  lg:grid-cols-5 md:gap-9  items-center justify-items-center pt-[120px]  md:pt-[20px]">
        <Slide top>
          {productData &&
            productData[5]?.product_images.map((items, index) => {
              return (
                <div className="mt-[2px] about" key={index}>
                  <div className="card max-w-[300px] hover:scale-110 ease-in-out duration-700  transition shadow-black  ">
                    <img src={items.image} alt="about-img" />
                    <p className="mt-[15px] font-bold text-[14px] md:text-[16px] text-black text-center ">
                      {items.title}
                    </p>
                  </div>
                  <a href="/" target="_blank">
                    <div className="flex justify-center py-[5px]">
                      <button className="px-6  py-[4px] bg-green-500 text-white text-[17px] rounded-md font-medium">
                        cos
                      </button>
                    </div>
                  </a>
                </div>
              );
            })}
        </Slide>
      </div>
    </div>
  );
}
