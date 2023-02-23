import Footer from "../src/Footer";
import Hero from "../src/Hero";
import Tripletap_masterblend_background from "../src/Tripletap_masterblend_background";
import Twog_hhc_background from "../src/Twog_hhc_background";
import Twog_masterblend_background from "../src/Twog_masterblend_background";
import Twog_d11_background from "../src/Twog_d11_background";
import Tripletap_hhc_background from "../src/Tripletap_hhc_background";
import Tripletap_d11 from "../src/Tripletap_d11";

import { wrapper } from "../store";
import { sentDataRequest } from "../redux/home";

import axios from "axios";
import Twog_delta9o_background from "../src/Twog_delta9o_background";
import Tripletap_delta9o_background from "../src/Tripletap_delta9o_background";
// import { Store } from "@reduxjs/toolkit";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  
  // const green = homeData?.header[0]?.smoke_variations[0]
  // const red = homeData?.header[0]?.smoke_variations[1]
  // const darkgreen = homeData?.header[0]?.smoke_variations[2]
  // const blue = homeData?.header[0]?.smoke_variations[3]
  // const orange = homeData?.header[0]?.smoke_variations[4]
  // const purple = homeData?.header[0]?.smoke_variations[5]
  // const greenend = homeData?.header[0]?.smoke_variations[6]


  return (
    <>
      <div className="">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/about" element={<Tripletap_d11 />} />
          </Routes>
        </BrowserRouter> */}
        <Hero />
        <Twog_d11_background />
        <Twog_hhc_background />
        <Twog_masterblend_background />
        <Twog_delta9o_background/>
        <Tripletap_d11 />
        <Tripletap_hhc_background />
        <Tripletap_masterblend_background />
        <Tripletap_delta9o_background/>
        
        <Footer />
        {/* <h2>HI</h2>      */}
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(sentDataRequest());
  }
);
export default Home
// export { green , red, darkgreen , blue , orange, purple, greenend}