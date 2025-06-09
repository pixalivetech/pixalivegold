import React from "react";
// Importing image assets as per your request
import MMTC from "./../../assets/secured/mmtc.png";
import LBMA from "./../../assets/secured/lbma.png";
import UPI from "./../../assets/secured/upi.png";
import PHONEPE from "./../../assets/secured/phonepe.png";
import NPCI from "./../../assets/secured/npci.png";
import CASHFREE from "./../../assets/secured/cashfree.png";
import STARTUP from "./../../assets/secured/startup.png";
import BIS from "./../../assets/secured/bis.png";

const companies = [
  // Using the imported image variables directly
  { name: "MMTC Pamp", logo: MMTC, link: "https://www.mmtcpamp.com" },
  { name: "LBMA Good Delivery Refiner", logo: LBMA, link: "https://www.lbma.org.uk" },
  { name: "Unified Payments Interface", logo: UPI, link: "https://www.npci.org.in/what-we-do/upi/product-overview" },
  { name: "Phone Pe", logo: PHONEPE, link: "https://www.phonepe.com" },
  { name: "National Payments Corporation of India", logo: NPCI, link: "https://www.npci.org.in" },
  { name: "Cashfree Payments", logo: CASHFREE, link: "https://www.cashfree.com" },
  { name: "Startupindia", logo: STARTUP, link: "https://www.startupindia.gov.in" },
  { name: "Bureau of Indian Standards", logo: BIS, link: "https://www.bis.gov.in" },
];

export default function SecurityAndStats() {
  return (
    // The main section container, centered and with padding
    <section className="w-full max-w-[1380px] mx-auto px-4 py-12 md:py-20 font-[Lufga]">
      {/* Title for the section */}
      <h2 className="text-center text-black text-lg sm:text-2xl font-lufga mb-8 sm:mb-10">
        Secured By
      </h2>

      {/* Outer container for the horizontal scroll.
          This div acts as the viewport for the scrolling content.
          It hides the scrollbar using a custom utility class. */}
      <div className="overflow-x-hidden scrollbar-hide relative">
        {/*
          The inner container that holds the company logos.
          This is the element that will be animated to create the auto-scroll effect.
          We duplicate the 'companies' array to create a seamless, infinite loop.
          The `w-max` class ensures it takes the full width of its content.
          The `animate-scroll` class applies the custom CSS animation.
          `hover:animation-pause` stops the animation on hover.
        */}
        <div className="flex gap-6 whitespace-nowrap w-max animate-scroll hover:animation-pause">
          {/* Map over the companies array twice to create a continuous loop */}
          {[...companies, ...companies].map((company, idx) => (
            <a
              key={idx} // Using index as key is acceptable here since items are static and duplicated for animation
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#E6E6E6] px-4 py-2 hover:shadow transition min-w-[200px] justify-center " // Added min-w and rounded-lg for better visual consistency
            >
              <img
                src={company.logo} // Now using the imported image
                alt={company.name}
                // Fallback image in case the src fails to load (e.g., if path is incorrect)
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop if fallback also fails
                  e.target.src = `https://placehold.co/50x50/cccccc/000000?text=Logo`; // Using a generic placeholder
                }}
                className="h-7 w-8 sm:h-8 sm:w-8 object-contain"
              />
              <p className="text-xs sm:text-sm text-[#666666] whitespace-nowrap p-8"> {/* p-8 seems large, consider px-2 py-1 or similar if styling issues occur */}
                {company.name}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Custom CSS for the auto-scroll animation */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        @keyframes scrollCompanies {
          from {
            transform: translateX(0);
          }
          to {
            /* Move by 50% to complete one full cycle of the original content,
               as the content is duplicated, the total width is effectively twice */
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scrollCompanies 30s linear infinite; /* Adjust duration for speed */
        }

        .animation-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}