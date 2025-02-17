import React from "react";
import { MdHexagon } from "react-icons/md";
import { TbHexagonLetterN } from "react-icons/tb";

const HomeScroll = () => {
  return (
    <>
      {/* this is the main container */}
      <div>
        <div className=" flex flex-col w-auto justify-center">
          <h1 className=" text-[20px] md:text-[70px] font-bold  font-serif flex justify-center">
            Learn with Shumbhul
          </h1>
          <p className="text-[12px] md:text-[25px] m-1 flex justify-center">
            Being the mentor I always needed
          </p>
          <button className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-900">
            Book your Seat
          </button>
          <button className="border border-black text-black p-2 rounded-full mt-1 hover:bg-slate-300">
            21 Days DSA Challenge
          </button>
          <h4 className="flex justify-center mt-2">Reconginzed By</h4>
        </div>
        {/* this div is for favikon and unstop section */}
        <div className="flex  space-x-28 justify-center mt-4">
          <div className="flex flex-col justify-center">
            <MdHexagon size={35} />
            <p>Favikon</p>
            <p>Among top 200</p>
            <p>Female Cotent</p>
            <p>Creators</p>
          </div>
          <div className="flex flex-col justify-center">
            <TbHexagonLetterN size={35} />
            <p>Unstop</p>
            <p>Among top 75</p>
            <p>unstoppable</p>
            <p>Influencers 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScroll;
