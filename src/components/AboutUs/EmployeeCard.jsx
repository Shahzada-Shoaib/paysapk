import React from 'react'

function EmployeeCard(props) {
  return (
    // <div className='py-10 bg-yellow-300'>
        <div className='w-[272px] h-[403px] rounded-3xl bg-black flex flex-col'>
            <div className='text-white leading-[17px]  p-7 '>
                  <p className='text-[18px] font-bold'>{props.title}</p>
                <p className='text-[14px]'> {props.description}</p>
            </div>
            <div className='flex items-end mt-auto '>
                <img className='' src="/assets/aboutUsImages/employee1.svg" alt="employee image" />
            </div>
        </div>
    // </div>
  )
}

export default EmployeeCard;