import React from 'react'

function AboutUsCard(props) {
    const {} = props;
    return (
        <div className={`aboutus-card-bg w-[357px] h-[217px]  rounded-[20px] shadow-md p-4 flex flex-col justify-between border border-[#FED21C80]`}
            >
            <h2 className="text-xl font-[manrope] font-bold text-center mt-[5px] text-white">{props.title}</h2>

            <p className="text-center text-gray- mt-[20px] semi-bold text-white font-[raleway] text-[16px]">
                {props.description}
            </p> 

             <div className="flex items-center justify-center mt-[20px] border border-[#FED21C80] rounded-[5.55px] w-[29px] h-[29px] ml-auto me-3">
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
            </div>
        </div>
    )
}

export default AboutUsCard;