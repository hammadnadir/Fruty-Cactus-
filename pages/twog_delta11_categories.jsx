import React from "react";

import Fade from "react-reveal/Fade";

import Footer from "../src/Footer";
import Image from "next/image";

import Twog_delta11_cards from "../src/Twog_delta11_cards";
import Two_g_delta11_navbar from "../src/Two_g_delta11_navbar";
import { getPageData } from "../redux/pagedata";
import { wrapper } from "../store";
import {sentProductRequest } from "../redux/Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";

export default function twog_delta11_catergories() {
  const { productData } = useSelector((state) => state.Products);
  const url = productData && JSON.stringify(productData[0]?.background_image);
  // console.log(productData)
const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(sentProductRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Two_g_delta11_navbar />
      <div className="">
        <div className=' w-[100%] bg-cover' style={{ backgroundImage: `url(${url})` }}>
          <Fade top>
            <div className="flex justify-center pt-[100px]  md:pt-[180px]">
             { productData && (<img
                className="xl:max-w-[250px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]"
                src={productData[0]?.title_image}   
                alt=""
              />)}
            </div>
          </Fade>
          <div className="max-w-[1280px] mx-auto">
            <Twog_delta11_cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(sentProductRequest());
  await store.dispatch(sentDataRequest());
});
