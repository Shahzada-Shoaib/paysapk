import React, { useRef } from "react";
import Slider from "react-slick";
import ChevronButton from "../ChevronButton";

function CarouselServices() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    fade: false,
  };

  let sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.slickNext();
  };

  const handlePrev = () => {
    sliderRef.slickPrev();
  };

  return (
    <Slider
      {...settings}
      ref={(slider) => {
        sliderRef = slider;
      }}
    >
      {/* Slide 1 */}
      <div>
        <div
          style={{
            backgroundImage:
              "url('https://i.imghippo.com/files/L73ix1729337654.png')",
          }}
          className={`flex  md:pb-8 justify-center h-[100vh] block w-full bg-cover bg-no-repeat bg-center`}
        >
          <div className="flex px-6 md:px-0 text-center flex-col text-white justify-end items-center ">
            <img
              className="h-[150px] w-[150px]   md:h-[227px] md:w-[227px]"
              src="/assets/services-carousel-icons/icon-1.png"
              alt="services"
            />
            <div className="px-4 md:px-0 font-bold  text-[30px] md:text-[35px] font-[manrope] mt-[57px] ">
              <h1>365 DAYS SETTLEMENT</h1>
            </div>
            <div className="max-w-[650px] px-4 md:px-0 font-[raleway] font-semibold text-center mt-[32px] pb-8 md:pb-[65px]">
              <p>
                PaySa offers its merchant partners quick and efficient payment
                settlements, ensuring that funds from credit card and debit card
                transactions are deposited into their designated accounts within
                24 hours. This speedy settlement process improves cash flow for
                businesses, enabling them to meet their financial obligations
                and invest in growth opportunities without delay.
              </p>
            </div>
            {/* Carousel Control */}
            <div className="flex space-x-24">
              <span onClick={handlePrev} className="rotate-180">
                <ChevronButton isPrimary={true} />
              </span>
              <span onClick={handleNext} className="cursor-pointer">
                <ChevronButton isPrimary={true} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*  Slide 2 */}
      <div>
        <div
          style={{
            backgroundImage:
              "url('https://i.imghippo.com/files/m8tB21729336452.png')",
          }}
          className="flex md:pb-8 justify-center h-[100vh] w-full bg-cover bg-no-repeat bg-center"
        >
          <div className="flex flex-col text-white justify-end items-center ">
            <img
             className="h-[150px] w-[150px]   md:h-[227px] md:w-[227px]"
              src="/assets/services-carousel-icons/icon-2.png"
              alt="services"
            />
            <div className="font-bold  px-6 md:px-0 text-[28px] md:text-[35px] font-[manrope] mt-[57px] ">
              <h1>CUSTOMISED MIS</h1>
            </div>
            <p className="max-w-[650px] px-6 md:px-0 pb-8 md:pb-[65px] font-[raleway] font-semibold text-center mt-[32px] pb-4">
              PaySa provides merchants with comprehensive business reports and
              analytics. These detailed reports offer valuable insights into
              their operations, sales trends, customer behavior, and other
              crucial metrics. Armed with this data, merchants can make informed
              decisions on various aspects of their business. This data-driven
              approach empowers merchants to optimize their business operations
              and maximize profitability.
            </p>
            <div className="flex space-x-24">
              <span onClick={handlePrev} className="rotate-180">
                <ChevronButton />
              </span>
              <span onClick={handleNext} className="cursor-pointer">
                <ChevronButton />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* slide 3 */}
      <div>
        <div
          style={{
            backgroundImage:
              "url('https://i.imghippo.com/files/SXrFS1729337778.png')",
          }}
          className="flex md:pb-8 justify-center h-[100vh] w-full bg-cover bg-no-repeat bg-center"
        >
          <div className="flex flex-col text-white justify-end items-center ">
            <img
             className="h-[150px] w-[150px]   md:h-[227px] md:w-[227px]"
              src="/assets/services-carousel-icons/icon-3.png"
              alt="services"
            />
            <div className="font-bold  text-[28px] md:text-[35px] font-[manrope] mt-[57px] ">
              <h1>SECURE VPN TUNNEL</h1>
            </div>
            <p className="max-w-[650px] px-6 md:px-0  pb-8 md:pb-[65px] font-[raleway] font-semibold text-center mt-[32px] pb-4">
              To ensure highest levels of security PaySa employs a state of the
              art VPN tunnel setting unprecedented standards for security during
              your payment process. This VPN tunnel acts as a secure conduit for
              transaction data, encrypting and safeguarding sensitive
              information. This cutting-edge security measure protects
              customers' payment data from potential cyber threats and
              fraudulent activities, enhancing trust and confidence in the
              payment process for both merchants and their customers.
            </p>
            <div className="flex space-x-24">
              <span onClick={handlePrev} className="rotate-180">
                <ChevronButton isPrimary={true} />
              </span>
              <span onClick={handleNext} className="cursor-pointer">
                <ChevronButton isPrimary={true} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      {/*  */}
      <div>
        <div 
               style={{
                backgroundImage:
                  "url('https://i.imghippo.com/files/8AE6F1729337968.png')",
              }}
        className="flex md:pb-8 justify-center h-[100vh] w-full bg-cover bg-no-repeat bg-center">
          <div className="flex flex-col text-white justify-end items-center ">
            <img
              className="h-[150px] w-[150px]   md:h-[227px] md:w-[227px]"
              src="/assets/services-carousel-icons/icon-2.png"
              alt="services"
            />
            <div className="font-bold text-[28px] md:text-[35px] font-[manrope] mt-[57px] ">
              <h1>24/7 Customer Support</h1>
            </div>
            <p className="max-w-[650px] md:pb-[65px] md:px-0 px-6 font-[raleway] font-semibold text-center mt-[32px] pb-8">
            PaySa understands the importance of prompt and efficient customer support. Therefore we offer round-the-clock customer support to address any queries or concerns merchants may have. Whether it  is technical assistance with the POS terminal, clarifying billing-related questions, or resolving any other issues, the dedicated support team at PaySa is available at a moment's notice. This commitment to excellent customer service fosters strong relationships with merchants and instills confidence in the reliability of PaySa's services.
            </p>
            <div className="flex space-x-24">
              <span onClick={handlePrev} className="rotate-180">
                <ChevronButton  />
              </span>
              <span onClick={handleNext} className="cursor-pointer">
                <ChevronButton  />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default CarouselServices;
