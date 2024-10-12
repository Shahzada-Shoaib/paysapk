import React from 'react'

function CarouselBanner(props) {
    return (
        <>

            {/* section 1 */}
            <div className="relative flex bg-cover ">
                <div className="absolute top-[60px] left-[100px] flex items-center justify-center">
                    <span className='text-[300px] font-bold'
                        style={{
                            WebkitTextStroke: '3px gold', // For the gold outline
                            color: 'transparent',
                            // Makes the text unfilled
                        }}
                    >
                        {props.number}
                    </span>
                </div>
                <div className="absolute flex items-center justify-center  -top-[200px] left-[1px] border w-full">
                    <img className='w-full' src={`${props.image}`} alt=''></img>
                </div>
            </div>




            {/* section 2 */}
            <div className='float-right me-[300px] mt-[250px]'>
                <div className='w-[100px] h-[100px] bg-[#185C8333] text-white rounded-sm ms-[35px]'>
                    vector
                </div>



                <div className="">
                    <div className="flex items-end"> {/* Flex container to align items at the bottom */}
                        <h1 className="border-l-8 pl-[24px] border-l-white text-bold text-[50px] font-[manrope] text-white pb-[0px] mt-[87px]"> {/* Padding to create space between text and border */}

                            {/* 365 DAYS <br/> SETTLEMENT */}

                            {props.title1}<br />
                            {props.title2}


                        </h1>
                    </div>
                </div>

                <div>
                    <p className='text-white mt-[30px] ms-[35px]'>
                        {/* Get lightning-fast payment settlements<br />
                        with PaySa's POS terminal (within 24 hours) */}
                        {props.description1}<br />{props.description2}
                    </p>
                </div>

            </div>


        </>



    )
}

export default CarouselBanner;