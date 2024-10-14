import React from 'react'
import ChevronButton from '../ChevronButton';

function AboutUsCarouselCard() {
    return (
        <>

            <section className="relative max-w-screen-lg px-6 mx-auto md:px-0 ">
                <div className="md:pt-12">
                    <img className='hidden md:block h-[424px] w-[384px] rounded-[20px] ' src='/assets/aboutUsImages/aboutUsYellowCard.svg' alt='background poster' />
                </div>
                
                
                <div className="md:absolute  w-[100%] lg:w-[656px] h-[427px] bg-[#3F94C44D] rounded-[20px] top-0  
                md:left-[250px] z-20">
                    <div className='pl-[20px] pt-[10px] md:pl-[52px] md:pt-[70px]  h-full md:h-auto rounded-[20px] relative backdrop-blur-md md:w-[55%]'>
                        <div>
                            <h1 className='font-bold text-white text-[25px] font-[manrope] ' >
                                WORKINGS@PAYSA
                            </h1>
                        </div>
                        <div className='mt-[20px]'>
                            <p className='text-white text-[16px] font-semibold font-[raleway]'>
                                At PaySa, we foster diversity, support professional growth, and prioritize open communication and genuine relationships. Our talent philosophy centers on hiring ambitious professionals, offering career growth opportunities, and achieving greatness together by aligning values and goals.
                            </p>
                        </div>
                        <div>
                            <button
                                style={{ background: 'rgba(24, 92, 131, 0.5)' }}
                                className='mt-[45px] items-center text-white flex rounded px-4 py-1 font-[raleway]'>Our Values
                                <span className='ml-4'><ChevronButton isSmall isPrimary={true} /></span>
                            </button>
                        </div>
                    </div>
                </div>

                
                
                <div className="absolute w-[283px] h-[358px] md:w-[650px]  top-[290px]   md:left-[630px]">
                    <img src='/assets/aboutUsImages/P-Image.svg' alt='About Page Carousel' />
                </div>

            </section>

        </>


    )
}

export default AboutUsCarouselCard;