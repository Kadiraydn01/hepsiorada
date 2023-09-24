import React from "react";
import resim2 from "../images/ikinci.png";
import resim3 from "../images/ücüncü.png";
import resim4 from "../images/dördüncü.png";
import resim5 from "../images/besinci.png";
import resim6 from "../images/altinci.png";

const Logo = () => {
  return (
    <div className="markalar">
      <div className="flex ">
        <div>
          <img src={resim2} alt="resim" />
        </div>
        <div>
          <img src={resim3} alt="resim" />
        </div>
        <div>
          <img src={resim4} alt="resim" />
        </div>
        <div>
          <img src={resim5} alt="resim" />
        </div>
        <div>
          <img src={resim6} alt="resim" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
