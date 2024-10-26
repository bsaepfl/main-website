import React from "react";
import classNames from "classnames";
import "../styles/startups.css";
import Image from "next/image";

const InfiniteAutoSlider = ({ content }: { content: any }) => {
  return (
    <div
      id="SliderContent"
      className={classNames(
        "w-fit py-16 overflow-x-auto inline-flex md:hidden shrink-0 content"
      )}
    >
      {content.map((item, index) => (
        <div
          className={classNames(
            "shrink-0 flex w-full max-w-[300px] select-none pointer-events-none",
            item?.title === "Digital agency for Web3 design and development:"
              ? "mr-4"
              : "mr-20"
          )}
          key={`imageStartup${index}`}
        >
          <Image
            className="w-full object-contain"
            src={item.img}
            alt={item?.title + " logo"}
            width={300}
            height={300}
          />
        </div>
      ))}
      {content.map((item, index) => {
        if (index < 3) {
          return (
            <div
              className={classNames(
                "shrink-0 flex w-full max-w-[300px] select-none pointer-events-none",
                item?.title ===
                  "Digital agency for Web3 design and development:"
                  ? "mr-4"
                  : "mr-20"
              )}
              key={`imageStartup${index}`}
            >
              <Image
                className="w-full object-contain"
                src={item.img}
                alt={item?.title + " logo"}
                width={300}
                height={300}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default InfiniteAutoSlider;
