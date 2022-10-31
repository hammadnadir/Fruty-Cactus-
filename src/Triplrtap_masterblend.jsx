import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { MainData } from "../data";
export default function Triplrtap_masterblend() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center  justify-between max-w-[1258px] mx-auto md:pt-[100px] md:pb-[100px]">
      {/* PRODUCT IMAGE  */}
        <Zoom>
          <div className="md:mt-[150px] md:mb-[150px] max-w-[350px] md:max-w-[450px] lg:mt-[150px] mt-[70px] ">
            <img src={MainData[6].pdimg} alt="about-img"  />
          </div>
        </Zoom>
        {/*PRODUCT TIITLE IAMGE  */}
        <Fade top>
          <div className="md:mt-[150px] mt-[30px] pb-[120px] md:mb-[150px] mx-[10px]">
            <div className="flex justify-center ">
              <img
                className="lg:max-w-[300px] md:max-w-[250px] max-w-[200px]  "
                src={MainData[6].titleimg}
                alt=""
              />
            </div>
            {/* PRODUCT DESCRIPTION */}
            <p className="text-white md:text-[20px] text-center  font-medium mt-[20px] max-w-[600px]">
              {MainData[6].description}
            </p>
            <div className="flex justify-center  mb-[10px]">
              <Link href="/tripletap_masterblend_categories">
                <button className=" text-white px-[30px] py-[10px] text-[12px] md:text-[17px] md:px-[40px] md:py-[15px] outline outline-gray-50 rounded-[28px] outline-1 mt-[30px] font-medium btn hover:bg-green-400  transition duration-700   hover:scale-110 ">
              {MainData[5].btn}
                </button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
