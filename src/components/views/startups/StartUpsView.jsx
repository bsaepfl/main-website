import React from "react";
import { startups } from "../../../assets/startups";
import classNames from "classnames";

const StartUpsView = () => {
  return (
    <div
      id="StartUps"
      className="w-full flex flex-col justify-start items-center bg-dark-100 text-dark-500 md:mt-[70px]"
    >
      <div className="w-full max-w-[1400px] flex flex-col items-center py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base ">
        <h2 className="max-w-[1100px] w-full font-bold text-3xl sm:text-4xl text-dark-500 indent-2 pb-8 xl:px-10">
          Startups <span className="text-dark-200">Accelerator</span>
        </h2>
        <p className="max-w-[1100px] text-left w-full  xl:px-10">
          The BSA is also a wonderful startups incubator. We incentivize
          students and collaborators to build as much value as they can.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-12">
          {startups.map((startup, index) => (
            <Startup
              img={startup.img}
              title={startup.title}
              description={startup.description}
              link={startup.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartUpsView;

const Startup = ({ img, title, description, link, index }) => {
  const l = startups.length;
  return (
    <div
      className={classNames(
        " relative flex flex-col w-full transition-all duration-100 transform rounded-lg overflow-hidden bg-opacity-10 group hover:bg-opacity-75 col-span-1 md:col-span-2",
        l % 3 === 0
          ? index + 1 === l
            ? `md:col-start-2 xl:col-start-auto `
            : ""
          : "",
        l % 3 === 1
          ? index + 1 === l
            ? `md:col-start-2 xl:col-start-3 `
            : ""
          : "",
        l % 3 === 2
          ? index + 1 === l
            ? `col-start-auto xl:col-start-4 `
            : index + 2 === l
            ? "col-start-auto xl:col-start-2 "
            : ""
          : ""
      )}
      style={{ willChange: "transform" }}
    >
      <div className="relative flex flex-col items-center w-full pt-12 pb-20 overflow-visible transition-all duration-100 bg-dark-900  ">
        <div className="w-9/12 h-80 flex flex-col gap-8">
          <div className="flex items-center justify-center h-1/5 mb-2">
            {img ? (
              <img src={img} className="" alt={title + " logo"} />
            ) : (
              <div className="z-20 flex flex-row items-center justify-center w-12 h-12 text-3xl text-primary-200">
                ?
              </div>
            )}
          </div>
          <div className="w-full text-left">
            <span className="text-white sm:text-base text-sm font-semibold pointer-events-none">
              {title}
            </span>
          </div>
          <div className=" w-full text-left">
            <span className="text-white text-sm italic font-normal pointer-events-none">
              {description}
            </span>
          </div>

          <div className="w-full flex items-center justify-center ">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "absolute bottom-10 rounded-md uppercase bg-transparent hover:bg-dark-500 border border-dark-500 text-dark-500 font-medium hover:text-dark-100 hover:border-dark-100 duration-100 px-10 py-2",
                !link && "pointer-events-none"
              )}
            >
              DISCOVER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
