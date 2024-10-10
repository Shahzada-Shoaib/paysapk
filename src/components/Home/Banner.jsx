import React from "react";
import Button from "../Button";

function Banner() {
  return (
    <>
      {" "}
      <div className="banner">
        <div>
          <h1 className="max-w-[883px]">
            {" "}
            EMPOWER YOUR DIGITAL PAYMENTS
          </h1>
        </div>
        <div>
          <p className="max-w-[600px]   text-center mt-5">
            {" "}
            Join us in shaping a future where every digital interaction
            resonates with the
        
            essence of seamless financial empowerment.
            {" "}
          </p>
        </div>
      </div>
      <div className="mt-6  w-screen mx-auto">
        <video  autoPlay className="w-full"  loop muted>
          <source src="paysaApp-video.mp4" type="video/mp4" />
          Your browser does not support the video format.
        </video>
      </div>
      <div className="text-center w-full flex justify-center items-center mt-4">
      <Button title="Take Charge Now" isChevronEnabled />
      </div>
    </>
  );
}

export default Banner;
