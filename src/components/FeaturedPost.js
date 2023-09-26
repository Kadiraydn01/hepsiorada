import React from "react";
import resim from "../images/featuredpost.png";
import resim1 from "../images/featuredpo1.png";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { MdAreaChart } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const FeaturedPost = () => {
  return (
    <>
      <div className="flex px-48 justify-center items-center">
        <div className="flex py-20 flex-col items-center gap-24 flex-shrink-0">
          <div className="flex flex-col items-center gap-3">
            <h6>Practice Advice</h6>
            <h3>Featured Post</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex ">
              <img src={resim} alt="resim" />
              <div className="flex px-6 py-6 flex-col items-start gap-3 self-stretch">
                <div className="flex justify-between items-center self-stretch w-56">
                  <h5>English Department</h5>
                  <div className="flex items-center border gap-1 p-1 rounded-xl bg-black">
                    <AiTwotoneStar className="text-yellow-200" />
                    <p className="text-white">4.9</p>
                  </div>
                </div>

                <h5>Graphic Design</h5>
                <p className="w-52">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystoke away
                </p>
                <div className="flex items-center gap-3 ">
                  <AiOutlineDownload />
                  <p>15 Sales</p>
                </div>
                <div className="flex gap-4">
                  <p>$16.48</p>
                  <p>$6.48</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <GiAlarmClock />
                    <p>22 h...</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdAreaChart />
                    <p>64 Lessons</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartArea />
                    <p>Progress</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 border px-6 py-4 rounded-full border-cyan-400 ">
                    <h2 className="text-cyan-400">Learn More</h2>
                    <MdArrowForwardIos className="text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex ">
              <img src={resim1} alt="resim" />
              <div className="flex px-6 py-6 flex-col items-start gap-3 self-stretch">
                <div className="flex justify-between items-center self-stretch w-56">
                  <h5>English Department</h5>
                  <div className="flex items-center border gap-1 p-1 rounded-xl bg-black">
                    <AiTwotoneStar className="text-yellow-200" />
                    <p className="text-white">4.9</p>
                  </div>
                </div>

                <h5>Graphic Design</h5>
                <p className="w-52">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystoke away
                </p>
                <div className="flex items-center gap-3 ">
                  <AiOutlineDownload />
                  <p>15 Sales</p>
                </div>
                <div className="flex gap-4">
                  <p>$16.48</p>
                  <p>$6.48</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <GiAlarmClock />
                    <p>22 h...</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdAreaChart />
                    <p>64 Lessons</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartArea />
                    <p>Progress</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 border px-6 py-4 rounded-full border-cyan-400 ">
                    <h2 className="text-cyan-400">Learn More</h2>
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
