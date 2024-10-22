import React from "react";
import Button from "../Button";

function Banner() {
  return (
    <>
      {" "}
      <div className="banner">
        <div className="px-4 lg:px-0">
          <h1 className="max-w-[883px] mx-auto text-center">
            EMPOWER YOUR DIGITAL PAYMENTS
          </h1>
          <p className="max-w-[600px]  mx-auto text-center mt-5">
            Join us in shaping a future where every digital interaction
            resonates with the essence of seamless financial empowerment.
          </p>
        </div>
      </div>
      <div className="mt-6  max-w-screen mx-auto">
        <video autoPlay preload="auto" className="w-full" loop muted>
          <source src="paysaApp-video.mp4" type="video/mp4" />
          Your browser does not support the video format.
        </video>
      </div>
    </>
  );
}

export default Banner;
