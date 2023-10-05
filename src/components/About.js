import React from "react";
import Semiheader from "./Semiheader";
import Logo from "./Logo";
import Footer from "../layouts/Footer";
import foto from "../images/about.png";
import user from "../images/teamUser.jpg";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
const About = () => {
  return (
    <>
      <Semiheader />
      <div>resimli</div>
      <div>problem</div>
      <div>15k</div>
      <div>video</div>

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

      <div>
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
      <Footer />
    </>
  );
};

export default About;
