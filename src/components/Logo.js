import React from "react";
import resim2 from "../images/ikinci.png";
import resim3 from "../images/ücüncü.png";
import resim4 from "../images/dördüncü.png";
import resim5 from "../images/besinci.png";
import resim6 from "../images/altinci.png";
import resim7 from "../images/yedinci.png";

const Logo = () => {
  return (
    <div className="flex px-44 justify-center items-center">
      <div className="md:flex md:flex-col md:w-full md:h-full md:justify-center md:items-center xl:flex xl:flex-row py-12 xl:justify-center items-center gap-8 ">
        <div className="flex justify-center items-center w-36 md:justify-center md:items-center ">
          <img src={resim2} alt="resim" />
        </div>
        <div className="flex justify-center items-center w-36 md:justify-center md:items-center ">
          <img src={resim3} alt="resim" />
        </div>
        <div className="flex justify-center items-center w-36 md:justify-center md:items-center ">
          <img src={resim4} alt="resim" />
        </div>
        <div className="flex justify-center items-center w-36 md:justify-center md:items-center ">
          <img src={resim5} alt="resim" />
        </div>
        <div className="flex justify-center items-center w-36 md:justify-center md:items-center ">
          <img src={resim6} alt="resim" />
        </div>
        <div className="flex justify-center items-center w-36 md:justify-center md:items-center ">
          <img src={resim7} alt="resim" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
