import React from 'react'
import Button from '../Button';

function HiringSection() {
    return (

      <div className="relative w-full h-[850px] mt-4 mb-[291px]">
            <div className='bg-cover border h-[650px] w-[500px]'>
                <img
                    src="/assets/aboutUsImages/HiringSectionIMG.svg"
                    alt="Background"
                    className="absolute inset-0 object-cover"
                />
            </div>



            <div className="absolute right-96 p-6 w-[512px] h-[498px] bg-white top-36 rounded-2xl">
                <h1 className="mb-4 text-2xl font-bold ">EXECUTIVE SALES-MERCHANT AQUI</h1>

                <p className="mb-4">
                    Requirements:<br />
                    Minimum bachelors in any field<br /><br />
                    Minimum 01 to 02 years of experience in banking sales, relationship officer, merchant acquisition or any other related field<br />
                    Fresh graduates are also encouraged to apply
                    Negotiation skills<br />
                    Relationship Management<br />
                    Customer Service<br /><br />
                    Job Type: Full-Time (On-site)<br />
                    H.O DHA II, Islamabad<br />
                    Monday to Friday: 09:00 am to 05:30 pm PKST
                </p>
                <Button title="Apply Now" isPrimary={false} isChevronEnabled />

              </div>
              
              
      </div>
    )
}

export default HiringSection;