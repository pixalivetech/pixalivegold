import React from "react";
import GS1 from "./../../assets/gs1.png";
import GS2 from "./../../assets/gs2.png";
import GS3 from "./../../assets/gs3.png";
import GS4 from "./../../assets/gs4.png";
import GS5 from "./../../assets/gs5.png";
import GS6 from "./../../assets/gs6.png";
const features = [
  {
    icon: GS1,
    title: "Comprehensive Gold Services",
    description:
      "Provides end-to-end gold services including digital investment, physical redemption, loans, and jewelry purchases.",
  },
  {
    icon: GS2,
    title: "Gold-Backed Ecosystem",
    description:
      "Integrates gold into everyday life, allowing users to redeem their gold for groceries, pharmacy products, dining, salon services, and more.",
  },
  {
    icon: GS3,
    title: "Secure and Transparent",
    description:
      "Ensures top-tier security with trusted partners like MMTC-PAMP, Brink’s, and blockchain-backed operations for transparency.",
  },
  {
    icon: GS4,
    title: "Community-Centric Approach",
    description:
      "Empowers local businesses and users through partnerships, franchise opportunities, and gold-backed rewards programs.",
  },
  {
    icon: GS5,
    title: "Profit Opportunities",
    description:
      "Provides earning potential through franchise models, referral rewards, and gold leasing programs.",
  },
  {
    icon: GS6,
    title: "Trusted Brand",
    description:
      "Operated by Pixalive Group, a leader in integrating gold, technology, and community-driven services.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="  w-full px-4 md:px-8 lg:px-6 py-16 max-w-[1280px] mx-auto font-[Lufga]">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-14">
        <h3 className="text-sm md:text-base text-[#4B4B4B] font-medium md:w-1/4">
          Why Choose Us
        </h3>
        <p className="text-[25px] mt-3 sm:mt-0 md:mt-0 md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[54px] text-black font-lufga md:w-3/4">
          Provides end-to-end gold services including digital investment, physical redemption, loans, and jewelry purchases.
        </p>
      </div>

      {/* Aligned Grid under Paragraph */}
      <div className="md:ml-[25%] w-full md:w-[75%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-3">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-6 h-6 object-contain md:w-8 md:h-8"
              />
              <h4 className="text-[15px] md:text-[15px] lg:text-[17px] font-bold text-black">
                {feature.title}
              </h4>
              <p className="text-[15px] md:text-[15px] lg:text-[16px] text-[#666666] leading-[22px] md:leading-[24px] lg:leading-[30px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
