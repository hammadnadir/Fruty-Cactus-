import Footer from "../src/Footer";
import Hero from "../src/Hero";
import Tripletap_masterblend_background from "../src/Tripletap_masterblend_background";
import Twog_hhc_background from "../src/Twog_hhc_background";
import Twog_masterblend_background from "../src/Twog_masterblend_background";
import Twog_d11_background from "../src/Twog_d11_background";
import Tripletap_hhc_background from "../src/Tripletap_hhc_background";
import Tripletap_d11 from "../src/Tripletap_d11";
import { Provider, useDispatch } from "react-redux";
import { wrapper } from "../store";
import { getPageData } from "../redux/pagedata";
import { sentDataRequest } from "../redux/home";
import { useEffect } from "react";
import axios from "axios";
// import { Store } from "@reduxjs/toolkit";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(sentDataRequest());
  }, []);


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
        <Tripletap_d11 />
        <Tripletap_hhc_background />
        <Tripletap_masterblend_background />
        <Footer />
        {/* <h2>Hammad</h2> */}
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(sentDataRequest());
  }
);
