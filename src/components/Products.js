import React from "react";
import data from "../Data";
import Logo from "../components/Logo";
import { SlArrowRight } from "react-icons/sl";
import resim from "../images/urun.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { PiSquaresFourFill, PiListChecksThin } from "react-icons/pi";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineDown } from "react-icons/ai";

const Products = () => {
  return (
    <>
      <div className="flex py-6 items-center bg-custom-gray">
        <div className="flex items-center gap-8 px-80 w-full justify-between">
          <div className="flex text-xl font-bold items-start w-1/2">
            {data.productList.shop}
          </div>
          <div className="flex items-center p-3 gap-4 ">
            {data.productList.home}
            <SlArrowRight />
            {data.productList.shop}
          </div>
        </div>
      </div>
      <div className=" bg-custom-gray">
        <div className="flex gap-4 px-80 pb-12 items-center">
          <div className="relative" style={{ display: "inline-block" }}>
            <img src={resim} alt="resim" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20 flex space-x-6 flex-col items-center justify-center text-center">
              <div className="text-white">
                <div className="font-bold text-xl">CLOTHS</div>
                <div>5 Items</div>
              </div>
            </div>
          </div>
          <div className="relative" style={{ display: "inline-block" }}>
            <img src={resim} alt="resim" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20 flex space-x-6 flex-col items-center justify-center text-center">
              <div className="text-white">
                <div className="font-bold text-xl">CLOTHS</div>
                <div>5 Items</div>
              </div>
            </div>
          </div>
          <div className="relative" style={{ display: "inline-block" }}>
            <img src={resim} alt="resim" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20 flex space-x-6 flex-col items-center justify-center text-center">
              <div className="text-white">
                <div className="font-bold text-xl">CLOTHS</div>
                <div>5 Items</div>
              </div>
            </div>
          </div>
          <div className="relative" style={{ display: "inline-block" }}>
            <img src={resim} alt="resim" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20 flex space-x-6 flex-col items-center justify-center text-center">
              <div className="text-white">
                <div className="font-bold text-xl">CLOTHS</div>
                <div>5 Items</div>
              </div>
            </div>
          </div>
          <div className="relative" style={{ display: "inline-block" }}>
            <img src={resim} alt="resim" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20 flex space-x-6 flex-col items-center justify-center text-center">
              <div className="text-white">
                <div className="font-bold text-xl">CLOTHS</div>
                <div>5 Items</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-20 items-center px-80 py-6">
        <div>{data.productList.label}</div>
        <div className="flex items-center gap-4">
          {data.productList.views}
          <div className="flex border h-8 w-8 items-center justify-center ">
            <PiSquaresFourFill className="w-4 h-4 " />
          </div>
          <div className="flex border h-8 w-8 items-center justify-center">
            <PiListChecksThin className="w-4 h-4 " />
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <Dropdown className="flex flex-row px-6 py-2 border">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Popularity <AiOutlineDown />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <button className="flex flex-row px-7 py-4 rounded-sm text-white bg-blue-500 border">
              Filter
            </button>
          </div>
        </div>
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
