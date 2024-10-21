import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselBanner from "./CarouselBanner";
import useScreenSize from "../../utils/useIsMobile";

const HomePageCarousel = () => {
  const { isMobile } = useScreenSize();

  // Custom previous arrow
  const customPrevArrow = (onClickHandler, hasPrev) => {
    if(isMobile) return null;
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute left-2 z-10  text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px]"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        ❮ {/* Custom left arrow symbol */}
      </button>
    );
  };

  // Custom next arrow
  const customNextArrow = (onClickHandler, hasNext) => {
    if(isMobile) return null;
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute right-2 z-10 text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px]"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        ❯ {/* Custom right arrow symbol */}
      </button>
    );
  };

  // Custom indicator (pagination dots)
  const customIndicator = (onClickHandler, isSelected, index, label) => {
    const baseStyle =
      "inline-block w-3 h-3 rounded-full mx-0.5 mb-8 cursor-pointer";
    const activeStyle = isSelected ? "bg-white" : "bg-gray-500";
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
    <div className="relative mx-auto  md:h-[100vh]  max-w-screen-xl h-[70vh]">
      <Carousel
        renderArrowPrev={customPrevArrow}
        renderArrowNext={customNextArrow}
        renderIndicator={customIndicator}
        showArrows={false}
        // autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        <div className="size-full">
          <CarouselBanner
            image="https://i.imghippo.com/files/4TnYv1729352530.png"
            title1="365 DAYS SETTLEMENT"
            description1="Get lightning-fast payment settlements with PaySa's POS terminal (within 24 hours)"
          />
        </div>
        <div className="size-full">
          <CarouselBanner
            image="https://i.imghippo.com/files/TgdPe1729353236.png"
            title1="CUSTOMISED MIS"
            description1="Make smart decisions with powerful analytics"
          />
        </div>
        <div className="size-full">
          <CarouselBanner
            image="https://i.imghippo.com/files/KB2X01729354831.png"
            title1="SECURE VPN TUNNEL"
            description1="Safeguard transactions with top-notch security through implementation of network segmentation"
          />
        </div>

        <div className="size-full">
          <CarouselBanner
            image="https://i.imghippo.com/files/Bo9fk1729354905.png"
            title1="24/7 CUSTOMER SUPPORT"
            description1="Get lightning-fast payment settlements with PaySa's POS terminal (within 24 hours)"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
