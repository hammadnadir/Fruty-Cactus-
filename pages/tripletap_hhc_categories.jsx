import React from "react";
import Footer from "../src/Footer";
import Tripletap_hhc_cards from "../src/Tripletap_hhc_cards";
import Tripletap_hhc_navbar from "../src/Tripletap_hhc_navbar";
export default function tripletap_hhc_categories() {
  return (
    <div>
      <Tripletap_hhc_navbar />
      <div className="">
        <div className='bg-[url("/images/TripleTapHHCBackground2.png")] w-[100%] bg-cover  '>
          <div className="flex justify-center pt-[100px]  md:pt-[190px]">
            <img
              className="xl:max-w-[250px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src="/images/HHC-03.png"
              alt="about-img" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto">
            <Tripletap_hhc_cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}