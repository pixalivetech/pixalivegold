import React, { useState } from "react";
import { Link } from "react-router-dom";

const plans = {
  under1000: [
    {
      title: "Starter Gold Plan",
      range: "1 - 100",
      details: [
        { label: "Minimum Gold Weight", value: "1 gram" },
        { label: "Maximum Gold Weight", value: "100 gram" },
        { label: "Lease Duration", value: "6 Months to 1 Year" },
        { label: "Annual Lease Yield", value: "4 - 5 %" },
      ],
      benefits: [
        "Low entry barrier.",
        "Flexible tenure with early exit options.",
        "Free insured storage for up to 1 year.",
      ],
    },
    {
      title: "Value Gold Plan",
      range: "100 - 500",
      details: [
        { label: "Minimum Gold Weight", value: "100 gram" },
        { label: "Maximum Gold Weight", value: "500 gram" },
        { label: "Lease Duration", value: "1 to 3 Year" },
        { label: "Annual Lease Yield", value: "5 - 6 %" },
      ],
      benefits: [
        "Higher returns due to larger gold weight.",
        "Access to quarterly portfolio updates.",
        "Option to extend the lease at no extra cost.",
      ],
    },
    {
      title: "Premium Gold Plan",
      range: "500 - 1000",
      details: [
        { label: "Minimum Gold Weight", value: "500 gram" },
        { label: "Maximum Gold Weight", value: "1000 gram" },
        { label: "Lease Duration", value: "3 to 5 Year" },
        { label: "Annual Lease Yield", value: "6 - 7 %" },
      ],
      benefits: [
        "Personalized advisory for gold investments.",
        "Premium insurance for leased gold.",
        "Access to exclusive gold market insights.",
      ],
    },
  ],
  above1000: [
    {
      title: "Custom Gold Plan",
      range: "1000+",
      details: [
        { label: "Minimum Gold Weight", value: "1000 gram" },
        { label: "Maximum Gold Weight", value: "Unlimited" },
        { label: "Lease Duration", value: "Flexible" },
        { label: "Annual Lease Yield", value: "7%+" },
      ],
      benefits: [
        "Tailored investment solutions.",
        "Dedicated account manager.",
        "Customized storage and insurance packages.",
      ],
    },
  ],
};

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("under1000");

  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        {/* Header and Tabs */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Price and Plans</p>

          <div className="flex justify-center mb-10">
            <div className="flex bg-[#f2f2f2] rounded p-1">
              <div
                className={`px-6 py-2 font-medium cursor-pointer rounded ${
                  activeTab === "under1000"
                    ? "bg-[#150015] text-white"
                    : "text-gray-800"
                }`}
                onClick={() => setActiveTab("under1000")}
              >
                Up to 1000 grams
              </div>
              <div
                className={`px-6 py-2 font-medium cursor-pointer rounded ${
                  activeTab === "above1000"
                    ? "bg-[#150015] text-white"
                    : "text-gray-800"
                }`}
                onClick={() => setActiveTab("above1000")}
              >
                Above 1000 grams
              </div>
            </div>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans[activeTab].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white shadow-sm p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-black">{plan.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3">
                    Significant potential due to larger volumes.
                  </p>
                  <p className="text-2xl font-bold text-black mb-4">
                    {plan.range} <span className="text-sm font-normal">/grams</span>
                  </p>
                  <Link to="/contact">
                  <button className="bg-black text-white px-4 py-2 mb-5 hover:bg-gray-800 transition">
                    Contact us
                  </button></Link>

                  <div className="border-t border-gray-300 my-4" />

                  <ul className="text-sm text-gray-700 space-y-2 mb-5">
                    {plan.details.map((item, i) => (
                      <li key={i}>
                        ✓ {item.label}:{" "}
                        <span className="float-right">{item.value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-300 my-4" />

                  <p className="font-semibold text-black mb-1">Key Benefits :</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {plan.benefits.map((benefit, j) => (
                      <li key={j}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTabs;
