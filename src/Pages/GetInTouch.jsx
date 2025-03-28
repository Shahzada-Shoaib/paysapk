import React from "react";
import HeroSection from "../components/GetInTouch/HeroSection";
import EmailSection from "../components/GetInTouch/EmailSection";
import FAQbanner from "../components/GetInTouch/FAQbanner";
import FAQquestions from "../components/GetInTouch/FAQquestions";
import Footer from "../components/Footer";
import { useEffect } from "react";

function GetInTouch() {
  useEffect(() => {
    // Component load hone par page upar scroll kar do
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); 
  return (
    <div>
      <HeroSection />
      <EmailSection />
      <FAQbanner />
      <FAQquestions />
      <div className="">
        <img src="/assets/text-animations/getintouch.gif" alt="" />
      </div>

      <div className="mt-16">
        <Footer className="" />
      </div>
    </div>
  );
}

export default GetInTouch;
