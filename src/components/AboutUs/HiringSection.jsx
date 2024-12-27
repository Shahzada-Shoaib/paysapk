import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function HiringSection() {
  return (
    <div className="relative px-6 md:px-0 md:mt-12 ">
      <div className="font-semibold text-white text-[35px] flex justify-center font-[manrope]">
        <h1 className="mt-10 md:mt-0">JOIN OUR TALENT POOL! </h1>
      </div>

      <div className="relative  mt-10 md:mt-20  md:h-[550px] max-w-[650px] mx-auto mb-[291px]">
        <img
          src="/assets/aboutUsImages/HiringSectionIMG.webp"
          alt="Background"
          className="relative hidden md:mt-8 md:block"
        />

        <div
          style={{
            background: "rgba(254, 210, 28, 0.1)",
            backdropFilter: "blur(250px)",
          }}
          className=" md:absolute top-0 left-[160px] z-10 pt-12 pb-12  px-6 md:px-12 text-white max-w-[512px] min-h-[498px] rounded-2xl"
        >
          <div className="mt-4">
            <p>
              Thank you for your interest in joining our company!
              <br />
              <br />
            </p>

            <p>
              While we currently do not have any open positions, we are always
              on the lookout for talented individuals who can contribute to our
              success. If you believe you have the skills and passion to be part
              of our team, we encourage you to fill out the application form
              below. Our team will review your application and keep it on file
              for future opportunities. We appreciate your interest and look
              forward to potentially working together!
            </p>
          </div>

          <div className="mt-24">
            <Link to="https://forms.gle/L1GRJfyrHCmbuPT99" target="_blank">
              <Button title="Apply Now" isPrimary={false} isChevronEnabled />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringSection;
