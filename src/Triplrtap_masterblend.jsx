import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useSelector } from "react-redux";
export default function Triplrtap_masterblend() {

  const { homeData } = useSelector((state)=>state.home)


  return (
    <>
      <div className="flex flex-col md:flex-row items-center  justify-between max-w-[1258px] mx-auto md:pt-[100px] md:pb-[100px]">
      {/* PRODUCT IMAGE  */}
        <Zoom>
          <div className="md:mt-[150px] md:mb-[150px] max-w-[350px] md:max-w-[450px] lg:mt-[150px] mt-[70px] ">
            <img src={homeData && homeData.home.length > 0 && homeData.home[5]?.product_image} alt="about-img"  />
          </div>
        </Zoom>
        {/*PRODUCT TIITLE IAMGE  */}
        <Fade top>
          <div className="md:mt-[150px] mt-[30px] pb-[120px] md:mb-[150px] mx-[10px]">
            <div className="flex justify-center ">
              <img
                className="lg:max-w-[300px] md:max-w-[250px] max-w-[200px]  "
                src={homeData && homeData.home.length > 0 && homeData.home[5]?.title_image}
                alt=""
              />
            </div>
            {/* PRODUCT DESCRIPTION */}
            <p className="text-white md:text-[20px] text-center  font-medium mt-[20px] max-w-[500px]">
              {homeData && homeData.home.length > 0 && homeData.home[5]?.description}
            </p>
            <div className="flex justify-center  mb-[10px]">
              <Link href={homeData && homeData.home.length > 0 && homeData.home[5]?.button_url  || ""}>
                <button className=" text-white px-[30px] py-[10px] text-[12px] md:text-[17px] md:px-[40px] md:py-[15px] outline outline-gray-50 rounded-[28px] outline-1 mt-[30px] font-medium btn hover:bg-green-400  transition duration-700   hover:scale-110 ">
              {homeData && homeData.home.length > 0 && homeData.home[5]?.button_title}
                </button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
