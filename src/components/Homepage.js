import React from "react";
import resim1 from "../images/ilk1.png";
import resim7 from "../images/bu1.png";
import resim8 from "../images/bu2.png";
import resim9 from "../images/bu3.png";
import Logo from "./Logo";
import Bestseller from "./Bestseller";
import Featured from "./Featured";
import Services from "./Services";
import FeaturedPost from "./FeaturedPost";
import data from "../Data";

const Homepage = () => {
  return (
    <>
      <div className="flex justify-evenly items-center xl:mt-0 md:mt-60 py-6">
        <div className="xl:flex xl:flex-row xl:justify-center xl:items-center xl:w-11/12 md:w-11/12 md:flex md:flex-col md:justify-center md:items-center bg-gradient-to-r from-blue-300 via-green-300 to-blue-200">
          <div className="xl:flex xl:flex-col xl:justify-center xl:items-start xl:gap-8 xl:flex-shrink-0 md:flex md:flex-col md:py-4 md:gap-8 md:items-center ">
            <div className="text-sky-600">{data.homepage.season}</div>
            <div className="font-bold text-5xl">
              {data.homepage.newCollection}
            </div>
            <div>{data.homepage.newCollectionInfo}</div>
            <div className="flex py-4 px-10 gap-3 flex-col items-center rounded bg-sky-400">
              <div className="text-white">{data.homepage.newCollectionBtn}</div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src={resim1} alt="resim" />
          </div>
        </div>
      </div>

      <Logo />
      <div className="flex items-center self-stretch pr-40 pl-40">
        <div className="xl:flex xl:flex-row md:flex md:flex-col xl:py-20 md:py-20 xl:items-start md:items-center gap-4">
          <div>
            <img src={resim7} alt="resim" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={resim8} alt="resim" />
            <img src={resim9} alt="resim" />
          </div>
        </div>
      </div>
      <Bestseller />
      <Featured />
      <Services />
      <FeaturedPost />
    </>
  );
};

export default Homepage;
