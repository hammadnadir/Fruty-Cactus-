import React from "react";
// import Tripletap_masterblend_navbar from '../Tripletap_masterblend_navbar';
import Footer from "../src/Footer";
import Tripletap_masterblend_navbar from "../src/Tripletap_masterblend_navbar";
import { Aboutus } from "../data";
export default function aboutus() {
  return (
    <>
      <div className=" bg-gradient-to-r from-[#f69c20] to-green-400 about">
        <Tripletap_masterblend_navbar />

        <div>
          <p className="text-center pt-[130px] md:pt-[180px] text-5xl">
            {Aboutus[0].heading}
          </p>
        </div>
        <div className=" pt-[10px] pb-[70px] text-justify max-w-[500px] mx-auto px-[30px] md:text-[20px] text-medium ">
          <p>{Aboutus[0].description}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row max-w-[1400px] mx-auto justify-between pt-[30px] md:pt-[100px] md:gap-24 px-[30px] items-center  about">
        <div className="max-w-[600px] pt-[30px] md:pt-[0px]">
          <p className="text-center text-5xl text-gray-500 ">
            {Aboutus[0].name1}
          </p>
          <p className="pt-[10px] text-justify text-[20px] text-gray-400">
            {Aboutus[0].detail1}
          </p>
        </div>
        <div className="max-w-[600px]">
          <img src={Aboutus[0].img1} alt="about-img" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto justify-between pt-[30px] md:pt-[100px] md:gap-24 px-[30px] items-center  about">
        <div className="max-w-[600px]">
          <img src={Aboutus[0].img2} alt="about-img" />
        </div>
        <div className="max-w-[600px]  pt-[30px] md:pt-[0px]">
          <p className=" text-center text-5xl text-gray-500">
            {Aboutus[0].name2}
          </p>
          <p className="pt-[10px] text-justify text-[20px] text-gray-400">
            {Aboutus[0].detail2}
          </p>
        </div>
      </div>
      <div className="mt-[100px]">
        <Footer />
      </div>
    </>
  );
}
