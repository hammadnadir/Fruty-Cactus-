import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";
import TwoG_hhc from "./TwoG_hhc";

export default function Twog_hhc_background() {

  const dispatch = useDispatch();
  const { homeData } = useSelector((state)=>state.home)

  useEffect(()=>{
  dispatch(sentDataRequest())
  },[]) 
  const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[1]?.background_image)

  return (
    <div>
      <div className='backcard3 mt-[-90px] bg-cover bg-no-repeat  relative' style={{backgroundImage: `url(${url})`}}>
        <TwoG_hhc />
      </div>
    </div>
  );
}
