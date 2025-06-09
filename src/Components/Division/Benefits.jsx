import React from 'react';
import benefit1 from "./../../assets/Benifit/benifit-1.png";
import benefit2 from "./../../assets/Benifit/benefit-2.png";
import benefit3 from "./../../assets/Benifit/benefit-3.png";

const benefits = [
  {
    title: "Pure Gold. Pure Assurance.",
    description:
      "Every investment is backed by 24K gold, certified by MMTC-PAMP, ensuring your wealth is protected with the highest standards of purity, transparency.",
    image: benefit1, // replace with your image path
  },
  {
    title: "One Ecosystem. Infinite Experiences.",
    description:
      "From smart savings to luxury jewellery, daily essentials to dining out — unlock seamless access to life’s finer things using a single, gold-powered wallet.",
    image: benefit2,
  },
  {
    title: "Personalized Growth. Tangible Rewards.",
    description:
      "Grow your wealth with curated gold plans built around your lifestyle. Redeem your digital gold effortlessly — for real products, real services.",
    image: benefit3,
  },
];

const Benefits = () => {
  return (
    <section className="bg-[#140113] text-white py-16 px-6 md:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Benefits of the <span className="text-[#B98A30]">Pixalive Network</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
            <img src={benefit.image} alt={benefit.title} className="mx-auto mb-4 h-12" />
            <h3 className="font-semibold text-md mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-700">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
