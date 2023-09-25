import React from "react";
import resim1 from "../images/feature.png";
import resim2 from "../images/feature1.png";

const Featured = () => {
  return (
    <>
      <div className="flex">
        <div className="flex">
          <img src={resim1} alt="resim" />
          <img src={resim2} alt="resim" />
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col">
            <h5>Featured Products</h5>
            <h2>We Love What We Do</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Natus, quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
