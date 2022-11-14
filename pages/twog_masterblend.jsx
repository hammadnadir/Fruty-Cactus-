import React from "react";
import Twog_masterblend_cards from "../src/Twog_masterblend_cards";
import Footer from "../src/Footer";
import Two_g_masterblend_navbar from "../src/Two_g_masterblend_navbar";
import { getPageData } from "../redux/pagedata";
import { wrapper } from "../store";
import { sentProductRequest } from "../redux/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function twog_masterblend() {
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(sentProductRequest())

  
},[])
const {productData} = useSelector ((state)=>state.Products);
  return (
    <div>
      <Two_g_masterblend_navbar />
      <div className="">
        <div className='bg-[url("/images/2GMasterBlendBackground2.png")] w-[100%] bg-cover  '>
          <div className="flex justify-center pt-[100px]  md:pt-[220px]">
            <img
              className="xl:max-w-[300px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src={productData[2]?.title_image}
              alt="about-img" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto">
            <Twog_masterblend_cards />
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