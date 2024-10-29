import React from "react";
// // import './App.css';
// import '../App.css'
import "../../App.css";
import Banner from "./Banner";
import MenuPopup from "../MenuPopup";
import SiteLogo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showMenuPopup, setShowMenuPopup] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between px-1 py-8 mx-auto md:px-3 md:max-w-screen-2xl">
        <div className="flex justify-start flex-1">
          <img
            onClick={() => setShowMenuPopup(true)}
            src="../assets/burger-menu-paysapk.svg"
            alt="burger-menu"
            className="cursor-pointer"
          />
        </div>

        <div className="flex justify-center flex-1 cursor-pointer">
          <Link to="/">
            <img src={SiteLogo} alt="logo" style={{ height: "30px" }} />
          </Link>
        </div>

        <div className="flex justify-end flex-1">
          <Link to={"/get-in-touch"}>
            <button className="navbar-button">
              <span className="font-raleway leading-[20px]">Get in touch</span>
            </button>
          </Link>
        </div>
      </div>
      {showMenuPopup && (
        <MenuPopup
          showMenuPopup={showMenuPopup}
          setShowMenuPopup={setShowMenuPopup}
        />
      )}
    </div>
  );
}

export default Navbar;
