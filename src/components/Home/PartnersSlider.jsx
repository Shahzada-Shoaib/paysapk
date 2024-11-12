
import React from "react";

const logos = [

    "../assets/partners-Logos/partner1.svg",
    "../assets/partners-Logos/partner2.png",
    "../assets/partners-Logos/partner3.png",
    "../assets/partners-Logos/partner4.png",
    "../assets/partners-Logos/partner5.png",
    "../assets/partners-Logos/partner6.png",
    "../assets/partners-Logos/partner7.svg",
    "../assets/partners-Logos/partner8.svg",

];

function PartnersSlider() {
  // Clone the logos array to create a continuous loop effect
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="relative mx-auto overflow-hidden max-w-screen-2xl">
      {/* Wrapping div with animation style */}
      <div
        className="flex gap-4 whitespace-nowrap"
        style={{
          display: "flex",
          gap: "2rem", // 2rem gap between logos
          whiteSpace: "nowrap",
          animation: "marquee 50s linear infinite", // Inline animation
        }}
      >
        {/* Loop through the logos and display them */}
        {extendedLogos.map((logo, index) => (
          <div
            key={index}
            className="relative p-2 flex items-center justify-center min-w-[200px]"
          >
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="object-contain w-40 h-24"
            />
          </div>
        ))}
      </div>

      {/* Adding the animation to the component using a <style> tag */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${logos.length * 160 + (logos.length - 1) * 16}px); /* Move logos by their total width + gap */
            }
          }
        `}
      </style>
    </div>
  );
}

export default PartnersSlider;

