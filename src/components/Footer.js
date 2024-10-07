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
    <div>
      <div className="flex justify-center">
        <img src={FooterLogo} alt="icon" className="" />
      </div>
      <div className="h-[2px] bg-[#185C8333]"></div>
      <div className="flex justify-between items-center bg-black text-white py-4 px-8">
        {/* Navigation Links */}
        <div className="flex items-center space-x-4 text-lg">
          <span className="cursor-pointer">About Us</span>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Services</span>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Get in Touch</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 text-2xl">
          <img src={FbIcon} alt="icon" className="mx-1" />
          <img src={LinkedinIcon} alt="icon" className="" />
          <img src={InstaIcon} alt="icon" className="" />
          <img src={TwitterIcon} alt="icon" className="" />
          <img src={TikTokIcon} alt="icon" className="" />
          <img src={ThreadIcon} alt="icon" className="" />
        </div>

        {/* Location Links */}
        <div className="flex items-center space-x-4 text-lg">
          <span className="cursor-pointer">Islamabad</span>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Karachi</span>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Lahore</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
