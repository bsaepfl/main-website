"use client";

import React from "react";
import Link from "next/link";
import classnames from "classnames";

const linkClassName =
  "duration-100 transition-all font-semibold scroll-smooth flex items-center py-1 px-3 uppercase text-sm md:text-base";

const Links = () => {

  return (
    <div className="flex flex-row h-full items-center justify-center gap-2 md:gap-8">
      <Link href="/" className={classnames("hover:text-dark-200", linkClassName)}>
        Home
      </Link>
      <Link
        href={`/startups`}
        className={classnames("hover:text-dark-200", linkClassName)}
      >
        Startups
      </Link>
      <Link
        href={`/articles`}
        className={classnames("hover:text-dark-200", linkClassName)}
      >
        Articles
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex h-[52px] sm:h-[70px] fixed w-full top-0 z-50 bg-black text-gray-200 drop-shadow-4xl">
      <div className="flex flex-row items-center w-full justify-between px-4 md:px-10">
        <Links />
      </div>
    </div>
  );
};

export default Header;
