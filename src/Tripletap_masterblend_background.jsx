import React from "react";
import { useSelector } from "react-redux";
import Triplrtap_masterblend from "./Triplrtap_masterblend";

export default function Tripletap_masterblend_background() {

  const { homeData } = useSelector((state)=>state.home)

  const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[5]?.background_image)
  return (
    <div>
      <div className='backcard7  mt-[-90px] bg-cover bg-no-repeat  relative'  style={{backgroundImage: `url(${url})`}}>
        <Triplrtap_masterblend />
      </div>
    </div>
  );
}
