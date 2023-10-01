import React from "react";
import resim1 from "../images/feature.png";
import resim2 from "../images/feature1.png";
import data from "../Data";

const Featured = () => {
  return (
    <>
      <div className="flex gap-24 px-48 py-20">
        <div className="flex gap-5">
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
