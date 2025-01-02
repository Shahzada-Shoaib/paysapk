import React from 'react';
import Navbar from '../Home/Navbar';
// import Banner from '../Home/Banner';
import BannerWithoutVideo from '../BannerWithoutVideo';
import Footer from '../Footer';
import AboutUsCard from '../Home/AboutUsCard';
import Carousel from './Carousel';
import CardsSection from './CardsSection';

function PaysaPage() {
  return (
    <>
    <Navbar/>
      <BannerWithoutVideo title=' PAYSA PICKS: ARTICLES & HUMOUR' description="   Dive into the world of finance with a splash of humor! Explore our 'PaySa Picks' for articles 
                      and chuckles that make banking a breeze." />
    




         
                  <div className="mx-auto">
                      <img
                        src="/assets/paysaPicksImages/paysaBanner1.svg"
                        alt="Sample Image"
                        className="w-full"
                      />
                    </div> 

{/*               
        <div className='px-10 border'>
        <div className="flex gap-8 p-10 border">
          <span>
            <AboutUsCard title="Card 1" description="Description for card 1" className="pt-3 mt-3 bg-blue-100 border" />
          </span>
          <span className='pb-6'>
            <AboutUsCard title="Card 1" description="Description for card 1" className="pt-3 mt-3 bg-blue-100 border" />
          </span>
          <span>
            <AboutUsCard title="Card 1" description="Description for card 1" className="pt-3 mt-3 bg-blue-100 border" />
          </span>
         
        </div>
        </div> */}
        <CardsSection/>
                
        <Carousel/>
              
                 

      
        {/* First Banner */}



        {/* GIF Container */}
        {/* <div className="relative w-full h-[200px] bg-black">
         
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="  md:h-[707px] flex items-center justify-center translate-y-[-10%]">  
              <img
                src="/assets/gif.gif"
                alt="Example GIF"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div> */}

        {/* Second Banner */}

        
      {/* <div className='w-full mb-16 md:mb-80 aspect-auto'>
          <img src='/assets/paysaPicksImages/paysaBanner2.webp' alt='image' className='w-full aspect-auto' />
          <img src='/assets/paysaPicksImages/paysaPicks.gif'/>
        </div> */}

      <div className="relative w-full mb-2 md:mb- aspect-auto">
        <img
          src="/assets/paysaPicksImages/paysaBanner-2.svg"
          alt="image"
          className="w-full aspect-auto"
        />
        <img
          src="/assets/paysaPicksImages/paysaPicks.gif"
          alt="gif"
          className="absolute md:top-40 top-0 left-0 md:h-[800px] md:w-[950px] "
        />
      </div>



      
<Footer/>
    
      
    </>
   
    
 

    
  



   
  );
}

export default PaysaPage;
