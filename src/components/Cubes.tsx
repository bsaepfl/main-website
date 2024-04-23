import React, { FunctionComponent, useEffect, useState } from "react";
import hero from "../images/hero/blockchain.png";
import hero2 from "../images/hero/bsa_illus_2.png";
import { CgArrowLongDownL } from "react-icons/cg";
import cube from "../images/homepage/The_cube2.webp";
import Image from "next/image";

const Cube = () => {
  return (
    <div
      className="bg-dark-100 flex flex-col items-center pb-36 font-semibold"
      id="what_we_do"
    >
      <div className="h-40" />
      <div className="md:grid-cols-2 grid md:gap-16 gap-20 lg:gap-32 -mt-20 w-10/12 sm:w-8/12">
        <Block
          title="Startups"
          description="The BSA is also a wonderful startups incubator. 
                    We incentivize students to build as much value as they can."
          link_view="/startups"
        />
        <Block
          title="Events"
          description="We host lectures and 
                    zooms with leaders in 
                    the crypto and 
                    blockchain space."
          link_view="/events"
        />
        <Block
          title="Education"
          description="We develop online 
                    educational resources 
                    for individuals who are 
                    interested in learning 
                    more about crypto and 
                    blockchain."
          link_view="/education"
        />
        <Block
          title="Governance"
          description="We participate in 
                    multiple DAOs 
                    governance decisions."
          link_view="https://t.me/+Yg2GqxoXDIIwYWJk"
        />
        <Block
          title="Careers"
          description="We relay jobs and 
                    facilitate connections 
                    between students and 
                    web3 related companies."
          link_view="https://t.me/+fYiNmD38GrdlODk8"
        />
      </div>
    </div>
  );
};

export default Cube;

const Block: FunctionComponent<{
  img?: string;
  title?: string;
  description?: string;
  link_view?: string;
}> = ({ title, description, link_view }) => {
  return (
    <div className="relative group container items-left h-full bg-transparent">
      <a href={link_view} className="relative">
        <Image alt="cube" src={cube} className="hover:scale-105 duration-300" />
      </a>
      <div className="flex flex-col w-full h-full left-0 bottom-0 bg-transparent absolute pointer-events-none">
        <div className="bg-transparent z-20 h-2/6 w-full" />
        <div className="flex flex-row">
          <div className="bg-transparent w-2/6 z-30" />
          <div className="flex flex-col w-4/6 h-full gap-4 pr-4 pb-4">
            <span className="z-10 text-dark-300 text-2xl sm:text-3xl md:text-xl lg:text-2xl xl: pointer-events-none">
              {title}
            </span>
            <span className="z-10 text-dark-300 text-sm sm:text-base md:text-xs lg:text-sm pointer-events-none">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
