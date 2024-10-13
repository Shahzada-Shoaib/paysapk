import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUsGrid = () => {
  return (
    <>
      <div className="flex items-center justify-center max-w-screen-xl px-6 pb-12 mx-auto md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[45px]">
          <AboutUsCard
            title="OUR STORY"
            isPrimary
            description="With swift progress and major industry partnerships, we’re transforming banking."
          />
          <AboutUsCard
            title="LIFE @ PAYSA"
            description="With a commitment to service excellence and adaptability, we foster an environment where every day is a chance to grow."
          />
          <AboutUsCard
            title="SERVICES"
            isPrimary
            description="At PaySa, we offer lightning-fast payments, data insights, top security, and 24/7 support."
          />
          <AboutUsCard
            title="PAYSA HUMOUR"
            description="At PaySa, we live for a thriving and fun environment. "
          />
          <AboutUsCard
            title="VALUES"
            isPrimary
            description="At PaySa, our values drive our vision for a seamless digital future."
          />
          <AboutUsCard
            title="CAREER"
            description="Join our dynamic team if you have a thirst for market exposure and career growth."
          />
        </div>
      </div>
    </>
  );
};

export default AboutUsGrid;
