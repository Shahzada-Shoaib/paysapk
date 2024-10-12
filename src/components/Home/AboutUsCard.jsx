import React from "react";

function AboutUsCard(props) {
  const {} = props;
  return (
    // <div className={`aboutus-card-bg w-[357px] h-[217px]  rounded-[20px] shadow-md p-4 flex flex-col justify-between border border-[#FED21C80]`}
    //     >
    //     <h2 className="text-xl font-[manrope] font-bold text-center mt-[5px] text-white">{props.title}</h2>

    //     <p className="text-center text-gray- mt-[20px] semi-bold text-white font-[raleway] text-[16px]">
    //         {props.description}
    //     </p>

    //      <div className="flex items-center justify-center mt-[20px] border border-[#FED21C80] rounded-[5.55px] w-[29px] h-[29px] ml-auto me-3">
    //         <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             className="w-6 h-6 text-white"
    //         >
    //             <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M9 5l7 7-7 7"
    //             />
    //         </svg>
    //     </div>
    // </div>
      <div className="relative w-full  rounded-[20px] p-[2px] bg-gradient-to-b from-[rgba(254,210,28,0.5)] via-[rgba(254,210,28,0.25)] to-transparent">
        <div 
        className="relative flex flex-col space-between rounded-[20px] bg-[#1A1604]  h-[217px]  p-8 text-white">
        <div>
        <h2 className="text-xl font-[manrope] font-bold text-center mt-[5px] text-white">{props.title}</h2>
         <p className="text-center text-gray- mt-[20px] semi-bold text-white font-[raleway] text-[16px]">
             {props.description}
         </p>
        </div>
          <div className="flex justify-end absolute bottom-0 right-0">
            <button
              className="bg-[#3C3A2B] h-[29px] w-[29px] rounded-[5.5px] flex justify-center items-center hover:bg-[#4C4A3B] transition-colors duration-200"
              aria-label="Learn more about our values"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
  );
}
export default AboutUsCard;
