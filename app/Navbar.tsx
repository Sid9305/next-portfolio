"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaPhoneAlt,
  FaProjectDiagram,
  FaLaptopCode,
  FaHome,
  FaArrowLeft,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-transparent sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto p-5 md:p-10">
          {/* Logo */}
          <div className="bg-black sm:p-5 p-3 sm:rounded-3xl  rounded-xl">
            <Link href="/" className=" text-xs sm:text-xl font-bold text-white">
              Siddhi Mehta
            </Link>
          </div>

          {/* Nav Links with Background */}
          <div
            className={`lg:inline hidden lg:flex lg:flex-row gap-4 lg:gap-8  lg:relative  lg:top-0 left-0 w-full lg:w-auto lg:bg-neutral-100 lg:p-5 lg:shadow-none lg:rounded-2xl`}
          >
            <ul className="flex lg:z-20 flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center p-2">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "border-b-2 border-black font-bold"
                      : "hover:border-b-2 hover:border-gray-400"
                  } block px-4 py-2 lg:p-0`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className={`${
                    pathname === "/works"
                      ? "border-b-2 border-black font-bold"
                      : "hover:border-b-2 hover:border-gray-400"
                  } block px-4 py-2 lg:p-0`}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className={`${
                    pathname === "/skills"
                      ? "border-b-2 border-black font-bold"
                      : "hover:border-b-2 hover:border-gray-400"
                  } block px-4 py-2 lg:p-0`}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact"
                      ? "border-b-2 border-black"
                      : "hover:border-b-2 hover:border-gray-400"
                  } block px-4 py-2 lg:p-0`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed top-1/4 right-0 w-13 bg-white bg-opacity-30 shadow-lg rounded-2xl p-4 flex flex-col gap-6 items-center z-50">
        <ul className="flex flex-col gap-6 items-center">
          <li onClick={toggleSidebar} className="text-black/50">
            <FaArrowLeft size={18} />
          </li>
          <li style={{ display: isSidebarVisible ? "inline" : "none" }}>
            <Link
              href="/"
              className={`flex flex-col items-center text-xs ${
                pathname === "/"
                  ? "text-black/50 font-bold"
                  : "text-gray-600/30"
              }`}
            >
              <FaHome size={18} />
              Home
            </Link>
          </li>
          <li style={{ display: isSidebarVisible ? "inline" : "none" }}>
            <Link
              href="/works"
              className={`flex flex-col items-center text-xs ${
                pathname === "/works"
                  ? "text-black/50 font-bold"
                  : "text-gray-600/30"
              }`}
            >
              <FaProjectDiagram size={18} />
              Works
            </Link>
          </li>
          <li style={{ display: isSidebarVisible ? "inline" : "none" }}>
            <Link
              href="/skills"
              className={`flex flex-col items-center text-xs ${
                pathname === "/skills"
                  ? "text-black/50 font-bold"
                  : "text-gray-600/30"
              }`}
            >
              <FaLaptopCode size={18} />
              Skills
            </Link>
          </li>

          <li style={{ display: isSidebarVisible ? "inline" : "none" }}>
            <Link
              href="/contact"
              className={`flex flex-col items-center text-xs ${
                pathname === "/contact"
                  ? "text-black/50 font-bold"
                  : "text-gray-600/30"
              }`}
            >
              <FaPhoneAlt size={18} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
