import React from "react";
import resim from "../images/urun.png";

const BestSeller = () => {
  return (
    <div className="bg-opacity-20 bg-gray-400">
      <div className="flex  md:justify-center items-center px-44 py-10 font-bold text-3xl">
        BESTSELLER PRODUCTS
      </div>
      <div className="flex xl:flex-row md:flex-col md:items-center flex-wrap gap-12 px-36 py-10 ">
        <div className="md:hidden xl:px-10 xl:flex xl:flex-col xl:bg-opacity-20 xl:bg-white">
          <img className="bg-white" src={resim} alt="resim" />
          <div className="flex flex-col gap-4 items-center py-6">
            <h5>Graphic Design</h5>
            <h6>English Department</h6>
            <div className="flex gap-4">
              <p className="text-green-700">$16.48</p>
              <p className="text-green-500">$6.48</p>
            </div>
          </div>
        </div>
        <div className="xl:px-10 xl:flex xl:flex-col xl:bg-opacity-20 xl:bg-white md:hidden">
          <img className="bg-white" src={resim} alt="resim" />
          <div className="flex flex-col gap-4 items-center py-6">
            <h5>Graphic Design</h5>
            <h6>English Department</h6>
            <div className="flex gap-4">
              <p className="text-green-700">$16.48</p>
              <p className="text-green-500">$6.48</p>
            </div>
          </div>
        </div>
        <div className="xl:px-10 xl:flex xl:flex-col xl:bg-opacity-20 xl:bg-white md:hidden">
          <img className="bg-white" src={resim} alt="resim" />
          <div className="flex flex-col gap-4 items-center py-6">
            <h5>Graphic Design</h5>
            <h6>English Department</h6>
            <div className="flex gap-4">
              <p className="text-green-700">$16.48</p>
              <p className="text-green-500">$6.48</p>
            </div>
          </div>
        </div>
        <div className="xl:px-10 xl:flex xl:flex-col xl:bg-opacity-20 xl:bg-white md:hidden">
          <img className="bg-white" src={resim} alt="resim" />
          <div className="flex flex-col gap-4 items-center py-6">
            <h5>Graphic Design</h5>
            <h6>English Department</h6>
            <div className="flex gap-4">
              <p className="text-green-700">$16.48</p>
              <p className="text-green-500">$6.48</p>
            </div>
          </div>
        </div>
        <div className="xl:px-10 xl:bg-opacity-20 xl:bg-white xl:w-64 xl:h-96 md:w-full md:h-96">
          <img
            className="bg-white xl:w-full h-2/3 xl:ml-0 md:w-full md:ml-10"
            src={resim}
            alt="resim"
          />
          <div className="flex flex-col gap-4 items-center py-6">
            <h5>Graphic Design</h5>
            <h6>English Department</h6>
            <div className="flex gap-4">
              <p className="text-green-700">$16.48</p>
              <p className="text-green-500">$6.48</p>
            </div>
          </div>
        </div>
        <div className="xl:px-10 xl:bg-opacity-20 xl:bg-white xl:w-64 xl:h-96 md:w-full md:h-96">
          <img
            className="bg-white xl:w-full h-2/3 xl:ml-0 md:w-full md:ml-10"
            src={resim}
            alt="resim"
          />
          <div className="flex flex-col gap-4 items-center py-6">
            <h5>Graphic Design</h5>
            <h6>English Department</h6>
            <div className="flex gap-4">
              <p className="text-green-700">$16.48</p>
              <p className="text-green-500">$6.48</p>
            </div>
          </div>
        </div>
        <div className="xl:px-10 xl:bg-opacity-20 xl:bg-white xl:w-64 xl:h-96 md:w-full md:h-96">
          <img
            className="bg-white xl:w-full h-2/3 xl:ml-0 md:w-full md:ml-10"
            src={resim}
            alt="resim"
          />
          <div className="flex flex-col gap-4 items-center py-6">
            <h5>Graphic Design</h5>
            <h6>English Department</h6>
            <div className="flex gap-4">
              <p className="text-green-700">$16.48</p>
              <p className="text-green-500">$6.48</p>
            </div>
          </div>
        </div>
        <div className="xl:px-10 xl:bg-opacity-20 xl:bg-white xl:w-64 xl:h-96 md:w-full md:h-96">
          <img
            className="bg-white xl:w-full h-2/3 xl:ml-0 md:w-full md:ml-10"
            src={resim}
            alt="resim"
          />
          <div className="flex flex-col gap-4 items-center py-6">
            <h5>Graphic Design</h5>
            <h6>English Department</h6>
            <div className="flex gap-4">
              <p className="text-green-700">$16.48</p>
              <p className="text-green-500">$6.48</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
