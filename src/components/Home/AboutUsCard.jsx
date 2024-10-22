import React from "react";
import ChevronButton from "../ChevronButton";

function AboutUsCard(props) {
  const { isPrimary } = props;

  return (
    <div
      className={`relative w-full  rounded-[20px] p-[0.5px] bg-gradient-to-b  to-transparent ${
        isPrimary
          ? "from-[rgba(254,210,28,0.5)] via-[rgba(254,210,28,0.25)]"
          : "from-[rgba(63,148,196,0.5)] via-[rgba(63,148,196,0.25)]"
      } min-h-[217px]   p-8 text-white`}
    >
      <div
        className={`relative flex flex-col space-between rounded-[20px]  ${
          isPrimary ? "bg-[#1A1604]" : "bg-[#071014]"
        }  min-h-[217px]  p-8 text-white`}
      >
        <div>
          <h2 className="text-xl font-[manrope] font-bold text-center mt-[5px] text-white">
            {props.title}
          </h2>
          <p className="text-center text-gray- mt-[20px] semi-bold text-white font-[raleway] text-[16px]">
            {props.description}
          </p>
        </div>
        <div className="absolute flex justify-end bottom-5 right-7">
          <ChevronButton isPrimary={!isPrimary} />
        </div>
      </div>
    </div>
  );
}
export default AboutUsCard;
