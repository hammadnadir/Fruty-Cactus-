import React from "react";
import Disposable_card from "./Disposable_card";

import Slide from "react-reveal/Slide";
import { card2 } from "../data";

export default function Twog_delta11_cards() {
  return (
    <>
      <div className="pb-[60px] ">
        <div className="grid grid-col md:grid-cols-2  md:px-[20px]  lg:grid-cols-5 md:gap-9  items-center justify-items-center pt-[50px]">
          <Slide top>
            {card2.map((items, index) => {
              return (
                <div
                  className="mt-[2px]   about"
                  key={index}
                >
                  <div className="card max-w-[300px] hover:scale-110 ease-in-out duration-700  transition shadow-black ">
                    <img src={items.image} alt="about-img" />
                    <p className="mt-[15px] font-bold text-[14px] md:text-[16px] text-black text-center ">
                      {items.name}
                    </p>
                    {/* <p className='mt-[10px] text-[11px] text-center  ' >{props.title}</p> */}
                  </div>
                </div>
              );
            })}
          </Slide>
        </div>
      </div>
    </>
  );
}
