import React, {useRef} from "react";
import Slider from "react-slick";
import ChevronButton from "../ChevronButton"

function CarouselServices() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        fade:false
      };

    let sliderRef = useRef(null);


    const handleNext = () => {
        sliderRef.slickNext();
      };


      const handlePrev = () => {
        sliderRef.slickPrev();
      };

      const backgroundImageUrl = "https://plus.unsplash.com/premium_photo-1729005325806-dcd6b63c24dc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <Slider {...settings}
    ref={slider => {
        sliderRef = slider;
      }}
    >
      <div 
      className="flex justify-center h-[100vh] block w-full bg-cover bg-no-repeat bg-center"
      style={{ background: `url(${backgroundImageUrl})` }}>

                <div className="flex px-6 md:px-0 text-center flex-col text-white justify-end items-center "> 
                      <img height="227px" width="227px" src='/assets/services-carousel-icons/icon-1.png'  alt='services' />
                    <div className='font-bold text-[35px] font-[manrope] mt-[57px] '>
                        <h1>365 DAYS SETTLEMENT</h1>
                    </div>
                    <div className='max-w-[650px] font-[raleway] font-semibold text-center mt-[32px] pb-[65px]'>
                        <p>
                            PaySa offers its merchant partners quick and efficient payment settlements, ensuring that funds from credit card and debit card transactions are deposited into their designated accounts within 24 hours. This speedy settlement process improves cash flow for businesses, enabling them to meet their financial obligations and invest in growth opportunities without delay.
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
      <div className='flex justify-center h-[100vh] w-full bg-cover bg-no-repeat bg-center'
                        style={{ backgroundImage: "url('/assets/servicesPage/carouselServices2.svg')" }}
                    >
        
                        <div className="flex flex-col text-white justify-end items-center "> 
                              <img height="227px" width="227px" src='/assets/services-carousel-icons/icon-2.png'  alt='services' />
                            <div className='font-bold text-[35px] font-[manrope] mt-[57px] '>
                                <h1>CUSTOMISED MIS</h1>
                            </div>
                            <p className='max-w-[650px] pb-[65px] font-[raleway] font-semibold text-center mt-[32px] pb-4'>
                            PaySa provides merchants with comprehensive business reports and analytics. These detailed reports offer valuable insights into their operations, sales trends, customer behavior, and other crucial metrics. Armed with this data, merchants can make informed decisions on various aspects of their business. This data-driven approach empowers merchants to optimize their business operations and maximize profitability.
                            </p>
                            <div className="flex space-x-24">
                        <span onClick={handlePrev} className="rotate-180">
                        <ChevronButton />
                        </span>
                        <span onClick={handleNext} className="cursor-pointer">
                          <ChevronButton  />
                        </span>
                        
                    </div>
                        </div> 
                    </div>

      <div
        className="flex justify-center h-[100vh] w-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/assets/servicesPage/carouselServices3.svg')",
        }}
      >
        <div className="flex flex-col text-white justify-end items-center ">
          <img
            height="227px"
            width="227px"
            src="/assets/services-carousel-icons/icon-3.png"
            alt="services"
          />
          <div className="font-bold text-[35px] font-[manrope] mt-[57px] ">
            <h1>SECURE VPN TUNNEL</h1>
          </div>
          <p className="max-w-[650px] pb-[65px] font-[raleway] font-semibold text-center mt-[32px] pb-4">
          To ensure highest levels of security PaySa employs a state of the art VPN tunnel setting unprecedented standards for security during your payment process. This VPN tunnel acts as a secure conduit for transaction data, encrypting and safeguarding sensitive information. This cutting-edge security measure protects customers' payment data from potential cyber threats and fraudulent activities, enhancing trust and confidence in the payment process for both merchants and their customers.
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
    
    
    </Slider>
  );
}

export default CarouselServices;
