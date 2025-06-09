import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// ✅ Manually imported logo images
import MMTC from "./../../assets/secured/mmtc.png";
import LBMA from "./../../assets/secured/lbma.png";
import UPI from "./../../assets/secured/upi.png";
import PHONEPE from "./../../assets/secured/phonepe.png";
import NPCI from "./../../assets/secured/npci.png";
import CASHFREE from "./../../assets/secured/cashfree.png";
import STARTUP from "./../../assets/secured/startup.png";
import BIS from "./../../assets/secured/bis.png";

const companies = [
  { name: "MMTC Pamp", logo: MMTC, link: "https://www.mmtcpamp.com" },
  { name: "LBMA Good Delivery Refiner", logo: LBMA, link: "https://www.lbma.org.uk" },
  { name: "Unified Payments Interface", logo: UPI, link: "https://www.npci.org.in/what-we-do/upi/product-overview" },
  { name: "PhonePe", logo: PHONEPE, link: "https://www.phonepe.com" },
  { name: "NPCI", logo: NPCI, link: "https://www.npci.org.in" },
  { name: "PhonePe", logo: PHONEPE, link: "https://www.phonepe.com" },
  { name: "NPCI", logo: NPCI, link: "https://www.npci.org.in" },
  { name: "Cashfree Payments", logo: CASHFREE, link: "https://www.cashfree.com" },
  { name: "Startup India", logo: STARTUP, link: "https://www.startupindia.gov.in" },
  { name: "Bureau of Indian Standards", logo: BIS, link: "https://www.bis.gov.in" },
];

const StatBox = ({ end, suffix, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="text-center" ref={ref}>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
        {inView && <CountUp start={0} end={end} duration={2} suffix={suffix} />}
      </div>
      <p className="text-sm mt-2 text-black">{label}</p>
    </div>
  );
};

export default function SecurityAndStats() {
  return (
    <section className="w-full max-w-[1380px] mx-auto px-4 py-12 md:py-20 font-[Lufga]">
      {/* Section Title */}
      <h2 className="text-center text-black text-lg sm:text-2xl font-semibold mb-8 sm:mb-10">
        Secured By
      </h2>

      {/* Company Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-10 sm:mb-12">
        {companies.map((company, idx) => (
          <a
            key={idx}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 border border-[#E6E6E6] p-3 sm:py-4 sm:px-2 hover:shadow-md transition "
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-7 w-8 sm:h-8 sm:w-8 object-contain"
            />
            <p className="text-xs sm:text-sm lg:text-base text-[#999999]">
              {company.name}
            </p>
          </a>
        ))}
      </div>

      {/* Description */}
      <p className="text-center text-[#7A7A7A] text-sm sm:text-base mb-14 sm:mb-16">
        Pixalive Gold Network is secured by MMTC-PAMP, Brink's, and blockchain technology.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        <StatBox end={8} suffix="+" label="Trusted Partners" />
        <StatBox end={1} suffix="L+" label="Active Gold Users" />
        <StatBox end={10} suffix="k+" label="App Downloads" />
      </div>
    </section>
  );
}
