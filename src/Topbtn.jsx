import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

function Topbtn() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {show && (
        <div
          className="fixed bottom-[100px] right-[30px] md:right-[100px] z-10 cursor-pointer p-[20px] md:text-[20px] font-bold rounded-[100%] bg-yellow-400 "
          onClick={handleClick}
        >
          <BiArrowToTop />
        </div>
      )}
    </div>
  );
}

export default Topbtn;
