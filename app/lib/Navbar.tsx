"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Ensure client rendering

  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true); // Set true once component is mounted
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-transparent sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-5 md:p-10">
        {/* Logo */}
        <div className="bg-black sm:p-5 p-3 sm:rounded-3xl  rounded-xl">
          <Link
            href="#home"
            className=" text-xs sm:text-xl font-bold text-white"
          >
            Siddhi Mehta
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <div
          className="lg:hidden text-3xl cursor-pointer z-20"
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Nav Links with Background */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          }  lg:flex flex-col lg:flex-row gap-4 lg:gap-8 absolute lg:relative top-20 lg:top-0 left-0 w-full lg:w-auto bg-neutral-100 lg:bg-Neutral-100 lg:p-5 shadow-lg lg:shadow-none rounded-3xl z-20`}
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
  );
};

export default Navbar;
