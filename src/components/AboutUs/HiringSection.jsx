import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function HiringSection() {
  return (
    <div className="relative px-6 -mt-32 md:px-0 md:-mt-12 ">
      <div className="font-semibold text-white text-[35px] flex justify-center font-[manrope]">
        <h1>JOIN OUR TALENT POOL! </h1>
      </div>

      <div className="relative w-full h-[850px] mb-[291px] md:ml-32">


        
        

        <div>
          <img
            src="/assets/aboutUsImages/HiringSectionIMG.webp"
            alt="Background"
            className="absolute inset-0 object-cover md:mt-8"
          />
        </div>




        

        <div
          style={{
            background: "rgba(254, 210, 28, 0.1)",
            backdropFilter: "blur(250px)",
          }}
          className="absolute pt-12 pb-12 px-12  text-white md:right-96 p-6 max-w-[512px] min-h-[498px] md:top-36 top-[40px] rounded-2xl"
        >

          <div className="mt-4">
            <p>
              Thank you for your interest in joining our company!
              <br />
              <br />
            </p>


            <p>
              While we currently do not have any open positions, we are always on the lookout for talented individuals who can contribute to our success. If you believe you have the skills and passion to be part of our team, we encourage you to fill out the application form below. Our team will review your application and keep it on file for future opportunities. We appreciate your interest and look forward to potentially working together!
            </p>
          </div>




          <div className="mt-24">
            <Link to="https://forms.gle/L1GRJfyrHCmbuPT99">
              <Button title="Apply Now" isPrimary={false} isChevronEnabled />
            </Link>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default HiringSection;
