import React from "react";
import Logo from "./Logo";
import foto from "../images/about.png";
import user from "../images/teamUser.jpg";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import video from "../images/video.mp4";
import foto1 from "../images/shopping.png";
import "../App.css";
const About = () => {
  return (
    <>
      <div class="flex flex-wrap gap-20 px-52 py-20">
        <div class="flex flex-col gap-9 items-start about-left">
          <h1 class="text-sm font-bold">ABOUT COMPANY</h1>
          <h2 class="text-5xl font-bold">ABOUT US</h2>
          <p class="w-[350px]">
            We know how large objects will act, but things on a small scale
          </p>
          <button class="px-10 py-3 border bg-blue-400 rounded-xl text-white">
            Get Quote Now
          </button>
        </div>
        <div>
          <img className="w-full" src={foto1} alt="foto" />
        </div>
      </div>

      <div className="flex flex-wrap gap-24 items-center justify-center md:flex ">
        <div className="flex items-start gap-6 flex-col">
          <h1 className="text-red-600">Problems trying</h1>
          <p className="w-[450px] text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod?
          </p>
        </div>
        <div>
          <p className="w-[500px] flex">
            Promblems trying to solve them by using the most efficient and
            effective means possible.
          </p>
        </div>
      </div>

      <div className="px-60 justify-center ">
        <div className="flex flex-wrap justify-center items-center text-center gap-6 py-20">
          <div className="flex flex-col gap-4 items-center w-60">
            <h1 className="font-bold text-5xl">15K</h1>
            <h2>Happy Customers</h2>
          </div>
          <div className="flex flex-col gap-4 items-center w-60">
            <h1 className="font-bold text-5xl">150K</h1>
            <h2>Monthly Visitors</h2>
          </div>
          <div className="flex flex-col gap-4 items-center w-60">
            <h1 className="font-bold text-5xl">15</h1>
            <h2>Countries Worldwide</h2>
          </div>
          <div className="flex flex-col gap-4 items-center w-60">
            <h1 className="font-bold text-5xl">100+</h1>
            <h2>Top Partners</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-6 px-14">
        <video width="1000" height="450" src={video} controls />
      </div>

      <div className="flex flex-col px-52 py-24 gap-20">
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

      <div className="flex flex-wrap">
        <div className="flex flex-col gap-12 px-80 py-8 items-center justify-center">
          <h1 className="font-bold text-5xl">Big Companies Are Here</h1>
          <p className="w-[600px] text-center">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod?lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam , quod?
          </p>
        </div>
      </div>

      <Logo />

      <div className="flex  gap-40 bg-blue-500 text-white justify-between">
        <div className="flex ">
          <div className="flex flex-col px-52 py-24 items-start gap-8 justify-center">
            <h1 className="font-bold">WORK WITH US</h1>
            <h2 className="font-bold text-3xl">Now Let's Grow Yours</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod?
            </p>
            <button className="py-3 px-6 rounded-xl border border-white">
              Join Us
            </button>
          </div>
        </div>
        <div>
          <img className="w-[800px] h-[600px]" src={foto} alt="foto" />
        </div>
      </div>
    </>
  );
};

export default About;
