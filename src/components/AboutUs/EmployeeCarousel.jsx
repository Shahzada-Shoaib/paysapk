


import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmployeeCard from "./EmployeeCard";
import { div } from "framer-motion/client";

const EmployeeCarousel = () => {
    const items = [
        { title: "OUR STORY", description: "sforming banking." },
        { title: "LIFE @ PAYSA", description: "is a chance to grow." },
        { title: "OUR STORY", description: "sforming banking." },
        { title: "LIFE @ PAYSA", description: "is a chance to grow." },
    ];


    const sliderRef = useRef(null);

    const settings = {
        // dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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

    return (

        <div className="">

        <div className="flex justify-between p-4 text-white">
                <div className="text-[36px] font-bold">Our Team</div>
                <div className="pr-24 space-x-6">
                    <button className="" onClick={handlePrevSlide}>&#8592;</button>
                    <button className="" onClick={handleChangeSlide}> &#8594; </button>
                </div>
        </div>
        
        
            <div className="mx-auto ">
                <Slider {...settings} ref={sliderRef}>
                    {items.map((item, index) => {

                        return (

                            <div className="px-2">

                                <div
                                    key={index}
                                    className={`flex items-center justify-center rounded-lg transition-all duration-300
                                }`}>

                                    <EmployeeCard title={item.title} />

                                </div>
                            </div>

                        );
                    })}

                </Slider>
            </div>
        
        </div>
      
    );
};

export default EmployeeCarousel;
