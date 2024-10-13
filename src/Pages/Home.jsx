// import logo from './logo.svg';
import Footer from "../components/Footer";
import Navbar from "../components/Home/Navbar";
import Banner from "../components/Home/Banner";
import MenuPopup from "../components/MenuPopup";
import { useState } from "react";
import Slider from "react-slick";
import ClientSlider from "../components/Home/LogoSlider";
import Button from "../components/Button";
// import AboutUsCard from "./components/Home/AboutUsCard";
import AboutUsGrid from "../components/Home/AboutUsGrid";
import MapSection from "../components/Home/MapSection";
import HomePageCarousel from "../components/Home/HomePageCarousel";
import CarouselBanner from "../components/Home/CarouselBanner";
import PartnerSlider from "../components/Home/PartnersSlider";
import PaysaPage from "../components/Paysa-picks-page/PaysaPage";
import LogoSlider from "../components/Home/LogoSlider";

function App() {
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  return (
    <div>
      <Navbar
        showMenuPopup={showMenuPopup}
        setShowMenuPopup={setShowMenuPopup}
      />
      {showMenuPopup && (
        <MenuPopup
          showMenuPopup={showMenuPopup}
          setShowMenuPopup={setShowMenuPopup}
        />
      )}
      <Banner />
      <div className="text-center w-full flex justify-center items-center mt-12">
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
       <div className="flex justify-center px-8 text-center my-12">
        <h1 className="text-white font-bold font-[manrope] text-[35px]">
          OUR TRUSTED PARTNERS
        </h1>
      </div> 
      <PartnerSlider />
      <div className="mt-8">
      <MapSection /> 
      </div>
          <div className="flex items-center justify-center w-full mt-[236px] text-center mb-[136px]">
                <Button title="Get in the circle"  isPrimary={false} isChevronEnabled />
            </div>
      <Footer />
    </div>
  );
}

export default App;
