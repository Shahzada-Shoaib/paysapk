import React from "react";
import ButtonChevron from "../images/button-chevron-right.svg";

const Button = ({ isPrimary = true }) => {
  if (isPrimary) {
    return (
      <button className="button-styling-secondary flex items-center pl-8 pr-6 py-3  text-white rounded-md hover:shadow-lg transition-all">
        <span className="mr-6">Get in the circle Blue</span>
        {/* <PrimaryButtonChevron /> */}
      </button>
    );
  }

  return (
    <button className="button-styling flex items-center pl-8 pr-6 py-3  text-white rounded-md hover:shadow-lg transition-all">
      <span className="mr-6">Get in the circle</span>
      {/* <SecondaryButtonChevron /> */}
    </button>
  );
};

const SecondaryButtonChevron = () => {
  return (
    <span className="h-[29px] w-[29px] flex justify-center items-center bg-[rgba(254,210,28,0.2)] rounded-md">
      <img src={ButtonChevron} alt="chevron-right" />
    </span>
  );
};

const PrimaryButtonChevron = () => {
  return (
    <span className="h-[29px] w-[29px] flex justify-center items-center bg-[rgba(24, 92, 131, 0.2)] rounded-md">
      <img src={ButtonChevron} alt="chevron-right" />
    </span>
  );
};

export default Button;
