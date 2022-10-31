import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { MainData } from "../data";
export default function Logo() {
  const [green, setGreen] = useState(false);

  const [Red, setRed] = useState(false);
  const [darkgreen, setdarkgreen] = useState(false);
  const [lightblue, setLightblue] = useState(false);
  const [orange, setorange] = useState(false);
  const [blue, setBlue] = useState(false);
  const [greenend, setgreenend] = useState(false);
  const [show, setShow] = useState(true);

  var maincl =
    "   navcolor  w-[100%] bg-cover md:mt-[-40px]   md:h-[210px] bg-no-repeat fixed z-10";
  var greenif = green
    ? "green"
    : Red
    ? "red"
    : darkgreen
    ? "darkgreen"
    : lightblue
    ? "lightblue"
    : orange
    ? "orange"
    : blue
    ? "blue"
    : greenend
    ? "greenend"
    : "";

  var backclass = greenif + maincl;
  const size = useWindowSize();
  var sc_width = size.width;
  var sc_height = size.height;
  sc_height = sc_height - sc_height * 0.1;
  console.log(sc_height);

  const changebackground = () => {
    if (document.querySelector(".backcard1") !== null) {
      let backcard1 = document.querySelector(".backcard1");
      let rbackcard1 = backcard1.getBoundingClientRect();

      let backcard2 = document.querySelector(".backcard2");
      let rbackcard2 = backcard2.getBoundingClientRect();

      let backcard3 = document.querySelector(".backcard3");
      let rbackcard3 = backcard3.getBoundingClientRect();

      let backcard4 = document.querySelector(".backcard4");
      let rbackcard4 = backcard4.getBoundingClientRect();

      let backcard5 = document.querySelector(".backcard5");
      let rbackcard5 = backcard5.getBoundingClientRect();

      let backcard6 = document.querySelector(".backcard6");
      let rbackcard6 = backcard6.getBoundingClientRect();

      let backcard7 = document.querySelector(".backcard7");
      let rbackcard7 = backcard7.getBoundingClientRect();

      var threshold = 100;
      var xthreshold = 100;

      var xratio = xthreshold / 678;

      xthreshold = sc_height * xratio;

      var tratio = threshold / 678;

      threshold = sc_height * tratio;

      if (rbackcard1.y <= 0 && rbackcard1.bottom > threshold) {
        console.log("green");
        setGreen(true);
      } else if (rbackcard2.y <= xthreshold && rbackcard2.bottom > threshold) {
        console.log("red");

        setGreen(false);

        setRed(true);
      } else if (rbackcard3.y <= xthreshold && rbackcard3.bottom > threshold) {
        setRed(false);
        setdarkgreen(true);
      } else if (rbackcard4.y <= xthreshold && rbackcard4.bottom > threshold) {
        setdarkgreen(false);
        setLightblue(true);
      } else if (rbackcard5.y <= xthreshold && rbackcard5.bottom > threshold) {
        setLightblue(false);
        setorange(true);
      } else if (rbackcard6.y <= xthreshold && rbackcard6.bottom > threshold) {
        setorange(false);
        setBlue(true);
      } else if (rbackcard6.bottom < threshold) {
        setBlue(false);
        setgreenend(true);
      }
    }
  };
  useEffect(()=>{
  const screen = window.matchMedia("(max-width:767px)");
  if (screen.matches){
    setShow(false)
  }
  },[])

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  if (typeof window !== "undefined") {
    console.log("You are on the browser");
    window.addEventListener("scroll", changebackground);
  } else {
    console.log("You are on the server");
  }

  return (
    <>
      <div className={backclass}>
        <div className="flex md:justify-between justify-center mx-[60px] md:mt-[2.5%]  items-center flex-col md:flex-row ">
          <div className="flex items-center justify-between w-full md:w-fit">
            <div className="" onClick={()=>setShow(!show)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 5 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 md:hidden"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <Fade bottom>
              <Link href="/">
                <img
                  className="md:w-[300px] w-[200px] cursor-pointer"
                  src={MainData[7].logo}
                  alt="about-img" 
                />
              </Link>
            </Fade>
          </div>
         { show && (<Fade top>
            <div className="menus  cursor-pointer hover:text-black w-full md:w-auto ease-out">
              <ul className="flex gap-12 text-[28px]   font-extrabold text-yellow-400 flex-col md:flex-row">
                <Link href="/">
                  <li className="hover:text-white hover:scale-125 transition duration-500 ease-in-out  md:block ">
                    {MainData[7].link1}
                  </li>
                </Link>
                <Link href="/aboutus">
                  <li className="hover:text-white hover:scale-125 transition duration-500 ease-in-out  md:block">
                    {MainData[7].link2}
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="hover:text-white hover:scale-125 transition duration-500 ease-in-out md:block">
                    {MainData[7].link3}
                  </li>
                </Link>
              </ul>
            </div>
          </Fade>)}
        </div>
      </div>
    </>
  );
}
