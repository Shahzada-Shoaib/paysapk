import React from 'react';

function CarouselServices() {
    return (
        <div className='h-[1400px] text-white bg-center bg-cover'

        >
            <div className='flex justify-center'
                style={{ backgroundImage: "url('/assets/servicesPage/carouselServices1.svg')" }}
            >

                <div className="h-[1050px] flex flex-col justify-end items-center  "> {/* Added flex, flex-col, justify-end */}
                    <div className='w-[227px] h-[219px] rounded-md bg-cyan-100'>
                        <img />
                    </div>
                    <div className='font-bold text-[35px] font-[manrope] mt-[57px] '>
                        <h1>365 DAYS SETTLEMENT</h1>
                    </div>
                    <div className='w-[650px] font-[raleway] font-semibold text-center mt-[32px] pb-4'>
                        <p>
                            PaySa offers its merchant partners quick and efficient payment settlements, ensuring that funds from credit card and debit card transactions are deposited into their designated accounts within 24 hours. This speedy settlement process improves cash flow for businesses, enabling them to meet their financial obligations and invest in growth opportunities without delay.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full border h-[300px]'>

            </div>



        </div>
    );
}

export default CarouselServices;
