import React from "react";
import resim from "../images/featuredpost.png";
import resim1 from "../images/featuredpo1.png";
import { AiTwotoneStar, AiOutlineHeart, AiFillEye } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { MdAreaChart } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import data from "../Data";

const FeaturedPost = () => {
  return (
    <>
      <div className="flex px-48 justify-center items-center">
        <div className="flex py-20 flex-col items-center gap-24 flex-shrink-0">
          <div className="flex flex-col items-center gap-3">
            <h6 className="text-sm font-bold text-blue-400">
              {data.featuredPost.title1}
            </h6>
            <h3 className="font-bold text-4xl">{data.featuredPost.title2}</h3>
          </div>
          <div className="xl:flex md:flex xl:flex-row md:flex-col xl:items-center md:items-center md:gap-6 xl:gap-8">
            <div className="xl:flex xl:flex-row md:flex md:flex-col md:items-center md:justify-center">
              <div className="relative">
                <img src={resim} alt="resim" />

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 flex space-x-6">
                  <div className="text-black bg-white rounded-full p-3">
                    <AiOutlineHeart />
                  </div>
                  <div className="text-black bg-white rounded-full p-3">
                    <PiShoppingCartSimpleLight />
                  </div>
                  <div className="text-black bg-white rounded-full p-3">
                    <AiFillEye />
                  </div>
                </div>
                <div className="absolute top-0 left-0 bg-red-500 rounded text-white  ml-5 mt-5 px-3">
                  <p className="text-sm">{data.featuredPost.sale}</p>
                </div>
              </div>

              <div className="flex px-6 py-6 flex-col items-start gap-3 md:ml-20 xl:ml-0 self-stretch">
                <div className="flex justify-between items-center self-stretch w-56">
                  <h5 className="font-bold text-sm text-blue-400">
                    {data.featuredPost.postTitle}
                  </h5>
                  <div className="flex items-center border gap-1 p-1 rounded-xl bg-black">
                    <AiTwotoneStar className="text-yellow-200" />
                    <p className="text-white">
                      {data.featuredPost.commentRate}
                    </p>
                  </div>
                </div>

                <h5 className="font-bold">{data.featuredPost.postTitle2}</h5>
                <p className="w-52">{data.featuredPost.postInfo}</p>
                <div className="flex items-center gap-3 ">
                  <AiOutlineDownload />
                  <p>{data.featuredPost.saleInfo}</p>
                </div>
                <div className="flex gap-4">
                  <p>{data.featuredPost.price}</p>
                  <p className="text-green-700">{data.featuredPost.price2}</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <GiAlarmClock className="text-blue-400" />
                    <p>{data.featuredPost.leftTime}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdAreaChart className="text-orange-400" />
                    <p>{data.featuredPost.lessons}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartArea className="text-green-700" />
                    <p>{data.featuredPost.progress}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 border px-6 py-4 rounded-full border-cyan-400 ">
                    <h2 className="text-cyan-400">
                      {data.featuredPost.learnMore}
                    </h2>
                    <MdArrowForwardIos className="text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:flex xl:flex-row md:flex md:flex-col md:items-center md:justify-center">
              <div className="relative">
                <img src={resim1} alt="resim" />

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 flex space-x-6">
                  <div className="text-black bg-white rounded-full p-3">
                    <AiOutlineHeart />
                  </div>
                  <div className="text-black bg-white rounded-full p-3">
                    <PiShoppingCartSimpleLight />
                  </div>
                  <div className="text-black bg-white rounded-full p-3">
                    <AiFillEye />
                  </div>
                </div>
                <div className="rounded absolute top-0 left-0 bg-red-500 text-white  ml-5 mt-5 px-3">
                  <p className="text-sm">{data.featuredPost.sale}</p>
                </div>
              </div>

              <div className="flex px-6 py-6 flex-col items-start md:ml-20 xl:ml-0 gap-3 self-stretch">
                <div className="flex justify-between items-center self-stretch w-56">
                  <h5 className="font-bold text-sm text-blue-400">
                    {data.featuredPost.postTitle}
                  </h5>
                  <div className="flex items-center border gap-1 p-1 rounded-xl bg-black">
                    <AiTwotoneStar className="text-yellow-200" />
                    <p className="text-white">
                      {data.featuredPost.commentRate}
                    </p>
                  </div>
                </div>

                <h5 className="font-bold">{data.featuredPost.postTitle2}</h5>
                <p className="w-52">{data.featuredPost.postInfo2}</p>
                <div className="flex items-center gap-3 ">
                  <AiOutlineDownload />
                  <p>{data.featuredPost.saleInfo}</p>
                </div>
                <div className="flex gap-4">
                  <p>{data.featuredPost.price}</p>
                  <p>{data.featuredPost.price2}</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <GiAlarmClock className="text-blue-400" />
                    <p>{data.featuredPost.leftTime}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdAreaChart className="text-orange-400" />
                    <p>{data.featuredPost.lessons}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartArea className="text-green-700" />
                    <p>{data.featuredPost.progress}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 border px-6 py-4 rounded-full border-cyan-400 ">
                    <h2 className="text-cyan-400">
                      {data.featuredPost.learnMore}
                    </h2>
                    <MdArrowForwardIos className="text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPost;
