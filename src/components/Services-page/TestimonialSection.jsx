import React from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
  return (
    <div className="max-w-screen-xl px-4 md:px-0 mx-auto">
      <div
        className="w-full h-[800px]"
        style={{
          backgroundImage: "url('./assets/servicesPage/testimonialIMG1.svg')",
        }}
      >
        <div className="float-right mt-32 ">
          <TestimonialCard />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex w-full relative -mt-[150px] mb-4 space-x-[90px] h-[466px]">
        <div className="flex-1 ">
          <TestimonialCard />
        </div>

        <div className="flex-1">
          <TestimonialCard />
        </div>

        <div className="flex-1">
          <TestimonialCard />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex space-x-4 mt-[48px] h-[550px]">
        <div className=" w-[356px] ">
          <TestimonialCard />
        </div>

        <div className="flex-1 w-[1255px]">
          <img
            src="/assets/servicesPage/POSmachine.svg" // Larger placeholder image
            alt="Placeholder"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
