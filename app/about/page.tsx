"use client";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";
const options = [
  {
    title: "Static Int. Educare ",
    subtitle: "MERN and Python Mentor",
    time: "June 2023 - July 2023",
  },
  {
    title: "CardifyMe",
    subtitle: "Founder",
    time: "Sept 2022",
  },
  {
    title: "Static Int. Educare ",
    subtitle: "Python Mentor",
    time: "June 2022 - July 2022",
  },
];

const EducationData = [
  {
    id: 1,
    title: "Diploma in Computer Engineering",
    subtitle: "Thakur Polytechnic",
    duration: "2020 - 2023",
    grade: "90.91%",
  },
  {
    id: 2,
    title: "Bachelor in Computer Engineering",
    subtitle: "Thadomal Shahani Engineering College",
    duration: "2023 - 2026",
    grade: "9.68 GPA",
  },
];

const Page = () => {
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

  const { theme } = useTheme();
  return (
    <div className="sm:mx-24 lg:mx-40 mx-10 mt-12 ">
      <h1 className="font-bold text-2xl sm:text-4xl mb-4">About Me</h1>
      <hr />
      <div className="mt-12 flex sm:flex-row flex-col ">
        <div className="basis-1/2 flex justify-center">
          <Image
            className=" animate-pop-up mb-4 sm:w-11/12 md:w-9/12 max-sm:w-9/12 "
            src="/Siddhi1.jpg"
            alt={`myphoto`}
            width={screenSize === "mobile" ? 450 : 500}
            height={screenSize === "mobile" ? 300 : 150}
            priority
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-center text-start">
          <h1 className="text-xl sm:text-2xl font-bold">Hi</h1>
          <h2 className="text-xl sm:text-2xl font-bold">
            I&apos;m Siddhi Mehta
          </h2>
          <p>Pursing B.E. in Thadomal Shahani Engineering College</p>
          <p className="text-neutral-400">
            I am a versatile developer with expertise in both web and app
            development. Currently, I am expanding my skill set by learning
            Next.js for web development, Swift for iOS app development, and
            Spring Boot for backend services. With a strong foundation in
            full-stack development, I am passionate about building seamless,
            high-performance applications across platforms.
          </p>
        </div>
      </div>

      <div className="mt-12 ">
        <h1 className="font-bold sm:text-end text-xl sm:text-4xl mb-4">
          My Experience
        </h1>
        <hr />
        <div className="mt-12 flex items-center justify-center">
          <Timeline position="alternate">
            {options.map((option, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <p>{option.time}</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {index < options.length - 1 && (
                    <TimelineConnector style={{ height: "100px" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <h3 className="font-bold">{option.title}</h3>
                  <p>{option.subtitle}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
      <div className="my-12 ">
        <h1 className="font-bold text-start text-xl sm:text-4xl mb-4">
          My Education
        </h1>
        <hr />
        <div className="md:my-4 mt-12 flex w-full justify-center">
          <div
            className={
              "flex h-[500px] w-max flex-col gap-4 lg:h-[250px] lg:flex-row justify-center md:my-4 sm:my-10"
            }
          >
            {EducationData.map((edu, index) => (
              <MagicCard
                className="cursor-pointer flex-col my-0 items-center justify-center p-2 sm:p-4 flex-wrap whitespace-nowrap shadow-2xl"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                key={index}
              >
                <h1 className="text-l sm:text-xl font-bold">{edu.title}</h1>
                <p className="text-[12px] sm:text-xl">{edu.subtitle}</p>
                <p className="text-xs sm:text-sm">{edu.duration}</p>
                <p className="text-xs sm:text-sm">{edu.grade}</p>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
