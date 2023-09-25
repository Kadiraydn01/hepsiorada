import React from "react";
import { Button } from "react-bootstrap";
import resim from "../images/urun.png";

const Bestseller = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col items-center gap-4">
            <h2>Featured Products</h2>
            <h3 className="font-bold text-xl">BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-12 px-40 py-10 ">
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>Graphic Design</h5>
              <h6>English Department</h6>
              <div className="flex gap-4">
                <p className="text-green-700">$16.48</p>
                <p className="text-green-500">$6.48</p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
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
        <div>
          <div className="flex justify-center items-center py-10">
            <Button> LOAD MORE PRODUCTS</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
