import React from "react";
import ChevronButton from "../ChevronButton";

function AboutUsCarouselCard(props) {
  return (
    <div className="container md:mx-auto ">
      <section className="relative flex justify-center max-w-screen-lg mx-auto md:px-0">
        <div
          className="mt-14 relative h-[424px] w-[384px] right-[360px] hidden md:block rounded-[20px]"
          style={{
            backgroundImage: props.isFirstSlide
              ? `url(${props.yellowimageURL})`
              : "none",
            backgroundColor: props.isFirstSlide ? "transparent" : "#FDD21C",
          }}
        >
          {props.vector && (
            <img src={props.vector} alt="vector" className="mx-auto mt-8" />
          )}
        </div>





        

        <div
          className="md:absolute  w-[100%] lg:w-[656px] h-[427px] bg-[#3F94C44D] rounded-[20px] top-0  
                md:left-[250px]  z-2 "
        >
          <div
            className={`md:pt-20 md:pl-[102px] md:pr-[79px]   h-full md:h-auto rounded-[20px] relative ${props.textLeft} ${props.firstSlideBlur}`}
          >
            <div className=" mb-[22px] ">
              <h1 className="font-bold text-white text-[35px] font-[manrope]">
                {props.title}
              </h1>
            </div>
            
            <div className="mt-[20px] flex justify-center  ">
              <p className="text-white text-[16px] leading-5 font-[raleway] md:w-[] w-[] text-justify">
                {props.description}
              </p>
            </div>
            
            <div className="flex relative justify-center mt-[20px] md:mt-[40px] z-10 ">
              {props.navigationButtons}
            </div>

            <div className="flex flex-col items-center mt-[-22px] transition-transform transform hover:-translate-y-1">
              {props.button}
            </div>
          </div>
        </div>










        

        <div className="absolute w-[247px] h-[313px]   top-[330px] ml-10 z-1  md:left-[630px]  ">
          <img src={props.alphabetIMG} alt="About Page Carousel" />
        </div>
      </section>
    </div>
  );
}

export default AboutUsCarouselCard;
