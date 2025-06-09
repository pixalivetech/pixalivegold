import React from "react";
import { Link } from "react-router-dom";

const GetStartedSection = () => {
  return (
    <section className=" py-20 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto bg-[#eeeeee] p-10 text-center shadow-sm ">
        {/* Red dot + subtitle */}
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
          <p className="text-gray-600 text-base">Pixalive Gold Network</p>
        </div>
<br />
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Grow with Us?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Join the Pixalive Gold Network and grow with India’s trusted gold business. Choose your
          franchise type and get full support to succeed.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Contact Us Button */}
          <Link to="/contact">
          <button className="group flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium  text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200">
            Contact Us
            <svg
              className="ml-2 -mr-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          </Link>

          {/* Download Brochure Button */}
          <button className="group flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium  text-gray-700  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-200">
            Download Brochure
            <svg
              className="ml-2 -mr-1 h-5 w-5 text-gray-500 group-hover:text-gray-600 transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L14.414 5A2 2 0 0115 6.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2h2v4a1 1 0 001 1h3.586l-2.293 2.293a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0L13 7.586V12a1 1 0 001 1h1V6.414a2 2 0 00-.586-1.414L12 3.586A2 2 0 0010.414 3H6zm8 10a1 1 0 100 2H6a1 1 0 100-2h8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
