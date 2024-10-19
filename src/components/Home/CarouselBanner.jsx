import React from "react";

function CarouselBanner(props) {
  return (
    <div
      className={`h-[100vh] w-full flex bg-cover bg-contain pb-[100px] mx-auto  bg-no-repeat  `}
      style={{
        backgroundImage: `url(${props?.image})`,
      }}
    >
      <div className=" w-1/2"></div>
      {/* section 2 */}
      <div className="w-1/2 pt-24 ">
        <div className="pl-24">
          <div className="flex justify-start items-start">
            <img
              className="ml-8"
              style={{
                height: "125px",
                width: "125px",
              }}
              src="/assets/services-carousel-icons/icon-1.png"
              alt="services"
            />
          </div>

          <div className="flex">
            <h1 className="border-l-8 text-left md:w-[200px] space-x-2 pl-[24px] border-l-white font-bold text-[35px] font-[manrope] text-white pb-[0px] mt-[60px]">
              {props.title1}
            </h1>
          </div>
        </div>

        <div className="pl-24">
          <p className="text-white text-left mt-[30px] ms-[35px] w-[400px]">
            {props.description1}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarouselBanner;
