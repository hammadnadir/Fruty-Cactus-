import React from "react";
import { useSelector } from "react-redux";
import TripleTap_d11_item from "./Tripletap_d11_item";

export default function Tripletap_d11() {
  
  const { homeData } = useSelector((state)=>state.home)

  const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[3]?.background_image)

  return (
    <div>
      <div className='backcard5 bg-cover relative  mt-[-85px] bg-no-repeat'  style={{backgroundImage: `url(${url})`}}>
        <TripleTap_d11_item />
      </div>
    </div>
  );
}
