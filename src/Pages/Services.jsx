import React from "react";
import HeroSectionInServices from "../components/Services-page/HeroSectionInServices";
import CarouselServices from "../components/Services-page/CarouselServices";
import TestimonialSection from "../components/Services-page/TestimonialSection";
import Footer from ".././components/Footer";
import { useEffect } from "react";

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
      <div className="mt-12 md:mt-0">
        <img src="/assets/servicesPage/servicesGif.gif" alt="services" />
      </div>
      {/* <div className="flex items-center justify-center w-full  my-12 md:mt-[236px] text-center md:mb-[136px]">
        <Button title="Get in the circle" isPrimary={false} isChevronEnabled />
      </div> */}

      <Footer />
    </div>
  );
}

export default Services;
