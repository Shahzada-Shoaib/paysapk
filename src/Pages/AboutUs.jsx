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

function AboutUs() {
  return (
    <div className="bg-black">
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
            src="/assets/aboutUsImages/paysa-aboutUs.svg"
            alt="PaySa About"
            className="w-full h-auto"
          />
        </div>

        <div className="text-white w-full md:w-[50%] p-5">
          <h1 className="font-[manrope] font-bold text-3xl">OUR STORY</h1>
          <p className="font-semibold font-[raleway] mt-5 leading-7">
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

      {/* Values Section */}
      <div className="mt-24 md:mt-72">
        <h1 className="flex justify-center font-[manrope] font-semibold text-white text-3xl mb-10 ">
          VALUES
        </h1>
        {/* <AboutUsCarouselCard /> */}
      </div>

      <AboutUsCarouselSection />
      <AboutUsCardsSection />
      <div className="flex items-center justify-center w-full mt-[59px] ">
        <Button title="Dive in" isPrimary={false} isChevronEnabled />
      </div>
      <CareerSection />
      <HiringSection />
      <Footer />
    </div>
  );
}

export default AboutUs;
