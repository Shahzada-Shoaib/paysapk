// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AboutUsCard from "../Home/AboutUsCard";

// const AboutUsCarousel = () => {
//     const items = [
//         { title: "OUR STORY", description: "With swift progress and major industry partnerships, we’re transforming banking." },
//         { title: "LIFE @ PAYSA", description: "With a commitment to service excellence and adaptability, we foster an environment where every day is a chance to grow." },
//         { title: "SERVICES", description: "At PaySa, we offer lightning-fast payments, data insights, top security, and 24/7 support." },
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
