import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";
import Twog_d11_item from "./Twog_d11_item";
import Testitem from "./Twog_d11_item";

export default function Twog_d11_background() {

  const dispatch = useDispatch();
  const { homeData } = useSelector((state)=>state.home)

  useEffect(()=>{
  dispatch(sentDataRequest())
  },[])
 const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[0]?.background_image)
 
  return (
    <div>
      {/* <div className='bg-[url("/Twog_d11_Section_images/2gd11background1.png")] backcard2 relative  md:mt-[-45px]  bg-cover bg-no-repeat  '> */}
      <div className='backcard2 relative  md:mt-[-45px]  bg-cover bg-no-repeat' style={{backgroundImage: `url(${url})`}}>
        <Twog_d11_item />
      </div>
    </div>
  );
}
