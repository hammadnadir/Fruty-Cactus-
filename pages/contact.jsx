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
      dispatch(sentContactRequest(value)).then((res) => {
        // if (res?.payload?.success) {
        setInputData({ firstname: "", email: "", message: "" });
        setError({ firstname: "", email: "", message: "" });
        toast(<RequestMessage message="Message sent successfully!" />);
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
        <div className="py-[40px]">
          <div className="pt-[130px] md:pt-[180px] text-center text-5xl about ">
            {Contactus[0].heading}
          </div>

          <div className="bg-none lg:bg-[#76a641] my-14 mx-auto max-w-5xl h-[600px] flex items-center">
            {/* image */}

            <div className="hidden lg:flex md:items-center md:justify-center  md:p-10">
              <img className="" src={Contactus[0].img} alt="contact-us" />
            </div>

            {/* right secction */}
            <div className="mx-auto bg-white md:w-[573px] lg:rounded-tl-[51px] lg:rounded-bl-[51px] lg:rounded-tr-[0px] lg:rounded-br-[0px] rounded-3xl h-full items-center flex">
              <div className="sm:px-[120px] px-[30px] items-center text-center m-auto">
              <div className="">
                  <img
                    className="w-[150px] m-auto pb-[20px]"
                    src={Contactus[0].logo}
                    alt="contact-us"
                  />
                <div className="text-3xl  pb-[20px]">{Contactus[0].tittle}</div>
                <form onSubmit={handleSubmit}>
                  <Contact_text
                    label={"Enter Full Name"}
                    name={"firstname"}
                    handleChange={handleChange}
                    value={inputData.firstname}
                    type="text"
                  />
                  <p className="">{error.firstname}</p>
                  <Contact_text
                    label={"Enter Email Address"}
                    name={"email"}
                    handleChange={handleChange}
                    value={inputData.email}
                    type="email"
                  />
                  <p className="">{error.email}</p>

                  <div className="rounded-md m-auto mb-[20px]">
                    <textarea
                      className="border h-[100px] w-full  py-[10px] px-[15px] rounded-md bg-gray-100 focus:outline-none "
                      name="message"
                      id=""
                      cols="48"
                      rows="3"
                      type="text"
                      placeholder="Enter Your Messgae"
                      onChange={handleChange}
                      value={inputData.message}
                    ></textarea>
                    <p className="">{error.message}</p>
                  </div>

                  <div>
                    <button
                      className="outline outline-slate-200 outline-1 hover:bg-[#699BF7] hover:text-white h-[41px] rounded-md text-sm w-full"
                      type="submit"
                    >
                      {Contactus[0].btn}
                    </button>
                  </div>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
