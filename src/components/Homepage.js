import React from "react";
import resim1 from "../images/ilk1.png";
import resim2 from "../images/ikinci.png";
import resim3 from "../images/ücüncü.png";
import resim4 from "../images/dördüncü.png";
import resim5 from "../images/besinci.png";
import resim6 from "../images/altinci.png";
import resim7 from "../images/yedinci.png";

const Homepage = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-400 via-green-300 to-blue-400 ">
        <div className="flex flex-col justify-center items-start gap-8 flex-shrink-0 w-96">
          <div className="text-sky-600">SUMMER 2023</div>
          <div>NEW COLLECTION</div>
          <div>
            We know how large objects will act, but things on a small scale.
          </div>
          <div className="flex py-4 px-10 gap-3 flex-col items-center rounded bg-sky-400">
            <div className="text-white">SHOP NOW</div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img src={resim1} alt="resim" />
        </div>
      </div>

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
    </>
  );
};

export default Homepage;
