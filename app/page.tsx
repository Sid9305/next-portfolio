"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after 1 second
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // Text appears after 1 second of the image animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section>
        {/* <div className=""></div> */}
        <div className="flex justify-center items-center m-0 z-1 relative">
          <div className="relative text-center">
            {/* Pop-up Text */}
            {showText && (
              <div className="absolute inset-0 flex justify-center items-center text-xs sm:text-3xl font-bold text-left text-gray-700 animate-pop-up z-10">
                Hello,
                <br />I am App Developer
              </div>
            )}

            {/* Image with animation */}
            <Image
              className="animate-pop-up sm:animate-rotate-fade"
              src="/iphone2.svg"
              alt="iPhone"
              width={500}
              height={158}
              priority
            />
          </div>
        </div>
        <div className="flex  items-center sm:justify-between m-auto flex-wrap justify-center">
          {/* First Column */}
          <div className="hidden sm:inline flex-1 p-4">
            {/* Content for the first column */}
          </div>

          {/* First Divider */}
          <div className="hidden sm:inline w-[2px] bg-neutral-100  h-[8vh] sm:h-[15vh]"></div>

          {/* Second Column */}
          <div className="hidden sm:inline flex-1 p-4">
            {/* Content for the second column */}
          </div>

          {/* Second Divider */}
          <div className="hidden sm:inline w-[2px] bg-neutral-100 h-[8vh] sm:h-[15vh]"></div>

          <div className="flex-1 p-4 flex justify-center items-center sm:justify-start sm:justify-items-start">
            <p className="text-xs sm:text-xl text-gray-700 cursor-pointer">
              I invent, I simply
              <br />
              <Link
                href="/about"
                className="underline  font-bold underline-offset-2"
              >
                about me &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
