import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";
import { getPageData } from "../redux/pagedata";
import { sentProductRequest } from "../redux/Products";

import Footer from "../src/Footer";
import Tripletap_D11_cards from "../src/Tripletap_D11_cards";
import Tripletap_d11_navbar from "../src/Tripletap_d11_navbar";
import { wrapper } from "../store";
export default function tripletap_d11_categories() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(sentProductRequest());
  },[])
const {productData} = useSelector ((state)=>state.Products)
const url = productData && JSON.stringify(productData[3]?.background_image);

  return (
    <div>
      <Tripletap_d11_navbar />
      <div className="">
        <div className=' w-[100%] bg-cover  ' style={{ backgroundImage: `url(${url})` }}>
          <div className="flex justify-center pt-[100px]  md:pt-[220px]">
            <img
              className="xl:max-w-[300px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src={productData[3]?.title_image}
              alt="about-img" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto">
            <Tripletap_D11_cards />
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
