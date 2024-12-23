import React from "react";
import HeroSectionInServices from "../components/Services-page/HeroSectionInServices";
import CarouselServices from "../components/Services-page/CarouselServices";
import TestimonialSection from "../components/Services-page/TestimonialSection";
import Footer from ".././components/Footer";
import { useEffect } from "react";
import SliderSection from "../components/Services-page/SliderSection";

function Services() {
  useEffect(() => {
    // Component load hone par page upar scroll kar do
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
      <HeroSectionInServices />
      <div className="mb-16">
        <CarouselServices />
      </div>
      <TestimonialSection />
      <SliderSection/>
      <div className="mt-12 mb-10 md:mt-0">
        <img src="/assets/servicesPage/servicesGif.gif" alt="services" />
      </div>
    
      <Footer />
    </div>
  );
}

export default Services;
