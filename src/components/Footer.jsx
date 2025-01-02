import React from "react";
import FooterLogo from "../images/footer-logo.svg";
import FbIcon from "../images/social-icons/facebook.svg";
import LinkedinIcon from "../images/social-icons/linkedin.svg";
import InstaIcon from "../images/social-icons/instagram.svg";
import TwitterIcon from "../images/social-icons/twitter.svg";
import TikTokIcon from "../images/social-icons/tiktok.svg";
import ThreadIcon from "../images/social-icons/thread.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="">
      <Link
        to="/get-in-touch"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="flex justify-center mb-16 md:my-28">
          <Button isPrimary="" title="Get in the Circle" isChevronEnabled />
        </div>
      </Link>

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
          <Link to="/about-us" className="cursor-pointer">
            About Us
          </Link>
          <span className="text-yellow-500">•</span>
          <Link to="/services" className="cursor-pointer">
            Services
          </Link>
          <span className="text-yellow-500">•</span>
          <Link to="/get-in-touch" className="cursor-pointer">
            Get in Touch
          </Link>
        </div>

        <div className="items-center hidden space-x-4 text-2xl md:flex">
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
              height={32}
              width={32}
              src={InstaIcon}
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
              src={TwitterIcon}
              height={32}
              width={32}
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
              src={TikTokIcon}
              height={32}
              width={32}
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

        {/* Location Links */}
        <div className="flex items-center mb-4 space-x-4 text-lg md:mb-0">
          <Link to={"https://maps.app.goo.gl/dSQHWL3rN8sgFjGF8"}>
            <span className="cursor-pointer">Islamabad</span>
          </Link>
          <span className="text-yellow-500">•</span>
          <span className="cursor-pointer">Karachi</span>
          <span className="text-yellow-500">•</span>
          <Link to={"https://maps.app.goo.gl/GsqFuhvU1XSAfBUV6"}>
            <span className="cursor-pointer">Lahore</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4 text-2xl md:hidden">
          <Link to={"https://www.facebook.com/paysa.technologies/"}>
            <img src={FbIcon} alt="icon" className="mx-1" />
          </Link>
          <Link to={"https://pk.linkedin.com/company/paysatechnologies"}>
            {" "}
            <img src={LinkedinIcon} alt="icon" className="" />
          </Link>{" "}
          <Link to={"https://www.instagram.com/paysa_tech/"}>
            <img src={InstaIcon} alt="icon" className="" />
          </Link>
          <Link to={"https://twitter.com/PaySa_pk"}>
            <img src={TwitterIcon} alt="icon" className="" />
          </Link>
          <Link to={"https://www.tiktok.com/@paysa_tech"}>
            <img src={TikTokIcon} alt="icon" className="" />
          </Link>
          <Link to={"https://www.threads.net/@paysa_tech"}>
            <img src={ThreadIcon} alt="icon" className="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
