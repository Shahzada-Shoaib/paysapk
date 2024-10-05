import React from 'react'
import './App.css';

function Navbar() {
  return (
    <div>
      <div
        // className='container'
        // className="flex justify-between items-center px-5"
      className="flex justify-between items-center px-5"
      >
        <div> <img src='/burger-menu-paysapk.svg' alt='burger-menu'></img></div>

        <div> <img src='/logo.svg' alt='logo'></img></div>
        {/* <div> Button</div> */}
        <button className='button'>
          <span className="font-raleway leading-[20px]">
            Get in touch
            </span>
            </button>
      </div>

      <div 
      className='banner'
        // className="flex flex-col items-center text-center text-white border-2 mt-[68.3px]"
      
      >  
        <div>
          <h1 className="w-[883px] h-[68px]  "> EMPOWER YOUR DIGITAL PAYMENTS</h1>
        </div>
        <div>
          <p className="w-[695px] h-[40px] mt-5" > Join us in shaping a future where every digital interaction resonates with the<br/>
            essence of seamless financial empowerment.  </p>
        </div>

        </div>
       
       


    </div>

    
     

      

    
   

  

  )
}

export default Navbar