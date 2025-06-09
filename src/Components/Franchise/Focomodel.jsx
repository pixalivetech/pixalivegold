import React from 'react';

const FranchiseAdvantage = () => {
  return (
    <section className="bg-black text-white md:px-40 text-center">
      <div className="max-w-[1280px] w-full mx-auto">
        {/* FOCO Model Section */}
        <div className="bg-black text-white py-10 px-6 text-center flex items-center justify-center ">
          <div>
            <p className="text-md md:text-base text-gray-400 uppercase tracking-widest mb-6">
              FOCO MODEL
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
              <span className="text-2xl mr-1 align-top">“</span>
              We follow a <span className="font-medium text-white">Franchise-Owned, Company-Operated (FOCO) model</span>, where you own the franchise, and Pixalive runs the operations. You earn a share of the revenue while we ensure quality and smooth service.
              <span className="text-2xl ml-1 align-top">”</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseAdvantage;