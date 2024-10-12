import React from "react";
import CrossIcon from "../images/Cross-Icon.svg";
import FbIcon from "../images/social-icons/facebook.svg";
import LinkedinIcon from "../images/social-icons/linkedin.svg";
import InstaIcon from "../images/social-icons/instagram.png";
import TwitterIcon from "../images/social-icons/twitter.svg";
import TikTokIcon from "../images/social-icons/tik_tok.svg";
import ThreadIcon from "../images/social-icons/threads.svg";
import SiteLogo from "../images/logo.svg"


function MenuPopup({ showMenuPopup, setShowMenuPopup }) {
  return (
    <div className="menu-popup-bg md:pb-[100px] z-10 top-0 bg-cover bg-black left-0 fixed w-full min-h-screen flex">
      <div className="menu-popup-bg-overlay p-6 flex flex-col space-between items-stretch">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto w-full pt-2 ">
          <div>
            <img
              onClick={() => setShowMenuPopup(false)}
              src={CrossIcon}
              className="cursor-pointer"
              alt="Cross icon"
            />
          </div>
          <div>
            <img src={SiteLogo} alt="logo" style={{height: '30px'}} ></img>
          </div>
        </div>
        {/* Menu Section */}
        <div className="flex flex-1 pt-[90px] w-full flex-wrap lg:pt-0 pb-[50px] max-w-screen-xl mx-auto">
          <div className="md:w-3/6  pt-12 lg:pt-0 flex lg:items-end">
            <ul className="space-y-6 list-none">
              <li className="cursor-pointer hover:text-white text-[#545454] manrope-semibold text-[40px]">
                Home
              </li>
              <li className="cursor-pointer text-[#545454] hover:text-white  manrope-semibold text-[40px]">
                Services
              </li>
              <li className="cursor-pointer text-[#545454] hover:text-white manrope-semibold text-[40px]">
                About us
              </li>
              <li className="cursor-pointer text-[#545454] manrope-semibold hover:text-white text-[40px]">
                PaySa Picks: Articles & Humour
              </li>
              <li className="cursor-pointer text-[#545454] manrope-semibold hover:text-white text-[40px]">
                Get in Touch
              </li>
            </ul>
          </div>
          <div className="md:w-3/6  flex lg:items-end">
            <div className="flex items-end w-full justify-end space-x-3 pb-4 text-2xl">
              <img src={FbIcon} alt="icon" className="mx-1" />
              <img src={LinkedinIcon} alt="icon" className="" />
              <img src={InstaIcon} alt="icon" className="" />
              <img src={TwitterIcon} alt="icon" className="" />
              <img src={TikTokIcon} alt="icon" className="" />
              <img src={ThreadIcon} alt="icon" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPopup;
