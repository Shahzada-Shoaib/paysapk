import React from 'react'
import AboutUsCard from '../Home/AboutUsCard';

function FAQquestions() {
  return (
    <div>
          <div
              className="bg-cover h-[1000px] bg-center flex flex-col"
              style={{ backgroundImage: "url('/assets/get-in-touch-images/FAQbackground.svg')" }} >



              <div className="grid grid-cols-1 gap-8 mx-10 md:grid-cols-3">
                  <div >
                      <AboutUsCard title='What is merchant acquisition, and how does it benefit my business?'/>
                  </div>
                  
                  <div>
                      <AboutUsCard title='How long does it take to set up a POS terminal for my business?' />
                  </div>
                  
                  <div >
                      <AboutUsCard title='Are there any additional charges associated with merchant acquisition and POS deployment?' />
                  </div>
                  
                  <div >
                      <AboutUsCard title='Can I access business reports and analytics with your POS system?' />
                  </div>


                  <div >
                      <AboutUsCard title=' How secure are POS transactions, and what measures are in place to protect my customers data?' />
                  </div>

                  <div >
                      <AboutUsCard title='What type of customer support can I expect if I encounter any issues with the POS terminal? ' />
                  </div>

                  <div>
                      <AboutUsCard title='What types of POS terminals are available, and which one is best suited for my business?' />
                  </div>

                  <div >
                      <AboutUsCard title='Is there a minimum transaction volume required to use the POS terminal?' />
                  </div>

                  <div >
                      <AboutUsCard title='Can I accept multiple payment methods, such as credit or debit cards with the POS terminal?' />
                  </div>

                  <div>
                      <AboutUsCard title='What is FED and does PaySa charge it?' />
                  </div>

                  <div >
                      <AboutUsCard title=' How secure are POS transactions, and what measures are in place to protect my customers data?' />
                  </div>

                 





                  
              </div>

            

          </div>
    </div>
  )
}

export default FAQquestions;