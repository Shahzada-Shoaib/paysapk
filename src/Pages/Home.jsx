// import logo from './logo.svg';
import Footer from '../components/Footer';
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
            Home Page starts here
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
      <LogoSlider />
      <AboutUsGrid />
       <HomePageCarousel />
       <PartnerSlider/>
      <MapSection />
      <Footer />
            home page ends here


            {/* <PaysaPage/> */}
           
            {/* <div className='flex justify-center'>
                <h1 className='text-center text-white mb-8  font-bold font-manrope text-[35px] mt-[67.64px]'>
                    OUR TRUSTED CLIENTS
                </h1>
            </div> */}
            {/* <ClientSlider /> */}
            {/* <div className='flex justify-center'>
                <h1 className='text-white mb-10 md:mb-20 font-bold font-manrope text-[35px] mt-12'>
                    ABOUT US
                </h1>
            </div> */}
            {/* <AboutUsGrid /> */}
            {/* <HomePageCarousel /> */}
            {/* <LogoSlider />
      
      <MapSection />
      <Footer />  */}

            {/* <PaysaPage /> */}
        </div>
    );
}

export default App;
