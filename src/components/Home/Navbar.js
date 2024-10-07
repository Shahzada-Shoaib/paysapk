import React from 'react'
// // import './App.css';
// import '../App.css'
import '../../App.css'
import Banner from './Banner'


function Navbar() {
  return (
    <div>
      <div
        // className='container'
        // className="flex justify-between items-center px-5"
      className="flex justify-between items-center px-5"
      >
        {/* <div> <img src='/burger-menu-paysapk.svg' alt='burger-menu'></img></div> */}
        <div> <img src='../assets/burger-menu-paysapk.svg' alt='burger-menu'></img></div>


        <div> <img src='../assets/logo.svg' alt='logo'></img></div>
        {/* <div> Button</div> */}
        <button className='button'>
          <span className="font-raleway leading-[20px]">
            Get in touch
            </span>
            </button>
      </div>
      <Banner/>
       


    </div>

    
     

      

    
   

  

  )
}

export default Navbar