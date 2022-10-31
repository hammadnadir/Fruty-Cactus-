import React from "react";

import Fade from "react-reveal/Fade";

import Footer from "../src/Footer";
import Image from "next/image";

import Twog_delta11_cards from "../src/Twog_delta11_cards";
import Two_g_delta11_navbar from "../src/Two_g_delta11_navbar";

export default function twog_delta11_catergories() {
  return (
    <div>
      <Two_g_delta11_navbar />
      <div className="">
        <div className='bg-[url("/images/2GD11Background2.png")] w-[100%] bg-cover  '>
          <Fade top>
            <div className="flex justify-center pt-[100px]  md:pt-[180px]">
              <img
                className="xl:max-w-[250px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]"
                src="/images/2GRAMD11-04.png"
                alt=""
              />
            </div>
          </Fade>
          <div className="max-w-[1280px] mx-auto">
            <Twog_delta11_cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
