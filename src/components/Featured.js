import React from "react";
import resim1 from "../images/feature.png";
import resim2 from "../images/feature1.png";

const Featured = () => {
  return (
    <>
      <div className="flex gap-24 px-48 py-20">
        <div className="flex gap-5">
          <img src={resim1} alt="resim" />
          <img src={resim2} alt="resim" />
        </div>
        <div>
          <div className="flex flex-col w-96 items-start gap-4">
            <h5 className="text-blue-600">Featured Products</h5>
            <h2 className="text-4xl font-bold">We Love What We Do</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
