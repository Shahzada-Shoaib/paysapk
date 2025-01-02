import React from "react";
import CrossIcon from "../images/Cross-Icon.svg";
import FbIcon from "../images/social-icons/facebook.svg";
import LinkedinIcon from "../images/social-icons/linkedin.svg";
import InstaIcon from "../images/social-icons/instagram.svg";
import TwitterIcon from "../images/social-icons/twitter.svg";
import TikTokIcon from "../images/social-icons/tiktok.svg";
import ThreadIcon from "../images/social-icons/thread.svg";
import { Link, useLocation } from "react-router-dom";

function MenuPopup({ showMenuPopup, setShowMenuPopup }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-white"
      : "text-[#545454] hover:text-white";
  };

  return (
    <div
      style={{ backgroundImage: "url('/assets/menu-bg.webp')" }}
      className="menu-popup-bg md:pb-[100px] z-10 top-0 bg-cover bg-black left-0 fixed w-full min-h-screen flex  "
    >
      <div className="flex flex-col items-stretch pt-[31px] pl-16  menu-popup-bg-overlay space-between">
        <div className="flex items-center justify-between w-full mx-auto pt- max-w-screen-3xl ">
          <div>
            <img
              onClick={() => setShowMenuPopup(false)}
              src={CrossIcon}
              className="cursor-pointer"
              alt="Cross icon"
            />
          </div>
          {/* <div>
            <img src={SiteLogo} alt="logo" style={{ height: "50px" }}></img>
          </div> */}
        </div>

        {/* Menu Section */}
        <div className="flex flex-1  md:pt-[] w-full flex-wrap lg:pt-0 pb-[] max-w-screen-3xl mx-auto  ">
          <div className="flex pt- leading-[50px] md:w-3/6 lg:pt-0 lg:items-center">
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
        </div>

        <div className="mb-4 mt-18 ">
          <div className="flex w-full pb-8 space-x-3 text-2xl">
            <a
              href="https://www.facebook.com/paysa.technologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FbIcon}
                height={32}
                width={32}
                alt="Facebook icon"
                className="mx-1"
              />
            </a>

            <a
              href="https://pk.linkedin.com/company/paysatechnologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedinIcon}
                height={32}
                width={32}
                alt="LinkedIn icon"
                className=""
              />
            </a>

            <a
              href="https://www.instagram.com/paysa_tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstaIcon}
                height={32}
                width={32}
                alt="Instagram icon"
                className=""
              />
            </a>

            <a
              href="https://twitter.com/PaySa_pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height={32}
                width={32}
                src={TwitterIcon}
                alt="Twitter icon"
                className=""
              />
            </a>

            <a
              href="https://www.tiktok.com/@paysa_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height={32}
                width={32}
                src={TikTokIcon}
                alt="TikTok icon"
                className=""
              />
            </a>

            <a
              href="https://www.threads.net/@paysa_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height={32}
                width={32}
                src={ThreadIcon}
                alt="Threads icon"
                className=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPopup;
