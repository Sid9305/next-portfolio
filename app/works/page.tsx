"use client"; // Ensure it's a client component in Next.js

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ProjectData = [
  {
    id: 1,
    title: "Project 1",
    tagline: "Project Tagline 1",
    images: ["/iphone2.svg", "/iphone.png"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, asperiores architecto atque odit inventore temporibus deserunt unde laudantium sequi quia quasi quo vitae esse voluptates necessitatibus tempora delectus officiis nobis aliquid adipisci.",
    link: "https://example.com",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Project 2",
    tagline: "Project Tagline 2",
    images: ["/iphone2.svg", "/iphone.png"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, asperiores architecto atque odit inventore temporibus deserunt unde laudantium sequi quia quasi quo vitae esse voluptates necessitatibus tempora delectus officiis nobis aliquid adipisci.",
    link: "https://example.com",
    skills: ["React", "Firebase", "Tailwind CSS", "React", "Firebase"],
  },
  {
    id: 3,
    title: "Project 3",
    tagline: "Project Tagline 3",
    images: ["/iphone2.svg", "/iphone.png"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, asperiores architecto atque odit inventore temporibus deserunt unde laudantium sequi quia quasi quo vitae esse voluptates necessitatibus tempora delectus officiis nobis aliquid adipisci.",
    link: "https://example.com",
    skills: ["React", "Firebase", "Tailwind CSS", "React", "Firebase"],
  },
];

const Page = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // Project navigation
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Image navigation per project

  const currentProject = ProjectData[currentProjectIndex];

  // Handle Project Navigation
  const handleProjectChange = (index: number) => {
    setCurrentProjectIndex(index);
    setCurrentImageIndex(0); // Reset image index when changing projects
  };

  // Handle Image Navigation
  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

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
    <div className="sm:mx-40 mt-12">
      {/* Header */}
      <div className="ml-10 sm:ml-0 flex justify-start sm:flex-row flex-col sm:justify-between">
        <h1 className="font-bold text-2xl sm:text-4xl">My Works</h1>
        <p className="text-gray-400 text-l cursor-pointer">
          [ View all &#8599; ]
        </p>
      </div>
      <hr className="mx-10 sm:mx-0 mt-px" />

      <div className=" flex flex-col xl:flex-row">
        {/* Left Section - Text */}
        <div className="mx-10 sm:mx-0 basis-1/3">
          <h3 className="text-l sm:text-xl font-bold mt-3">
            {currentProject.title}
          </h3>
          <h1 className="text-xl sm:text-3xl font-bold mt-1">
            {currentProject.tagline}
          </h1>
          <p className="mt-4 text-l sm:text-xl text-gray-400">
            {currentProject.description}
          </p>
        </div>

        {/* Middle Section - Image Slideshow */}
        <div
          className="min-[425px]:ml-10 min-[375px]:ml-4 basis-1/3 relative flex flex-col items-center justify-center animate-pop-up"
          style={{ width: "max-content" }}
        >
          <Image
            className=" animate-pop-up mb-4 sm:w-full"
            src={currentProject.images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            width={screenSize === "mobile" ? 350 : 700}
            height={screenSize === "mobile" ? 300 : 250}
            priority
          />

          {/* Image Dot Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {currentProject.images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={() => handleImageChange(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Section - Skills */}
        {/* <div className="basis-1/3 flex xl:flex-row flex-col m-10 justify-between">
        <div className="flex gap-4 xl:m-0 m-5 flex-wrap xl:justify-initial justify-center"> */}

        <div className="basis-1/3 flex flex-col m-10 justify-center sm:justify-between">
          <div className="flex gap-2 sm:gap-4 xl:m-0 sm:m-5 m-2 flex-wrap xl:justify-start justify-center">
            {currentProject.skills.map((skill, index) => (
              <button
                key={index}
                className="rounded-2xl flex-row border border-[#BEBBBB] bg-neutral-100 text-[#BEBBBB] border-solid px-4 py-2"
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="justify-center">
            <a
              href={currentProject.link}
              className="underline font-bold text-center underline-offset-2"
            >
              View Project &rarr;
            </a>
          </div>
        </div>

        {/* Project Navigation Buttons */}
        <div className="basis-1/16 flex sm:flex-row xl:flex-col justify-center">
          <div className="bg-neutral-100 flex sm:flex-row xl:flex-col rounded-xl w-min gap-4">
            {ProjectData.map((project, index) => (
              <button
                key={project.id}
                className={`rounded-2xl text-[#BEBBBB] border-solid px-2 py-4 ${
                  index === currentProjectIndex ? "text-black" : ""
                }`}
                onClick={() => handleProjectChange(index)}
              >
                {project.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
