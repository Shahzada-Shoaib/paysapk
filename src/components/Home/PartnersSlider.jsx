import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsMobile from "../../utils/useIsMobile"
// import BannerWithoutVideo from '../BannerWithoutVideo';


const logos = [
    '../assets/partners-Logos/partner1.svg',
    '../assets/partners-Logos/partner2.png',
    '../assets/partners-Logos/partner3.png',
    '../assets/partners-Logos/partner4.png',
    '../assets/partners-Logos/partner5.png',
    '../assets/partners-Logos/partner6.png',
    '../assets/partners-Logos/partner7.svg',
    '../assets/partners-Logos/partner8.svg',

];

function PartnerSlider() {


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
            {/* <BannerWithoutVideo title="OUR TRUSTED PARTNERS"/> */}

            <div className="relative">
                <div className='md:hidden'>
                    <Slider {...mobileSettings} className="slider">
                        {logos.map((logo, index) => (
                            <div key={index} className="relative p-2 ">
                                <img src={logo} alt={`Client Logo ${index + 1}`} className="w-[100px] h-[300px] object-contain flex justify-center" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='hidden md:block'>
                    <Slider {...settings} className="slider">
                        {logos.map((logo, index) => (
                            <div key={index} className="relative p-2 ">
                                <img src={logo} alt={`Client Logo ${index + 1}`} className="w-[100px] h-[150px] object-contain flex justify-center " />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default PartnerSlider;









