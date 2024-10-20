import React from "react";

function TestimonialCard({ brandLogo = "", testimonial }) {
  return (
    <div className="text-white bg-[#185C8333] w-[100%] md:w-[355px] h-[476px] rounded-3xl">
      <div className="pl-10 flex flex-col h-full">
        {/* Image Row */}
        <div className="flex-1 flex items-center justify-start ">
          <img src={brandLogo} alt="brand testimonial" />
        </div>

        {/* Content Row */}
        <div className="flex-1 flex flex-col">
          <div className="mb-4 text-yellow-400 text-lg">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </div>
          <p className="w-[240px]">{testimonial}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
