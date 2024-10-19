import React from "react";
import Navbar from "../Home/Navbar";
import BannerWithoutVideo from "../BannerWithoutVideo";
import PinLocation from "./PinLocation";

function HeroSection() {
  return (
    <div
      className="bg-cover h-[100vh] md:h-[1000px] bg-center flex flex-col  "
      style={{
        backgroundImage: "url('/assets/get-in-touch-images/banner.svg')",
      }}
    >
      <Navbar />
      <BannerWithoutVideo
        title="GET IN TOUCH"
        description="Connect with us effortlessly! Drop a message and let's start a conversation that propels your business forward "
      />

      <div className="flex mt-auto md:mb-24">
        <PinLocation />
      </div>
    </div>
  );
}

export default HeroSection;
