import React from "react";
import icon1 from "./../../assets/Golddots/whygold1.png";
import icon2 from "./../../assets/Golddots/whygold2.png";
import icon3 from "./../../assets/Golddots/whygold3.png";

const WhyGoldDots = () => {
  const steps = [
    {
      icon: icon1,
      title: "How to Earn Gold Dots",
      text: "Pixalive rewards users with Gold Dots for engagement and referrals, which can be used for shopping, services, and digital gold investments."
      },
    {
      icon: icon2,
      title: "How to Use Gold Dots",
      text: "Gold Dots on Pixalive can be redeemed for products, services, digital gold, premium features, and gifting to friends.",
    },
    {
      icon: icon3,
      title: "Rack Your Gold Dots",
      text: "The Pixalive Gold Wallet lets you track, manage, and grow your Gold Dots and digital wealth with full transparency and control.",
    },
  ];

  return (
    <section className=" py-18 px-6 text-black">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-gray-500 font-medium text-sm pt-1">
            Why Gold Dots?
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-medium mb-6 leading-snug">
              Gold Dots transform your everyday interactions into real digital
              wealth. They connect social engagement, shopping, and investment
              into one seamless reward system.
            </h2>
            <p className="text-md sm:text-lg font-medium text-gray-800">
              Start earning 👛 → spending 🛍️ → growing 📈
            </p>
          </div>
        </div>
       <br/>
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 px-4 py-4 text-center md:text-left ${
                index > -1 ? "border-l border-gray-500" : ""
              }`}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-10 h-10 object-contain mx-auto md:mx-0"
              />
              <br />
            
              <h3 className="text-lg font-semibold text-black">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGoldDots;
