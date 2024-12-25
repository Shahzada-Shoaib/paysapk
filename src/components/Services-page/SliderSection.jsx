import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderSection = () => {
  const carouselImages = [
    "/assets/servicesPage/serviceSlider1.png",
    "/assets/servicesPage/serviceSlider2.svg",
    "/assets/servicesPage/serviceSlider3.svg",
    "/assets/servicesPage/serviceSlider4.svg",
    "/assets/servicesPage/serviceSlider5.svg",
  ];

  const ArrowButton = ({ onClick, direction, className }) => (
    <button
      type="button"
      onClick={onClick}
      className={`absolute z-10 text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px] ${className}`}
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      {direction === "prev" ? "❮" : "❯"}
    </button>
  );

  const customPrevArrow = (onClickHandler) => (
    <ArrowButton onClick={onClickHandler} direction="prev" className="left-4" />
  );

  const customNextArrow = (onClickHandler) => (
    <ArrowButton
      onClick={onClickHandler}
      direction="next"
      className="right-4"
    />
  );

  const carouselSettings = {
    renderArrowPrev: customPrevArrow,
    renderArrowNext: customNextArrow,
    showArrows: false,
    autoPlay: false,
    infiniteLoop: true,
    interval: 3000,
    showThumbs: false,
    showStatus: false,
    dynamicHeight: false,
    showIndicators: false,
  };

  return (
    <div className="flex flex-col mx-auto mt-10 md:flex-row">
      {/* Div#1 */}
      <div
        className="w-full"
        style={{
          backgroundImage: "url('/assets/servicesPage/services-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopRightRadius: "200px",
        }}
        role="img"
        aria-label="Services overview"
      />

      {/* Div#2 */}
      <div className="relative w-[750px]">
        <Carousel {...carouselSettings}>
          {carouselImages.map((src, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={src}
                alt={`Service slide ${index + 1}`}
                className="w-[750px]"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderSection;
