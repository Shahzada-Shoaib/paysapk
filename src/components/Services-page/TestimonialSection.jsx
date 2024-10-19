import React from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
  return (
    <div className="max-w-screen-xl px-4 md:px-0 mx-auto">
      <h1 className="text-white text-center text-[35px] font-bold font-manrope mb-16 md:mb-0">
        TESTIMONIALS
      </h1>
      <div
        className="w-full h-[800px] hidden md:block bg-cover bg-no-repeat bg-right"
        style={{
          backgroundImage: "url('./assets/servicesPage/testimonialIMG1.svg')",
        }}
      >
        <div className="lg:float-right pt-32 ">
          <TestimonialCard
            brandLogo="/assets/servicesPage/cardLogo1.svg"
            testimonial={
              "PaySa's POS solution has revolutionized how we serve our customers, speeding up transactions and reducing wait times. It's reliability personified."
            }
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative lg:-mt-[150px] mb-4">
        <div className="lg:col-span-1 ">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-one.svg"
            testimonial={
              "PaySa's POS terminals have not only simplified transactions but also provided us with real-time sales data that aids in strategic planning."
            }
          />
        </div>
        <div className="lg:col-span-1  flex justify-center">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-two.svg"
            testimonial={
              "Implementing PaySa at our location has simplified our operations, allowing us to focus on what we do best -- serving frest, fast food."
            }
          />
        </div>
        <div className="lg:col-span-1   flex justify-end">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-three.svg"
            testimonial={
              "Fast service and quick payments, thanks to PaySa's efficient POS terminals. It keeps the customers coming back!"
            }
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex space-x-4 md:mt-[48px] md:h-[550px]">
        <div className="w-full md:w-[356px] ">
          <TestimonialCard
            brandLogo="/assets/testimonial-logo/logo-five.svg"
            testimonial={
              "PaySa’s reliable and user-friendly POS system has significantly enhanced our guest experience by streamlining payments."
            }
          />
        </div>

        <div className="hidden md:flex md:flex-1">
          <img
            src="/assets/servicesPage/POSmachine.svg" // Larger placeholder image
            alt="Placeholder"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
