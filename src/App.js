// import logo from './logo.svg';
import Footer from "./components/Footer";
import Navbar from "./components/Home/Navbar";
import Banner from "./components/Home/Banner";
import MenuPopup from "./components/MenuPopup";
import { useState } from "react";
import Slider from "react-slick";
import LogoSlider from "./components/Home/LogoSlider";



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
      <LogoSlider/>
      <Footer />
    </div>
  );
}

export default App;
