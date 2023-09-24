import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="flex px-60 bg-custom-gray items-start h-20">
        <div className="flex items-center py-7 justify-between  w-full ">
          <div>HepsiOrada</div>
          <div className="flex px-14 gap-4  ">
            <BiLogoFacebookCircle />
            <FaInstagram />
            <CiTwitter />
          </div>
        </div>
      </div>
      <div className="ikinci div">
        <div className="flex gap-16">
          <div>Company İnfo</div>
          <div> Legal</div>
          <div>Features</div>
          <div>Resources</div>
          <div>Get in Touch</div>
        </div>
      </div>
      <div className="flex px-60 bg-custom-gray">
        <div className="flex py-6 flex-col items-start flex-shrink-0">
          <div className="flex items-start">
            Made With Love By Turkiye. All Right Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
