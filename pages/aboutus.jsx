import React from "react";
// import Tripletap_masterblend_navbar from '../Tripletap_masterblend_navbar';
import Footer from "../src/Footer";
import Tripletap_masterblend_navbar from "../src/Tripletap_masterblend_navbar";
import { Aboutus } from "../data";
import { getPageData } from "../redux/pagedata";
import { wrapper } from "../store";
import { sentDataRequest } from "../redux/home";
import { useEffect , useState } from "react";
export default function aboutus() {
  const[data ,setData]= useState([]) 
const getuser = async ()=>{
  const response = await fetch("http://dev.biztekapps.com:8051/api/about")
setData(await response.json())
console.log(data)

}
const [itemdata , setItemData]=useState([])
 const getdata = async ()=>{
const response1 = await fetch("http://dev.biztekapps.com:8051/api/about-details")
setItemData(await response1.json())
console.log(response1);
 } 
  useEffect(()=>{
    getuser();
    getdata();
  },[])
 
  return (
    <>
      <div className=" bg-gradient-to-r from-[#f69c20] to-green-400 about">
        <Tripletap_masterblend_navbar />
        
         
      
            <div>
              <p className="text-center pt-[130px] md:pt-[180px] text-5xl">
                {data[0]?.title}
              </p>
            </div>
            <div className=" pt-[10px] pb-[70px] text-justify max-w-[500px] mx-auto px-[30px] md:text-[20px] text-medium ">
              <p>{data[0]?.description}</p>
            </div>
     
          
       
          </div>
      <div className="flex flex-col-reverse md:flex-row max-w-[1400px] mx-auto justify-between pt-[30px] md:pt-[100px] md:gap-24 px-[30px] items-center  about">
        <div className="max-w-[600px] pt-[30px] md:pt-[0px]">
          <p className="text-center text-5xl text-gray-500 ">
            {itemdata[0]?.title}
          </p>
          <p className="pt-[10px] text-justify text-[20px] text-gray-400">
            {itemdata[0]?.description}
          </p>
        </div>
        <div className="max-w-[600px]">
          <img src={itemdata[0]?.image} alt="about-img" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto justify-between pt-[30px] md:pt-[100px] md:gap-24 px-[30px] items-center  about">
        <div className="max-w-[600px]">
          <img src={itemdata[1]?.image} alt="about-img" />
        </div>
        <div className="max-w-[600px]  pt-[30px] md:pt-[0px]">
          <p className=" text-center text-5xl text-gray-500">
            {itemdata[1]?.title}
          </p>
          <p className="pt-[10px] text-justify text-[20px] text-gray-400">
            {itemdata[1]?.description}
          </p>
        </div>
      </div>
      <div className="mt-[100px]">
        {/* <Footer /> */}
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(sentDataRequest());
});