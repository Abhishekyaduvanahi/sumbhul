import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center space-y-16">
        {/* this is for social icons  */}
        <div className="flex mt-4 space-y-16  flex-col">
          <a href="https://www.youtube.com/@Shumbul" target="_blank">
            <FaYoutube className="" size={22} />
          </a>
          <a href="https://www.instagram.com/shumbul.arifa/" target="_blank">
            <FaInstagramSquare size={22} />
          </a>
          <a href="https://www.linkedin.com/in/shumbul/" target="_blank">
            <FaLinkedin size={22} />
          </a>
        </div>
        <div className="flex mt-4 space-y-16 flex-col ">
          <a href="https://github.com/shumbul" target="_blank">
            <FaGithub size={22} />
          </a>
          <a href="https://x.com/ShumbulArifa" target="_blank">
            <FaXTwitter size={22} />
          </a>
          <a
            href="https://www.snapchat.com/add/shumbularifa?invite_id=J7dDY_-Y&locale=en_IN&share_id=0r2OEoObQ7uDK3BbsbwDEg&sid=529c3fa563344b8fa4a20108861c8458"
            target="_blank"
          >
            <FaSnapchatGhost size={22} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
