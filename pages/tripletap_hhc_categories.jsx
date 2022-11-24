import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentProductRequest } from "../redux/Products";
import { getPageData } from "../redux/pagedata";
import Footer from "../src/Footer";
import Tripletap_hhc_cards from "../src/Tripletap_hhc_cards";
import Tripletap_hhc_navbar from "../src/Tripletap_hhc_navbar";
import { wrapper } from "../store";
import { sentDataRequest } from "../redux/home";
export default function tripletap_hhc_categories() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(sentProductRequest())
  },[])
  const {productData} = useSelector ((state)=>state.Products)
const url = productData && JSON.stringify(productData[4]?.background_image);

  console.log(productData[4]?.title_image)
  return (
    <div>
      <Tripletap_hhc_navbar />
      <div className="">
        <div className=' w-[100%] bg-cover  ' style={{ backgroundImage: `url(${url})` }}>
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
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(sentProductRequest());
  await store.dispatch(sentDataRequest());
});