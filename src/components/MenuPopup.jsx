import React from "react";
import CrossIcon from "../images/Cross-Icon.svg";
import FbIcon from "../images/social-icons/facebook.svg";
import LinkedinIcon from "../images/social-icons/linkedin.svg";
import InstaIcon from "../images/social-icons/instagram.png";
import TwitterIcon from "../images/social-icons/twitter.svg";
import TikTokIcon from "../images/social-icons/tik_tok.svg";
import ThreadIcon from "../images/social-icons/threads.svg";
import SiteLogo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

function MenuPopup({ showMenuPopup, setShowMenuPopup }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-white"
      : "text-[#545454] hover:text-white";
  };

  return (
    <div className="menu-popup-bg md:pb-[100px] z-10 top-0 bg-cover bg-black left-0 fixed w-full min-h-screen flex">
      <div className="flex flex-col items-stretch p-6 menu-popup-bg-overlay space-between">
        <div className="flex items-center justify-between w-full max-w-screen-3xl pt-2 mx-auto ">
          <div>
            <img
              onClick={() => setShowMenuPopup(false)}
              src={CrossIcon}
              className="cursor-pointer"
              alt="Cross icon"
            />
          </div>
          <div>
            <img src={SiteLogo} alt="logo" style={{ height: "50px" }}></img>
          </div>
        </div>
        {/* Menu Section */}
        <div className="flex flex-1  md:pt-[90px] w-full flex-wrap lg:pt-0 pb-[50px] max-w-screen-3xl mx-auto">
          <div className="flex pt-12 md:w-3/6 lg:pt-0 lg:items-end">
            <ul className="space-y-6 list-none">
              <li
                className={`cursor-pointer manrope-semibold text-[30px] md:text-[40px] ${isActive(
                  "/"
                )}`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`cursor-pointer manrope-semibold text-[30px] md:text-[40px] ${isActive(
                  "/about-us"
                )}`}
              >
                <Link to="/about-us">About us</Link>
              </li>

              <li
                className={`cursor-pointer manrope-semibold text-[30px] md:text-[40px] ${isActive(
                  "/services"
                )}`}
              >
                <Link to="/services">Services</Link>
              </li>

              <li
                className={`cursor-pointer manrope-semibold text-[30px] md:text-[40px] ${isActive(
                  "/paysa-picks"
                )}`}
              >
                <Link to="/paysa-picks">PaySa Picks: Articles & Humour</Link>
              </li>
              <li
                className={`cursor-pointer manrope-semibold text-[30px] md:text-[40px] ${isActive(
                  "/get-in-touch"
                )}`}
              >
                <Link to="/get-in-touch">Get in Touch</Link>
              </li>
            </ul>
          </div>
          <div className="flex md:w-3/6 lg:items-end">
            <div className="flex items-end justify-end w-full pb-4 space-x-3 text-2xl">
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
