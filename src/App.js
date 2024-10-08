// import logo from './logo.svg';

import Footer from "./components/Footer";
import Navbar from "./components/Home/Navbar";
import Banner from "./components/Home/Banner";
import MenuPopup from "./components/MenuPopup";
import { useState } from "react";
import Button from "./components/Button";
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
      <div className="w-full flex justify-center">
        <Button title="Get in the circle" isPrimary={false} isChevronEnabled />
      </div>
      <Footer />
    </div>
  );
}

export default App;
