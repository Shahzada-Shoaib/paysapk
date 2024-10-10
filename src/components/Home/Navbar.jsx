import React from "react";
// // import './App.css';
// import '../App.css'
import "../../App.css";
import Banner from "./Banner";
import MenuPopup from "../MenuPopup";
import SiteLogo from "../../images/site-logo.svg"


function Navbar({ showMenuPopup, setShowMenuPopup }) {
  return (
    <div>
      <div className="flex justify-between items-center py-8 max-w-screen-xl mx-auto">
        <div>
          {" "}
          <img
            onClick={() => setShowMenuPopup(true)}
            src="../assets/burger-menu-paysapk.svg"
            alt="burger-menu"
            className="cursor-pointer"
          ></img>
        </div>

        <div>
          {" "}
          <img src={SiteLogo} alt="logo"></img>
          {/* <Image src={SiteLogo} alt="logo" /> */}
        </div>
        {/* <div> Button</div> */}
        <button className="button">
          <span className="font-raleway leading-[20px]">Get in touch</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
