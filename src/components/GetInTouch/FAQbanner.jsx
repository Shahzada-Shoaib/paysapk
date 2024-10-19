import React from "react";
import BannerWithoutVideo from "../BannerWithoutVideo";

function FAQbanner() {
  return (
    <div
      className="bg-cover h-[800px] md:h-[1000px] bg-center flex flex-col  "
      style={{
        backgroundImage: "url('/assets/get-in-touch-images/FAQbanner.svg')",
      }}
    >
      <BannerWithoutVideo
        title="FREQUENTLY ASKED QUESTIONS"
        description="Dive in to find comprehensive answers and insights that address common queries, ensuring a seamless experience."
      />
    </div>
  );
}

export default FAQbanner;
