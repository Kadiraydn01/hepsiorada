import React from "react";
import resim1 from "../images/feature.png";
import resim2 from "../images/feature1.png";
import data from "../Data";

const Featured = () => {
  return (
    <>
      <div className="xl:flex xl:flex-row xl:gap-24 xl:px-48 xl:py-20 md:flex md:flex-col-reverse md:items-center md:gap-20 md:px-40 md:py-16">
        <div className="xl:flex md:flex xl:flex-row md:flex-col xl:gap-5 md:gap-6">
          <img src={resim1} alt="resim" />
          <img src={resim2} alt="resim" />
        </div>
        <div className="flex flex-col py-16">
          <div className="flex flex-col w-96 items-start gap-4">
            <h5 className="text-blue-600">{data.featured.title1}</h5>
            <h2 className="text-4xl font-bold">{data.featured.title2}</h2>
            <p>{data.featured.featuredInfo}</p>
            <p>{data.featured.featuredInfo}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
