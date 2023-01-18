import React from 'react'
import { useSelector } from "react-redux";
import Tripletap_delta9o from './Tripletap_delta9o';


export default function Tripletap_delta9o_background() {
  const { homeData } = useSelector((state) => state.home);

    const url=homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[7]?.background_image)
  return (
    <div>
      <div className='backcard7  mt-[-90px] bg-cover bg-no-repeat  relative'  style={{backgroundImage: `url(${url})`}}>
      <Tripletap_delta9o/>
      </div>
    </div>
  )
}
