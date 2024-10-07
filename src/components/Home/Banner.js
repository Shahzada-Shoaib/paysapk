import React from "react";

function Banner() {
  return (
    <>
      {" "}
      <div className="banner">
        <div>
          <h1 className="w-[883px] h-[68px]  ">
            {" "}
            EMPOWER YOUR DIGITAL PAYMENTS
          </h1>
        </div>
        <div>
          <p className="w-[695px] h-[40px] mt-5">
            {" "}
            Join us in shaping a future where every digital interaction
            resonates with the
            <br />
            essence of seamless financial empowerment.{" "}
          </p>
        </div>
      </div>
      <div className="mt-6 border-white">
        <video className="w-[1334] h-[895px] border-white" autoPlay loop muted>
          <source src="paysaApp-video.mp4" type="video/mp4" />
          Your browser does not support the video format.
        </video>
      </div>
    </>
  );
}

export default Banner;
