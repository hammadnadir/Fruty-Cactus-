import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";
import TripleTap_d11_item from "./Tripletap_d11_item";

export default function Tripletap_d11() {
  
  const dispatch = useDispatch();
  const { homeData } = useSelector((state)=>state.home)

  useEffect(()=>{
  dispatch(sentDataRequest())
  },[]) 
  const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[3]?.background_image)

  return (
    <div>
      <div className='backcard5 bg-cover relative  mt-[-85px] bg-no-repeat'  style={{backgroundImage: `url(${url})`}}>
        <TripleTap_d11_item />
      </div>
    </div>
  );
}
