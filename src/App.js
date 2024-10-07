// import logo from './logo.svg';

import Footer from "./components/Footer";
import Button from "./components/Button";
import Navbar from "./components/Home/Navbar";
import Banner from "./components/Home/Banner";
import MenuPopup from "./components/MenuPopup";
import { useState } from "react";
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
      <Footer />
      {/* <Button /> */}
      <Button />
    </div>
  );
}

export default App;
