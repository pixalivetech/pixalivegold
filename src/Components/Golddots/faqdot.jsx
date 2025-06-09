import React, { useState } from "react";

const features = [
  {
    id: 1,
    Question: "What are Gold Dots?",
    Answer:
      "Gold Dots are your reward points in the Pixalive ecosystem that can be converted into digital gold or used to shop and unlock benefits.",
  },
  {
    id: 2,
    Question: "How do I earn Gold Dots?",
    Answer:
      "You can earn Gold Dots by actively engaging with the Pixalive Gold Network and participating in promotions or referrals. Stay connected and keep contributing to grow your rewards.",
  },
  {
    id: 3,
    Question: "Can I use Gold Dots offline?",
    Answer:
      "Gold Dots can be used offline at participating partner outlets.Simply show your QR code or registered ID to redeem your rewards.",
  },
  {
    id: 4,
    Question: "What is the Pixalive Gold Subscription?",
    Answer:
      "Pixalive Gold Subscription gives you exclusive access to premium features and benefits.Enjoy higher rewards, priority support, and special member privileges.",
  },
  {
    id: 5,
    Question: "Is my gold and data secure?",
    Answer:
      "Yes, your gold and personal data are fully secure with advanced encryption.We follow strict security protocols to protect your assets and privacy.",
  },
];

const KeyFeatures = () => {
  const [active, setActive] = useState(null);

  const toggleFeature = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="py-18 px-6 flex justify-center text-black">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left label */}
          <div className="md:w-1/4">
            <p className="text-sm text-gray-500 leading-snug">
              Frequently Asked <br /> Questions (FAQ)
            </p>
          </div>

          {/* Right content */}
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-medium leading-snug mb-10">
             Gold Dots are Pixalive’s digital rewards that can be earned through engagement and redeemed for products,<br /> services, and digital gold.
            </h2>
            <br />
            <div className="divide-y divide-gray-200">
              {features.map((feature) => (
                <div key={feature.id}>
                  <button
                    onClick={() => toggleFeature(feature.id)}
                    className="w-full text-left py-5 flex justify-between items-start gap-4 focus:outline-none"
                  >
                    <div>
                      <div className="text-md font-semibold text-black flex gap-2 items-start">
                        <span className="text-black">{`${feature.id}.`}</span>
                        {feature.Question}
                      </div>
                      {active === feature.id && (
                        <p className="text-sm text-gray-600 mt-3 max-w-xl">
                          {feature.Answer}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-black text-black text-lg">
                      {active === feature.id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
