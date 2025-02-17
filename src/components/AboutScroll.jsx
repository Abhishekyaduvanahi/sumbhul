import React from "react";
import picture from "../assets/sumbhul.webp";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const AboutScroll = () => {
  return (
    <>
      <h1 className="flex justify-start text-blue-900 font-semibold text-2xl mt-4 md:flex-row flex-col">
        About the Creator
      </h1>
      {/* external container  */}
      <div className=" flex   md:flex-row flex-col ">
        {/* image container */}
        <div className="flex justify-center md:w-[50%] w-auto p-4">
          <img className="mt-2 rounded-[50px] " src={picture} alt="" />
        </div>
        {/* contains all the detail  */}
        <div className="md:w-1/2 w-auto p-4 flex items-center justify-center flex-col">
          <h1 className="font-semibold md:text-2xl">
            Hi there! This is Shumbul Arifa. I’m a full stack Software Engineer
            at Microsoft.
          </h1>
          <p className="mt-4">
            I am a graduate of NIT Karnataka graduate in the CSE batch of 2022
            and a former intern at Qualcomm.I am mentoring people from my
            experience and learning which benefits them with their career. Here,
            I provide you with your Technical and Non-Technical Interview
            preparation, Resume and LinkedIn guidance, live courses, doubt
            support, articles, 1:1s, webinars, and much more. Sign up now!"
          </p>
          <div className="flex mt-4 space-x-6">
            <TiSocialLinkedinCircular size={35} />
            <FaYoutube size={35} />
            <FaSquareInstagram size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScroll;
