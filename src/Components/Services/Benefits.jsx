import React from 'react';
import logo1 from "./../../assets/Service/a1.png";
import logo2 from "./../../assets/Service/a2.png";
import logo3 from "./../../assets/Service/a3.png";

const BenefitsSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Title Section */}
          <div className="lg:w-1/3">
            <h2 className="text-gray-600 font-medium text-lg leading-snug">
              Benefits Of The Pixalive <br /> Gold Network
            </h2>
          </div>

          {/* Right Content Section */}
          <div className="lg:w-2/3">
            <h3 className="text-black text-2xl md:text-4xl font-medium leading-snug">
              Pixalive Gold Network offers premium exposure, priority support, and exclusive tools to boost your digital presence and growth.
            </h3>

            {/* Card Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div>
                <img src={logo1} alt="100% Gold-Backed Security" className="w-16 h-16 mb-4" />
                <h4 className="font-semibold text-black mb-2">100% Gold-Backed Security</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Provides end-to-end gold services including digital investment, physical redemption, loans, and jewelry purchases.
                </p>
              </div>

              {/* Card 2 */}
              <div>
                <img src={logo2} alt="One Network, Multiple Services" className="w-16 h-16 mb-4" />
                <h4 className="font-semibold text-black mb-2">One Network, Multiple Services</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Integrates gold into everyday life—redeem gold for groceries, pharmacy products, dining, salon services, and more.
                </p>
              </div>

              {/* Card 3 */}
              <div>
                <img src={logo3} alt="Smart, Flexible & Transparent Growth" className="w-16 h-16 mb-4" />
                <h4 className="font-semibold text-black mb-2">Smart, Flexible & Transparent Growth</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ensures top-tier security with MMTC-PAMP, Brink’s, and blockchain-backed operations for transparency.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
