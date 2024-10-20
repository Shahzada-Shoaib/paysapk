import React from 'react'
import Navbar from '../Home/Navbar';
import BannerWithoutVideo from '../BannerWithoutVideo';

function HeroSectionInServices() {
    return (
        <div
            className="flex flex-col h-[100vh] md:h-[1300px] bg-center bg-cover "
            style={{ backgroundImage: "url('/assets/servicesPage/bannerServices.svg')" }}
        >
            <Navbar />

            < div className="banner" >
                <div>
                    <h1 className="px-4 mb-4 md:mb-0 md:px-0 max-w-[914px]">
                        EXCEPTIONAL BANKING SERVICES
                    </h1>
                </div>
                <div>
                    <p className="max-w-[700px] px-4 md:px-0   text-center">
                        With all the tools you need to track your transaction and even repeat payment as desired.
                    </p>
                </div>
            </div >





        </div>
    )
}

export default HeroSectionInServices;




