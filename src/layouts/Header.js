import React from "react";
import { BsInstagram, BsTelephone, BsSearch } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { LiaFacebook, LiaSignInAltSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import md5 from "md5";

import { SET_GRAVATAR_SUCCESS } from "../store/action/ActionType";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.email) {
      const fetchGravatarUrl = async () => {
        dispatch({ type: SET_GRAVATAR_SUCCESS, payload: gravatarUrl });
      };

      fetchGravatarUrl();
    }
  }, [dispatch, user]);

  let gravatarUrl = "";

  if (user && user.email) {
    gravatarUrl = `https://www.gravatar.com/avatar/${md5(user.email)}`;
  }
  return (
    <>
      <div className="xl:flex xl:justify-center xl:items-center xl:h-14 md:hidden">
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
          <div className="">
            <ul className="xl:flex md:flex xl:flex-row xl:ml-0 md:ml-12 md:flex-col xl:gap-7 md:gap-3 xl:py-0 md:py-10 md:mt-64 xl:mt-0 md:items-center xl:items-start">
              <a href="http://localhost:3000/">Home</a>
              <a href="http://localhost:3000/product">Shop</a>
              <a href="http://localhost:3000/about">About</a>
              <a href="http://localhost:3000/">Blog</a>
              <a href="http://localhost:3000/team">Contact</a>
              <a href="http://localhost:3000/products">Pages</a>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <div className="xl:flex xl:flex-row xl:items-center xl:text-blue-500 md:items-center md:text-blue-500 md:flex md:flex-row md:justify-center">
              {gravatarUrl ? (
                <div className="flex">
                  <img
                    className="mx-2"
                    src={gravatarUrl}
                    alt="User"
                    style={{
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <p className="text-sky-500 font-bold">{user.name}</p>
                </div>
              ) : (
                <div className="flex">
                  <LiaSignInAltSolid />
                  <a href="http://localhost:3000/login">Login</a>
                  <a href="http://localhost:3000/signup">/ Register</a>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <BsSearch />
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <AiOutlineShoppingCart />
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
