import React from 'react';
import Navbar from '../Home/Navbar';
import Banner from '../Home/Banner';
import BannerPaysa from './BannerPaysa';
import Footer from '../Footer';

function PaysaPage() {
  return (
    <>
    <Navbar/>
  
      <div className="bg-black ">
        <BannerPaysa />
        <img src='/assets/paysaPicksImages/PaysaPicksBannerIMG.png' alt='image' />
      </div>
      {/* <img src='/assets/paysaPicksImages/PaysaPicksBannerIMG.png' alt='image' /> */}


      <div className="w-full bg-black h-[368px] border border-white">
        
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <img
            src="/assets/your-gif.gif"
            alt="Loading animation"
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
        
      </div>
        
        <div>
        <img src='/assets/paysaPicksImages/PaysaPicksIMG2.png' alt='image' />
        </div>
        <Footer/>
    
    </>
   
  );
}

export default PaysaPage;
