import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Logo from "../components/Logo";
import BestSeller from "./BestSeller";
import foto from "../images/foto23.png";
import cover from "../images/cover.jpg";
import little from "../images/küçük1.jpg";
import little1 from "../images/küçük2.jpg";
import {
  AiTwotoneStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillEye,
} from "react-icons/ai";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const ProductPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center px-36 py-10 gap-4 bg-opacity-20 bg-gray-400">
          <h1>Home</h1>
          <SlArrowRight />
          <h2>Shop</h2>
        </div>
      </div>
      <div className="flex px-40 bg-opacity-20 bg-gray-400 gap-8 py-7">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={cover} alt="cover" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={little} alt="little" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={little1} alt="little" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={little} alt="little" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-2xl">
            <h3>Floating Phone</h3>
          </div>
          <div className="flex items-center gap-2">
            <AiTwotoneStar className="text-yellow-200 w-7 h-7" />
            <AiTwotoneStar className="text-yellow-200 w-7 h-7" />
            <AiTwotoneStar className="text-yellow-200 w-7 h-7" />
            <AiTwotoneStar className="text-yellow-200 w-7 h-7" />
            <AiOutlineStar className="text-yellow-200 w-7 h-7" />
            <p>10 Reviews</p>
          </div>
          <div className="font-bold text-2xl">$ 1,139,33</div>
          <div className="flex gap-3">
            <div className="font-bold">Availability :</div>
            <div className="text-blue-400 font-bold">In Stock</div>
          </div>
          <div>
            <p className="w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, quod. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
          <hr />
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-sky-400"></div>
            <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
            <div className="w-4 h-4 rounded-full bg-orange-400"></div>
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
          <div className="flex gap-4 py-4">
            <button className="bg-blue-400 text-white py-3 px-6 rounded-lg">
              Select Options
            </button>
            <div class="flex gap-4">
              <div class="text-black bg-white rounded-full p-3 justify-center items-center">
                <AiOutlineHeart />
              </div>
              <div class="text-black bg-white rounded-full p-3">
                <PiShoppingCartSimpleLight />
              </div>
              <div class="text-black bg-white rounded-full p-3">
                <AiFillEye />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-80 justify-center items-center gap-1 py-6">
        <div className="inline-flex p-6 justify-center items-center gap-2">
          <h5>Description</h5>
        </div>
        <div className="inline-flex p-6 justify-center items-center gap-2">
          <h5>Additional Information</h5>
        </div>
        <div className="inline-flex p-6 justify-center items-center gap-2">
          <h5>Reviews (0)</h5>
        </div>
      </div>
      <hr className="w-4/5 ml-28" />
      <div className="flex gap-14 items-center px-36 py-6">
        <div className="rounded-lg bg-opacity-20 bg-gray-400 w-80">
          <div>
            <img src={foto} alt="foto" />
          </div>
        </div>

        <div className="flex flex-col w-96 items-start text-start">
          <div>
            <h5 className="font-bold text-2xl">the quick fox jumps over</h5>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sagittis lobortis lacus, vel lacinia odio. Phasellus sodales, nisl
              eget tincidunt consectetur, nunc nisl condimentum nisi, id aliquet
              nunc nulla eget nisi.
            </p>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sagittis lobortis lacus, vel lacinia odio. Phasellus sodales, nisl
              eget tincidunt consectetur, nunc nisl condimentum nisi, id aliquet
              nunc nulla eget nisi.
            </p>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sagittis lobortis lacus, vel lacinia odio. Phasellus sodales, nisl
              eget tincidunt consectetur, nunc nisl condimentum nisi, id aliquet
              nunc nulla eget nisi.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="text-xl font-bold">the quick fox jumps over</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <SlArrowRight />
                <p>the quick fox jumps over</p>
              </div>
              <div className="flex items-center gap-4">
                <SlArrowRight />
                <p>the quick fox jumps over</p>
              </div>
              <div className="flex items-center gap-4">
                <SlArrowRight />
                <p>the quick fox jumps over</p>
              </div>
              <div className="flex items-center gap-4">
                <SlArrowRight />
                <p>the quick fox jumps over</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-xl font-bold">the quick fox jumps over</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <SlArrowRight />
                <p>the quick fox jumps over</p>
              </div>
              <div className="flex items-center gap-4">
                <SlArrowRight />
                <p>the quick fox jumps over</p>
              </div>
              <div className="flex items-center gap-4">
                <SlArrowRight />
                <p>the quick fox jumps over</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestSeller />
      <Logo />
    </>
  );
};

export default ProductPage;
