import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUsCard from "../Home/AboutUsCard";
import { useNavigate } from "react-router-dom";

const AboutUsGrid = () => {
  const navigate = useNavigate();

  const items = [
    { title: "OUR STORY", description: "With swift progress and major industry partnerships, we’re transforming banking.", path: "/about-us", scrollPosition: 800, isPrimary : true},
    
    { title: "LIFE @ PAYSA", description: "With a commitment to service excellence and adaptability, we foster an environment where every day is a chance to grow.", path: "/about-us", scrollPosition: 3100, isPrimary: false },
    
    { title: "SERVICES", description: "At PaySa, we offer lightning-fast payments, data insights, top security, and 24/7 support.", path: "/services", scrollPosition: 0, isPrimary: true },
    { title: "PAYSA HUMOUR", description: "At PaySa, we live for a thriving and fun environment.", path: "/paysa-picks", scrollPosition: 0, isPrimary: false },
    { title: "VALUES", description: "At PaySa, our values drive our vision for a seamless digital future.", path: "/about-us", scrollPosition: 1600, isPrimary: true },
    { title: "CAREER", description: "Join our dynamic team if you have a thirst for market exposure and career growth.", path: "/about-us", scrollPosition: 4900, isPrimary: false },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    speed: 1000,             // Speed of slide transition (in ms)
    autoplay: true,          // Enables autoplay
    autoplaySpeed: 1000,  
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768, // Mobile screen size
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (path, scrollPosition) => {
    navigate(path); // Navigate to the desired page
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition, // Adjust this value as needed to reach the desired position
        behavior: "smooth", // Ensures a smooth scroll effect
      });
    }, 0); // Delay to ensure scroll happens after navigation
  };

  return (
    <div className="w-full md:max-w-7xl w-none md:mx-auto mb-52">
      <Slider {...settings} ref={sliderRef}>
        {items.map((item, index) => {
          const isSecondSlide =
            (index === (activeIndex + 1) % items.length) ||
            (activeIndex === items.length - 1 && index === 0);

          return (
            <div
              key={index}
              onClick={() => handleClick(item.path, item.scrollPosition)}
              className={`p-6 flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer ${isSecondSlide ? "mt-[41px]" : "mt-0"
                }`}
            >
              <AboutUsCard
                isPrimary ={item.isPrimary}
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default AboutUsGrid;
