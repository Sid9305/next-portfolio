import React from "react";
import Image from "next/image";
const Page = () => {
  return (
    <div className="ml-40 mt-12 mr-40">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl">My Works</h1>
        <p className="text-gray-400 cursor-pointer">[ View all &#8599; ]</p>
      </div>
      <hr className="mt-px" />

      <div className="flex">
        <div className="basis-1/3">
          <h3 className="text-xl font-bold mt-3">Title</h3>
          <h1 className=" text-3xl font-bold mt-1">Tagline</h1>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
            asperiores architecto atque odit inventore temporibus deserunt unde
            laudantium sequi quia quasi quo vitae esse voluptates necessitatibus
            tempora delectus officiis nobis aliquid adipisci.
          </p>
        </div>
        <div className="basis-1/3">
          <Image
            className="animate-pop-up"
            src="/iphone2.svg"
            alt="iPhone"
            width={600}
            height={158}
            priority
          />
        </div>
        <div className="basis-1/3"></div>
      </div>
    </div>
  );
};

export default Page;
