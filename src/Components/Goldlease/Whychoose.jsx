import React from "react";
import img1 from "./../../assets/Goldlease/whyy1.png";
import img2 from "./../../assets/Goldlease/whyy2.png";
import img3 from "./../../assets/Goldlease/whyy3.png";
import img4 from "./../../assets/Goldlease/whyy4.png";

const WhyChoose = () => {
  const cards = [
    {
      src: img1,
      title: "Attractive Investment Returns",
      text: "Pixalive Gold Lease provides dual benefits: regular lease payments and the potential for your gold investment to appreciate as gold prices rise.",
    },
    {
      src: img2,
      title: "Guaranteed Gold Security",
      text: "We back your gold investment with a bank guarantee and store your assets in high-security facilities, ensuring your gold is always safe and secure.",
    },
    {
      src: img3,
      title: "Flexible Lease Terms",
      text: "Choose from various flexible lease tenures to suit your financial goals. Whether short-term or long-term, our leases are specifically designed to fit your unique needs.",
    },
    {
      src: img4,
      title: "Easy Investment Access",
      text: "Begin with a low minimum investment, making gold leasing a flexible and accessible option for both new investors and seasoned professionals.",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left label */}
          <div className="md:w-1/4">
            <p className="text-sm text-gray-500 font-medium leading-6">
              Why Choose <br /> Pixalive Gold Lease
            </p>
          </div>

          {/* Right content */}
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-medium text-black leading-snug mb-12">
              Gold is a tried-and-true asset that has historically maintained
              value, especially in uncertain economic climates.
            </h2>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {cards.map((card, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="font-semibold text-lg text-black">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
       </div>
    </section>
  );
};

export default WhyChoose;
