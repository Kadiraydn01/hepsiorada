import React, { useEffect } from "react";
import resim2 from "../images/ikinci.png";
import resim3 from "../images/ücüncü.png";
import resim4 from "../images/dördüncü.png";
import resim5 from "../images/besinci.png";
import resim6 from "../images/altinci.png";
import resim7 from "../images/yedinci.png";
import "../App.css";

const Logo = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []); // Empty dependency array means this effect runs once after initial render

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // Add Tailwind classes dynamically
      scroller.classList.add(
        "overflow-hidden",
        "animate-scroll",
        "animate-scroll-fast"
      );

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <div className="flex  px-44 justify-center items-center">
      <div
        className="max-w-800 mx-auto scroller"
        data-animated="true"
        data-speed="fast"
      >
        <ul className="scroller__inner flex gap-4">
          <li className="p-4">
            <img src={resim2} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim3} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim4} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim5} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim6} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim7} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim2} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim3} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim4} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim5} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim6} alt="resim" />
          </li>
          <li className="p-4">
            <img src={resim7} alt="resim" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Logo;
