import React from 'react'
import Button from '../Button';

function MapSection() {
    return (
      <>
      
            <section className="relative h-[700px] ms-[116px]">
                {/* First Div */}
                <div className="absolute w-[384px] h-[424px] rounded-[20px]  top-[150px]  left-[50px] z-10">
                    <img className='h-[424px] w-[384px] rounded-[20px] ' src='/assets/550Banner.png' alt='background poster' />
                </div>
                {/* Second Div */}

                <div className="  absolute w-[656px] h-[363px] bg-[#3F94C44D] backdrop-blur-md rounded-[20px]  top-[100px] left-[300px] z-20">
                    <div className='ml-[52px] mt-[70px]'>
                        <div >
                            <h1 className='font-bold text-white text-[40px] font-[manrope] ' >
                                550+ Customers
                            </h1>
                        </div>
                        <div className='mt-[20px]'>
                            <p className='text-white text-[16px] font-semibold font-[raleway]'>
                                A Fintech Company Providing Multiple<br />Services Throughout Pakistan for All<br />Your Financial Needs.
                            </p>
                        </div>
                        <div>
                            <button className='text-white border mt-[52px] border-white'>Discover more</button>
                        </div>
                    </div>
                </div>
                {/* Third Div */}
                <div className="absolute w-[650px] h-[560px] top-[150px] left-[508px]">
                    <img src='/assets/homePageMap.svg' alt='HomePage Map' />
                </div>
            </section>

            <div className="flex items-center justify-center w-full mt-[236px] text-center mb-[136px]">
                <Button title="Get in the circle" isChevronEnabled />
            </div>
      
      </>



       















    )
}

export default MapSection;