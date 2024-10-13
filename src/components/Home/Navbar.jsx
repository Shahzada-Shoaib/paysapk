import React from "react";
// // import './App.css';
// import '../App.css'
import "../../App.css";
import Banner from "./Banner";
import MenuPopup from "../MenuPopup";
import SiteLogo from "../../images/logo.svg"
import { Link } from "react-router-dom";


function Navbar({ showMenuPopup, setShowMenuPopup }) {
  return (
    <div>
      <div className="flex px-6  justify-between items-center py-8 max-w-screen-xl mx-auto">
      <div className="flex-1 flex justify-start">
          <img
            onClick={() => setShowMenuPopup(true)}
            src="../assets/burger-menu-paysapk.svg"
            alt="burger-menu"
            className="cursor-pointer"
          />
        </div>

        <div className="flex-1 flex justify-center cursor-pointer">
         <Link to="/">
          <img src={SiteLogo} alt="logo" style={{height: '30px'}} />
         </Link>
        </div>

        <div className="flex-1 flex justify-end">
          <button className="navbar-button">
            <span className="font-raleway leading-[20px]">Get in touch</span>
          </button>
        </div>
      
      </div>
    </div>
  );
}

export default Navbar;
