import React from "react";
import Logo from "./Logo";
import myheader from "../imagePath.json";
import Fade from "react-reveal/Fade";
import { MainData } from "../data";

console.log(myheader.header1);
export default function Hero() {
  return (
    <div className='bg-[url("/herosection_image/HeaderBannerBackground1.png")] backcard1 bg-cover    bg-no-repeat '>
      <div className="  flex justify-center  ">
        <div className=" flex justify-center z-10">
          <Logo />
        </div>
      </div>
      <div className="flex flex-col sm:flex-col-reverse md:flex-row  justify-center md:gap-[300px] mt-[170px]  sm:mt-[170px] md:mt-[310px]   items-center pb-8">
        <Fade top>
          <div className="">
            <img
              className="sm:w-[350px] w-[300px] md:w-[500px] lg:w-[670px]"
              src={MainData[0].pdimg1}
              alt="about-img" 
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="">
            <img
              className="sm:w-[350px] w-[300px] md:w-[500px] lg:w-[670px]"
              src={MainData[0].pdimg2}
              alt="about-img" 
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
