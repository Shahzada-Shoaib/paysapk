import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmployeeCard from "./EmployeeCard";
import useScreenSize from "../../utils/useIsMobile";

const EmployeeCarousel = () => {
  const items = [
    {
      title: "Ali Adnan",
      description: "CEO & Co Founder",
      imageUrl: "/assets/aboutUsImages/employees/employee1.svg",
    },
    {
      title: "Sedrick Nicholson",
      description: "COO",
      imageUrl: "/assets/aboutUsImages/employees/employee2.svg",
    },
    {
      title: "Shahmir Aslam",
      description: "RSM - Merchant Acquiring (North)",
      imageUrl: "/assets/aboutUsImages/employees/employee3.svg",
    },
    {
      title: "M. Hanif Shaheen",
      description: "RSM - Merchant Acquiring (Central)",
      imageUrl: "/assets/aboutUsImages/employees/employee4.svg",
    },
    {
      title: "Sidra Mann",
      description: "HR Business Partner",
      imageUrl: "/assets/aboutUsImages/employees/employee5.svg",
    },
    {
      title: "Ehtasham Attique",
      description: "Assistant Manager Accounts (Finance)",
      imageUrl: "/assets/aboutUsImages/employees/employee6.svg",
    },
    {
      title: "Ayesha Sajjad",
      description: "Senior Document Control Executive ",
      imageUrl: "/assets/aboutUsImages/employees/employee7.svg",
    },
    {
      title: "Ahtasham Shakir",
      description: "Senior Document Control Executive ",
      imageUrl: "/assets/aboutUsImages/employees/employee8.svg",
    },
    {
      title: "Urooj Shoukat",
      description: "Graphic Designer",
      imageUrl: "/assets/aboutUsImages/employees/employee9.svg",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    draggable: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const mobileSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChangeSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const { isMobile } = useScreenSize();

  return (
    <div className="">
      <div className="flex justify-center md:justify-between text-center md:text-left p-4 text-white">
        <div className=" text-[50px] md:text-[36px] font-bold pb-8 md:pb-0">
          Our Team
        </div>
        <div className="pr-24 md:pt-4 space-x-6 hidden md:block">
          <button className="" onClick={handlePrevSlide}>
            &#8592;
          </button>
          <button className="" onClick={handleChangeSlide}>
            {" "}
            &#8594;{" "}
          </button>
        </div>
      </div>

      <div className="mx-auto ">
        {isMobile ? (
          <Slider {...mobileSettings} ref={sliderRef}>
            {items.map((item, index) => {
              return (
                <div className="px-2">
                  <div
                    key={index}
                    className={`flex items-center justify-center rounded-lg transition-all duration-300
                                 }`}
                  >
                    <EmployeeCard
                      title={item.title}
                      description={item.description}
                      imageUrl={item.imageUrl}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <Slider {...settings} ref={sliderRef}>
            {items.map((item, index) => {
              return (
                <div className="px-2">
                  <div
                    key={index}
                    className={`flex items-center justify-center rounded-lg transition-all duration-300
                                }`}
                  >
                    <EmployeeCard
                      title={item.title}
                      description={item.description}
                      imageUrl={item.imageUrl}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default EmployeeCarousel;
