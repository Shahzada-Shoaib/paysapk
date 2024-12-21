// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function SliderSection() {
//     const images = [
//         "https://via.placeholder.com/600x400?text=Slide+1",
//         "https://via.placeholder.com/600x400?text=Slide+2",
//         "https://via.placeholder.com/600x400?text=Slide+3",
//         "https://via.placeholder.com/600x400?text=Slide+4",
//     ];

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         prevArrow: (
//             <div className="absolute z-10 p-2 text-2xl text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full cursor-pointer slick-prev top-1/2 left-4">
//                 &#8592;
//             </div>
//         ),  // Left Arrow
//         nextArrow: (
//             <div className="absolute z-10 p-2 text-2xl text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full cursor-pointer slick-next top-1/2 right-4">
//                 {/* &#8594; */}
//             </div>
//         ),  // Right Arrow
//     };

//     return (
//         <div className='mt-16 border'>
//             {/* Slider */}
//             <div className='flex justify-center border'>
//                 <div className="relative w-full max-w-4xl mx-auto mt-10 border">
//                     <Slider {...settings}>
//                         {images.map((image, index) => (
//                             <div key={index}>
//                                 <img
//                                     src={image}
//                                     alt={`Slide ${index + 1}`}
//                                     className="w-full h-auto rounded"
//                                 />

//                             </div>
//                         ))}
//                         <div> 
//                             <p className='text-white'>helowf eo hk shh shs</p>
//                         </div>
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SliderSection;



import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderSection = () => {
    // Custom previous arrow
    const customPrevArrow = (onClickHandler, hasPrev) => {
        return (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute left-4 z-10 text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px]"
                style={{ top: "50%", transform: "translateY(-50%)" }}
            >
                ❮ {/* Custom left arrow symbol */}
            </button>
        );
    };

    // Custom next arrow
    const customNextArrow = (onClickHandler, hasNext) => {
        return (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute right-4 z-10 text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px]"
                style={{ top: "50%", transform: "translateY(-50%)" }}
            >
                ❯ {/* Custom right arrow symbol */}
            </button>
        );
    };

    return (

        <div className="flex mt-[79px]">

            <div className="h-[200px]">
                <img className="" src="assets/servicesPage/services-slider.svg" alt="" />
            </div>









            <div className="relative mx-auto  max-w-screen-2xl   w-[40vw]">
                <Carousel
                    renderArrowPrev={customPrevArrow}
                    renderArrowNext={customNextArrow}
                    showArrows={false} // Hide default arrows
                    autoPlay={false}
                    infiniteLoop={true}
                    interval={3000}
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={false} // Prevent carousel height change
                    showIndicators={false}
                >
                    {/* Slide 1 */}
                    <div
                        className="flex items-center justify-center float-right bg-cover "
                    >
                        <img src="/assets/servicesPage/serviceSlider1.png" alt="" />
                    </div>
                    <div
                        className="flex items-center justify-center float-right bg-cover full w- size-full"
                    >
                        <img src="/assets/servicesPage/serviceSlider2.svg" alt="" />
                    </div>
                    <div
                        className="flex items-center justify-center float-right bg-cover full w- size-full"
                    >
                        <img src="/assets/servicesPage/serviceSlider3.svg" alt="" />
                    </div>
                    <div
                        className="flex items-center justify-center float-right bg-cover full w- size-full"
                    >
                        <img src="/assets/servicesPage/serviceSlider4.svg" alt="" />
                    </div>
                    
                    <div
                        className="flex items-center justify-center float-right bg-cover"
                    >
                        <img src="/assets/servicesPage/serviceSlider5.svg" alt="" />
                    </div>


                </Carousel>
            </div>
            
        </div>


     
    );
};

export default SliderSection;
