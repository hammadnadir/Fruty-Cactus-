import React ,{useEffect} from "react";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { MainData } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";
export default function TripleTap_d11_item() {

  const dispatch = useDispatch();
  const { homeData } = useSelector((state)=>state.home)

  useEffect(()=>{
    dispatch(sentDataRequest())
    },[])

  return (
    <>
      <div className="flex flex-col md:flex-row items-center  justify-between max-w-[1258px] mx-auto md:pt-[50px] md:pb-[50px]">
        {/* PRODUCT IMAGE  */}
        <Zoom>
          <div className="md:mt-[250px] md:mb-[250px] max-w-[300px]  md:max-w-[400px] lg:mt-[150px]  mt-[70px] ">
            <img src={homeData && homeData.home.length > 0 && homeData.home[3]?.product_image} alt="about-img"  />
          </div>
        </Zoom>
        {/* PRODUCT TIITLE IAMGE  */}
        <Fade top>
          <div className="md:mt-[150px] mt-[30px] pb-[120px] md:mb-[240px]  mx-[10px] ">
            <div className="flex justify-center ">
              <img
                className="lg:max-w-[300px] md:max-w-[250px] max-w-[200px]  "
                src={homeData && homeData.home.length > 0 && homeData.home[3]?.title_image}
                alt=""
              />
            </div>
            {/* PRODUCT DESCRIPTION */}
            <p className="text-white md:text-[17px] lg:text-[20px] text-center  font-medium mt-[20px] max-w-[600px]">
              {homeData && homeData.home.length > 0 && homeData.home[3]?.description}
            </p>
            {/* PRODUCT BUTTON  */}
            <div className="flex justify-center  mb-[10px]">
              <Link href={homeData && homeData.home.length > 0 && homeData.home[3]?.button_url || ""}>
                <button className=" text-white px-[30px] py-[10px] text-[12px] md:text-[17px] lg:px-[40px] lg:py-[15px] outline outline-gray-50 rounded-[28px] outline-1 mt-[30px] font-medium btn hover:bg-orange-300  transition duration-700    hover:scale-110 ">
                  {homeData && homeData.home.length > 0 && homeData.home[3]?.button_title}
                </button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
