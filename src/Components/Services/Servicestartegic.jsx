import React from 'react';

const StrategicCollaboration = () => {
  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Text Block */}
          <div className="lg:w-1/3">
            <h2 className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Pixalive Gold Network’s <br />
              Strategic Collaboration <br />
              With MMTC-PAMP
            </h2>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3">
            <h3 className="text-black text-2xl md:text-4xl font-semibold leading-snug">
              Pixalive Gold Network’s partnership with MMTC-PAMP ensures trusted, secure, and
              innovative gold investment through unmatched purity and expertise.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCollaboration;
