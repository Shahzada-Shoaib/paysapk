// import logo from './logo.svg';
import { useState, Suspense, lazy } from "react";
import Navbar from "../components/Home/Navbar";
import Banner from "../components/Home/Banner";
import Button from "../components/Button";
import BannerWithoutVideo from "../components/BannerWithoutVideo";
const Footer = lazy(() => import("../components/Footer"));
const LogoSlider = lazy(() => import("../components/Home/LogoSlider"));
const PartnerSlider = lazy(() => import("../components/Home/PartnersSlider"));
const MapSection = lazy(() => import("../components/Home/MapSection"));

const AboutUsGrid = lazy(() => import("../components/Home/AboutUsGrid"));
const HomePageCarousel = lazy(() =>
  import("../components/Home/HomePageCarousel")
);

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex items-center justify-center w-full mt-12 text-center">
        <Button title="Take Charge Now" isChevronEnabled />
      </div>
      <div className="flex justify-center">
        <h1 className="text-white font-bold px-6 text-center  font-[manrope] text-[35px] my-12">
          OUR TRUSTED CLIENTS
        </h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <LogoSlider />
      </Suspense>
      <div className="flex justify-center">
        <h1 className="text-white font-bold font-[manrope] text-center px-6 text-[35px] my-12">
          ABOUT US
        </h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUsGrid />
      </Suspense>

      <BannerWithoutVideo
        title="EXCEPTIONAL BANKING SERVICES"
        description="With all the tools you need to track your transaction and even repeat payment as desired."
      />
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageCarousel />
      </Suspense>
      
      {/* <div className="flex justify-center px-8 mt-12 text-center">
        <h1 className="text-white font-bold font-[manrope] text-[35px]">
          OUR TRUSTED PARTNERS
        </h1>
      </div> */}
      <div className="mt-[150px]">
        <BannerWithoutVideo title=" OUR TRUSTED PARTNERS" />       
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PartnerSlider />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mt-8">
          <MapSection />
        </div>
      </Suspense>
      <div className="flex items-center justify-center w-full mt-[236px] text-center mb-[136px]">
        <Button title="Take charge Now" isPrimary={true} isChevronEnabled />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
      
     

    </div>
  );
}

export default App;
