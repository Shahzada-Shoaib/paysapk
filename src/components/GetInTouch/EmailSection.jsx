import React from "react";
import Button from "../Button";
// import ChevronButton from '../ChevronButton';

function EmailSection() {
  return (
    <div className="px-4 mt-16">
      <section className="relative max-w-screen-md mx-auto mt-4">
        <div className="md:pt-12">
          <img
            className="hidden md:block h-[456px] w-[424px] rounded-[20px] mb-32 "
            src="/assets/get-in-touch-images/yellowImage.svg"
            alt="background poster"
          />
        </div>

        <div
          className="md:absolute w-full lg:w-[604px]  bg-[#3F94C44D] rounded-[20px] top-0  
                md:left-[250px] z-20"
        >
          <div className="pl-[20px]  pr-6 md:pr-[50px] pt-12 md:pt-8  md:pl-[52px]  h-full md:h-auto rounded-[20px] relative backdrop-blur-md">
            <p className="text-white font-[raleway] pb-2">Name *</p>
            <input className="w-full text-white mb-4  h-[42.35px] rounded-md bg-[#185C8333] border border-[#185C8333] p-2"></input>

            <p className="text-white font-[raleway] pb-2">Email *</p>
            <input className="text-white w-full mb-4 h-[42.35px] rounded-md bg-[#185C8333] border border-[#185C8333] p-2"></input>

            <p className="text-white font-[raleway] pb-2">Contact no *</p>
            <input className="w-full h-[42.35px] text-white mb-4 rounded-md bg-[#185C8333] border border-[#185C8333] p-2"></input>

            <p className="text-white font-[raleway] pb-2">Message *</p>
            <textarea className="w-full text-white rounded-md bg-[#185C8333] border border-[#185C8333] p-2"></textarea>

            <div className="text-center flex justify-center pt-6 pb-8">
              <Button
                title="Get In Touch"
                isChevronEnabled
                isPrimary={false}
              ></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmailSection;
