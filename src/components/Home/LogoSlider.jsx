import React from "react";
import Marquee from "react-fast-marquee";
import useScreenSize from "../../utils/useIsMobile";

const logos = [
  "../assets/clients-logos/clients-logo-1.svg",
  "../assets/clients-logos/clients-logo-2.svg",
  "../assets/clients-logos/clients-logo-3.svg",
  "../assets/clients-logos/clients-logo-4.svg",
  "../assets/clients-logos/clients-logo-5.svg",



  
  "../assets/clients-logos/clients-logo2.svg",
  "../assets/clients-logos/clients-logo4.svg",
  "../assets/clients-logos/clients-logo5.svg",
  "../assets/clients-logos/clients-logo6.svg",
  "../assets/clients-logos/clients-logo7.svg",
  
  "../assets/clients-logos/clients-logo8.svg",
  "../assets/clients-logos/clients-logo9.svg",
  "../assets/clients-logos/clients-logo10.svg",
  "../assets/clients-logos/clients-logo11.svg",
  "../assets/clients-logos/clients-logo12.svg",
  "../assets/clients-logos/clients-logo15.svg",
  "../assets/clients-logos/clients-logo17.svg",
  "../assets/clients-logos/clients-logo18.svg",
  "../assets/clients-logos/clients-logo19.svg",
  "../assets/clients-logos/clients-logo20.svg",
  
];

function LogoSlider() {
  const { isMobile } = useScreenSize();

  return (
    <div className="mx-auto max-w-screen-2xl">
      <Marquee
        gradient={false}
        speed={isMobile ? 30 : 50}
        direction="left"
        pauseOnHover={true}
      >
        {logos.map((logo, index) => (
          <div key={index} className={`mx-4 md:mx-8`}>
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="object-contain w-24 h-16 md:w-40 md:h-24"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default LogoSlider;
