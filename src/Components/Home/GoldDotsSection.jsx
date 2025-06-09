import React from "react";

const GoldDotsSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 font-[Lufga]">
      {/* Small heading */}
      <p className="text-center text-gray-500 text-[clamp(0.85rem,1.5vw,1.125rem)] font-medium tracking-wide mb-4 sm:mb-6">
        Gold Dots — Your Digital Wealth Currency
      </p>

      {/* Main heading */}
      <div className="text-center w-full max-w-[95%] sm:max-w-full mx-auto">
        <p className="text-[#6D6D6D] text-[clamp(1rem,3vw,2.5rem)] leading-snug sm:leading-tight mb-3 sm:mb-1">
          Gold Dots are the core rewards unit in the Pixalive Network—
          <br className="hidden sm:inline" />
          <span className="sm:hidden"> </span>
          designed to bridge your social actions and commerce journey.
        </p>

        <p className="text-[#6D6D6D] text-[clamp(1.1rem,3vw,2.5rem)] leading-snug sm:leading-tight">
          Whether{" "}
          <span className="text-black font-medium">
            you're swiping, sharing, shopping, or building{" "}
            <br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>
            your network, you're earning real value.
          </span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <button className="bg-black text-white text-[clamp(0.85rem,1.2vw,1rem)] font-medium px-5 py-2.5 sm:px-6 sm:py-3 hover:bg-gray-900 transition duration-300">
          Learn How →
        </button>
      </div>
    </section>
  );
};

export default GoldDotsSection;