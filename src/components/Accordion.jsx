import React, { useState } from "react";
import ChevronButton from "../components/ChevronButton";

function Accordion(props) {
  const { isPrimary, title, description, content } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleAccordion}
      className={`relative w-full cursor-pointer rounded-[20px] p-[0.5px] bg-gradient-to-b to-transparent ${
        isPrimary
          ? "from-[rgba(254,210,28,0.5)] via-[rgba(254,210,28,0.25)]"
          : "from-[rgba(63,148,196,0.5)] via-[rgba(63,148,196,0.25)]"
      } min-h-[180px] p-8 text-white`}
    >
      <div
        className={`relative flex  ${
          isOpen ? "pb-[50px]" : ""
        } flex-col space-between rounded-[20px] ${
          isPrimary ? "bg-[#1A1604]" : "bg-[#071014]"
        } min-h-[180px] p-8 text-white transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto" : ""
        }`}
      >
        <div>
          <h2 className="text-lg md:text-xl font-[manrope] font-bold mt-[5px] text-white">
            {title}
          </h2>
          <p className="text-center text-gray- mt-[20px] semi-bold text-white font-[raleway] text-[16px]">
            {description}
          </p>
        </div>
        <div className="flex justify-end absolute bottom-5 right-7 cursor-pointer">
          <ChevronButton isPrimary={!isPrimary} isOpen={isOpen} />
        </div>
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
