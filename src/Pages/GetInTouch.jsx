import React from "react";
import HeroSection from "../components/GetInTouch/HeroSection";
import EmailSection from "../components/GetInTouch/EmailSection";
import FAQbanner from "../components/GetInTouch/FAQbanner";
import FAQquestions from "../components/GetInTouch/FAQquestions";
import Footer from "../components/Footer";

function GetInTouch() {
  return (
    <div>
      <HeroSection />
      <EmailSection />
      <FAQbanner />
      <FAQquestions />
      <Footer />
    </div>
  );
}

export default GetInTouch;
