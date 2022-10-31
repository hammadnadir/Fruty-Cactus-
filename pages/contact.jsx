import React, { useState as UseState } from "react";
import Contact_text from "../src/Contact_text";
import Footer from "../src/Footer";
import Tripletap_masterblend_navbar from "../src/Tripletap_masterblend_navbar";
import { Contactus } from "../data";
import { useDispatch } from "react-redux";
import { sentContactRequest } from "../redux/contact";
import RequestMessage from "../src/RequestMessage";
import { toast } from "react-toastify";
export default function contact() {
  const [inputData, setInputData] = UseState({});
  const [error, setError] = UseState({});

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(inputData);
  };

  const validate = (value) => {
    let err = {};
    if (!value.firstname) {
      err.firstname = "Firstname is required";
    }
    if (!value.email) {
      err.email = "Email is required";
    }
    if (!value.message) {
      err.message = "Message is required";
    }
    if (Object.keys(err).length > 0) {
      setError(err);
      console.log(err);
    } else {
      console.log(inputData);
      // setError({firstname:"",email:"",message:""});
      // setInputData({firstname:"",email:"",message:""})
      dispatch(sentContactRequest(value)).then((res) => {
        // if (res?.payload?.success) {
          setInputData({firstname:"",email:"",message:""});
          setError({firstname:"",email:"",message:""});
        // }
      });
    }
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-[#d8aa6e]  md:pb-[70px]  about">
        <Tripletap_masterblend_navbar />
        <div className="pt-[130px] md:pt-[180px] text-center text-5xl about ">
          {Contactus[0].heading}
        </div>

        <div className="bg-[#76a641] my-14 mx-auto max-w-5xl h-[600px] flex  ">
          {/* image */}

          <div className="hidden md:flex md:items-center md:justify-center  md:p-10">
            <img className="" src={Contactus[0].img} alt="contact-us" />
          </div>

          {/* right secction */}
          <div className="w-[535px] mx-auto rounded-none bg-white md:w-[573px]  md:rounded-tl-[51px] md:rounded-bl-[51px]">
            <div className="  items-center gap-8 mt-12 hidden md:block">
              <img className="ml-10 w-[150px]" src={Contactus[0].logo} alt="contact-us"/>
            </div>

            <div className="text-3xl mt-[64px] pl-[106px] pt-[100px] md:pt-[0px]">
              {Contactus[0].tittle}
            </div>
            <form onSubmit={handleSubmit}>
              <Contact_text
                label={"Enter Full Name"}
                name={"firstname"}
                handleChange={handleChange}
                value={inputData.firstname}
                type="text"
              />
              <p className="ml-[23px]  sm:ml-[106px] md:ml-[106px]">
                {error.firstname}
              </p>
              <Contact_text
                label={"Enter Email Address"}
                name={"email"}
                handleChange={handleChange}
                value={inputData.email}
                type="email"
              />
              <p className="ml-[23px]  sm:ml-[106px] md:ml-[106px]">
                {error.email}
              </p>

              <div className="   rounded-md ml-[23px] mr-[23px] sm:ml-[106px] md:ml-[103px] mt-[16px] w-[328px] h-[41px] px-3">
                <textarea
                  className="border pl-1"
                  name="message"
                  id=""
                  cols="48"
                  rows="3"
                  type="text"
                  placeholder="Enter Your Messgae"
                  onChange={handleChange}
                  value={inputData.message}
                ></textarea>
                <p className="ml-[23px]  sm:ml-[106px] md:ml-[106px]">
                  {error.message}
                </p>
              </div>

              <div>
                <button
                  className="ml-[23px] mr-[23px] sm:ml-[106px] md:ml-[106px] mt-[70px] outline outline-slate-200 outline-1 hover:bg-[#699BF7]  w-[328px] h-[41px] rounded-md text-sm"
                  type="submit"
                >
                  {Contactus[0].btn}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
