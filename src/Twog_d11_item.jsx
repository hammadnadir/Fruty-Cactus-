import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Link from "next/link";
import { MainData } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPageData } from "../redux/pagedata";
import { useState } from "react";
import { sentDataRequest } from "../redux/home";

export default function Twog_d11_item() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { homeData } = useSelector((state)=>state.home)
  console.log("kk",homeData)

  useEffect(()=>{
  // dispatch(sentDataRequest())
  },[])

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row  items-center justify-between max-w-[1258px] mx-auto mt-[-40px]  md:pb-[290px] ">
        <Slide top>
          {/* PRODUCT TITLE IMAGE  */}
          <div className="md:mt-[280px]  mx-[20px] md:mb-[0px] mb-[150px] ">
            <div className="flex justify-center ">
              <img
                className="lg:max-w-[300px] md:max-w-[200px] sm:max-w-[200px] max-w-[200px]  "
                src={homeData && homeData.home.length > 0 && homeData.home[0]?.title_image}
                alt="title img"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="text-white md:text-[20px] text-[14px]  text-center font-medium  pt-[20px] max-w-[600px] ">
              {homeData && homeData.home.length > 0 && homeData.home[0]?.description}
            </p>

            {/* PRODUCT BUTTON   */}
            <div className="flex justify-center  mt-[30px] ">
              <div className="md:mb-[80px]">
                <Link href={homeData && homeData.home.length > 0 && homeData.home[0]?.button_url  || ""}>
                  <button className=" text-white px-[30px] py-[8px] md:text-[18px] text-[12px] md:px-[40px] md:py-[10px] outline outline-gray-50 rounded-[28px] btn outline-1 hover:bg-red-700   transition duration-700  hover:scale-110">
                    {homeData && homeData.home.length > 0 && homeData.home[0]?.button_title}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Slide>

        {/* PRODUCT IMAGE  */}
        <Zoom>
          <img
            className="md:max-w-[400px] lg:w-[550px] max-w-[250px] md:mt-[200px] mt-[90px] mb-[50px] md:mb-[0px]"
            src={homeData && homeData.home.length > 0 && homeData.home[0]?.product_image}
            alt="product image"
          />
        </Zoom>
      </div>
    </>
  );
}
