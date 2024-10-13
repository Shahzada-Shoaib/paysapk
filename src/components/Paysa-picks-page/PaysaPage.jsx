import React from 'react';
import Navbar from '../Home/Navbar';
// import Banner from '../Home/Banner';
import BannerPaysa from './BannerPaysa';
import Footer from '../Footer';

function PaysaPage() {
  return (
    <>
    <Navbar/>
  <BannerPaysa/>
    
      <div>
        {/* First Banner */}
        <div className="bg-blue-500">
          <img
            src="/assets/paysaPicksImages/PaysaPicksBannerIMG.png"
            alt="Sample Image"
            className="w-full h-[auto]"
          />
        </div>

        {/* GIF Container */}
        <div className="relative w-full h-[200px] bg-black">
          {/* Absolutely positioned div for the GIF */}
         
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="  h-[400px] flex items-center justify-center translate-y-[-10%]">  
              <img
                src="/assets/gif.gif"
                alt="Example GIF"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Second Banner */}
        <div className='w-full bg-pink-500 h-[950px]'>
            <img src='/assets/paysaPicksImages/PaysaPicksIMG2.png' alt='image' />
             </div>

        
      </div>
<Footer/>
    
      
    </>
   
    
 

    
  



   
  );
}

export default PaysaPage;
