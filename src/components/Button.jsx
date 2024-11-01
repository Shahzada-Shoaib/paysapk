import React from "react";
import ButtonChevron from "../images/button-chevron-right.svg";
import ChevronButton from "./ChevronButton";

const Button = ({
  isPrimary = true,
  title = "title",
  isChevronEnabled = false,
}) => {
  return (
    <button
      className={`${isPrimary ? "button-styling" : "button-styling-secondary"}
        ${isChevronEnabled ? "pl-8" : "pl-6"}
      } flex items-center  pr-6 py-3  text-white rounded-md hover:shadow-lg transition-all transition-transform transform hover:-translate-y-2 `}
    >
      <span className={`${isChevronEnabled ? "mr-6" : ""}`}>{title}</span>
      {isChevronEnabled && (
        <ChevronButton isPrimary={isPrimary} />
      )}
    </button>
  );
};

export default Button;

