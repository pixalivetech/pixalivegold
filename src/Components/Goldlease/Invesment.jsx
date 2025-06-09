import React from "react";
import icon1 from "./../../assets/Goldlease/invesment1.png";
import icon2 from "./../../assets/Goldlease/invesment2.png";
import icon3 from "./../../assets/Goldlease/invesment3.png";
import icon4 from "./../../assets/Goldlease/invesment4.png";

const terms = [
  {
    icon: icon1,
    title: "Lease Yield",
    text: "Starting from ₹5 lakhs",
  },
  {
    icon: icon2,
    title: "Gold Price Appreciation",
    text: "Watch your gold grow as its value increases with the global gold market.",
  },
  {
    icon: icon3,
    title: "Minimum Investment",
    text: "Attractive annual returns based on the current market rates for gold leases.",
  },
  {
    icon: icon4,
    title: "Liquidity",
    text: "Choose flexible options for payouts or redeem your gold at the end of the lease period.",
  },
];

const InvestmentTerms = () => {
  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left label */}
          <div className="md:w-1/4">
            <p className="text-sm text-gray-500 font-medium">Investment Terms</p>
          </div>

          {/* Right content */}
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-medium text-black leading-relaxed mb-10">
              Pixalive's investment terms outline the conditions under which
              investors fund the platform.
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {terms.map((term, index) => (
                <div key={index} className="flex flex-col gap-3 max-w-[220px] w-full">
                  <img
                    src={term.icon}
                    alt={term.title}
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h3 className="text-md font-semibold text-black mb-1">
                      {term.title}
                    </h3>
                    <p className="text-sm text-gray-600">{term.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTerms;
