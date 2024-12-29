import React from "react";

function PinLocation() {
  return (
    <div className="w-full overflow-x-auto md:flex md:justify-center md:overflow-x-visible">
      <div className="flex pb-4 pl-4 pr-8 md:space-x-32 md:px-0 md:pb-0 min-w-max md:min-w-0">
        
        <div className="flex flex-shrink-0 md:flex-shrink max-w-[310px] ">
          <img
            className="pb-8 mr-4"
            alt="get in touch"
            src="/assets/get-in-touch-images/locationIcon.svg"
          />
          <p className="flex pt-14 text-white w-[] ">
            Head Office: 45 E, Sector E Commercial, DHA II, Islamabad.

          </p>
        </div>
        
        <div className="flex flex-shrink-0 md:flex-shrink max-w-[420px]">
          <img
            className="pb-8 mr-4"
            alt="yellow bg"
            src="/assets/get-in-touch-images/locationIcon.svg"
          />
          <p className="flex pt-14 text-white w-[]">
            Regional Office: 5010, Delta 5, 69 Abid Majeed Road, Old Airport Building, Lahore Cantt.
          </p>
        </div>
        <div className="flex flex-shrink-0 md:flex-shrink w-[300px]">
          <img
            className="pb-8 mr-4"
            alt="location"
            src="/assets/get-in-touch-images/locationIcon.svg"
          />
          <p className="flex pt-14 text-white w-[260px]">
            Coming Soon in Karachi
          </p>
        </div>
      </div>
    </div>
  );
}

export default PinLocation;
