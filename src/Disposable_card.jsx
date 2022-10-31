import React from "react";

export default function Disposable_card(props) {
  return (
    <div className="mt-[2px] hover:scale-110 ease-in-out duration-700  transition shadow-black ">
      <div className="card max-w-[300px] ">
        <img src={props.image} alt="about-img" />
        <p className="mt-[15px] font-bold text-[14px] md:text-[16px] text-black text-center ">
          {props.header}
        </p>
        <p className="mt-[10px] text-[11px] text-center  ">{props.title}</p>
      </div>
    </div>
  );
}
