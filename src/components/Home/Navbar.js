import React from "react";
// // import './App.css';
// import '../App.css'
import "../../App.css";
import Banner from "./Banner";
import MenuPopup from "../MenuPopup";

function Navbar({ showMenuPopup, setShowMenuPopup }) {
  return (
    <div>
      <div className="flex justify-between items-center px-5">
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
          <img src="../assets/logo.svg" alt="logo"></img>
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
