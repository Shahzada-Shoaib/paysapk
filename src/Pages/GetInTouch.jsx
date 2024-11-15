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
    window.scrollTo(0, 0);
  }, []); 
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
