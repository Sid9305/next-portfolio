"use client";
import React from "react";
import Marquee from "@/components/ui/marquee";
import { SiWebmoney } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa6";
import { FaLaptopCode, FaDatabase, FaRobot } from "react-icons/fa";
import { MdOutlineAppShortcut } from "react-icons/md";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";
const skillsData = [
  {
    id: 1,
    name: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JS",
      "React JS",
      "Node JS",
      "Express JS",
      "Next JS",
    ],
    img: <SiWebmoney />,
  },
  {
    id: 2,
    name: "App Development",
    skills: ["Flutter", "Android Studio", "Firebase", "Figma"],
    img: <MdOutlineAppShortcut />,
  },
  {
    id: 3,
    name: "Backend and Database",
    skills: [
      "MongoDB",
      "Firebase",
      "MySQL",
      "Flask",
      "Django (Basics)",
      "Express JS",
      "Node JS",
    ],
    img: <FaDatabase />,
  },
  {
    id: 4,
    name: "Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
      "OpenCV",
      "Streamlit",
    ],
    img: <FaRobot />,
  },
  {
    id: 5,
    name: "Languages",
    skills: ["C", "C++", "Python", "Java", "Dart", "Solidity"],
    img: <FaLaptopCode />,
  },
  {
    id: 6,
    name: "Cloud Computing",
    skills: ["Azure"],
    img: <FaCloudflare />,
  },
];

const SkillsCard = ({
  img,
  name,
  skills,
}: {
  img: React.ReactNode;
  name: string;
  skills: string[];
}) => {
  const { theme } = useTheme();
  return (
    <MagicCard
      className="relative w-64 max-sm:w-56 cursor-pointer overflow-hidden rounded-xl border p-6"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <div className="flex flex-col items-start gap-2">
        <div className="text-4xl">{img}</div>
        <figcaption className="text-lg font-bold dark:text-white">
          {name}
        </figcaption>
      </div>
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="rounded-2xl border border-gray-300 px-3 py-1 max-sm:text-xs text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            {skill}
          </button>
        ))}
      </div>
    </MagicCard>
  );
};

const Page = () => {
  return (
    <div className="sm:mx-24 lg:mx-40 mx-10 mt-12 ">
      <h1 className="font-bold text-2xl sm:text-4xl mb-4">My Skills</h1>
      <hr />
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {skillsData.map((review) => (
            <SkillsCard key={review.id} {...review} />
          ))}
        </Marquee>
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default Page;
