import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
    '../assets/clients-logos/clients-logo1.svg',
    '../assets/clients-logos/clients-logo2.svg',
    //wrong size of an image need to be fixed
    // '../assets/clients-logos/clients-logo3.svg',
    '../assets/clients-logos/clients-logo4.svg',
    '../assets/clients-logos/clients-logo5.svg',
    '../assets/clients-logos/clients-logo6.svg',
    '../assets/clients-logos/clients-logo7.svg',
    '../assets/clients-logos/clients-logo8.svg',
    '../assets/clients-logos/clients-logo9.svg',
    '../assets/clients-logos/clients-logo10.svg',
    '../assets/clients-logos/clients-logo11.svg',
    '../assets/clients-logos/clients-logo12.svg',
    '../assets/clients-logos/clients-logo13.svg',
    '../assets/clients-logos/clients-logo14.svg',
    '../assets/clients-logos/clients-logo15.svg',
    '../assets/clients-logos/clients-logo16.svg',
    '../assets/clients-logos/clients-logo17.svg',
    '../assets/clients-logos/clients-logo18.svg',
    '../assets/clients-logos/clients-logo19.svg',
    '../assets/clients-logos/clients-logo20.svg',
    '../assets/clients-logos/clients-logo21.svg',
    '../assets/clients-logos/clients-logo22.svg',
];

function LogoSlider() {
    // Slick settings
    const settings = {
        infinite: true,             // Infinite loop scrolling
        speed: 5000,                // Scroll speed
        slidesToShow: 5,            // Number of logos visible at once (adjust as needed)
        slidesToScroll: 1,          // Number of logos to scroll at a time
        autoplay: true,             // Autoplay enabled
        autoplaySpeed: 0,           // Continuous scroll speed
        cssEase: "linear",          // Smooth scrolling
        pauseOnHover: false,        // Don't pause on hover
    };

    return (
        <div className="relative ">
            <h2 className="my-4 text-2xl font-bold text-center">OUR TRUSTED CLIENTS</h2>
            <Slider {...settings} className="slider">
                {logos.map((logo, index) => (
                    <div key={index} className="relative p-2 h-250">

                        <img src={logo} alt={`Client Logo ${index + 1}`} className="w-[100px] h-[50px] object-contain flex justify-center" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default LogoSlider;
