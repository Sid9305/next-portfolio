"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
const Footer = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    // Ensure this code only runs on the client side
    const handleResize = () => {
      setScreenSize(window.innerWidth <= 768 ? "mobile" : "desktop");
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-2 max-sm:h-[30vh] sm:h-[25vh] bg-neutral-100 flex items-center max-sm:py-2 py-4">
      <div className="basis-1/2 flex items-center justify-center">
        <div className=" text-left flex flex-col gap-1">
          <h2 className="sm:text-xl text-sm font-bold">Connect With Me</h2>
          <a
            href="https://in.linkedin.com/in/siddhi-mehta-228048298"
            className="hover:underline text-gray-700 hover:font-bold hover:underline-offset-2"
          >
            LinkedIn &#8599;
          </a>
          <a
            href="https://github.com/Sid9305"
            className="hover:underline text-gray-700 hover:font-bold hover:underline-offset-2"
          >
            Github &#8599;
          </a>
        </div>
      </div>
      <div className="basis-1/2 flex items-center justify-center">
        <div className=" text-left flex flex-col">
          <div className="flex  w-max flex-row gap-2 sm:m-2">
            <button className="rounded-full border text-center border-gray-300 px-3 py-1">
              <MdOutlineLightMode size={screenSize === "mobile" ? 18 : 24} />
            </button>
            <div className="relative group inline-block">
              <button className="rounded-full border text-center border-gray-300 px-3 py-1">
                <MdOutlineNightlight size={screenSize === "mobile" ? 18 : 24} />
              </button>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                Coming Soon
              </div>
            </div>
          </div>
          <p className="sm:text-l text-sm">
            @2025 Siddhi Mehta. All rights reserved
          </p>
          <p className="sm:text-l text-xs text-gray-500">
            Made with &#x2665; and Chai
          </p>
          <p className="sm:text-l text-xs text-gray-500">
            (100% Ginger, served Hot. )
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
