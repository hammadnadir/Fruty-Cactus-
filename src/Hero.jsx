import React from "react";
import Logo from "./Logo";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";

export default function Hero() {

  const { homeData } = useSelector((state) => state.home);

  const url=homeData && homeData?.banner?.length > 0 && JSON.stringify(homeData.banner[0]?.background_image)

  return (
    <div className='backcard1 bg-cover    bg-no-repeat '  style={{backgroundImage: `url(${url})`}}>
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
              src={homeData && homeData?.banner?.length > 0 && homeData?.banner[0]?.product_images[0]}
              alt="about-img"
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="">
            <img
              className="sm:w-[350px] w-[300px] md:w-[500px] lg:w-[670px]"
              src={homeData && homeData?.banner?.length > 0 && homeData?.banner[0]?.product_images[1]}
              alt="about-img"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
