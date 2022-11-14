import React from "react";
import Footer from "../src/Footer";
import Fade from "react-reveal/Fade";
import Twog_hhc_cards from "../src/Twog_hhc_cards";
import Two_G_HHC_navbar from "../src/Two_G_HHC_navbar";
import { getPageData } from "../redux/pagedata";
import { wrapper } from "../store";
import { sentProductRequest } from "../redux/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function twog_hhc_categories() {
  const {productData } = useSelector ((state)=>state.Products)
  console.log(productData)
  console.log(productData)
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(sentProductRequest())
  },[])
  return (
    <div>
      <Two_G_HHC_navbar />
      <div className="">
        <div className='bg-[url("/images/2GHHCBackground2.png")] w-[100%] bg-cover  '>
          <Fade top>
            <div className="flex justify-center pt-[100px]  md:pt-[180px]">
              {productData &&
              (<img
              className="xl:max-w-[250px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src={productData[1]?.title_image}
              alt="about-img" 
              />)
            }
            </div>
          </Fade>
          <div className="max-w-[1280px] mx-auto">
            <Twog_hhc_cards />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(sentProductRequest());
});
