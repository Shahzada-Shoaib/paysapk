import React from "react";
import Accordion from "../Accordion";

function FAQquestions() {
  return (
    <div>
      <div
        className="bg-cover min-h-[1000px] bg-center flex flex-col"
        style={{
          backgroundImage:
            "url('/assets/get-in-touch-images/FAQbackground.svg')",
        }}
      >
        <div className="grid grid-cols-1 gap-8 mx-10 md:grid-cols-3">
          <div>
            <Accordion
              isPrimary
              title="What is merchant acquisition, and how does it benefit my business?"
              content={
                <p>
                  Merchant acquisition refers to the process of onboarding
                  businesses to accept electronic payments through POS
                  terminals. It benefits your business by expanding payment
                  options for customers, increasing sales, improving cash flow,
                  and enhancing customer convenience.
                </p>
              }
            />
          </div>

          <div>
            <Accordion
              content={
                <p>
                  The setup time for a POS terminal varies depending on the
                  provider and your location. At PaySa it typically takes 3-5
                  business days to complete the installation and activation
                  process.
                </p>
              }
              title="How long does it take to set up a POS terminal for my business?"
            />
          </div>

          <div>
            <Accordion
              isPrimary
              content={
                <p>
                  At PaySa, we believe in transparency. There are no hidden
                  fees, and we provide a clear breakdown of all charges (if any)
                  involved during the onboarding process.
                </p>
              }
              title="Are there any additional charges associated with merchant acquisition and POS deployment?"
            />
          </div>

          <div>
            <Accordion
              content={
                <p>
                  Absolutely! PaySa provides you access to business reports and
                  analytics. You can monitor sales trends, inventory, and
                  customer behavior, empowering you to make informed decisions
                  for business growth.
                </p>
              }
              title="Can I access business reports and analytics with your POS system?"
            />
          </div>

          <div>
            <Accordion
              isPrimary
              content={
                <p>
                  PaySa employs cutting-edge encryption technology and a VPN
                  tunnel to safeguard all transactional data that is masked and
                  communicated through a secure private network to ensure
                  highest levels of transmission safety. Ensuring your
                  customers' information remains protected from cyber threats.
                </p>
              }
              title=" How secure are POS transactions, and what measures are in place to protect my customers data?"
            />
          </div>

          <div>
            <Accordion
              content={
                <p>
                  PaySa offers 24/7 customer support to address any technical or
                  operational concerns you may have. Our dedicated team is just
                  a call away, ready to provide prompt assistance and resolve
                  any queries.
                </p>
              }
              title="What type of customer support can I expect if I encounter any issues with the POS terminal? "
            />
          </div>

          <div>
            <Accordion
              isPrimary
              content={
                <p>
                  POS terminals come in various types, including countertop,
                  mobile, and tablet-based. The best one for your business
                  depends on your specific needs and setup.
                </p>
              }
              title="What types of POS terminals are available, and which one is best suited for my business?"
            />
          </div>

          <div>
            <Accordion
              content={
                <p>
                  PaySa does not impose a minimum transaction volume requirement
                  but our pricing gets more competitive as the transaction
                  volume increases. You have the flexibility to use the POS
                  terminal according to your business needs.
                </p>
              }
              title="Is there a minimum transaction volume required to use the POS terminal?"
            />
          </div>

          <div>
            <Accordion
              content={
                <p>
                  {" "}
                  Absolutely! PaySa's POS terminal is equipped to accept various
                  payment methods, including credit cards, debit cards, mobile
                  wallets, and more, offering your customers a wide range of
                  payment options.
                </p>
              }
              isPrimary
              title="Can I accept multiple payment methods, such as credit or debit cards with the POS terminal?"
            />
          </div>

          <div>
            <Accordion
              content={<p>FED is called federal excise duty</p>}
              title="What is FED and does PaySa charge it?"
            />
          </div>

          {/* <div>
            <Accordion
              isPrimary
              title=" How secure are POS transactions, and what measures are in place to protect my customers data?"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FAQquestions;
