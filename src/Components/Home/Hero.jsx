import React from "react";

const GoldRevolutionSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
        BE A PART OF OUR{" "}
        <span className="text-[#B98A30]">GOLD REVOLUTION!</span>
      </h2>
      <p className="max-w-2xl mt-4 text-sm sm:text-base text-gray-600">
        We invite businesses and individuals to join us in our mission of making
        pure gold accessible to everyone. Partner with Pixalive Gold Network and
        unlock endless opportunities in the world of gold investments and
        services.
      </p>
      <p className="mt-4 font-semibold text-sm text-gray-800">
        Let’s Grow Together!
      </p>
      <button className="mt-6 bg-[#B98A30] text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
      onClick={() => window.location.href = '/contact'}>
        Contact Us
      </button>
    </section>
  );
};

export default GoldRevolutionSection;
