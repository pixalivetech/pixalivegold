import React from "react";
import { Link } from "react-router-dom";
const SupportSection = () => {
  return (
    <section className=" py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          {/* Left Title */}
          <div className="md:w-1/4">
            <p className="text-sm text-black font-medium">
              Customer Support & <br /> Help
            </p>
          </div>

          {/* Right Main Text */}
          <div className="md:w-3/4">
            <p className="text-2xl md:text-3xl font-medium text-black leading-snug">
              Pixalive offers dedicated support to help you with earning,
              redeeming, and managing your Gold Dots and <br /> subscriptions.
            </p>
          </div>
        </div>

        {/* Get Started Card */}
        <div className="w-full bg-[#eeeeee] py-14 px-6 text-center">
          {/* Dot + Subtitle */}
          <div className="flex justify-center items-center gap-2 mb-3">
            <span className="w-3 h-3 bg-red-400 rounded-full" />
            <p className="text-gray-600 text-base">Pixalive Gold Network</p>
          </div>
<br />
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get Started Today
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            For more information or personalized advice, our dedicated team is
            ready to assist.
            Let us help you secure your future with <br /> Pixalive Gold Lease.
          </p>

          {/* Button */}
          <Link to="/contact">
          <button className="bg-black text-white text-sm font-medium px-6 py-3 hover:bg-gray-800 transition-colors duration-300">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
