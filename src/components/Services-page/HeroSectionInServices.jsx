import React from 'react'
import Navbar from '../Home/Navbar';
import BannerWithoutVideo from '../BannerWithoutVideo';

function HeroSectionInServices() {
    return (
        <div
            className="flex flex-col h-[1392px] bg-center bg-cover "
            style={{ backgroundImage: "url('/assets/servicesPage/bannerServices.svg')" }}
        >
            <Navbar />

            < div className="banner" >
                <div>
                    <h1 className="max-w-[914px]">
                        EXCEPTIONAL BANKING SERVICES
                    </h1>
                </div>
                <div>
                    <p className="max-w-[700px]   text-center">
                        With all the tools you need to track your transaction and even repeat payment as desired.
                    </p>
                </div>
            </div >





        </div>
    )
}

export default HeroSectionInServices;




