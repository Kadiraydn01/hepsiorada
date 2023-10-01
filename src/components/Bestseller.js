import React from "react";
import { Button } from "react-bootstrap";
import resim from "../images/urun.png";
import data from "../Data";

const Bestseller = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col items-center gap-4">
            <h2>{data.bestSeller.title1}</h2>
            <h3 className="font-bold text-xl">{data.bestSeller.title2}</h3>
            <p>{data.bestSeller.titleInfo}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-12 px-48 py-10 ">
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={resim} alt="resim" />
            <div className="flex flex-col gap-4 items-center py-6">
              <h5>{data.bestSeller.productTitle}</h5>
              <h6>{data.bestSeller.productInfo}</h6>
              <div className="flex gap-4">
                <p className="text-green-700">{data.bestSeller.productPrice}</p>
                <p className="text-green-500">
                  {data.bestSeller.productPrice2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center py-10">
            <Button className=" flex items-center p-4 rounded border-blue-400 text-blue-400 font-bold text-sm border">
              {" "}
              LOAD MORE PRODUCTS
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
