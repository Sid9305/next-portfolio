"use client"; // Ensure it's a client component in Next.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import ripple from "../../ripple.json";
const ProjectData = [
  {
    id: 1,
    title: "Fitness X 🏋️‍♀️",
    tagline: "Headstart to Your Health Journey",
    images: [
      "/proj1_1.png",
      "/proj1_2.png",
      "/proj1_3.png",
      "/proj1_4.png",
      "/proj1_5.png",
    ],
    description:
      "A smart fitness app powered by Google Fit API that connects seamlessly with your Bluetooth devices like smartwatches and weighing machines. Create personalized workout, meal, and food plans tailored to your goals—whether it's a vitamin-rich diet or weight gain workouts.",
    link: "https://example.com",
    skills: ["Flutter", "Firebase", "Google Fit", "Android Studio", "Xcode"],
  },
  {
    id: 2,
    title: "Minimalistic Social Media App 💬",
    tagline: "Less Noise, More Connection.",
    images: ["/proj2_1.png", "/proj2_2.png", "/proj2_3.png", "/proj2_4.png"],
    description:
      "A distraction-free social media platform where simplicity reigns. Share your thoughts with quick tweets and focus on genuine connections without the clutter of endless reels and distractions. Built with Firebase for seamless performance.",
    link: "https://example.com",
    skills: ["Flutter", "Firebase", "Provider", "Android Studio", "Xcode"],
  },
  {
    id: 3,
    title: "Minimalistic Food Delivery App 🍔",
    tagline: "Food, Fast. No Fuss.",
    images: [
      "/proj3_1.png",
      "/proj3_2.png",
      "/proj3_3.png",
      "/proj3_4.png",
      "/proj3_5.png",
      "/proj3_6.png",
    ],
    description:
      "Experience effortless food delivery with an app designed for simplicity. Easy sign-in, quick ordering, and a clean interface make your food cravings just a tap away.",
    link: "https://example.com",
    skills: ["Flutter", "Firebase", "Android Studio", "Xcode"],
  },
  // {
  //   id: 4,
  //   title: "Minimalist Habit Tracker 📊",
  //   tagline: "Small Steps, Big Changes.",
  //   images: ["/proj1_1.png", "/proj1_1.png"],
  //   description:
  //     "Track your daily habits with a clean and interactive heat map design. Stay motivated, visualize your progress, and build routines that stick—one habit at a time.",
  //   link: "https://example.com",
  //   skills: [
  //     "Flutter",
  //     "Firebase",
  //     "Android Studio",
  //     "Xcode",
  //     "Charts_flutter ",
  //   ],
  // },
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

  // Add a loading state
  const [isLoading, setIsLoading] = useState(false);

  // Handle Image Navigation with loading state
  const handleImageChange = (index: number) => {
    setIsLoading(true); // Start buffering
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
    <div className="lg:mx-40 sm:mx-28 h-full mt-12">
      {/* Header */}
      <div className="ml-10 sm:ml-0 flex justify-start  sm:flex-row flex-col sm:justify-between">
        <h1 className="font-bold text-2xl sm:text-4xl">My Works</h1>
        <p className="text-gray-400 text-l cursor-pointer">
          [ View all &#8599; ]
        </p>
      </div>
      <hr className="mx-10 sm:mx-0 mt-px" />

      <div className=" sm:h-[2vh]"></div>
      <div className="flex justify-center h-full items-center">
        <div className="max-sm:items-center md:max-lg:items-center flex flex-col xl:flex-row ">
          {/* Left Section - Text */}
          <div className="mx-10 sm:mx-0 basis-1/3">
            <h3 className="text-l sm:text-xl font-bold mt-3">
              {currentProject.title}
            </h3>
            <h1 className="text-xl sm:text-2xl  font-bold mt-1">
              {currentProject.tagline}
            </h1>
            <p className="mt-4 text-l sm:text-xl text-gray-400">
              {currentProject.description}
            </p>
          </div>

          {/* Middle Section - Image Slideshow */}
          <div
            className="min-[425px]:ml-10  min-[375px]:ml-4 basis-1/3 relative flex flex-col items-center justify-center animate-pop-up"
            style={{ width: "max-content" }}
          >
            <Image
              className="animate-pop-up mb-4 sm:w-11/12 md:w-9/12 max-sm:w-6/12"
              src={currentProject.images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              width={screenSize === "mobile" ? 350 : 500}
              height={screenSize === "mobile" ? 300 : 150}
              priority
              onLoadingComplete={() => setIsLoading(false)} // Stop buffering
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
                <div className="relative flex items-center justify-center">
                  <div className="flex items-center justify-center h-screen">
                    <Lottie animationData={ripple} loop={true} />
                  </div>
                </div>
              </div>
            )}
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
              {/* <a
                href={currentProject.link}
                className="underline font-bold text-center underline-offset-2"
              >
                View Project &rarr;
              </a> */}
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
      <div className="sm:h-[15vh]"></div>
    </div>
  );
};

export default Page;
