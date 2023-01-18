import React from 'react'
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Twog_delta9o() {
    const [data ,setData]= useState([]);

  const dispatch = useDispatch();
  const { homeData } = useSelector((state)=>state.home)
  return (
    <div className="flex flex-col md:flex-row  items-center justify-between max-w-[1258px] mx-auto mt-[-40px]  md:pb-[290px] ">
    {/* PRODUCT IMAGE */}
    <Zoom>
      <img
        className="md:max-w-[400px] lg:w-[550px] max-w-[250px] md:mt-[250px] mt-[100px] mb-[50px] md:mb-[0px]"
        src={homeData && homeData.home.length > 0 && homeData.home[6]?.product_image}
        alt=""
      />
    </Zoom>
    <Slide top>
      {/* PRODUCT TITTLE IMAGE  */}
      <div className="md:mt-[280px]  mx-[20px] md:mb-[0px] mb-[150px]">
        <div className="flex justify-center ">
          <img
            className="lg:max-w-[300px] md:max-w-[200px] sm:max-w-[200px] max-w-[200px]  "
            src={homeData && homeData.home.length > 0 && homeData.home[6]?.title_image}
            alt="about-img" 
          />
        </div>
        {/* PRODUCT DESCRIPTION */}
        <p className="text-white md:text-[20px] text-[14px]  text-center font-medium  pt-[20px] max-w-[600px] ">
          {homeData && homeData.home.length > 0 && homeData.home[6]?.description}
        </p>

        {/* PRODUCT BUTTON  */}
        <div className="flex justify-center  mt-[30px] ">
          <div className="md:mb-[80px]">
            <Link href={homeData && homeData.home.length > 0 && homeData.home[6]?.button_url  || ""}>
              <button className=" text-white px-[30px] py-[8px] md:text-[18px] text-[12px] md:px-[40px] md:py-[10px] outline outline-gray-50 rounded-[28px] btn outline-1 hover:bg-yellow-500  transition duration-700    hover:scale-110">
                {homeData && homeData.home.length > 0 && homeData.home[6]?.button_title}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  </div>
  )
}

export default Twog_delta9o