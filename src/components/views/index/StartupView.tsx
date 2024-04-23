import React from "react";
import { startups } from "../../../assets/startups";
import Link from "next/link"
import InfiniteAutoSlider from "../../InfiniteAutoSlider";

const StartupView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-dark-100 text-dark-500">
      <div className="w-full  flex flex-col items-center py-20 px-4 sm:px-10 md:px-20 gap-8 text-sm sm:text-base scrollbarHide scrollbarHideSafari">
        <h2 className="w-full max-w-[1100px] lg:px-10 font-bold text-3xl sm:text-4xl text-dark-500 indent-2 pb-8">
          Startups <span className="text-dark-200">Incubator</span>
        </h2>
        <p className="w-full lg:px-10 max-w-[1100px]">
          Check out all the startups created and shaped by{" "}
          <b>Blockchain Student Association</b> members.
        </p>
        <div className="w-full overflow-hidden relative inline-flex">
          <div className=" overflow-x-auto hidden md:inline-flex gap-10 px-6 md:px-14 w-full max-w-fit  ">
            {startups.map((startup, index) => (
              <Startup
                key={`homeStartup${index}`}
                img={startup.img}
                title={startup.title}
                description={startup.description}
                link={startup.link}
              />
            ))}
          </div>

          <InfiniteAutoSlider content={startups} />
          <div className="absolute top-0 bottom-0 left-0 w-6 md:w-14 bg-gradient-to-r from-dark-100 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-6 md:w-14 bg-gradient-to-l from-dark-100 to-transparent" />
        </div>
        <Link
          href="startups"
          className="rounded-md md:hidden uppercase bg-transparent hover:bg-dark-500 border border-dark-500 text-dark-500 font-medium hover:text-dark-100 hover:border-dark-100 duration-100 px-10 py-2"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default StartupView;

const Startup = ({ img, title, description, link, key }) => {
  return (
    <div
      key={key}
      className="w-full max-w-[400px] shrink-0 p-4 sm:p-10 flex flex-col gap-8 items-center justify-between bg-dark-900 rounded-lg"
    >
      <img src={img} className="" alt={title + " logo"} />
      <h4 className="w-full font-semibold">{title}</h4>
      <p className="w-full italic text-sm">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit relative rounded-md uppercase bg-transparent hover:bg-transparent border border-white text-dark-500 font-medium hover:text-dark-100 hover:bg-white duration-100 px-10 py-2 mt-3"
      >
        Discover
      </Link>
    </div>
  );
};
