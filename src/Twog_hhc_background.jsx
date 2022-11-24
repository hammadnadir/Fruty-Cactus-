import React from "react";
import { useSelector } from "react-redux";
import TwoG_hhc from "./TwoG_hhc";

export default function Twog_hhc_background() {

  const { homeData } = useSelector((state)=>state.home)

  const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[1]?.background_image)

  return (
    <div>
      <div className='backcard3 mt-[-90px] bg-cover bg-no-repeat  relative' style={{backgroundImage: `url(${url})`}}>
        <TwoG_hhc />
      </div>
    </div>
  );
}
