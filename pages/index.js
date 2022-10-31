import Footer from "../src/Footer";
import Hero from "../src/Hero";
import Tripletap_masterblend_background from "../src/Tripletap_masterblend_background";
import Twog_hhc_background from "../src/Twog_hhc_background";
import Twog_masterblend_background from "../src/Twog_masterblend_background";
import Twog_d11_background from "../src/Twog_d11_background";
import Tripletap_hhc_background from "../src/Tripletap_hhc_background";
import Tripletap_d11 from "../src/Tripletap_d11";
import { Provider } from "react-redux";
// import { Store } from "@reduxjs/toolkit";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
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
        </div>
    </>
  );
}
