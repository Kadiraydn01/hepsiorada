import React from "react";
import Footer from "../layouts/Footer";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";
import {
  BsInstagram,
  BsTelephone,
  BsTwitter,
  BsEnvelope,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import resim2 from "../images/alisveris.png";

const Contact = () => {
  return (
    <>
      <div className="flex py-4 px-40 items-center">
        <div className="flex items-center py-3 px-20 gap-20">
          <div>BANDAGE</div>
          <div className="flex gap-72 py-1 justify-center items-center">
            <div className="flex gap-3">
              <button>Home</button>
              <button>Product</button>
              <button>Pricing</button>
              <button>Contact</button>
            </div>
            <div className="flex items-center gap-12">
              <div className="text-blue-400 font-bold">Login</div>
              <div className="flex items-center bg-blue-400 text-white py-3 px-7 rounded-sm">
                <h1>Become A Member</h1>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex px-40">
          <div className="flex ">
            <div className="flex flex-col items-start gap-10 py-20 px-20">
              <div className="font-bold">Contact Us</div>
              <div className="font-bold text-3xl w-60">Get in Touch Today!</div>
              <div className="w-72">
                We know how large objects will act, but things on a small scale
              </div>
              <div className="font-bold text-xl">
                <h1> Phone : +90 555 555 555</h1>
                <h1>Faks: +90 555 555 555</h1>
              </div>
              <div className="flex gap-9">
                <BsTwitter className="w-6 h-6" />
                <AiFillFacebook className="w-6 h-6" />
                <BsInstagram className="w-6 h-6" />
                <AiFillLinkedin className="w-6 h-6" />
              </div>
            </div>
            <img src={resim2} alt="alisveris" />
          </div>
        </div>
      </div>
      <div className="px-40">
        <div className="flex py-32 flex-col items-center justify-center text-center gap-20">
          <div>
            <h1>VISIT OUR OFFİCE</h1>
            <h1>We help small businesses with big ideas</h1>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center gap-5 py-20 px-10">
              <BsTelephone className="w-20 h-20 text-blue-400" />
              <div className="text-xl font-bold">
                <h4>georgia.young@example.com</h4>
                <h4>georgia.young@apple.com</h4>
              </div>
              <h1 className="text-xl font-bold">Get Support</h1>
              <button className="text-blue-400 border-blue-400 border border-double py-3 px-7 rounded-xl">
                Submit Request
              </button>
            </div>
            <div className="flex flex-col items-center gap-5 py-20 px-10 bg-black">
              <MdLocationOn className="w-20 h-20 text-blue-400" />
              <div className="text-xl font-bold text-white">
                <h4>georgia.young@example.com</h4>
                <h4>georgia.young@apple.com</h4>
              </div>
              <h1 className="text-xl font-bold text-white">Get Support</h1>
              <button className="text-blue-400 border-blue-400 border border-double py-3 px-7 rounded-xl">
                Submit Request
              </button>
            </div>
            <div className="flex flex-col items-center gap-5 py-20 px-10">
              <BsEnvelope className="w-20 h-20 text-blue-400" />
              <div className="text-xl font-bold">
                <h4>georgia.young@example.com</h4>
                <h4>georgia.young@apple.com</h4>
              </div>
              <h1 className="text-xl font-bold">Get Support</h1>
              <button className="text-blue-400 border-blue-400 border border-double py-3 px-7 rounded-xl">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center pb-20">
        <PiArrowBendRightDownBold className="w-20 h-20 text-blue-400" />
        <div className="flex flex-col gap-10">
          <h1 className="font-bold">WE Can't WAIT TO MEET YOU</h1>
          <h1 className="font-bold text-6xl">Let's Talk</h1>
          <button className="bg-blue-400 text-white py-3 px-7 rounded-xl">
            Try it free now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
