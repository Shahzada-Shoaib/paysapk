import React from 'react';
import AboutUsCard from './AboutUsCard';

const AboutUsGrid = () => {
    return (
        <>
        <div className='flex justify-center mt-20'>
                <h1 className='text-center text-white w-[188px]h-[75px] font-bold text-[35px] font-[manrope]'>
                ABOUT US
            </h1>
        </div>
        
        <div className="flex items-center justify-center min-h-screen">
                <div className="grid grid-cols-3 gap-[45px]">
                {/* Calling the AboutUsCard component 6 times */}
                <AboutUsCard title='OUR STORY' description='With swift progress and major industry partnerships, we’re transforming banking.' />

                <AboutUsCard title='LIFE @ PAYSA' description='With a commitment to service excellence and adaptability, we foster an environment where every day is a chance to grow.' />

                <AboutUsCard title='SERVICES' description='At PaySa, we offer lightning-fast payments, data insights, top security, and 24/7 support.' />

                <AboutUsCard title='PAYSA HUMOUR' description='At PaySa, we live for a thriving and fun environment. ' />
                <AboutUsCard title='VALUES' description='At PaySa, our values drive our vision for a seamless digital future.' />

                <AboutUsCard title='CAREER' description='Join our dynamic team if you have a thirst for market exposure and career growth.' />

            </div>
        </div>
        
        </>
    );
};

export default AboutUsGrid;
