import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center text-sm justify-between z-30"
      id="footer"
    >
      <div className="w-full flex flex-col items-center justify-center gap-16 md:gap-20 z-30 text-dark-500 bg-dark-900 p-6 py-16 md:pb-6 ">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-0 md:justify-around md:w-full ">
          <div className="">
            <p>
              BSA EPFL <br />
              Ch. des Triaudes 4a (A305) <br />
              CH-1024 Ecublens VD
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="font-bold"> Menu </span>
              <Link href="/">Home</Link>
              <Link href="/startups">Startups</Link>
              <Link href="/">Events</Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="font-bold"> Contact Us </span>
              <span>Mail - bsa@epfl.ch</span>
              <a
                href="https://t.me/+Yg2GqxoXDIIwYWJk"
                rel="noopener noreferrer"
                target="_blank"
              >
                Telegram
              </a>
              <a
                href="https://twitter.com/bsa_epfl"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center  items-center">
          <div className="text-center">
            Copyright © 2023 BSA EPFL{" "}
            <span className="inline-block">All Rights Reserved</span>
          </div>
          <div>
            Website Developped by{" "}
            <a href="https://ascentadastra.com" target="_blank" rel="noopener">
              <span className="font-semibold text-white hover:text-opacity-70 duration-100 inline-block">
                Ascent Ad Astra
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
