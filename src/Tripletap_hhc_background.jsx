import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tripletap_hhc_item from "./Tripletap_hhc_item";
export default function Tripletap_hhc_background() {

  const dispatch = useDispatch();
  const { homeData } = useSelector((state)=>state.home)
 
  const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[4]?.background_image)

  return (
    <div>
      <div className='backcard6  mt-[-90px] bg-cover bg-no-repeat  relative' style={{backgroundImage: `url(${url})`}}>
        <Tripletap_hhc_item />
      </div>
    </div>
  );
}
