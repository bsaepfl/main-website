import React from "react";
import Image from "next/image";
import "../styles/line.css";
import "../styles/pastEvents.css";
import NewEvent from "./NewEvent";
import When from "./When";
import solidity_course1 from "../../public/events/solidity_hugo.webp";
import solidity_course2 from "../../public/events/solidity_pierre.webp";
import events_illu from "../../public/events/event_illustration.webp";
import events_illu_b from "../../public/events/event_illustration_b.webp";
import events_illu_phone from "../../public/events/event_illustration_phone.webp";
import events_illu_phone_b from "../../public/events/event_illustration_phone_b.webp";
import logo_paraswap from "../../public/events/Paraswap_logo_v2.webp";
import logo_chainsecurity from "../../public/events/chainsecurity_logo.webp";

import PastEvent from "./PastEvent";

const Events = () => {
  return (
    <div className="bg-dark-100 w-full pt-40 lg:pt-32 pb-80 px-14 lg:px-20 xl:px-36 2xl:px-52 font-bold z-0">
      <div className="flex flex-col gap-32 lg:gap-14 lg:mb-10 w-full">
        <div className="flex flex-col lg:flex-row justify-start gap-32 lg:gap-0 lg:justify-between 2xl:pr-20 w-full h-full items-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start gap-10 lg:h-80">
            <div className="flex flex-col md:flex-row md:justify-start items-center gap-4">
              <span className="bg-gradient-to-r bg-clip-text text-transparent  from-gray-100 to-gray-500 text-6xl md:text-6xl">
                PAST
              </span>
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-6xl md:text-6xl">
                EVENTS
              </span>
            </div>
            <div className="hidden lg:flex lg:flex-row h-full">
              <div className="flex flex-col h-full items-center px-1 ">
                <div className="circle_blue"></div>
                <div className="w-0 h-48 border-4 rounded-b-xl border-dark-600 drop-shadow-6xl"></div>
              </div>
              <div className="w-full"></div>
            </div>
          </div>
          <div className="h-auto hidden lg:block">
            <Image src={events_illu} alt="illustration events" width={300} height={300}/>
          </div>
          <div className="h-auto lg:hidden">
            <Image src={events_illu_phone} alt="illustration events" width={100} height={100}/>
          </div>
        </div>

        <div className="">
          <NewEvent
            titleOrange="Weekly"
            titleGray="Meetings"
            titleGray2=""
            description="These meetings are usually discussion-oriented we focus on the general aspects of cryptocurrencies and DEFI. We also invite intervenents related to the crypto environnement."
          />
        </div>
        <div className="flex flex-row justify-center lg:justify-start w-full">
          <div className="hidden lg:flex lg:flex-col justify-center items-center w-10 h-auto">
            <div className="w-0 h-full border-4 rounded-xl border-dark-600 drop-shadow-6xl"></div>
          </div>
          <div className="w-full hidden md:flex md:flex-col lg:hidden gap-16 mb-20">
            <div className="flex flex-row w-full justify-center gap-16">
              <When
                id="1"
                title="WHEN ?"
                list_1="Each Thursday from 18h to 19h30"
                list_2=""
              />
              <When id="2" title="WHERE ?" list_1="INF 202" list_2="" />
            </div>
            <div className="flex flex-row justify-center">
              <When
                id="3"
                title="FOR WHO ?"
                list_1="Newcommers and"
                list_2="BSA Members"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:hidden lg:flex lg:flex-row lg:items-start w-full lg:py-36 justify-center gap-16 xl:gap-20 2xl:gap-24">
            <When
              id="1"
              title="WHEN ?"
              list_1="Each Thursday from 18h to 19h30"
              list_2=""
            />
            <When id="2" title="WHERE ?" list_1="INF 202" list_2="" />
            <When id="3" title="FOR WHO ?" list_1="Newcommers and BSA members" list_2="" />
          </div>
        </div>

        <div>
          <NewEvent
            titleOrange="Solidity"
            titleGray="Crash"
            titleGray2="Course"
            description="The official Solidity Crash Course brought to you by the EPFL Blockchain Student Association."
          />
        </div>

        <div className="flex flex-row justify-center lg:justify-start w-full">
          <div className="hidden lg:flex lg:flex-col justify-center items-center w-10 h-auto">
            <div className="w-0 h-full border-4 rounded-xl border-dark-600 drop-shadow-6xl"></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-32 w-full">
            <div className="w-full hidden md:flex flex-col lg:hidden gap-16">
              <div className="flex flex-row w-full justify-center gap-16">
                <When
                  id="1"
                  title="WHEN ?"
                  list_1="2023 Edition TBA"
                  list_2="8 weeks duration"
                />
                <When
                  id="2"
                  title="WHERE ?"
                  list_1="2023 Edition TBA"
                  list_2=""
                />
              </div>
              <div className="flex flex-row justify-center">
                <When id="3" title="FOR WHO ?" list_1="Everyone" list_2="" />
              </div>
            </div>
            <div className="flex flex-col items-center md:hidden lg:flex lg:flex-row lg:items-start w-full lg:py-36 justify-center gap-16 xl:gap-20 2xl:gap-24">
              <When
                id="1"
                title="WHEN ?"
                list_1="2025 Edition TBA"
                list_2="8 weeks duration"
              />
              <When
                id="2"
                title="WHERE ?"
                list_1="2025 Edition TBA"
                list_2=""
              />
              <When id="3" title="FOR WHO ?" list_1="Everyone" list_2="" />
            </div>
            <div className="flex flex-row justify-center w-full md:mb-24 lg:mb-20">
              <button
                type="button"
                className="cursor-not-allowed bg-[#021741] rounded-full text-3xl font-bold p-5"
              >
                <span className="pl-5 pr-2 bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-xl md:text-3xl select-none">
                  APPLICATIONS
                </span>
                <span className="pr-5 bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-xl md:text-3xl select-none">
                  CLOSED
                </span>
              </button>
            </div>
            <div className=" w-full md:w-11/12 lg:w-10/12 rounded-lg">
              <Image
                src={solidity_course2}
                alt="Solidity Crash Course Blockchain Student Association Lausanne"
                className="rounded-2xl w-full h-auto"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full md:w-11/12 lg:w-10/12 rounded-lg lg:pb-10">
              <Image
                src={solidity_course1}
                alt="Solidity Crash Course Blockchain Student Association Lausanne"
                className="rounded-2xl w-full h-auto"
                layout="responsive"
                width={700}
                height={475}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="hidden lg:flex flex-col justify-start items-center w-10 h-50 gap-10">
          <div className="w-0 h-10 border-4 rounded-xl border-dark-600 drop-shadow-6xl"></div>
          <div className="w-0 h-10 border-4 rounded-xl border-dark-600 drop-shadow-6xl"></div>
        </div>
        <div className="w-full"></div>
      </div>

      <div className="flex flex-col gap-32 lg:gap-14 lg:mb-10 w-full mt-40">
       
        <PastEvent
          titleBlue="Workshop"
          titleGray="Paraswap"
          description="Talk with Mounir Benchemled, CEO of Paraswap"
          image={logo_paraswap.src}
          image_alt="logo-Paraswap"
          lien="https://www.paraswap.io/"
          style="paraswap_logo"
        />

        <PastEvent
          titleBlue="Workshop"
          titleGray="ChainSecurity"
          description="Blockchain Security firm specialising in smart contracts and security audits. Learn more about the security challenges facing blockchain infrastructure such as Ethereum and understand how smart contracts can be used safely."
          image={logo_chainsecurity.src}
          image_alt="logo-ChainSecurity"
          lien="https://chainsecurity.com/"
          style="paraswap_logo"
        />
      </div>
      <div className="flex flex-row">
        <div className="hidden lg:flex flex-col justify-start items-center w-10 h-50 gap-10">
          <div className="w-0 h-10 border-4 rounded-xl border-dark-400 drop-shadow-6bxl"></div>
          <div className="w-0 h-10 border-4 rounded-xl border-dark-400 drop-shadow-6bxl"></div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Events;
