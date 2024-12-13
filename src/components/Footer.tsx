import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center text-sm justify-between z-30"
      id="footer"
    >
      <div className="w-full flex flex-col items-center justify-center gap-16 md:gap-20 z-30 text-dark-500 bg-dark-900 p-6 py-16 md:pb-6 ">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-0 md:justify-around md:w-full ">
          <div className="flex flex-col">
            <p>
              BSA EPFL <br />
              Ch. des Triaudes 4a (A305) <br />
              CH-1024 Ecublens VD
            </p>
            <Link
              href="https://docs.google.com/presentation/d/1dOpCihrZ4O9ZAK15i7lMIE3hJllO0LK5UIcqTOVpe50/edit#slide=id.p"
              rel="noopener noreferrer"
              target="_blank"
            >
              🔗 Team Members
            </Link>
            <Link
              href="https://docs.google.com/document/d/1BZM7_jbDN39v87zvhQompFR8vcYH_ski/edit?usp=sharing&ouid=111240836445540406502&rtpof=true&sd=true"
              rel="noopener noreferrer"
              target="_blank"
            >
              🔗 Articles of Association
            </Link>
          </div>
          <div>
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="font-bold"> Menu </span>
              <Link href="/">Home</Link>
              <Link href="/startups">Startups</Link>
              <Link href="#Events">Events</Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 md:gap-4">
              <span className="font-bold"> Contact Us </span>
              <span><Link href="mailto:bsa@epfl.ch">Mail - bsa@epfl.ch</Link></span>
              <Link
                href="https://t.me/+Yg2GqxoXDIIwYWJk"
                rel="noopener noreferrer"
                target="_blank"
              >
                Telegram
              </Link>
              <Link
                href="https://twitter.com/bsa_epfl"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </Link>
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
            <Link href="https://ascentadastra.com" target="_blank" rel="noopener">
              <span className="font-semibold text-white hover:text-opacity-70 duration-100 inline-block">
                Ascent Ad Astra
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
