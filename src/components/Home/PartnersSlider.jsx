import React from "react";
import Marquee from "react-fast-marquee";
import useScreenSize from "../../utils/useIsMobile";

const logos = [
  "../assets/partners-Logos/partner1.svg",
  "../assets/partners-Logos/partner-2.svg",
  "../assets/partners-Logos/partner3.png",
  "../assets/partners-Logos/partner4.png",
  "../assets/partners-Logos/partner5.png",
  "../assets/partners-Logos/partner6.png",
  "../assets/partners-Logos/partner7.svg",
];

function PartnerSlider() {
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

export default PartnerSlider;
