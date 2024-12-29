// import logo from './logo.svg';
import { useState, Suspense, lazy } from "react";
import { delay, motion } from "framer-motion";
import Navbar from "../components/Home/Navbar";
import Banner from "../components/Home/Banner";
import Button from "../components/Button";
import BannerWithoutVideo from "../components/BannerWithoutVideo";
import MapPopup from "../components/MapPopup";
import LogoSlider from "../components/Home/LogoSlider";
import PartnerSlider from "../components/Home/PartnersSlider";
import { Link } from "react-router-dom";
import AnimatedText from "../components/phase2/AnimatedText";

const Footer = lazy(() => import("../components/Footer"));
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

      <div className=" md:my-[50px]">
        <motion.div {...fadeInUp} className="md:mt-[200px]">
          <BannerWithoutVideo title="OUR TRUSTED PARTNERS" />
        </motion.div>

        <motion.div {...fadeInUp} className="pt-8 pb-8">
          <div className="lg:pb-12">
            <PartnerSlider />
          </div>
        </motion.div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="lg:pb-40">
          <MapSection handleMapClick={() => setMapPopupState(true)} />
        </div>
      </Suspense>

      {/* <div className="flex justify-center md:mt-96">
        <Button isPrimary="" title="Get in the Circle" isChevronEnabled />
      </div> */}

      <div className="flex justify-center mx-6 mt-4 ">
        <img className="md:w-[755px]" src="/assets/text-animations/textAnimation.gif" alt="" />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="">
          <Footer />
        </div>
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
