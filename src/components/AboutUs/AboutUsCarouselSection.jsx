// import React, { useState } from 'react';
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutUsCarouselCard from "./AboutUsCarouselCard"; // Import your component
// import { useState } from 'react';
import ChevronButton from "../ChevronButton";

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1); // Move to the next slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1); // Move to the previous slide
  };

  const firstSlidebutton = (
    <button
      style={{ background: "rgba(24, 92, 131, 0.2)" }}
      onClick={nextSlide}
      className="mt-[20px] font-med relative z-10 items-center text-white flex rounded px-4 py-1 font-[raleway]"
    >
      Our values
      <span className="ml-4">
        <ChevronButton isSmall isPrimary={true} />
      </span>
    </button>
  );

  const navigationButtons = (
    <div className="flex gap-[134px] ">
      <div className="rotate-180">
        <span className="">
          <ChevronButton isSmall isPrimary={true} onClick={prevSlide} />
        </span>
      </div>
      <div className="">
        <span className="">
          <ChevronButton isSmall isPrimary={true} onClick={nextSlide} />
        </span>
      </div>
    </div>
  );
  return (
    <div className="px-6 md:px-0">
      <Carousel
        showThumbs={false}
        showStatus={false}
        // showArrows={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={3000}
        stopOnHover={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)} // Update currentSlide on change
        showArrows={false} // Disable default arrows
      >
        <div className="w-full h-[820px] ">
          <AboutUsCarouselCard
            title=" WORKINGS @ PAYSA"
            description="At PaySa, we foster diversity, support professional growth, and prioritize open communication and genuine relationships. Our talent philosophy centers on hiring ambitious professionals, offering career growth opportunities, and achieving greatness together by aligning values and goals."
            yellowimageURL="/assets/aboutUsImages/aboutUsYellowCard.svg"
            alphabetIMG="/assets/aboutUsImages/P-Image.svg"
            // vector="/assets/aboutUsImages/vector1.svg"
            // nextSlide={nextSlide}
            // prevSlide={prevSlide}
            button={firstSlidebutton}
            textLeft="text-left"
            firstSlideBlur="md:w-[55%] backdrop-blur-md"
          />
        </div>
        <div className="w-full ">
          <AboutUsCarouselCard
            title=" PASSION"
            description=" Passion drives all our endeavors, anchoring our commitment to making a meaningful impact in the technology sector. We believe in the power of passion to fuel creativity and resilience, empowering us to surmount challenges and deliver outstanding results."
            yellowimageURL="/assets/aboutUsImages/aboutUsYellowCard.svg"
            alphabetIMG="/assets/aboutUsImages/P-Image.svg"
            vector="/assets/aboutUsImages/vector1.svg"
            navigationButtons={navigationButtons}
          />
        </div>
        <div className="w-full ">
          <AboutUsCarouselCard
            title=" ACCESSIBILITY"
            description=" Accessibility supports our vision as a trusted digital payment provider, ensuring workplace understanding and product accessibility for all. With collaborative efforts and user-friendly design, our employees drive PaySa's success in a dynamic industry."
            yellowimageURL="/assets/aboutUsImages/aboutUsYellowCard.svg"
            alphabetIMG="/assets/aboutUsImages/A-image.svg"
            vector="/assets/aboutUsImages/vector3.svg"
            navigationButtons={navigationButtons}
          />
        </div>
        <div className="w-full ">
          <AboutUsCarouselCard
            title=" YES TO LIFE!"
            description=" Yes to Life! signifies our commitment to a positive work culture, encouraging a healthy work-life balance and celebrating achievements, fostering fulfillment. At PaySa, we value employees bringing their whole selves to work, creating a thriving environment."
            yellowimageURL="/assets/aboutUsImages/aboutUsYellowCard.svg"
            alphabetIMG="/assets/aboutUsImages/Y-Image.svg"
            vector="/assets/aboutUsImages/vector1.svg"
            navigationButtons={navigationButtons}
          />
        </div>
        <div className="w-full ">
          <AboutUsCarouselCard
            title=" SERVICE EXCELLENCE"
            description="Service Excellence enables us to provide top-notch solutions and experiences to our clients. It means delivering quality and fulfilling our promise to customer and vice versa. Employees are encouraged to actively seek ways to enhance the quality of our products and services."
            yellowimageURL="/assets/aboutUsImages/aboutUsYellowCard.svg"
            alphabetIMG="/assets/aboutUsImages/S-Image.svg"
            vector="/assets/aboutUsImages/vector5.svg"
            navigationButtons={navigationButtons}
          />
        </div>
        <div className="w-full ">
          <AboutUsCarouselCard
            title=" ACCOUNTABILITY"
            description=" Accountability builds trust and reliability, empowering every team member to contribute to our collective success. It is at our core, driving ownership, commitment, and initiative, ensuring the impact of our actions on the company's success."
            yellowimageURL="/assets/aboutUsImages/aboutUsYellowCard.svg"
            alphabetIMG="/assets/aboutUsImages/A-Image.svg"
            vector="/assets/aboutUsImages/vector6.svg"
            navigationButtons={navigationButtons}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;

// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import AboutUsCarouselCard from './AboutUsCarouselCard'; // Import your component

// const MyCarousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => prev + 1); // Move to the next slide
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => prev - 1); // Move to the previous slide
//     };

//     return (
//         <div className="">
//             <Carousel
//                 showThumbs={false}
//                 showStatus={false}
//                 infiniteLoop={true}
//                 autoPlay={false}
//                 interval={3000}
//                 stopOnHover={true}
//                 selectedItem={currentSlide}
//                 onChange={(index) => setCurrentSlide(index)} // Update currentSlide on change
//                 showArrows={false} // Disable default arrows
//             >
//                 <div className="w-full h-[520px]" id='2'>
//                     <AboutUsCarouselCard
//                         title="WORKINGS@PAYSA"
//                         description="At PaySa, we foster diversity, support professional aaaaaaaa growth, and prioritize open communication and genuine relationships."
//                         yellowimageURL="/assets/aboutUsImages/aboutUsYellowCard.svg"
//                         alphabetIMG="/assets/aboutUsImages/P-Image.svg"
//                         vector="/assets/aboutUsImages/vector1.svg"
//                         nextSlide={nextSlide} // Passing nextSlide function as a prop
//                         prevSlide={prevSlide} // Passing prevSlide function as a prop
//                     />
//                 </div>
//                 <div className="w-full h-[520px]" id='1'>
//                     <AboutUsCarouselCard
//                         title="WORKINGS@PAYSA"

//                         description="Our talent philosophy centers on hiring ambitious professionals and achieving greatness together."
//                         yellowimageURL="/assets/aboutUsImages/aboutUsYellowCard.svg"
//                         alphabetIMG="/assets/aboutUsImages/P-Image.svg"
//                         vector="/assets/aboutUsImages/vector1.svg"
//                         nextSlide={nextSlide} // Passing nextSlide function as a prop
//                         prevSlide={prevSlide} // Passing prevSlide function as a prop
//                     />
//                 </div>
//             </Carousel>
//         </div>
//     );
// };

// export default MyCarousel;
