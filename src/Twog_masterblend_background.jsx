import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentDataRequest } from "../redux/home";
import Twog_masterblend from "./Twog_masterblend";

export default function Twog_masterblend_background() {
  const dispatch = useDispatch();
  const { homeData } = useSelector((state) => state.home);

  useEffect(() => {
    // dispatch(sentDataRequest());
  }, []);
  const url = homeData && homeData.home.length > 0 && JSON.stringify(homeData.home[2]?.background_image);

  return (
    <div>
      <div
        className="backcard4 mt-[-90px] bg-cover bg-no-repeat  relative"
        style={{ backgroundImage: `url(${url})` }}
      >
        <Twog_masterblend />
      </div>
    </div>
  );
}
