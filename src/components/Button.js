import React from "react";

const Button = () => {
  return (
    <button className="button-styling flex items-center px-4 py-2  text-white font-medium rounded-md hover:shadow-lg transition-all">
      <span className="mr-2">Get in the circle</span>
      {/* <FaChevronRight className="text-xl" /> */}
    </button>
  );
};

export default Button;
