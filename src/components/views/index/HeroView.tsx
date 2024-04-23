import React from "react";
import hero2 from "../../../images/hero/bsa_illus_3.webp";
import earth from "../../../images/hero/earth.webp";
import { CgArrowLongDownL } from "react-icons/cg";
import Link from "next/link";
import BSALogo from "../../../images/hero/BSALogo";
import BoxText from "../../BoxText";
import NewsPopUp from "../../NewsPopUp";

const Hero = () => {
  return (
    <div className="bg-dark-100 flex flex-col items-center justify-center py-20 md:py-10 font-semibold min-h-[700px] h-screen w-full relative">
      <div className="flex flex-col lg:flex-row w-full p-0 items-center justify-evenly">
        <div className="flex flex-col items-center gap-10 w-full max-w-[700px] xl:max-w-full xl:w-[45%]">
          <BSALogo classname="w-full md:w-full" />
          <BoxText
            text={
              <p className="text-dark-500 max-w-[400px] m-5 mb-3 font-normal">
                The Blockchain Student Association of EPFL is one the most
                active group of young passionate builders in Web3.
              </p>
            }
          />
          <Link
            href="#JoinUs"
            className="rounded-md uppercase bg-transparent hover:bg-dark-500 border border-dark-500 text-dark-500 font-medium hover:text-dark-100 hover:border-dark-100 duration-100 px-10 py-2"
          >
            Join
          </Link>
        </div>
        <div className="relative w-full md:w-[45%] max-w-[1000px] overflow-hidden hidden xl:inline">
          <a className="w-full flex">
            <img src={hero2} className="w-full z-10" />
            <img
              src={earth}
              className="w-full absolute z-20 animate-spin-slow "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
