import React from "react";
import { BiSolidBookReader } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import { FiTrendingUp } from "react-icons/fi";
import data from "../Data";

const Servises = () => {
  return (
    <>
      <div className="flex px-52 justify-center items-center">
        <div className="flex py-20 flex-col items-center gap-20 flex-shrink-0 ">
          <div className="flex flex-col items-center gap-3">
            <h2>{data.service.title1}</h2>
            <h3 className="font-bold text-2xl">{data.service.title2}</h3>
            <p>{data.service.titleInfo}</p>
          </div>
          <div className="flex justify-center items-start gap-8">
            <div className="flex p-10 flex-col items-center gap-5">
              <BiSolidBookReader className="w-16 h-16 text-blue-400" />

              <h2 className="text-2xl font-bold">
                {data.service.firstIconTitle}
              </h2>
              <p className="w-52 text-center items-start">
                {data.service.firstIconInfo}
              </p>
            </div>
            <div className="flex p-10 flex-col items-center gap-5">
              <SlBookOpen className="w-16 h-16 text-blue-400" />
              <h2 className="text-2xl font-bold">
                {data.service.secondIconTitle}
              </h2>
              <p className="w-60 text-center items-start">
                {data.service.secondIconInfo}
              </p>
            </div>
            <div className="flex p-10 flex-col items-center gap-5">
              <FiTrendingUp className="w-16 h-16 text-blue-400" />
              <h2 className="text-2xl font-bold">
                {data.service.thirdIconTitle}
              </h2>
              <p className="w-52 text-center items-start">
                {data.service.thirdIconInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servises;
