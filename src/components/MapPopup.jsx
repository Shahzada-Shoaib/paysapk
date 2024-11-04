import React, { useState } from "react";

function MapPopup({ isOpen, onClose, backgroundImage = "" }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black transition-opacity duration-300 bg-cover bg-center
      }`}
    >
      <div
        className={
          "absolute top-0 left-0 w-full h-full  bg-contain bg-no-repeat bg-center"
        }
        style={{ backgroundImage: "url('/assets/map-zoom.png')" }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute w-10 h-10 text-white border cursor-pointer top-4 left-4"
        onClick={onClose}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export default MapPopup;
