import React from 'react';
import Navbar from '../Home/Navbar';
// import Banner from '../Home/Banner';
import BannerWithoutVideo from '../BannerWithoutVideo';
import Footer from '../Footer';

function PaysaPage() {
  return (
    <>
    <Navbar/>
      <BannerWithoutVideo title=' PAYSA PICKS: ARTICLES & HUMOUR' description="   Dive into the world of finance with a splash of humor! Explore our 'PaySa Picks' for articles 
                      and chuckles that make banking a breeze." />
    
      <div>
        {/* First Banner */}
        <div className="mx-auto">
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
            <div className="  h-[707px] flex items-center justify-center translate-y-[-10%]">  
              <img
                src="/assets/gif.gif"
                alt="Example GIF"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Second Banner */}
        <div className='w-full  h-[950px]'>
            <img src='/assets/paysaPicksImages/PaysaPicksIMG2.png' alt='image' />
             </div>

        
      </div>
<Footer/>
    
      
    </>
   
    
 

    
  



   
  );
}

export default PaysaPage;
