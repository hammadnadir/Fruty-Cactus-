import React, { useEffect } from "react";

import Logo from "./Logo";
import myheader from "../imagePath.json";
import Fade from "react-reveal/Fade";
import { MainData } from "../data";
import { useDispatch } from "react-redux";
import { useState } from "react";

// console.log(myheader.header1);
export default function Hero() {
  const [data, setData] = useState([]);
  const getuser = async () => {
    const response = await fetch(
      "http://dev.biztekapps.com:8051/api/banner"
    ).then((response) => response.json());
    setData(response);
    if (response){
      console.log(response[0]?.background_image)
      console.log(response[0]?.product_images[0])
      console.log(response[0]?.product_images[1])
    }
    console.log(response)
  };
  useEffect(()=>{
    
  },[])

  useEffect(() => {
    getuser();
  }, []);
  const dispatch = useDispatch();

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
              src={data[0]?.product_images[0]}
              alt="about-img" 
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="">
            <img
              className="sm:w-[350px] w-[300px] md:w-[500px] lg:w-[670px]"
              src={data[0]?.product_images[1]}
              alt="about-img" 
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
