import React from "react";
import AboutUsCard from "../Home/AboutUsCard";

function AboutUsCardsSection() {
  return (
    <div className="max-w-screen-xl mx-auto mt-[-100px]">
      <div className="">
        <h1 className="text-white banner text-[50px] font-bold font-[manrope] mb-[81px]">
          {" "}
          PAYSAPICKS: ARTICLES & HUMOUR{" "}
        </h1>

        {/* Responsive Grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] p-6 h-auto">
          {/* Card 1 */}
          <div>
            <AboutUsCard
              title="MEEZAN BANK COLLABORATION"
              description="Meezan Bank, Pakistan’s leading Islamic bank and PaySa have partnered to enable Point of Sale (POS) payment services to tap into the country’s booming digital payment ecosystem."
              isPrimary={true}
            />
          </div>

          {/* Card 2 */}
          <div className="h-auto">
            <AboutUsCard
              title="PAYSA COMIC VOL 1"
              description="Join the PaySa adventure in our vibrant comic series! Uncover the story of our innovative POS machines in an unexpected twist. Stay tuned for the next colorful edition – it's going to be epic!"
            />
          </div>

          {/* Card 3 */}
          <div className="h-auto">
            <AboutUsCard
              title="PAYSA WRAP"
              description="Inspired by the trending spotify wrap on social media, PaySa presents the wrap in its very own classic style."
              isPrimary={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCardsSection;
