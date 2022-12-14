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
import { sentDataRequest } from "../redux/home";

export default function twog_hhc_categories() {
  const {productData } = useSelector ((state)=>state.Products)
  const url = productData && JSON.stringify(productData[1]?.background_image);

  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(sentProductRequest());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <Two_G_HHC_navbar />
      <div className="">
        <div className=' w-[100%] bg-cover  ' style={{ backgroundImage: `url(${url})` }}>
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
      <Footer />
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(sentProductRequest());
  await store.dispatch(sentDataRequest());
});
