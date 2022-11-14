import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentProductRequest } from "../redux/Products";
import { getPageData } from "../redux/pagedata";
import Footer from "../src/Footer";
import Tripletap_hhc_cards from "../src/Tripletap_hhc_cards";
import Tripletap_hhc_navbar from "../src/Tripletap_hhc_navbar";
import { wrapper } from "../store";
export default function tripletap_hhc_categories() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(sentProductRequest())
  },[])
  const {productData} = useSelector ((state)=>state.Products)
  console.log(productData[4]?.title_image)
  return (
    <div>
      <Tripletap_hhc_navbar />
      <div className="">
        <div className='bg-[url("/images/TripleTapHHCBackground2.png")] w-[100%] bg-cover  '>
          <div className="flex justify-center pt-[100px]  md:pt-[190px]">
            <img
              className="xl:max-w-[250px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src={productData[4]?.title_image}
              alt="about-img" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto">
            <Tripletap_hhc_cards />
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