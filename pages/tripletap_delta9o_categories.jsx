// import React from 'react'
// import Fade from "react-reveal/Fade";
// import Footer from "../src/Footer";
// import { getPageData } from "../redux/pagedata";
// import { wrapper } from "../store";
// import {sentProductRequest } from "../redux/Products";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { sentDataRequest } from "../redux/home";
// import Tripletap_delta9o_navbar from '../src/tripletap_delta9o_navbar';
// import { FaHiking } from 'react-icons/fa';
// import Tripletap_delta9o_cards from '../src/Tripletap_delta9o_cards';

// export default function tripletap_delta9o_categories() {
//     const { productData } = useSelector((state) => state.Products);
//     const url = productData && JSON.stringify(productData[7]?.background_image);
//   return (
//     <div>
//     {/* <Two_g_delta11_navbar /> */}
//     <Tripletap_delta9o_navbar/>
//     <div className="">
//       <div className=' w-[100%] bg-cover' style={{ backgroundImage: `url(${url})` }}>
//         <Fade top>
//           <div className="flex justify-center pt-[100px]  md:pt-[180px]">
//            { productData && (<img
//               className="xl:max-w-[250px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]"
//               src={productData[7]?.title_image}   
//               alt=""
//             />)}
//           </div>
//         </Fade>
//         <div className="max-w-[1280px] mx-auto">
//          <Tripletap_delta9o_cards />
//         </div>
//       </div>
//     </div>
//     <Footer />
//   </div>
//   )
// }
// export const getStaticProps = wrapper.getStaticProps((store) => async () => {
//     await store.dispatch(sentProductRequest());
//     await store.dispatch(sentDataRequest());
//   });

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
import Tripletap_delta9o_cards from "../src/Tripletap_delta9o_cards";
import Tripletap_delta9o_navbar from '../src/tripletap_delta9o_navbar';

export default function tripletap_hhc_categories() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(sentProductRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const {productData} = useSelector ((state)=>state.Products)
const url = productData && JSON.stringify(productData[7]?.background_image);

  // console.log(productData[4]?.title_image)
  return (
    <div>
      <Tripletap_delta9o_navbar />
      <div className="">
        <div className=' w-[100%] bg-cover  ' style={{ backgroundImage: `url(${url})` }}>
          <div className="flex justify-center pt-[100px]  md:pt-[190px]">
            <img
              className="xl:max-w-[250px] lg:max-w-[210px] md:max-w-[150px] sm:max-w-[150px] max-w-[150px]  "
              src={productData[7]?.title_image}
              alt="about-img" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto">
            <Tripletap_delta9o_cards />
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