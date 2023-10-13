import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import resim from "../images/urun.png";
import data from "../Data";

const Bestseller = () => {
  const [productsToDisplay, setProductsToDisplay] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      const newWindowSize = window.innerWidth;

      if (newWindowSize >= 700) {
        setProductsToDisplay(12);
      } else {
        setProductsToDisplay(5);
      }
    };
    console.log("useEffect is running");
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="flex flex-col items-center gap-4">
            <h2>{data.bestSeller.products.product1.title1}</h2>
            <h3 className="font-bold text-xl">
              {data.bestSeller.products.product1.title2}
            </h3>
            <p>{data.bestSeller.products.product1.titleInfo}</p>
          </div>
        </div>
        <div className="xl:flex xl:flex-wrap xl:gap-14 xl:px-48 xl:py-10 md:flex md:flex-wrap md:gap-12 md:px-40 md:py-10 md:justify-center">
          {[...Array(productsToDisplay)].map((_, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 items-center py-6`}
            >
              <img src={resim} alt="resim" />
              <h5>
                {data.bestSeller.products[`product${index + 1}`].productTitle}
              </h5>
              <h6>
                {data.bestSeller.products[`product${index + 1}`].productInfo}
              </h6>
              <div className="flex gap-4">
                <p className="text-green-700">
                  {data.bestSeller.products[`product${index + 1}`].productPrice}
                </p>
                <p className="text-green-500">
                  {
                    data.bestSeller.products[`product${index + 1}`]
                      .productPrice2
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-center items-center py-10">
            <Button className="flex items-center p-4 rounded border-blue-400 text-blue-400 font-bold text-sm border">
              {" "}
              {data.bestSeller.productBtn}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
