import React from "react";
import { BsInstagram, BsTelephone, BsSearch } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { LiaFacebook, LiaSignInAltSolid } from "react-icons/lia";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center h-14 ">
        <div className="flex w-full bg-black text-white justify-between items-start min-h-40 h-14 p-3">
          <div className="flex flex-row items-center gap-3">
            <div className="flex items-center gap-2">
              <BsTelephone />
              <span> 532 78 98 78</span>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineMail />
              <span> example@example.com</span>
            </div>
          </div>
          <div className="flex">
            <span>Follow Us and Get 40% off</span>
          </div>
          <div className="flex flex-row p-1 items-start gap-2.5">
            <div>
              <span>Follow us:</span>
            </div>
            <div className="flex gap-1.5 items-start justify-center pr-0 ">
              <div className="flex p-1 items-start gap-2.5">
                <BsInstagram />
              </div>
              <div className="flex p-1 items-start gap-2.5">
                <FiTwitter />
              </div>
              <div className="flex p-1 items-start gap-2.5">
                <FiYoutube />
              </div>
              <div className="flex p-1 items-start gap-2.5">
                <LiaFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pr-6 pl-3 h-14 justify-end items-start gap-10">
        <div>
          <h1>Hepsi Orada</h1>
        </div>
        <div className="flex items-center gap-96">
          <div>
            <ul className="flex flex-row gap-4 items-start">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center text-blue-500">
              <LiaSignInAltSolid />
              Login / Register
            </div>
            <div className="flex items-center gap-1">
              <BsSearch />
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineShoppingCart />1
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineHeart />2
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
