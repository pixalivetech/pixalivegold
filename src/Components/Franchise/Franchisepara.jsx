import React, { useState } from "react";

const features = [
  {
    id: 1,
    Question: "What is the Pixalive Gold Network?",
    Answer:
      "Pixalive Gold Network is India’s leading digital gold ecosystem offering innovative services and franchise opportunities across multiple levels – zonal, state, district, and area.",
  },
  {
    id: 2,
    Question: "What is the investment required to start?",
    Answer:
      "The investment varies depending on the franchise level and region. Please contact us for detailed information.",
  },
  {
    id: 3,
    Question: "Do I need prior experience to become a franchise partner?",
    Answer:
      "No prior experience is necessary. We provide comprehensive training and support to all our franchise partners.",
  },
  {
    id: 4,
    Question: "What support will I receive as a franchise partner?",
    Answer:
      "We offer extensive support, including marketing assistance, operational guidance, and ongoing technical support.",
  },
  {
    id: 5,
    Question: "How can I apply for a Pixalive franchise?",
    Answer:
      "You can apply by filling out the inquiry form on our website, and our team will get in touch with you.",
  },
];

const KeyFeatures = () => {
  const [active, setActive] = useState(null);

  const toggleFeature = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className=" py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side label */}
          <div className="md:w-1/4">
            <p className="text-sm text-gray-500 mb-2">Got Questions?</p>
            <p className="text-sm text-gray-500 mb-6">We’ve Got Answers</p>
          </div>

          {/* Right side content */}
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-medium text-black leading-relaxed mb-10">
              Here are the most common queries about 
              becoming a Pixalive Gold Franchise partner—
              simple, clear,<br /> and helpful.
            </h2>
            <br />
            <div className="divide-y divide-gray-200">
              {features.map((feature) => (
                <div key={feature.id}>
                  <button
                    onClick={() => toggleFeature(feature.id)}
                    className="w-full text-left px-0 py-5 flex justify-between items-start gap-4 focus:outline-none"
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

                    {/* Icon */}
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
