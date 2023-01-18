
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";
import Twog_delta9o from './Twog_delta9o';
function Twog_delta9o_background() {
  const dispatch = useDispatch();
  const { homeData } = useSelector((state) => state.home);
  const url = homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[6]?.background_image);
  return (
    <div>
       <div
           className="backcard4 mt-[-90px] bg-cover bg-no-repeat  relative"
           style={{ backgroundImage: `url(${url})` }}
         >
            <Twog_delta9o/>
        </div>
        </div>
  )
}

export default Twog_delta9o_background