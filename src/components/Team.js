import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";
import data from "../Data";
import foto from "../images/team1.png";
import foto2 from "../images/team2.png";
import foto3 from "../images/team3.png";
import foto4 from "../images/team4.png";
import foto5 from "../images/team5.png";
import user from "../images/teamUser.jpg";

const Team = () => {
  return (
    <>
      <div className="flex flex-col gap-12 pt-12 px-96 text-center items-center">
        <h1>WHAT WE DO</h1>
        <h2 className="text-5xl font-bold">Innovation tailored for you</h2>
        <div className="flex items-center justify-center">
          <div className="flex items-center p-3 gap-4 ">
            <div className="font-bold">{data.productList.home} </div>
            <SlArrowRight />
            {data.productList.shop}
          </div>
        </div>
      </div>
      <div className="xl:flex xl:flex-row xl:gap-3 xl:py-12 md:flex md:flex-col md:gap-4 md:py-10">
        <div className=" h-full">
          <img className="w-[1400px] h-[490px]" src={foto} alt="foto" />
        </div>
        <div className="xl:ml-0 xl:flex xl:flex-row xl:flex-wrap xl:gap-3 md:flex md:flex-row md:flex-wrap md:gap-5 md:ml-20">
          <img className="w-[400px] h-[240px]" src={foto2} alt="foto" />
          <img className="w-[400px] h-[240px]" src={foto3} alt="foto" />
          <img className="w-[400px] h-[240px]" src={foto4} alt="foto" />
          <img className="w-[400px] h-[240px]" src={foto5} alt="foto" />
        </div>
      </div>

      <div className="flex flex-col px-52 py-36 gap-20">
        <div className="flex text-4xl font-bold items-center justify-center">
          <h1>Meet Our Team</h1>
        </div>
        <div>
          <div className="flex flex-col gap-10 text-center items-center justify-center">
            <img src={user} alt="foto" />
            <div className="flex flex-col gap-5 items-center justify-center">
              <h1>Kadiraydn01</h1>
              <h2>Owner </h2>
              <div className="flex gap-6 text-blue-400">
                <BsTwitter className="w-6 h-6" />
                <AiFillFacebook className="w-6 h-6" />
                <BsInstagram className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-40">
        <div className="flex flex-col gap-24 flex-shrink-0 py-20 items-center ">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl font-bold">
              Start your 14 days free trial{" "}
            </h1>
            <p className="w-96 items-center">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod?
            </p>
            <button className="text-white bg-blue-400 border-blue-400 border border-double py-3 px-10 rounded-xl">
              Try it free now
            </button>
            <div className="flex gap-9">
              <BsTwitter className="w-6 h-6" />
              <AiFillFacebook className="w-6 h-6" />
              <BsInstagram className="w-6 h-6" />
              <AiFillLinkedin className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
