import React from 'react'
import HeroSectionInServices from '../components/Services-page/HeroSectionInServices';
import CarouselServices from '../components/Services-page/CarouselServices';
import TestimonialSection from '../components/Services-page/TestimonialSection';
import Button from '../components/Button';
import Footer from '../components/Footer';

function Services() {
  return (
    <div>
      <HeroSectionInServices />
      <CarouselServices />
      <TestimonialSection />
      <div>
        <img src='/assets/servicesPage/servicesGif.gif' alt='image' />
      </div>
      {/* <Button title='Get in the circle'/> */}
      <div className="flex items-center justify-center w-full mt-[236px] text-center mb-[136px]">
        <Button title="Get in the circle" isPrimary={false} isChevronEnabled />
      </div>
      <Footer />
    </div>
  )
}

export default Services;