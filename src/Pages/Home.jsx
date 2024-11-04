// import logo from './logo.svg';
import { useState, Suspense, lazy } from "react";
import { delay, motion } from "framer-motion";
import Navbar from "../components/Home/Navbar";
import Banner from "../components/Home/Banner";
import Button from "../components/Button";
import BannerWithoutVideo from "../components/BannerWithoutVideo";
import MapPopup from "../components/MapPopup";
import { Link } from "react-router-dom";

const Footer = lazy(() => import("../components/Footer"));
const LogoSlider = lazy(() => import("../components/Home/LogoSlider"));
const PartnerSlider = lazy(() => import("../components/Home/PartnersSlider"));
const MapSection = lazy(() => import("../components/Home/MapSection"));
const AboutUsGrid = lazy(() => import("../components/Home/AboutUsGrid"));
const HomePageCarousel = lazy(() =>
  import("../components/Home/HomePageCarousel")
);

function App() {
  const [mapPopupState, setMapPopupState] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      <Navbar />
      <Banner />

      <motion.div {...fadeInUp}>
        <div className="flex justify-center">
          <h1 className="text-white font-bold px-6 text-center font-[manrope] text-[35px] my-12">
            OUR TRUSTED CLIENTS
          </h1>
        </div>
      </motion.div>

      <motion.div {...fadeInUp}>
        <LogoSlider />
      </motion.div>

      <motion.div {...fadeInUp}>
        <div className="flex justify-center">
          <h1 className="text-white font-bold font-[manrope] text-center px-6 text-[35px] my-12">
            ABOUT US
          </h1>
        </div>
      </motion.div>

      <Suspense fallback={<div>Loading...</div>}>
        <motion.div {...fadeInUp}>
          <AboutUsGrid />
        </motion.div>
      </Suspense>

      <motion.div {...fadeInUp}>
        <BannerWithoutVideo
          title="EXCEPTIONAL BANKING SERVICES"
          description="With all the tools you need to track your transaction and even repeat payment as desired."
        />
      </motion.div>

      <Suspense fallback={<div>Loading...</div>}>
        <motion.div {...fadeInUp}>
          <HomePageCarousel />
        </motion.div>
      </Suspense>

      <motion.div {...fadeInUp} className="md:mt-[150px]">
        <BannerWithoutVideo title="OUR TRUSTED PARTNERS" />
      </motion.div>

      <motion.div {...fadeInUp} className="pt-8 pb-8">
        <PartnerSlider />
      </motion.div>

      <Suspense fallback={<div>Loading...</div>}>
        <MapSection handleMapClick={() => setMapPopupState(true)} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>

      <div
        className={`transition-opacity duration-200 ease-in-out ${
          mapPopupState ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <MapPopup
          isOpen={mapPopupState}
          backgroundImage={""}
          onClose={() => setMapPopupState(false)}
        />
      </div>
    </div>
  );
}

export default App;
