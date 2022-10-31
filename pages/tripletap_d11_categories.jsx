import React from "react";

import Footer from "../src/Footer";
import Tripletap_D11_cards from "../src/Tripletap_D11_cards";
import Tripletap_d11_navbar from "../src/Tripletap_d11_navbar";
export default function tripletap_d11_categories() {
  return (
    <div>
      <Tripletap_d11_navbar />
      <div className="">
        <div className='bg-[url("/images/2GMasterBlendBackground2.png")] w-[100%] bg-cover  '>
          <div className="flex justify-center pt-[100px]  md:pt-[220px]">
            <img
              className="xl:max-w-[300px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src="/images/D11-07.png"
              alt="about-img" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto">
            <Tripletap_D11_cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
