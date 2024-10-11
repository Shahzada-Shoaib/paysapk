// import logo from './logo.svg';
import Footer from "./components/Footer";
import Navbar from "./components/Home/Navbar";
import Banner from "./components/Home/Banner";
import MenuPopup from "./components/MenuPopup";
import { useState } from "react";
import Slider from "react-slick";
import LogoSlider from "./components/Home/LogoSlider";
import Button from "./components/Button";
// import AboutUsCard from "./components/Home/AboutUsCard";
import AboutUsGrid from "./components/Home/AboutUsGrid";
import MapSection from "./components/Home/MapSection";
import HomePageCarousel from "./components/Home/HomePageCarousel";
import CarouselBanner from "./components/Home/CarouselBanner";
import PartnerSlider from "./components/Home/PartnersSlider";
import PaysaPage from "./components/Paysa-picks-page/PaysaPage";


function App() {
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  return (
    <div>
      {/* Home Page starts here */}
      {/* <Navbar
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
      <Footer /> */}
      {/* home page ends here */}


      {/* <PaysaPage/> */}
      <PaysaPage/>
    </div>
  );
}

export default App;
