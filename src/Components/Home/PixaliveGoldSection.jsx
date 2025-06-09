import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import coin1 from "./../../assets/coin-1g.png";
import coin2 from "./../../assets/coin-2g.png";
import coin3 from "./../../assets/coin-3g.png";
import coin4 from "./../../assets/coin-4g.png";

const coins = [
  { image: coin1, title: "1 Gram PixaliveGold Coin", price: "₹10,630.4" },
  { image: coin2, title: "2 Gram PixaliveGold Coin", price: "₹21,045.8" },
  { image: coin3, title: "3 Gram PixaliveGold Coin", price: "₹31,199.6" },
  { image: coin4, title: "4 Gram PixaliveGold Coin", price: "₹41,400.2" },
];

const PixaliveGoldSection = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <section className="  w-full px-4 md:px-8 lg:px-6 py-16 max-w-[1280px] mx-auto font-[Lufga]">
      {/* Heading Section */}
      <div className="w-full bg-[#f8f8f8] ">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6  ">
          {/* Small Left Heading */}
          <div className="text-[#6d6d6d] mb-3 sm:mb-0 md:mb-6 lg:mb-39 text-base lg:text-sm  font-medium leading-snug min-w-[220px]">
            Assorted Collection in <br className="hidden md:block" />
            Pixalive Gold
          </div>

          {/* Main Right Heading + CTA */}
          <div className="text-black  font-medium text-[24px] leading-[1.4] md:text-[32px] md:leading-[1.5] lg:text-[35px] lg:leading-[1.5] max-w-4xl text-left">
            Assorted Collection in Pixalive Gold offers a variety of curated digital gold products for diverse customer preferences

            {/* CTA */}
            <div className="mt-6 text-[#6d6d6d] hover:text-black transition-all duration-300 flex items-center gap-2 text-base md:text-md sm:text-md lg:text-md cursor-pointer">
              <span>View More</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-[1280px] mx-auto mt-10 sm:mt-11 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coins.map((coin, idx) => (
          <div
            key={idx}
            className="w-full max-w-[280px] mx-auto bg-white border border-gray-200 shadow-lg flex flex-col items-center text-center px-4 py-6"
          >
            {/* Coin with Rotation */}
            <motion.div
              className="w-[120px] h-[120px] mb-2"
              animate={{ rotateY: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <img
                src={coin.image}
                alt="Gold Coin"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Underline */}
            <div className="w-12 h-[2px] bg-gray-300 my-3" />

            {/* 24K Tag */}
            <div className="bg-[#F6F6F6] text-[#EFA61A] text-[16px] font-medium px-4 py-1  mb-4">
              24K. 99.99%
            </div>

            {/* Product Title */}
            <p className="text-[16px] text-[#7A7A7A] font-medium mt-2 mb-2">
              {coin.title}
            </p>

            {/* Price */}
            <p className=" text-[23px] font-lufga text-black mb-4">
              {coin.price}
            </p>

            {/* Know More Button */}
            <button
              onClick={handleKnowMore}
              className="bg-black text-white  text-[14px] font-lufga py-2 sm:py-3  lg:py-3 px-14 mb-2 sm:mb-3 md:mb-5 lg:mb-5 hover:opacity-90 transition-all"
            >
              Know More
            </button>

            {/* Gradient Delivery Button */}
            <div className="w-full text-center py-2 bg-gradient-to-r from-[#FFFFFF] via-[#f8c972] to-[#FFFFFF] text-[#7A7A7A] font-lufga text-[16px]">
              2.5L+ Delivers
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PixaliveGoldSection;
