import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselBanner from './CarouselBanner';

const HomePageCarousel = () => {
  // Custom previous arrow
  const customPrevArrow = (onClickHandler, hasPrev) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute left-2 z-10  text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px]"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        ❮ {/* Custom left arrow symbol */}
      </button>
    );
  };

  // Custom next arrow
  const customNextArrow = (onClickHandler, hasNext) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute right-2 z-10 text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px]"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        ❯ {/* Custom right arrow symbol */}
      </button>
    );
  };

  // Custom indicator (pagination dots)
  const customIndicator = (onClickHandler, isSelected, index, label) => {
    const baseStyle = "inline-block w-3 h-3 rounded-full mx-0.5 cursor-pointer";
    const activeStyle = isSelected ? "bg-blue-500" : "bg-gray-300";
    return (
      <li
        className={`${baseStyle} ${activeStyle}`}
        onClick={onClickHandler}
        key={index}
        role="button"
        aria-label={`Slide ${index + 1}`}
        title={`Slide ${index + 1}`}
      />
    );
  };

  return (
    <div className="relative mx-auto ">
      <Carousel
        renderArrowPrev={customPrevArrow}
        renderArrowNext={customNextArrow}
        renderIndicator={customIndicator}
        showArrows={true}
        // autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        <div className='size-full'>
          <CarouselBanner number='01' image='/assets/carousel-pic01.svg' title1='365 DAYS' title2='SETTLEMENT' description1='Get lightning-fast payment settlements' description2="with PaySa's POS terminal (within 24 hours)" />
        </div>
        <div className='size-full'>
          <CarouselBanner number='01' image='/assets/carousel-pic01.svg' title1='365 DAYS' title2='SETTLEMENT' description1='Get lightning-fast payment settlements' description2="with PaySa's POS terminal (within 24 hours)" />
        </div>
        <div className='size-full'>
          <CarouselBanner number='01' image='/assets/carousel-pic01.svg' title1='365 DAYS' title2='SETTLEMENT' description1='Get lightning-fast payment settlements' description2="with PaySa's POS terminal (within 24 hours)" />
        </div>
        
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
