import React from "react";
import data from "../Data";
import Logo from "../components/Logo";
import { SlArrowRight } from "react-icons/sl";
import resim from "../images/urun.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Products = () => {
  return (
    <>
      <div>
        <div>
          <div>{data.productList.shop}</div>
          <div>
            {data.productList.home}
            <SlArrowRight />
            {data.productList.shop}
          </div>
        </div>
      </div>
      <div>
        <div>sol</div>
        <div>orta</div>
        <div>sağ </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-12 px-80 py-12 ">
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
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
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>
            </div>
          </div>
          <div className="flex h-14 px-80">
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button>First</Button>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>Next</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <Logo />
    </>
  );
};

export default Products;
