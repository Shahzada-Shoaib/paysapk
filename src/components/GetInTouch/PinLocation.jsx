import React from "react";

function PinLocation() {
  return (
    <div className="md:flex md:justify-center w-full overflow-x-auto md:overflow-x-visible">
      <div className="flex md:space-x-32 pl-4 pr-8 md:px-0 pb-4 md:pb-0 min-w-max md:min-w-0">
        <div className="flex flex-shrink-0 md:flex-shrink w-[300px]">
          <img
            className="pb-8 mr-4"
            alt="get in touch"
            src="/assets/get-in-touch-images/locationIcon.svg"
          />
          <p className="flex pt-14 text-white w-[260px]">
            45 Jinnah Boulevard, Sector E Commercial Area, DHA Phase 2,
            Islamabad, 45730
          </p>
        </div>
        <div className="flex flex-shrink-0 md:flex-shrink w-[300px]">
          <img
            className="pb-8 mr-4"
            alt="yellow bg"
            src="/assets/get-in-touch-images/locationIcon.svg"
          />
          <p className="flex pt-14 text-white w-[260px]">
            PaySa FTDP Pvt Ltd Office No 5010 Delta 5 69 Abid Majeed Road Old
            Airport Building Lahore Cantonment, 54810
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
