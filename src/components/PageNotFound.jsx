import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 font-bold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-red-500 to-[#1A1604]">
        404
      </h1>
      <p className="mb-8 text-2xl text-gray-700">Page Not Found</p>
      <a
        href="/"
        className="px-4 py-2 mt-4 text-lg font-semibold text-blue-500 transition duration-300 ease-in-out border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white"
      >
        Go to Home
      </a>
    </div>
  );
};

export default PageNotFound;
