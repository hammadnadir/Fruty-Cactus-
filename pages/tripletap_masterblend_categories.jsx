import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentProductRequest } from "../redux/Products";
import { getPageData } from "../redux/pagedata";
import Footer from "../src/Footer";
import TripleTap_masterblend_cards from "../src/TripleTap_masterblend_cards";
import Tripletap_masterblend_navbar from "../src/Tripletap_masterblend_navbar";
import { wrapper } from "../store";

export default function tripletap_masterblend_categories() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(sentProductRequest())
  },[])
  const {productData} = useSelector ((state)=>state.Products)
  return (
    <div>
      <Tripletap_masterblend_navbar />
      <div className="">
        <div className='bg-[url("/images/TripleTapMasterblendBackground3.png")] w-[100%] bg-cover  '>
          <div className="flex justify-center pt-[100px]  md:pt-[230px]">
            <img
              className="xl:max-w-[300px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src={productData[5]?.title_image}
              alt="about-img" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto">
            <TripleTap_masterblend_cards />
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
