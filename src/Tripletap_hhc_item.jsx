import React  from "react";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";
import {  useSelector } from "react-redux";
export default function Tripletap_hhc_item() {

  const { homeData } = useSelector((state)=>state.home)

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center  justify-between max-w-[1258px] mx-auto md:pt-[125px] md:pb-[125px] ">
        {/* PRODUCT IMAGE TITLE  */}
        <Zoom>
          <div className="md:mt-[150px] mt-[60px]   md:mb-[240px] mx-[20px] mb-[180px]">
            <div className="flex justify-center ">
              <img
                className="lg:max-w-[300px] md:max-w-[200px] max-w-[180px]  "
                src={homeData && homeData.home.length > 0 && homeData.home[4]?.title_image}
                alt="about-img" 
              />
            </div>
            {/* PRODUCT TITTLE  */}
            <p className="text-white md:text-[20px] text-center font-medium mt-[20px] max-w-[600px]">
              {homeData && homeData.home.length > 0 && homeData.home[4]?.description}
            </p>
            {/* PRODUCT BUTTON  */}
            <div className="flex justify-center  ">
              <Link href={homeData && homeData.home.length > 0 && homeData.home[4]?.button_url  || ""}>
                <button className=" text-white px-[30px] py-[10px] text-[12px] md:text-[17px] md:px-[40px] md:py-[15px] outline outline-gray-50 rounded-[28px] outline-1 mt-[30px] font-medium btn hover:bg-blue-900  transition duration-700    hover:scale-110 ">
                  {homeData && homeData.home.length > 0 && homeData.home[4]?.button_title}
                </button>
              </Link>
            </div>
          </div>
        </Zoom>
        {/* PRODUCT IMAGE */}
        <Slide top>
          <div className="md:mt-[150px] lg:mt-[150px] max-w-[350px] md:max-w-[450px] mt-[90px] md:mb-[90px] ">
            <img src={homeData && homeData.home.length > 0 && homeData.home[4]?.product_image} alt="about-img"  />
          </div>
        </Slide>
      </div>
    </>
  );
}
