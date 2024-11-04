import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChevronButton from "../ChevronButton"; // Make sure to import this component

const CarouselServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      background: "https://i.imghippo.com/files/L73ix1729337654.png",
      icon: "/assets/services-carousel-icons/icon-1.png",
      title: "365 DAYS SETTLEMENT",
      description:
        "PaySa offers its merchant partners quick and efficient payment settlements, ensuring that funds from credit card and debit card transactions are deposited into their designated accounts within 24 hours. This speedy settlement process improves cash flow for businesses, enabling them to meet their financial obligations and invest in growth opportunities without delay.",
    },
    {
      background: "https://i.imghippo.com/files/m8tB21729336452.png",
      icon: "/assets/services-carousel-icons/icon-2.png",
      title: "CUSTOMISED MIS",
      description:
        "PaySa provides merchants with comprehensive business reports and analytics. These detailed reports offer valuable insights into their operations, sales trends, customer behavior, and other crucial metrics. Armed with this data, merchants can make informed decisions on various aspects of their business. This data-driven approach empowers merchants to optimize their business operations and maximize profitability.",
    },
    {
      background: "https://i.imghippo.com/files/SXrFS1729337778.png",
      icon: "/assets/services-carousel-icons/icon-3.png",
      title: "SECURE VPN TUNNEL",
      description:
        "To ensure highest levels of security PaySa employs a state of the art VPN tunnel setting unprecedented standards for security during your payment process. This VPN tunnel acts as a secure conduit for transaction data, encrypting and safeguarding sensitive information. This cutting-edge security measure protects customers' payment data from potential cyber threats and fraudulent activities, enhancing trust and confidence in the payment process for both merchants and their customers.",
    },
    {
      background: "https://i.imghippo.com/files/8AE6F1729337968.png",
      icon: "/assets/services-carousel-icons/icon-2.png",
      title: "24/7 Customer Support",
      description:
        "PaySa understands the importance of prompt and efficient customer support. Therefore we offer round-the-clock customer support to address any queries or concerns merchants may have. Whether it is technical assistance with the POS terminal, clarifying billing-related questions, or resolving any other issues, the dedicated support team at PaySa is available at a moment's notice. This commitment to excellent customer service fosters strong relationships with merchants and instills confidence in the reliability of PaySa's services.",
    },
  ];

  const handleNext = () => paginate(1);
  const handlePrev = () => paginate(-1);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + slides.length) % slides.length
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          style={{
            backgroundImage: `url('${slides[currentIndex].background}')`,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          className="flex md:pb-8 justify-center h-[100vh] w-full bg-cover bg-no-repeat bg-center"
        >
          <div className="flex flex-col text-white justify-end items-center">
            <img
              className="h-[150px] w-[150px] md:h-[227px] md:w-[227px]"
              src={slides[currentIndex].icon}
              alt="services"
            />
            <div className="font-bold text-[28px] md:text-[35px] font-[manrope] mt-[57px]">
              <h1>{slides[currentIndex].title}</h1>
            </div>
            <p className="max-w-[650px] px-6 md:px-0 font-[raleway] font-semibold text-center mt-[32px] pb-8 md:pb-[65px]">
              {slides[currentIndex].description}
            </p>
            <div className="flex space-x-24">
              <span onClick={handlePrev} className="rotate-180 cursor-pointer">
                <ChevronButton isPrimary={true} />
              </span>
              <span onClick={handleNext} className="cursor-pointer">
                <ChevronButton isPrimary={true} />
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CarouselServices;
