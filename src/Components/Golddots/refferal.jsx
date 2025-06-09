import React from "react";

const ReferralSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-18 px-6 text-black">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Label */}
          <div className="text-gray-500 font-medium text-sm pt-1">
            Referral
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-medium leading-snug mb-3">
              Build Your Network, Boost Your Earnings Your <br /> network is your power.
            </h2>
            <p className="text-gray-600 text-md mb-6">
              When your friends and connections shop, invest, or engage, you earn Gold Dots too — creating a <br/>growing, passive income stream.
            </p>
            <p className="text-lg font-medium text-black mb-6">
              SStart inviting 🤝 → sharing 🤳 →  growing 📈 
            </p>
            <a href="#" className="inline-block text-black font-medium underline hover:text-gray-800 transition">
              Start Growing →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
