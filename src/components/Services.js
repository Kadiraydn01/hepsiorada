import React from "react";
import { BiSolidBookReader } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import { FiTrendingUp } from "react-icons/fi";

const Servises = () => {
  return (
    <>
      <div className="flex px-52 justify-center items-center">
        <div className="flex py-20 flex-col items-center gap-20 flex-shrink-0 ">
          <div className="flex flex-col items-center gap-3">
            <h2>Featured Products</h2>
            <h3>THE BEST SERVICES</h3>
            <p>Problems trying to resolve the conflict between</p>
          </div>
          <div className="flex justify-center items-start gap-8">
            <div className="flex p-10 flex-col items-center gap-5">
              <BiSolidBookReader />

              <h2>Easy Wins</h2>
              <p className="w-52 text-center items-start">
                Get your best looking smile now
              </p>
            </div>
            <div className="flex p-10 flex-col items-center gap-5">
              <SlBookOpen />
              <h2>Concrete</h2>
              <p className="w-60 text-center items-start">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
            <div className="flex p-10 flex-col items-center gap-5">
              <FiTrendingUp />
              <h2>Hack Growth</h2>
              <p className="w-52 text-center items-start">
                Overcame any hurdle or any other problem
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servises;
