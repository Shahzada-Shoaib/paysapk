import React from 'react'
import ChevronIcon from "../images/button-chevron-right.svg";


function ChevronButton({isPrimary}) {
  return (
 
        <span
          className={`h-[29px] cursor-pointer w-[29px] flex justify-center items-center  rounded-md ${
            isPrimary ? "bg-[rgba(24,92,131,0.5)]" : "bg-[rgba(254,210,28,0.2)]"
          } `}
        >
          <img src={ChevronIcon} alt="chevron-right" />
        </span>)}
      
  


export default ChevronButton