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
        <div className="md:min-w-full md:flex md:bg-yellow-300 md:text-white md:justify-between md:items-center xl:flex xl:min-w-full xl:bg-black text-white xl:justify-between xl:items-start xl:min-h-40 xl:h-14 p-3">
          <div className="flex flex-row items-center gap-8">
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
      <div className="flex pr-6 pl-3 h-14 justify-start items-center gap-40 ">
        <div className="flex items-start justify-center ml-8 ">
          <div className="text-lg w-32">Hepsi Orada</div>
        </div>
        <div className="flex items-center justify-around w-full ">
          <div>
            <ul className="flex flex-row gap-7 items-start">
              <a href="http://localhost:3000/">Home</a>
              <a href="http://localhost:3000/product">Shop</a>
              <a href="http://localhost:3000/about">About</a>
              <a href="http://localhost:3000/">Blog</a>
              <a href="http://localhost:3000/team">Contact</a>
              <a href="http://localhost:3000/products">Pages</a>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center text-blue-500">
              <LiaSignInAltSolid />
              <a href="http://localhost:3000/login">Login</a>
              <a href="http://localhost:3000/register">/ Register</a>
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <BsSearch />
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <AiOutlineShoppingCart />1
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <AiOutlineHeart />2
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
