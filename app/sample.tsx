import React from "react";
import Image from "next/image";

const ProjectData = [
  {
    id: 1,
    title: "Project 1",
    tagline: "Project Tagline 1",
    images: ["/iphone2.svg", "/iphone2.svg"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, asperiores architecto atque odit inventore temporibus deserunt unde laudantium sequi quia quasi quo vitae esse voluptates necessitatibus tempora delectus officiis nobis aliquid adipisci.",
    link: "https://example.com",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Project 2",
    tagline: "Project Tagline 2",
    images: ["/iphone2.svg"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, asperiores architecto atque odit inventore temporibus deserunt unde laudantium sequi quia quasi quo vitae esse voluptates necessitatibus tempora delectus officiis nobis aliquid adipisci.",
    link: "https://example.com",
    skills: ["React", "Firebase", "Tailwind CSS"],
  },
];

const Page = () => {
  return (
    <div className="ml-40 mt-12 mr-40">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl">My Works</h1>
        <p className="text-gray-400 cursor-pointer">[ View all &#8599; ]</p>
      </div>
      <hr className="mt-px" />

      {/* Project List */}
      {ProjectData.map((project, index) => (
        <div key={index} className="flex mt-10">
          {/* Project Details */}
          <div className="basis-1/3">
            <h3 className="text-xl font-bold mt-3">{project.title}</h3>
            <h1 className="text-3xl font-bold mt-1">{project.tagline}</h1>
            <p className="mt-4 text-gray-400">{project.description}</p>
          </div>

          {/* Project Image */}
          <div className="basis-1/3 flex items-center justify-center">
            <Image
              className="animate-pop-up"
              src={project.images[0]}
              alt={project.title}
              width={600}
              height={158}
              priority
            />
          </div>

          {/* Project Skills & Link */}
          <div className="basis-1/3 flex flex-col m-10 justify-between">
            {/* Skills */}
            <div className="flex gap-4 flex-wrap">
              {project.skills.map((skill, skillIndex) => (
                <button
                  key={skillIndex}
                  className="rounded-2xl border border-[#BEBBBB] bg-neutral-100 text-[#BEBBBB] border-solid px-4 py-2"
                >
                  {skill}
                </button>
              ))}
            </div>

            {/* View Project Link */}
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold underline-offset-2"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
