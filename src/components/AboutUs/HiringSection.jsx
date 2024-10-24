import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function HiringSection() {
  return (
    <div className="px-6 md:px-0 relative md:-mt-12 -mt-32 ">
      <div className="font-bold text-white text-[35px] flex justify-center">
        <h1>WE'RE HIRING </h1>
      </div>

      <div className="relative w-full h-[850px]  mb-[291px] ">
        <div className="bg-cover max-h-[650px] max-w-[500px]">
          <img
            src="/assets/aboutUsImages/HiringSectionIMG.svg"
            alt="Background"
            className="absolute inset-0 object-cover mt-40 md:mt-0"
          />
        </div>

        <div
          style={{
            background: "rgba(254, 210, 28, 0.1)",
            backdropFilter: "blur(250px)",
          }}
          className="absolute pt-12 pb-12 px-12  text-white md:right-96 p-6 max-w-[512px] min-h-[498px] md:top-36 top-[40px] rounded-2xl"
        >
          <h1 className="mb-4 text-2xl font-bold ">
            EXECUTIVE SALES-MERCHANT AQUI
          </h1>

          <p className="mb-8">
            Requirements:
            <br />
            Minimum bachelors in any field
            <br />
            <br />
            Minimum 01 to 02 years of experience in banking sales, relationship
            officer, merchant acquisition or any other related field
            <br />
            Fresh graduates are also encouraged to apply Negotiation skills
            <br />
            Relationship Management
            <br />
            Customer Service
            <br />
            <br />
            Job Type: Full-Time (On-site)
            <br />
            H.O DHA II, Islamabad
            <br />
            Monday to Friday: 09:00 am to 05:30 pm PKST
          </p>
          <Link to="https://forms.gle/L1GRJfyrHCmbuPT99">
            <Button title="Apply Now" isPrimary={false} isChevronEnabled />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HiringSection;
