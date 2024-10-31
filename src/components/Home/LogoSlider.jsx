import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsMobile from "../../utils/useIsMobile"


const logos = [
    '../assets/clients-logos/clients-logo1.svg',
    '../assets/clients-logos/clients-logo2.svg',
    // wrong size of an image need to be fixed
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
    // '../assets/clients-logos/clients-logo13.svg',
    // '../assets/clients-logos/clients-logo14.svg',
    '../assets/clients-logos/clients-logo15.svg',
    // '../assets/clients-logos/clients-logo16.svg',
    '../assets/clients-logos/clients-logo17.svg',
    '../assets/clients-logos/clients-logo18.svg',
    '../assets/clients-logos/clients-logo19.svg',
    '../assets/clients-logos/clients-logo20.svg',
    // '../assets/clients-logos/clients-logo21.svg',
    // '../assets/clients-logos/clients-logo22.svg',
];

function LogoSlider() {


    const isMobile = useIsMobile();

    // Slick settings
    const settings = {
        infinite: true,             // Infinite loop scrolling
        speed: 4000,                // Scroll speed
        slidesToShow: 6,            // Number of logos visible at once (adjust as needed)
        slidesToScroll: 1,          // Number of logos to scroll at a time
        autoplay: true,             // Autoplay enabled
        autoplaySpeed: 0,           // Continuous scroll speed
        cssEase: "linear",          // Smooth scrolling
        pauseOnHover: true, 
        arrows: false       // Don't pause on hover
    };

    const mobileSettings = {
        infinite: true,             // Infinite loop scrolling
        speed: 10000,                // Scroll speed
        slidesToShow: 2,            // Number of logos visible at once (adjust as needed)
        slidesToScroll: 1,          // Number of logos to scroll at a time
        autoplay: true,             // Autoplay enabled
        autoplaySpeed: 0,           // Continuous scroll speed
        cssEase: "linear",          // Smooth scrolling
        pauseOnHover: true, 
        arrows: false       // Don't pause on hover
    };


    return (
   



        <div className='mx-auto max-w-screen-2xl'>
            <div className="relative">
                <div className='md:hidden'>
                    <Slider {...mobileSettings} className="slider">
                        {logos.map((logo, index) => (
                            <div key={index} className="relative p-2 ">
                                <img src={logo} alt={`Client Logo ${index + 1}`} className="w-[100px] h-[100px] object-contain flex justify-center" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='hidden md:block'>
                    <Slider {...settings} className="slider">
                        {logos.map((logo, index) => (
                            <div key={index} className="relative p-2 ">
                                <img src={logo} alt={`Client Logo ${index + 1}`} className="w-[100px] h-[100px] object-contain flex justify-center " />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>







    
    );
}

export default LogoSlider;
