import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderSection = () => {
    // Custom previous arrow
    const customPrevArrow = (onClickHandler) => {
        return (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute left-4 z-10 text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px]"
                style={{ top: "50%", transform: "translateY(-50%)" }}
            >
                ❮
            </button>
        );
    };

    // Custom next arrow
    const customNextArrow = (onClickHandler) => {
        return (
            <button
                type="button"
                onClick={onClickHandler}
                className="absolute right-4 z-10 text-white bg-[#185C8333] border border-[#185C8333] text-[20px] w-[29px] h-[29px]"
                style={{ top: "50%", transform: "translateY(-50%)" }}
            >
                ❯
            </button>
        );
    };

    return (
        <div className="flex flex-col mx-auto mt-10 md:flex-row">
            {/* Static Image */}
            <div className="flex-1">
                <img
                    className="w-full md:h-[555px] object-cover"
                    src="assets/servicesPage/services-slider.svg"
                    alt="Static Image"
                />
            </div>

            {/* Carousel */}
            <div className="relative w-[100%] md:w-[40vw] mx-auto ">
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
                    {/* Slides */}
                    {[
                        "/assets/servicesPage/serviceSlider1.png",
                        "/assets/servicesPage/serviceSlider2.svg",
                        "/assets/servicesPage/serviceSlider3.svg",
                        "/assets/servicesPage/serviceSlider4.svg",
                        "/assets/servicesPage/serviceSlider5.svg",
                    ].map((src, index) => (
                        <div
                            key={index}
                            className=" md:h-[555px] w-full flex items-center justify-center bg-no-repeat object-cover bg-cover pointer-events-none"
                            style={{
                                backgroundImage: `url(${src})`,
                                backgroundSize: "contain", // Ensure the full image is visible
                            }}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default SliderSection;
