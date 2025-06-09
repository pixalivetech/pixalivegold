import React from "react";
import { Link } from "react-router-dom";

const GetStartedSection = () => {
  return (
    <section className="bg-[#f6f6f6] text-black py-14 px-6  flex justify-center">
      <div className="max-w-[1280px] mx-auto w-full bg-[#eeeeee] p-10 text-center shadow-sm">
        {/* Red dot + subtitle */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          <p className="text-gray-600 text-sm">Pixalive Gold Network</p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Get Started Today
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          For more information or personalized advice, our dedicated team is ready to assist. <br className="hidden md:block" />
          Let us help you secure your future with Pixalive Gold Lease.
        </p>

        {/* Button */}
        <Link to="/contact">
        <button
          className="bg-black text-white px-6 py-3  hover:bg-gray-800 transition-colors duration-300"
          aria-label="Contact us for Pixalive Gold Lease"
        >
          Contact Us
        </button>
        </Link>
      </div>
    </section>
  );
};

export default GetStartedSection;
