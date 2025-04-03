import React from "react";
import BoxText from "../../BoxText";
import Telegram from "../../../images/logo/Telegram";
import Twitter from "../../../images/logo/Twitter";
import Youtube from "../../../images/logo/Youtube";
import { HiArrowLongRight } from "react-icons/hi2";
import Instagram from "../../../images/logo/Instagram";
import LinkedIn from "../../../images/logo/LinkedIn";
import Github from "@/images/logo/Github";

const JoinUs = () => {
  return (
    <div
      id="JoinUs"
      className="w-full flex flex-col justify-start items-center bg-dark-100 text-dark-500"
    >
      <div className="w-full max-w-[1100px] flex flex-col items-center py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-dark-500 indent-2 pb-8">
          Join <span className="text-dark-200">Us</span>
        </h2>
        <p>
          <span className="block">
            <span className="inline-flex gap-2 items-center ">
              <HiArrowLongRight className="text-dark-5" />
              <span className="block font-semibold text-base sm:text-lg">
                Welcome to our blockchain association!{" "}
              </span>
            </span>
          </span>{" "}
          If you&apos;re passionate about the potential of blockchain technology,
          intrigued by the world of decentralized finance{" "}
          <span className="font-semibold">(DeFi)</span>, fascinated by the
          concept of non-fungible tokens{" "}
          <span className="font-semibold">(NFTs)</span>, or simply eager to
          learn more about what the blockchain has to offer, you&apos;ve come to the
          right place. Join our community of blockchain enthusiasts and
          learners, where you can <span className="font-semibold">learn</span>,{" "}
          <span className="font-semibold">collaborate</span>, and{" "}
          <span className="font-semibold">explore</span> the possibilities of
          this technology. <br /> Join us whether you&apos;re a beginner, a fellow
          enthusiast or an expert, there&apos;s a place for you in our vibrant
          community!
        </p>
        <p>
          <span className="block">
            <span className="inline-flex gap-2 items-center ">
              <HiArrowLongRight className="text-dark-5" />
              <span className="block font-semibold  text-base sm:text-lg">
                What do we do?{" "}
              </span>
            </span>
          </span>
          We are a group of passionate students who share a deep fascination for
          the world of blockchain, cryptocurrencies, and decentralized
          technologies. Driven by our curiosity and a thirst for innovation, we
          actively participate in{" "}
          <span className="font-semibold">hackathons</span>,{" "}
          <span className="font-semibold">crypto events</span> and{" "}
          <span className="font-semibold">bootstrap projects.</span>
        </p>
        <p>
          <span className="block">
            <span className="inline-flex gap-2 items-center ">
              <HiArrowLongRight className="text-dark-5" />
              <span className="block font-semibold  text-base sm:text-lg">
                How to become a member of BSA?{" "}
              </span>
            </span>
          </span>
          You can simply participate in our weekly meetings, everyone is
          welcomed! Join our <span className="font-semibold">Telegram</span>{" "}
          (link below) to stay up to date with all our activities and projects
        </p>
        <BoxText
          text={
            <div className="flex flex-row justify-center items-center gap-4 sm:gap-10 py-4 px-10 flex-wrap">
              <Telegram link="https://t.me/+Yg2GqxoXDIIwYWJk" />
              <Twitter link="https://twitter.com/bsa_epfl" />
              <Youtube link="https://www.youtube.com/channel/UCk24QUxKrSrJNxmp9EHICAg" />
              <Instagram link="https://www.instagram.com/bsaepfl/" />
              <LinkedIn link="https://www.linkedin.com/company/blockchain-student-association/mycompany/" />
              <Github link="https://github.com/bsaepfl" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default JoinUs;
