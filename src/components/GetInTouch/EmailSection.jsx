import React from 'react'
// import ChevronButton from '../ChevronButton';

function EmailSection() {
    return (
        <div>


            <section className="relative max-w-screen-lg mx-auto mt-4">
                <div className="md:pt-12">
                    <img className='hidden md:block h-[456px] w-[424px] rounded-[20px] mb-32 ' src='/assets/get-in-touch-images/yellowImage.svg' alt='background poster' />
                </div>


                
                <div className="md:absolute  w-[100%] lg:w-[604px] h-[439px] bg-[#3F94C44D] rounded-[20px] top-0  
                md:left-[250px] z-20">
                    <div className='pl-[20px] pt-[10px] md:pl-[52px] md:pt-[70px]  h-full md:h-auto rounded-[20px] relative backdrop-blur-md md:w-[60%]'>
                      

                        <p className='text-white font-[raleway] pb-2'>Name *</p>
                        <input className='w-[487px] h-[42.35px] rounded-md bg-[#185C8333] border border-[#185C8333] p-2'
                        ></input>

                        <p className='text-white font-[raleway] pb-2'>Email *</p>
                        <input className='w-[487px] h-[42.35px] rounded-md bg-[#185C8333] border border-[#185C8333] p-2'
                        ></input>

                        <p className='text-white font-[raleway] pb-2'>Contact no *</p>
                        <input className='w-[487px] h-[42.35px] rounded-md bg-[#185C8333] border border-[#185C8333] p-2'
                        ></input>

                        <p className='text-white font-[raleway] pb-2'>Message *</p>
                        <input className='w-[487px] h-[74.35px] rounded-md bg-[#185C8333] border border-[#185C8333] p-2'
                        ></input>


                      
                    </div>
                </div>
              
              
            </section>


        </div>





    )
}

export default EmailSection;