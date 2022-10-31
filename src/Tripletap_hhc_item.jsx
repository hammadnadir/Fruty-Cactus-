import React from "react";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";
import { MainData } from "../data";
export default function Tripletap_hhc_item() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center  justify-between max-w-[1258px] mx-auto md:pt-[125px] md:pb-[125px] ">
        {/* PRODUCT IMAGE TITLE  */}
        <Zoom>
          <div className="md:mt-[150px] mt-[60px]   md:mb-[240px] mx-[20px] mb-[180px]">
            <div className="flex justify-center ">
              <img
                className="lg:max-w-[300px] md:max-w-[200px] max-w-[180px]  "
                src={MainData[5].titleimg}
                alt="about-img" 
              />
            </div>
            {/* PRODUCT TITTLE  */}
            <p className="text-white md:text-[20px] text-center font-medium mt-[20px] max-w-[600px]">
              {MainData[5].description}
            </p>
            {/* PRODUCT BUTTON  */}
            <div className="flex justify-center  ">
              <Link href="/tripletap_hhc_categories">
                <button className=" text-white px-[30px] py-[10px] text-[12px] md:text-[17px] md:px-[40px] md:py-[15px] outline outline-gray-50 rounded-[28px] outline-1 mt-[30px] font-medium btn hover:bg-blue-900  transition duration-700    hover:scale-110 ">
                  {MainData[5].btn}
                </button>
              </Link>
            </div>
          </div>
        </Zoom>
        {/* PRODUCT IMAGE */}
        <Slide top>
          <div className="md:mt-[150px] lg:mt-[150px] max-w-[350px] md:max-w-[450px] mt-[90px] md:mb-[90px] ">
            <img src={MainData[5].pdimg} alt="about-img"  />
          </div>
        </Slide>
      </div>
    </>
  );
}
