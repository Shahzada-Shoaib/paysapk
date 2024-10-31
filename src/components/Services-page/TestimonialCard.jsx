import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function TestimonialCard({ brandLogo = "", testimonial }) {

  const [isFlipped, setIsFlipped] = useState(false);



  return (
 

      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          class="text-white"
        >

          

        <div className="bg-[#185C8333] w-[100%] md:w-[355px] h-[476px] rounded-3xl">
          <div className="flex flex-col h-full">

            <div className="m-auto">
              <img src={brandLogo} alt="brand testimonial" />
            </div>
          </div>
        </div>
        
       </div>





        <div
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          class="text-white"
        >

          <div>
        
        <div className="text-white bg-[#185C8333] w-[100%] md:w-[355px] h-[476px] rounded-3xl">
          <div className="flex flex-col h-full pl-10">



            <div className="flex items-center justify-start flex-1 ">
              <img src={brandLogo} alt="brand testimonial" />
            </div>



            <div className="flex flex-col flex-1">
              <div className="mb-4 text-lg text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <p className="w-[240px]">{testimonial}</p>
            </div>
          </div>
        </div>


        
      </div>


          
        
        </div>
      </ReactCardFlip>


    



    


  );
}

export default TestimonialCard;
