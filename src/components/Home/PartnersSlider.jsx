import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
    '../assets/partners-logos/partner1.svg',
    // '../assets/partners-logos/partner2.svg',
    '../assets/partners-logos/partner3.svg',
    '../assets/partners-logos/partner4.svg',
    '../assets/partners-logos/partner5.svg',
    '../assets/partners-logos/partner6.svg',
    '../assets/partners-logos/partner7.svg',
    '../assets/partners-logos/partner8.svg',
];

function PartnerSlider() {
    // Slick settings
    const settings = {
        infinite: true,             // Infinite loop scrolling
        speed: 5000,                // Scroll speed
        slidesToShow: 4,            // Number of logos visible at once (adjust as needed)
        slidesToScroll: 1,          // Number of logos to scroll at a time
        autoplay: true,             // Autoplay enabled
        autoplaySpeed: 0,           // Continuous scroll speed
        cssEase: "linear",          // Smooth scrolling
        pauseOnHover: false,        // Don't pause on hover
    };

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-center'>
                <h1 className='text-white font-bold font-[manrope] text-[35px] mt-[67.64px]  h-[64px] mb-[60px]'>
                    OUR TRUSTED PARTNERS
                </h1>
            </div>
            <div className="relative ">
                <Slider {...settings} className="slider">
                    {logos.map((logo, index) => (
                        <div key={index} className="relative p-2 ">

                            <img src={logo} alt={`Client Logo ${index + 1}`} className="w-[100px] h-[150px] object-contain flex justify-center" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PartnerSlider;
