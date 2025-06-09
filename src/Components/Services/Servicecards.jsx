import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img1 from "./../../assets/Service/g1.png";
import img2 from "./../../assets/Service/g2.png";
import img3 from "./../../assets/Service/g3.png";
import img4 from "./../../assets/Service/g4.png";
import img5 from "./../../assets/Service/g5.png";
import img6 from "./../../assets/Service/g6.png";
import img7 from "./../../assets/Service/g7.png";

const cardData = [
  {
    title: "Pixalive Gold Jewellery",
    desc: "Pixalive turns your digital gold into beautiful, wearable jewelry.",
    features: [
      "Buy, sell, and exchange gold jewelry seamlessly.",
      "Doorstep delivery within 1 hour or branch collection.",
      "Partnerships with leading jewelry brands",
    ],
    img: img1,
  },
  {
    title: "Pixalive Gold Investment",
    desc: "Smart gold investment plans designed to grow your wealth.",
    features: [
      "Invest in gold from 50g to 1000g",
      "Earn 3–4% annual returns",
      "Benefit from gold value growth of 10–14%",
      "Total returns of 14–18% per year",
    ],
    img: img2,
  },
  {
    title: "Pixalive Gold Chits",
    desc: "Pixalive modernizes chit funds with a gold-backed savings system.",
    features: [
      "Flexible monthly plans for all income levels",
      "Transparent tracking with real-time updates",
      "Safe, community-based gold savings",
    ],
    img: img3,
  },
  {
    title: "Pixalive Gold Finance",
    desc: "Pixalive helps you unlock cash from your gold for any need—personal, business, or emergency.",
    features: [
      "Quick gold loans with low interest rates",
      "Co-lending with top banks and NBFCs",
      "Fast approval with minimal paperwork",
    ],
    img: img4,
  },
  {
    title: "Pixalive Gold Payment",
    desc: "Pixalive lets you use gold like money for everyday transactions.",
    features: [
      "Instant peer-to-peer gold transfers",
      "Pay merchants and services with gold",
      "Works with top payment platforms for ease",
    ],
    img: img5,
  },
  {
    title: "Pixalive Gold Exchange",
    desc: "A trusted way to sell or trade your old gold for the best price.",
    features: [
      "Fair, competitive pricing with real-time gold rates",
      "Safe and transparent transactions",
      "Easy exchange process within the Pixalive ecosystem",
    ],
    img: img6,
  },
  {
    title: "Pixalive Gold Bullion",
    desc: "A secure and easy way to buy, sell, and invest in gold.",
    features: [
      "Trade gold at competitive prices",
      "Real-time gold rates",
      "Use Pixalive rewards for transactions",
    ],
    img: img7,
  },
];

const ServiceCardSlider = () => {
  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        <h2 className="text-lg font-medium text-gray-700 mb-6">Our Services</h2>
        
        <Swiper
          slidesPerView={1.2}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
          modules={[Autoplay]}
          className="pb-4"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="h-full">
                <div className="bg-white flex flex-col h-full shadow-md  overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="flex flex-col flex-grow p-5">
                    <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-700 mb-4">{card.desc}</p>
                    <p className="font-semibold text-sm mb-2">Features:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mb-6 space-y-1">
                      {card.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <button
                        className="bg-black text-white text-sm font-semibold py-2 w-full hover:bg-gray-900"
                        onClick={() => window.location.href = "/"}
                      >
                        KNOW MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceCardSlider;
