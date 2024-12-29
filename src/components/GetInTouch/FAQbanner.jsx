import React from "react";
import BannerWithoutVideo from "../BannerWithoutVideo";

function FAQbanner() {
  return (
    <div
      className="bg-cover h-[800px] md:h-[1000px] bg-center flex flex-col  "
      style={{
        backgroundImage: "url('/assets/get-in-touch-images/FAQbanner.webp')",
      }}
    >
      <div className="px-4 banner md:px-0">
        <h1 className="max-w-[914px]">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-center mt-5 md:max-w-[450px]">
          Dive in to find comprehensive answers and insights that address common
          queries, ensuring a seamless experience.{" "}
        </p>
      </div>
    </div>
  );
}

export default FAQbanner;
