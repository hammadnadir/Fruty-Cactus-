import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";
import Triplrtap_masterblend from "./Triplrtap_masterblend";

export default function Tripletap_masterblend_background() {

  const dispatch = useDispatch();
  const { homeData } = useSelector((state)=>state.home)

  useEffect(()=>{
  dispatch(sentDataRequest())
  },[]) 
  const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[5]?.background_image)
  return (
    <div>
      <div className='backcard7  mt-[-90px] bg-cover bg-no-repeat  relative'  style={{backgroundImage: `url(${url})`}}>
        <Triplrtap_masterblend />
      </div>
    </div>
  );
}
