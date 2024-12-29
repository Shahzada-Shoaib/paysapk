import React from "react";
import Navbar from "../components/Home/Navbar";
import BannerWithoutVideo from "../components/BannerWithoutVideo";
import AboutUsCarouselCard from "../components/AboutUs/AboutUsCarouselCard";
import AboutUsCardsSection from "../components/AboutUs/AboutUsCardsSection";
import Button from "../components/Button";
import CareerSection from "../components/AboutUs/CareerSection";
import HiringSection from "../components/AboutUs/HiringSection";
import Footer from "../components/Footer";
import AboutUsCarouselSection from "../components/AboutUs/AboutUsCarouselSection";
import { useEffect } from "react";
import EmployeeCard from "../components/AboutUs/EmployeeCard";
import EmployeeCarousel from "../components/AboutUs/EmployeeCarousel";
function AboutUs() {
  useEffect(() => {
    // Component load hone par page upar scroll kar do
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full ">
      <div className="">
        <Navbar />
        <BannerWithoutVideo
          title="THE TRAILBLAZERS IN DIGITAL WORLD"
          description="Pioneering innovation and reshaping the digital landscape, one transaction at a time."
        />

        {/* Banner Image */}
        <div className="flex justify-center max-w-screen-xl mx-auto text-white">
          <img
            fetchpriority="high"
            src="/assets/aboutUsImages/aboutUsBanner.svg"
            alt="About Us Banner"
            className="w-full h-auto"
          />
        </div>
        
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <img
            src="/assets/aboutUsImages/paysa-aboutUs.webp"
            alt="PaySa About"
            className="w-full h-auto"
          />
        </div>

        <div className="text-white w-full md:w-[50%] p-5  flex flex-col my-auto ">
          <h1 className="font-[manrope] font-bold text-3xl text-[35px]">OUR STORY</h1>
          <p className="font-semibold font-[raleway] mt-[32px] leading-[24px] w-[] text-justify  md:mr-[89px]">
            At PaySa, we began our journey in 2023 with a mission to
            revolutionize banking services and lead digitalization in Pakistan.
            Identifying a significant gap in the digital payments market in
            2022, we aimed to address limited access to essential financial
            services despite ongoing efforts to enhance inclusivity.
            <br />
            <br />
            With renewed commitment from the State Bank of Pakistan, we seized
            the opportunity to contribute to the nation's digital
            transformation. In just one year, PaySa evolved from a concept to a
            fully operational powerhouse, exceeding annual targets within two
            months. With dedication to innovation and stakeholder satisfaction,
            we're shaping a brighter future for banking services in Pakistan.
            Proudly serving major industries across sixteen cities, we're
            committed to making a lasting impact.
            <br />
            <br />
            <strong>Ali Adnan</strong>
            <br />
            Chief Executive Officer
            <br />
            PaySa
          </p>
        </div>
      </div>

      <div className="mt-24 md:mt-22">
        <h1 className="flex justify-center font-[manrope] font-semibold text-white text-3xl mb-10 ">
          VALUES
        </h1>
      </div>

      <div className="">
        <AboutUsCarouselSection />
      </div>
      <div
        className="w-full bg-no-repeat bg-cover object-fit"
        style={{
          backgroundImage: "url('/assets/aboutUsImages/aboutUs-bg1.png')",
        }}
      ></div>

      <div className="hidden md:block">
        <img
          className="w-full bg-no-repeat bg-cover object-fit"
          src="/assets/aboutUsImages/aboutUs-bg1.png"
          alt="bg new"
        />
      </div>

      <div className="">
        <CareerSection />
      </div>

      <div
        className="bg-no-repeat  bg-cover px-8 pt-[200px]  h-[700px] md:h-[900px]"
        style={{
          backgroundImage: "url('/assets/aboutUsImages/aboutus-yellow-bg.png')",
        }}
      >
        <EmployeeCarousel />
      </div>

      <div>
        <HiringSection />
      </div>
      
      {/* <div className="h-16"></div> */}
      <div className="flex justify-center md:mt-[200px] my-10 ">
        <img className="md:h-[88px] h-[41px] " src="/assets/text-animations/aboutUS.gif" alt="" />
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
