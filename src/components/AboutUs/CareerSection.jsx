import React from "react";

function CareerSection() {
  return (
    <div
      className="w-full "
      // style={{ backgroundImage: "url('/assets/aboutUsImages/CareerSection.svg')" }}
    >


     <div className="flex justify-around">
        <div className="text-white max-w-[560px] md:ml-[60px]  text-justify mt-20 mx-6">
          <h1 className="font-[manrope] text-[35px] font-bold">CAREER</h1>
          {/* <h2 className="mt-[44px] font-[manrope] font-bold">
          HUMAN RESOURCE BENEFITS
        </h2> */}




          <h2 className="mt-[44px] font-[manrope] font-bold">
            WORKING ENVIRONMENT
          </h2>
          <p className="font-[raleway] text-[16px] leading-[20px] font-semibold pt-[23px]">
            PaySa offers market-competitive salaries and other fringe benefits, and
            flexible time-off policies to ensure an equilibrium between your
            professional and personal commitments.
          </p>
          <p className="font-[raleway] text-[16px] leading-[20px] font-semibold pt-[23px]">
            Our commitment brings us together. At PaySa, our culture is to put our
            people first and honor accomplishments and contributions. Our values
            help us approach work with Passion, Accessibility, Saying Yes To
            Life!, Service Excellence and Accountability, hence making PaySa great
            by each passing day.
            <br />
            <br />
            With a simple talent philosophy, we hire ambitious and early-stage
            professionals to give them the opportunity to help PaySa achieve its
            milestones at the same time building their own track record of
            achievements, make an impact and accelerate their career growth.
            <br />
            <br />
            Great things happen when people with mutually aligned values and goals
            come together.
          </p>

          <h2 className="mt-[81px] font-[manrope] font-bold">HIRING PROCESS</h2>
          <p className="font-[raleway] text-[16px] leading-[20px] font-semibold pt-[23px]">
            With our 3 step hiring process (application process, interview and
            offers), we ensure the future PaySa Squad member gets an update within
            a short turnaround time.
          </p>
        </div>

        <div className="hidden md:block ">
          <img src="/assets/aboutUsImages/careerSection.svg" alt="" />
        </div>
      </div> 


      
   

      
    </div>
  );
}

export default CareerSection;
