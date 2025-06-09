import React from "react";
import { Link } from "react-router-dom";

const GetStartedSection = () => {
  return (
    <section className="bg-[#f6f6f6] text-black py-14 px-6  flex justify-center">
      <div className="max-w-[1280px] mx-auto w-full bg-[#eeeeee] p-10 text-center shadow-sm">
        {/* Red dot + subtitle */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
          <p className="text-gray-600 text-sm">Pixalive Gold Network</p>
        </div>
        <br/>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Join the Gold Revolution
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Be part of a platform that is redefining the way India interacts <br /> with gold. 
        </p>

        {/* Button */}
        <Link to="/contact">
        <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
          Contact Us
        </button>
        </Link>
      </div>
    </section>
  );
};

export default GetStartedSection;