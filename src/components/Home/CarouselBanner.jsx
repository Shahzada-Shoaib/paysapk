import React from "react";
import useScreenSize from "../../utils/useIsMobile";

function CarouselBanner(props) {
  const { isMobile } = useScreenSize();

  return (
    <div
      className={`md:h-[120vh] w-full flex bg-cover pb-[100px] mx-auto  bg-no-repeat `}
      style={{
        backgroundImage: `url(${props?.image})`,
      }}
    >
      <div className="hidden md:block md:w-1/2"></div>
      {/* section 2 */}
      <div className="pt-24 md:w-1/2 md:pt-24 md:bg-transparent bg-black/70 ">
        <div className="md:pl-24">
          <div className="flex items-start justify-start">
            <img
              className="ml-8"
              style={{
                height: isMobile ? "80px" : "125px",
                width: isMobile ? "80px" : "125px",
              }}
              src={props?.icon}
              alt="services"
            />
          </div>

          <div className="flex">
            <h1 className="md:border-l-8 text-left md:w-[200px] md:space-x-2 pl-[24px] md:border-l-white font-bold text-[35px] font-[manrope] text-white pb-[0px] mt-[30px] md:mt-[60px]">
              {props.title1}
            </h1>
          </div>
        </div>

        <div className="pl-8 md:pl-24">
          <p className="text-white text-left mt-[10px] md:mt-[40px] md:w-[400px]">
            {props.description1}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarouselBanner;
