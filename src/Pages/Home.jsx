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
      <LogoSlider />
      <div className="flex justify-center">
        <h1 className="text-white font-bold font-[manrope] text-center px-6 text-[35px] my-12">
          ABOUT US
        </h1>
      </div>
      <AboutUsGrid />
      <BannerWithoutVideo
        title="EXCEPTIONAL BANKING SERVICES"
        description="With all the tools you need to track your transaction and even repeat payment as desired."
      />
      <HomePageCarousel />
      <div className="flex justify-center px-8 my-12 text-center">
        <h1 className="text-white font-bold font-[manrope] text-[35px]">
          OUR TRUSTED PARTNERS
        </h1>
      </div>
      <PartnerSlider />
      <div className="mt-8">
        <MapSection />
      </div>
      <div className="flex items-center justify-center w-full mt-[236px] text-center mb-[136px]">
        <Button title="Get in the circle" isPrimary={false} isChevronEnabled />
      </div>
      <Footer />
    </div>
  );
}

export default App;
