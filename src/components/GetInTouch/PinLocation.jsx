import React from 'react'

function PinLocation() {
    return (
        <div className='flex justify-center w-full space-x-32'>

            <div className='flex  w-[300px] mt-auto'>
                <img className='pb-8' src='/assets/get-in-touch-images/locationIcon.svg' />

                <p className='flex pt-14 text-white w-[260px]'> 45 Jinnah Boulevard, Sector E Commercial Area, DHA Phase 2, Islamabad, 45730</p>
            </div>
            <div className='flex  w-[300px] mt-auto'>
                <img className='pb-8 ' src='/assets/get-in-touch-images/locationIcon.svg' />

                <p className='flex  pt-14 text-white w-[260px]'> PaySa FTDP Pvt Ltd Office No 5010 Delta 5 69 Abid Majeed Road Old Airport Building Lahore Cantonment, 54810 </p>
            </div>
            <div className='flex mt-auto  w-[300px]'>
                <img className='pb-8 ' src='/assets/get-in-touch-images/locationIcon.svg' />

                <p className='flex pt-14 text-white w-[260px]'> Coming Soon in Karachi</p>
            </div>

        </div>


        // <div className="flex justify-center w-full h-screen border">
        //     <div className="flex space-x-8">
        //         <div className="bg-blue-500 w-[150px] h-[200px]"></div>
        //         <div className="bg-red-500 w-[150px] h-[200px]"></div>
        //         <div className="bg-green-500 w-[150px] h-[200px]"></div>
        //     </div>
        // </div>


    )
}

export default PinLocation;