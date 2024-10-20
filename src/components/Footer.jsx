import React from "react";
import FooterLogo from "../images/footer-logo.svg";
import FbIcon from "../images/social-icons/facebook.svg";
import LinkedinIcon from "../images/social-icons/linkedin.svg";
import InstaIcon from "../images/social-icons/instagram.png";
import TwitterIcon from "../images/social-icons/twitter.svg";
import TikTokIcon from "../images/social-icons/tik_tok.svg";
import ThreadIcon from "../images/social-icons/threads.svg";

const Footer = () => {
  return (
    <div className="">
      <div className="flex  justify-center my-[70px]">
        <img src={FooterLogo} alt="icon" className="h-[100px] md:h-auto " />
      </div>
      <div>
        <div
          style={{
            height: "0.5px",
            background: "#17557A",
          }}
          className="mb-1"
        ></div>
        <div
          style={{
            height: "0.5px",
            background: "#17557A",
          }}
        ></div>
      </div>

      <div className="flex flex-wrap items-center justify-center max-w-screen-xl px-2 py-8 mx-auto text-white bg-black md:justify-between">
        {/* Navigation Links */}
        <div className="flex items-center mb-2 space-x-4 text-lg md:mb-0">
          <span className="cursor-pointer">About Us</span>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Services</span>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Get in Touch</span>
        </div>

        {/* Social Media Icons */}
        <div className="items-center hidden space-x-4 text-2xl md:flex">
          <img src={FbIcon} alt="icon" className="mx-1" />
          <img src={LinkedinIcon} alt="icon" className="" />
          <img src={InstaIcon} alt="icon" className="" />
          <img src={TwitterIcon} alt="icon" className="" />
          <img src={TikTokIcon} alt="icon" className="" />
          <img src={ThreadIcon} alt="icon" className="" />
        </div>

        {/* Location Links */}
        <div className="flex items-center mb-4 space-x-4 text-lg md:mb-0">
          <span className="cursor-pointer">Islamabad</span>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Karachi</span>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Lahore</span>
        </div>

        <div className="flex items-center space-x-4 text-2xl md:hidden">
          <img src={FbIcon} alt="icon" className="mx-1" />
          <img src={LinkedinIcon} alt="icon" className="" />
          <img src={InstaIcon} alt="icon" className="" />
          <img src={TwitterIcon} alt="icon" className="" />
          <img src={TikTokIcon} alt="icon" className="" />
          <img src={ThreadIcon} alt="icon" className="" />
        </div>

      </div>
    </div>
  );
};

export default Footer;
