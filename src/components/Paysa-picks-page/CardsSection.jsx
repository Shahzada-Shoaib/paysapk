import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUsCard from "../Home/AboutUsCard";

const CardsSection = () => {
  const items = [
    {
      title: "MEEZAN BANK COLLABORATION",
      description: "Meezan Bank, Pakistan’s leading Islamic bank and PaySa have partnered to enable Point of Sale (POS) payment services to tap into the country’s booming digital payment ecosystem.",
      link: "https://www.meezanbank.com/meezan-bank-enters-into-a-strategic-collaboration-with-paysa/",
      
    },
    {
      title: "BREAST CANCER AWARENESS!",
      description: "Join the PaySa team to support survivors, honor the fighters, and remember those we’ve lost. As we Stand Strong for Breast Cancer Awareness",
      link: "https://www.instagram.com/p/DBdtZuSML5X/?img_index=1"
    },
    {
      title: " RUNNING TO A BRIGHTER FUTURE",
      description: "To raise $1 million for providing quality education to 7,000 children across 2,000+ schools.",
      link: "https://www.instagram.com/p/DBYgaLCsdnY/"
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile screen size
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto ">
      <Slider {...settings} ref={sliderRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 flex items-center justify-center rounded-lg transition-all duration-300 ${index === 1 ? "mt-0 w-[150%]" : "mt-10 w-[100%]"
              }`}
          >
            {/* Replace the image with AboutUsCard */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <AboutUsCard
                title={item.title}
                description={item.description}
                className="bg-white shadow-md"
                isPrimary={index === 0 || index === 2} 
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardsSection;
