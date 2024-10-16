import React from 'react'
import AboutUsCard from '../Home/AboutUsCard';


function AboutUsCardsSection() {
    return (

        // <AboutUsCard title=" title" description=" thisis  description"/>

        <div className='mt-72'>
           <h1 className='text-white banner text-[50px] font-bold font-[manrope] mb-[81px]'> PAYSAPICKS: ARTICLES & HUMOUR </h1>

            <div className="flex gap-[50px] p-6 mx-[50px]">
                {/* Card 1 - 1/4 width */}
                <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                    {/* <div className=''> */}
                    <AboutUsCard title="MEEZAN BANK COLLABORATION" description="Meezan Bank, Pakistan’s leading Islamic bank and PaySa have partnered to enable Point of Sale (POS) payment services to tap into the country’s booming digital payment ecosystem." />

                    {/* </div> */}


                </div>

                {/* Card 2 - 1/2 width */}
                <div className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">Card 2</h2>
                    <p>This card takes 50% of the available width.</p>
                </div>

                {/* Card 3 - Custom width */}
                <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">Card 3</h2>
                    <p>This card takes 33% of the available width.</p>
                </div>
            </div>
            
        </div>

    




    )
}

export default AboutUsCardsSection;