import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Topbtn from "./Topbtn";
import { MainData } from "../data";
export default function Footer() {
  return (
    <div>
      <Topbtn />
      <div className="bg-[url('/footer/Footerbackground.png')] bg-cover  ">
        <div className=" mt-[-40px] flex md:flex-row items-center h-1/2 text-center md:text-start  flex-col text-green-700 justify-between  md:items-start px-[60px] max-w-[1600px] mx-auto footer ">
          <div className="p-5 ">
            <ul className=" items-center flex flex-col">
              <div className="max-w-[200px] pt-[30px] md:pt-16 ">
              <Link href="/">
                <img className="cursor-pointer" src={MainData[7].footerlogo} alt="about-img"  />
              </Link>
              </div>

              <div className="text-center text-[18px]  md:text-2xl text-black md:pb-10">
                <p>{MainData[7].description1}</p>
                <p>{MainData[7].description2}</p>
              </div>
            </ul>
          </div>
          <div className="p-5 md:pt-24 md:pb-12">
            <ul className="tracking-wider ">
              <p className="text-green-700 font-bold text-3xl pb-4">
                {MainData[7].label}
              </p>
              <Link href="/">
                <li className=" md:hidden block text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].link1}
                </li>
              </Link>
              <Link href="/aboutus">
                <li className=" md:hidden block text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].link2}
                </li>
              </Link>
              <Link href="/contact">
                <li className=" md:hidden block text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].link3}
                </li>
              </Link>
              <Link href="/twog_delta11_categories">
                <li className=" text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].product_link1}
                </li>
              </Link>
              <Link href="/twog_hhc_categories">
                <li className=" text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].product_link2}
                </li>
              </Link>
              <Link href="/twog_masterblend">
                <li className=" text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].product_link3}
                </li>
              </Link>
              <Link href="/tripletap_d11_categories">
                <li className=" text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].product_link4}
                </li>
              </Link>
              <Link href="/tripletap_hhc_categories">
                <li className=" text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].product_link5}
                </li>
              </Link>
              <Link href="/tripletap_masterblend_categories">
                <li className=" text-black    text-[18px] md:text-2xl   hover:text-yellow-500 cursor-pointer">
                  {MainData[7].product_link6}
                </li>
              </Link>
            </ul>
          </div>

          <div className="p-5 md:pt-24 md:pb-12 ">
            <ul className="tracking-wider hidden md:block">
              <p className="text-green-700 font-bold text-3xl pb-4">
                {MainData[7].Menu}
              </p>
              <Link href="/">
                <li className=" text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].link1}
                </li>
              </Link>
              <Link href="/aboutus">
                <li className=" text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].link2}
                </li>
              </Link>
              <Link href="/contact">
                <li className=" text-black text-[18px]  md:text-2xl pb-2  hover:text-yellow-500 cursor-pointer">
                  {MainData[7].link3}
                </li>
              </Link>
            </ul>
          </div>

          <div className="p-5 md:pt-24 pb-12 tracking-wider ">
            <ul>
              <p className="text-green-700 font-bold text-3xl pb-4">
                {MainData[7].contact}
              </p>
              <li className=" text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-400 cursor-pointer">
                <a href="mailto: 666666666">{MainData[7].email}</a>
              </li>
              <li className=" text-black    text-[18px] md:text-2xl pb-2  hover:text-yellow-400 cursor-pointer">
                <a href="tel: 666666666">{MainData[7].number}</a>
              </li>
              <li className="    text-[22px] md:text-2xl  hover:text-black cursor-pointer md:pt-16 pt-8">
                Social Links
              </li>
              <div className="flex gap-8 pb-5 justify-center pt-2">
                <Link href="https://www.instagram.com/" target="_blank">
                <a target="_blank">
                  <FaInstagram className=" text-[18px] md:text-2xl cursor-pointer hover:text-yellow-600" />
                  </a>
                </Link>
                <Link href="https://www.twitter.com/">
                <a target="_blank">
                  <FaTwitter className=" text-[18px] md:text-2xl cursor-pointer hover:text-blue-600" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/">
                <a target="_blank">
                  <FaLinkedin className=" text-[18px] md:text-2xl cursor-pointer hover:text-blue-600" />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/">
                <a target="_blank">
                  <FaYoutube className=" text-[18px] md:text-2xl cursor-pointer hover:text-red-600" />
                </a>
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <p className=" text-[12px] md:text-[18px] text-center pb-[15px]">
          copy right © 2022. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
