import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { MainData } from "../data";
export default function Two_g_masterblend_navbar() {
  return (
    <div className=' bg-[url("/images/menublue2.png")] w-[100%] bg-cover md:mt-[-40px]   md:h-[210px] bg-no-repeat fixed z-10'>
      <div className="flex md:justify-between mx-[60px] justify-center items-center md:mt-[2.5%]">
      <Fade bottom>
              <Link href="/">
              <img
              className="md:w-[300px] w-[200px]"
              src={MainData[7].logo}
              alt="about-img" 
              />
              </Link>
            </Fade>
            <Fade bootom>

        <div className="menus hidden md:block cursor-pointer hover:text-black">
          <ul className="flex gap-12 text-[28px]   font-extrabold text-yellow-400">
            <Link href="/">
              <li className="hover:text-white hover:scale-125 transition duration-500 ease-in-out ">
              {MainData[7].link1}
              </li>
            </Link>
            <Link href="/aboutus">
              <li className="hover:text-white hover:scale-125 transition duration-500 ease-in-out">
              {MainData[7].link2}
              </li>
            </Link>
            <li className="hover:text-white hover:scale-125 transition duration-500 ease-in-out">
            {MainData[7].link3}
            </li>
          </ul>
        </div>
            </Fade>
      </div>
    </div>
  );
}
