import React from "react";
import ButtonChevron from "../images/button-chevron-right.svg";

const Button = ({
  isPrimary = true,
  title = "title",
  isChevronEnabled = false,
}) => {
  return (
    <button
      className={`${isPrimary ? "button-styling" : "button-styling-secondary"}
        ${isChevronEnabled ? "pl-8" : "pl-6"}
      } flex items-center  pr-6 py-3  text-white rounded-md hover:shadow-lg transition-all`}
    >
      <span className={`${isChevronEnabled ? "mr-6" : ""}`}>{title}</span>
      {isChevronEnabled && (
        <span
          className={`h-[29px] w-[29px] flex justify-center items-center  rounded-md ${
            isPrimary ? "bg-[rgba(24,92,131,0.5)]" : "bg-[rgba(254,210,28,0.2)]"
          } `}
        >
          <img src={ButtonChevron} alt="chevron-right" />
        </span>
      )}
    </button>
  );
};

export default Button;
