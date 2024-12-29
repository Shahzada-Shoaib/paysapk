

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUsCarousel = () => {
  
    const items = [
        { image: "/assets/paysaPicksImages/paysa1.svg", alt: "OUR STORY", link: "https://www.instagram.com/p/C2PXY6PM8S0" },
        { image: "/assets/paysaPicksImages/paysa2.svg", alt: "OUR VISION", link: "https://www.instagram.com/p/C2j4dSsMA-H/?img_index=3" },
        { image: "/assets/paysaPicksImages/paysa3.svg", alt: "OUR MISSION", link: "https://www.instagram.com/p/C2j4t6_tfl6/" },
        { image: "/assets/paysaPicksImages/paysa4.svg", alt: "OUR VALUES", link: "https://www.instagram.com/p/C-rv-epymfO/?img_index=1" },
        { image: "/assets/paysaPicksImages/paysa5.svg", alt: "OUR TEAM", link: "https://www.instagram.com/reel/DDb0k3kuSf0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },

    ];


    const [activeIndex, setActiveIndex] = useState(0);

    const sliderRef = useRef(null);

    const settings = {
        arrows : false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true, // Time between each slide in milliseconds
        autoplaySpeed: 2000, // Time between each slide in milliseconds
        slidesToScroll: 1,
        beforeChange: (_, next) => setActiveIndex(next),
    };



    return (
        <div className="w-full mx-auto ">
            <Slider {...settings} ref={sliderRef}>
                {items.map((item, index) => {
                    const isSecondSlide =
                        (index === (activeIndex + 1) % items.length) ||
                        (activeIndex === items.length - 1 && index === 0);

                    return (
                        <div
                            key={index}
                            className={`p-6  h-flex flex justify-center rounded-lg transition-all duration-300 ${isSecondSlide ? "mt-0" : "mt-10" }`}
                            // className={`${isSecondSlide ? "mt-[150px]" : "mt-6"}`}
                        >
                            {/* <img
                                src={item.image}
                                alt={item.alt}
                                className="object-cover w-full h-full rounded-lg"
                            /> */}

                            <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                                <img src={item.image} alt={item.alt} className="mx-auto " />
                            </a>
                        </div>
                    );
                })}
            </Slider>


        </div>
    );
};

export default AboutUsCarousel;










// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AboutUsCard from "../Home/AboutUsCard";

// const AboutUsCarousel = () => {






//     const items = [
//         { title0: "OUR STORY", description0: "With swift progress and major industry partnerships, we’re transforming banking." },
//         { title0: "LIFE @ PAYSA", description0: "With a commitment to service excellence and adaptability, we foster an environment where every day is a chance to grow." },
//         { title0: "SERVICES", description0: "At PaySa, we offer lightning-fast payments, data insights, top security, and 24/7 support." },
//         { title: "PAYSA HUMOUR", description: "At PaySa, we live for a thriving and fun environment." },
//         { title: "VALUES", description: "At PaySa, our values drive our vision for a seamless digital future." },
//         { title: "CAREER", description: "Join our dynamic team if you have a thirst for market exposure and career growth." },
//     ];

//     const [activeIndex, setActiveIndex] = useState(0);

//     const sliderRef = useRef(null);

//     const settings = {
//         // dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         beforeChange: (_, next) => setActiveIndex(next),
//     };

//     const handleChangeSlide = () => {
//         if (sliderRef.current) {
//             sliderRef.current.slickNext();
//         }
//     };

//     return (
//         <div className="w-full max-w-6xl mx-auto border">
//             <Slider {...settings} ref={sliderRef}>
//                 {items.map((item, index) => {
//                     const isSecondSlide =
//                         (index === (activeIndex + 1) % items.length) ||
//                         (activeIndex === items.length - 1 && index === 0);

//                     return (
//                         <div
//                             key={index}
//                             className={`p-6 flex items-center justify-center rounded-lg transition-all duration-300 ${isSecondSlide ? "mt-[41px]" : "mt-0"
//                                 }`}
//                         >
//                             <AboutUsCard
//                                 title={item.title} // Pass title dynamically
//                                 description={item.description} // Pass description dynamically
//                                 onButtonClick={handleChangeSlide}
//                             />
//                         </div>
//                     );
//                 })}
//             </Slider>

//             <button
//                 onClick={handleChangeSlide}
//                 className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
//             >
//                 Change Slide
//             </button>
//         </div>
//     );
// };

// export default AboutUsCarousel;




