import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsMobile from "../../utils/useIsMobile";

const logos = [
  "../assets/clients-logos/clients-logo1.svg",
  "../assets/clients-logos/clients-logo2.svg",
  "../assets/clients-logos/clients-logo4.svg",
  "../assets/clients-logos/clients-logo5.svg",
  "../assets/clients-logos/clients-logo6.svg",
  "../assets/clients-logos/clients-logo7.svg",
  "../assets/clients-logos/clients-logo8.svg",
  "../assets/clients-logos/clients-logo9.svg",
  "../assets/clients-logos/clients-logo10.svg",
  "../assets/clients-logos/clients-logo11.svg",
  "../assets/clients-logos/clients-logo12.svg",
  "../assets/clients-logos/clients-logo15.svg",
  "../assets/clients-logos/clients-logo17.svg",
  "../assets/clients-logos/clients-logo18.svg",
  "../assets/clients-logos/clients-logo19.svg",
  "../assets/clients-logos/clients-logo20.svg",
];

function LogoSlider() {
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

export default LogoSlider;
