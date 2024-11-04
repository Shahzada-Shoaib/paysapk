import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsMobile from "../../utils/useIsMobile";

const logos = [
  "../assets/partners-Logos/partner1.svg",
  "../assets/partners-Logos/partner2.png",
  "../assets/partners-Logos/partner3.png",
  "../assets/partners-Logos/partner4.png",
  "../assets/partners-Logos/partner5.png",
  "../assets/partners-Logos/partner6.png",
  "../assets/partners-Logos/partner7.svg",
  "../assets/partners-Logos/partner8.svg",
];

function PartnerSlider() {
  const isMobile = useIsMobile();

  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  const mobileSettings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="relative">
        <div className="md:hidden">
          <Slider {...mobileSettings} className="slider">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative p-2 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="w-40 h-24 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden md:block">
          <Slider {...settings} className="slider">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative p-2 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="w-40 h-24 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PartnerSlider;
