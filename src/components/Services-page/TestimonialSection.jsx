import React from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
  return (
    <div className="max-w-screen-xl px-4 mx-auto md:px-0">
      <h1 className="text-white text-center text-[35px] font-bold font-manrope mb-16 md:mb-[40px]">
        TESTIMONIALS
      </h1>

      <div className="gap-20 mx-6 md:flex md:justify-center">
     

        <div className="mt-6">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-one.svg"
            testimonial={
              "PaySa's POS terminals have not only simplified transactions but also provided us with real-time sales data that aids in strategic planning."
            }
          />
        </div>
        <div className="mt-6">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-two.svg"
            testimonial={
              "Implementing PaySa at our location has simplified our operations, allowing us to focus on what we do best -- serving frest, fast food."
            }
          />
        </div>
        
        {/* <div className="mt-6">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-three.svg"
            testimonial={
              "Fast service and quick payments, thanks to PaySa's efficient POS terminals. It keeps the customers coming back!"
            }
          />
        </div> */}
        <div className="mt-6">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-four.svg"
            testimonial={
              "PaySa's POS solution has revolutionized how we serve our customers, speeding up transactions and reducing wait times. It's reliability personified."
            }
          />
        </div>
        
      </div>
      




      

      <div className="mx-6 md:gap-20 md:justify-center md:flex">
        

        {/* <div className="mt-6">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-four.svg"
            testimonial={
              "PaySa's POS terminals have not only simplified transactions but also provided us with real-time sales data that aids in strategic planning."
            }
          />
        </div> */}
        <div className="mt-6">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-five.svg"
            testimonial={
              "PaySa’s reliable and user-friendly POS system has significantly enhanced our guest experience by streamlining payments."
            }
          />
        </div>

        <div className="mt-6">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-three.svg"
            testimonial={
              "Fast service and quick payments, thanks to PaySa's efficient POS terminals. It keeps the customers coming back!"
            }
          />
        </div>
        
        
      
      </div>
      
    </div>
  );
}

export default TestimonialSection;
