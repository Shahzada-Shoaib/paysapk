import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsMobile from "../../utils/useIsMobile"


const logos = [
    '../assets/partners-logos/partner3.svg',
    '../assets/partners-logos/partner4.svg',
    '../assets/partners-logos/partner6.svg',
    '../assets/partners-logos/partner3.svg',
    '../assets/partners-logos/partner4.svg',
    '../assets/partners-logos/partner6.svg',

];

function PartnerSlider() {

    const isMobile = useIsMobile();


    // Slick settings
    const settings = {
        infinite: true,             // Infinite loop scrolling
        speed: 10000,   
        arrows: false,             // Scroll speed
        slidesToShow: isMobile ?  4 : 2,            // Number of logos visible at once (adjust as needed)
        slidesToScroll: 1,          // Number of logos to scroll at a time
        autoplay: true,             // Autoplay enabled
        autoplaySpeed: 0,           // Continuous scroll speed
        cssEase: "linear",          // Smooth scrolling
        pauseOnHover: false,        // Don't pause on hover
    };

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="relative ">
                <Slider {...settings} className="slider">
                    {logos.map((logo, index) => (
                        <div key={index} className="relative p-2 " style={{border: 'solid 1px'}}>
                            <img src={logo} alt={`Partner Logo ${index + 1}`} className="h-[150px] object-cover  flex justify-center" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PartnerSlider;
