import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Division1 from './../../assets/Division/Rectangle 1.png'; // Update with your actual images
import Division2 from './../../assets/Division/Rectangle 2.png';
import Division3 from './../../assets/Division/Rectangle 3.png';
import Division4 from './../../assets/Division/Rectangle 4.png';
import Division5 from './../../assets/Division/Rectangle 5.png';
import Division6 from './../../assets/Division/Rectangle 6.png';
import Division7 from './../../assets/Division/Rectangle 7.png';
import Division8 from './../../assets/Division/Rectangle 8.png';

const divisions = [
    {
      title: 'Pixalive Jewellery Network',
      image: Division1,
      desc: 'Pixalive Jewellery Network seamlessly connects digital gold investments with premium physical jewelry. Users can convert digital gold into high-quality, artisan-crafted pieces or rent exquisite gold jewelry for special occasions. The platform ensures authenticity, customization, and convenience, backed by trusted brand partnerships. With loyalty rewards, exclusive collections, and secure transactions, Pixalive blends tradition with innovation for gold lovers.',
    },
    {
      title: 'Pixalive Exchange Network',
      image: Division2,
      desc: 'Pixalive Exchange Network offers a secure, transparent, and hassle-free way to sell old or unused gold for instant cash at competitive market rates. With expert evaluations, real-time pricing, and instant payouts, the platform ensures users get true value quickly and easily. Trusted partnerships, certified appraisals, and strong security make it a reliable choice for anyone looking to convert gold into financial flexibility.',
    },
    {
      title: 'Pixalive Chits Network',
      image: Division3,
      desc: 'Pixalive Chits Network modernizes traditional chit funds by backing contributions with gold, offering users a secure and stable way to grow their savings. With flexible plans, real-time tracking, and added rewards like gold purchase discounts, the platform combines transparency, reliability, and innovation to help users achieve their financial goals confidently.',
    },
    {
      title: 'Pixalive Finance Network',
      image: Division4,
      desc: 'Pixalive Finance Network offers gold-backed loans for quick, hassle-free access to funds. By using gold as collateral, users can secure fast loans at competitive rates with flexible repayment options. The platform ensures transparency, fast processing, and the safety of your gold, providing a reliable financial solution without selling your assets.',
    },
    {
      title: 'Pixalive Goldlease Network',
      image: Division5,
      desc: 'Pixalive Goldlease Network lets users buy digital gold and lease it for fixed terms to earn passive income. With secure storage at MMTC-PAMP and real-time tracking, the platform offers predictable yields, flexible lease options, and full transparency. It’s a safe and innovative way to grow wealth by making your gold work for you.',
    },
    {
      title: 'Pixalive Bullion Network',
      image: Division6,
      desc: 'Pixalive Bullion Network offers a secure and transparent platform for wholesale and retail gold trading. Users can buy or sell gold bullion, access competitive pricing, and store their gold securely with MMTC-PAMP. The platform ensures certified authenticity and purity of gold products, real-time pricing updates, and a seamless trading experience for both beginners and experienced traders.',
    },
    {
      title: 'Pixalive Payment Network',
      image: Division7,
      desc: 'Pixalive Payment Network allows users to convert digital gold into currency for everyday purchases, offering flexibility to buy products and services across a wide range of partners. The platform ensures secure, fast, and transparent transactions, enabling easy tracking and management of gold balances. With cutting-edge encryption, Pixalive Payment Network turns digital gold into a practical tool for day-to-day spending, making it a convenient and innovative payment solution.',
    },
    {
      title: 'Pixalive Shopping Network',
      image: Division8,
      desc: 'Pixalive Shopping Network is a B2C platform that allows users to shop a wide range of products and pay using digital gold. It offers a secure, user-friendly shopping experience with top brands, exclusive deals, and the convenience of gold-based payments. Retailers can easily list products and reach a growing community of gold-savvy consumers. Pixalive combines traditional e-commerce with innovative payment solutions for a seamless shopping experience.',
    },
  ];
  
const Divisions = () => {
  return (
    <section className="bg-[#fef7ff] text-black px-6 md:px-20 py-16">
      <h3 className="text-center text-xl md:text-2xl font-bold mb-10">
        OUR <span className="text-[#B98A30]">DIVISIONS</span>
      </h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        {divisions.map((d, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded-xl shadow-md min-h-[450px] flex flex-col justify-between mb-8">
              <img
                src={d.image}
                alt={d.title}
                className="mx-auto mb-4 h-28 object-contain"
              />
              <h4 className="font-bold text-md mb-1">{d.title}</h4>
              <p className="text-sm text-gray-700 mb-2">{d.desc}</p>
              <button
                className="bg-[#B98A30] text-white mt-4 px-4 py-2 text-sm rounded-md"
                onClick={() => {
                  window.location.href = '/divisionpage';
                }}
              >
                KNOW MORE
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Divisions;
