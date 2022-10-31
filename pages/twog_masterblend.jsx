import React from "react";
import Twog_masterblend_cards from "../src/Twog_masterblend_cards";
import Footer from "../src/Footer";
import Two_g_masterblend_navbar from "../src/Two_g_masterblend_navbar";
export default function twog_masterblend() {
  return (
    <div>
      <Two_g_masterblend_navbar />
      <div className="">
        <div className='bg-[url("/images/2GMasterBlendBackground2.png")] w-[100%] bg-cover  '>
          <div className="flex justify-center pt-[100px]  md:pt-[220px]">
            <img
              className="xl:max-w-[300px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src="/images/2 GRAM Masterblend-07.png"
              alt="about-img" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto">
            <Twog_masterblend_cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
