import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Semiheader = () => {
  return (
    <>
      <div className="flex py-4 px-40 items-center">
        <div className="flex items-center py-3 px-20 gap-20">
          <div>BANDAGE</div>
          <div className="flex gap-72 py-1 justify-center items-center">
            <div className="flex gap-3">
              <button>Home</button>
              <button>Product</button>
              <button>Pricing</button>
              <button>Contact</button>
            </div>
            <div className="flex items-center gap-12">
              <div className="text-blue-400 font-bold">Login</div>
              <div className="flex items-center bg-blue-400 text-white py-3 px-7 rounded-sm">
                <h1>Become A Member</h1>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Semiheader;
