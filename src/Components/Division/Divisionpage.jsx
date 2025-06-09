import React, { useState } from 'react';
import featuredImageBase from './../../assets/Division/Rectangle 1.png';
import promoImage from './../../assets/Blogs/blog-promo.png';
import divisionThumb2 from './../../assets/Division/Rectangle 2.png';
import divisionThumb3 from './../../assets/Division/Rectangle 3.png';
import divisionThumb4 from './../../assets/Division/Rectangle 4.png';
import divisionThumb5 from './../../assets/Division/Rectangle 5.png';
import divisionThumb6 from './../../assets/Division/Rectangle 6.png';
import divisionThumb7 from './../../assets/Division/Rectangle 7.png';
import divisionThumb8 from './../../assets/Division/Rectangle 8.png';

const DivisionPage = () => {
  const [featuredDivision, setFeaturedDivision] = useState({
    title: 'Pixalive Exchange Network',
    thumb: featuredImageBase,
    description: [
      `Pixalive Exchange Network is revolutionizing the way users sell their old and unused gold. Our platform provides a seamless, secure, and transparent process to help you get the best value for your gold assets.`,
      `Selling gold has never been easier. With Pixalive Exchange Network, users can bring their old jewelry, coins, or other gold items and convert them into instant cash at competitive market rates. We ensure a hassle-free experience by offering expert evaluation and transparent pricing based on real-time market updates. What sets us apart is our commitment to convenience and trust. Our certified gold appraisal process guarantees that you receive the true worth of your gold. Once your gold is evaluated, we offer instant payouts, eliminating the long wait times associated with traditional methods.`,
      `Pixalive Exchange Network partners with reliable buyers and financial institutions to provide a network of trusted channels for selling gold. Whether you’re decluttering, liquidating assets, or simply looking for financial flexibility, our platform ensures you get the most value with minimal effort. We also prioritize customer safety and satisfaction. Our gold-buying locations are equipped with state-of-the-art security measures, and our digital interface keeps you informed at every step.`,
      `By integrating technology and trust, Pixalive Exchange Network aims to empower users to make informed decisions about their gold assets. Our platform serves as a bridge between sellers and the growing demand for gold, ensuring a win-win for all parties involved. Unlock the value of your gold with Pixalive Exchange Network—where reliability meets the highest standards of convenience and service. Let your unused gold bring new opportunities today!`,
    ],
  });

  const [recentDivisions, setRecentDivisions] = useState([
    {
      title: 'Pixalive Exchange Network',
      thumb: divisionThumb2,
      description: [
        `Pixalive Exchange Network is revolutionizing the way users sell their old and unused gold. Our platform provides a seamless, secure, and transparent process to help you get the best value for your gold assets.`,
        `Selling gold has never been easier. With Pixalive Exchange Network, users can bring their old jewelry, coins, or other gold items and convert them into instant cash at competitive market rates. We ensure a hassle-free experience by offering expert evaluation and transparent pricing based on real-time market updates. What sets us apart is our commitment to convenience and trust. Our certified gold appraisal process guarantees that you receive the true worth of your gold. Once your gold is evaluated, we offer instant payouts, eliminating the long wait times associated with traditional methods.`,
        `Pixalive Exchange Network partners with reliable buyers and financial institutions to provide a network of trusted channels for selling gold. Whether you’re decluttering, liquidating assets, or simply looking for financial flexibility, our platform ensures you get the most value with minimal effort. We also prioritize customer safety and satisfaction. Our gold-buying locations are equipped with state-of-the-art security measures, and our digital interface keeps you informed at every step.`,
        `By integrating technology and trust, Pixalive Exchange Network aims to empower users to make informed decisions about their gold assets. Our platform serves as a bridge between sellers and the growing demand for gold, ensuring a win-win for all parties involved. Unlock the value of your gold with Pixalive Exchange Network—where reliability meets the highest standards of convenience and service. Let your unused gold bring new opportunities today!`,
      ],
    },
    {
      title: 'Pixalive Chits Network',
      thumb: divisionThumb3,
      description: [
        `Pixalive Chits Network redefines traditional chit fund schemes by integrating the stability of gold as a backing for your savings and investments. Our innovative gold-backed chit schemes provide a secure and reliable way to grow your wealth while enjoying the benefits of a modern, transparent platform.`,
        `With Pixalive Chits Network, users can participate in chit groups where contributions are pooled together and backed by gold, ensuring unparalleled security. This model not only protects your contributions from market volatility but also enhances the value of your investments over time. Our platform offers flexible chit plans tailored to meet diverse financial goals. Whether you’re saving for a milestone, planning for a major purchase, or building a safety net for the future, Pixalive Chits Network provides a structured and disciplined approach to saving.`,
        `We prioritize transparency at every step. Members can track their contributions, monitor payouts, and stay informed about the status of their chit group in real-time. Our user-friendly interface ensures that even first-time users can navigate the process with ease. Additionally, Pixalive Chits Network offers rewards and benefits for regular contributions, including discounts on gold purchases and priority access to gold-linked financial products. These incentives make saving not only rewarding but also a stepping stone to larger financial opportunities.`,
        `By blending the traditional concept of chit funds with the modern backing of gold, Pixalive Chits Network offers a unique and innovative solution for savers and investors alike. Join a chit group today and experience a smarter way to secure your financial future. Pixalive Chits Network—where traditional saving meets modern innovation, and your wealth is always in safe hands.`,
      ],
    },
    {
      title: 'Pixalive Finance Network',
      thumb: divisionThumb4,
      description: [
        `Pixalive Finance Network is dedicated to providing gold-backed financial solutions designed to meet your immediate cash needs and simplify your financial journey. If you're looking for quick access to funds without the hassle of traditional bank loans, our platform offers gold-secured loans that provide fast, reliable solutions.`,
        `In partnership with top banks and Non-Banking Financial Companies (NBFCs), Pixalive Finance Network allows you to unlock the value of your gold through a simple and transparent loan process. By using your gold as collateral, you can access funding quickly at competitive interest rates, with flexible repayment options that work for you. This service is ideal for emergencies, business needs, or when you require financial assistance without the need to sell your gold.`,
        `Our loan application process is straightforward and efficient. Once your gold is evaluated, we offer you a loan based on its current market value. The process is fast and secure, ensuring that you receive funds in the shortest possible time while maintaining the safety and integrity of your gold. Pixalive Finance Network ensures complete transparency at every step of the process. From loan approval to repayment, you will have real-time updates and access to all necessary details. Our platform prioritizes customer security, using advanced technology to ensure that your assets remain protected throughout the loan period.`,
        `With Pixalive Finance Network, your gold doesn’t just sit idle—it works for you. Empower your financial journey with gold-backed loans designed to provide you with the funds you need while preserving your gold for the future. Pixalive Finance Network—where your gold opens doors to financial freedom with speed, ease, and security.`,
      ],
    },
    {
      title: 'Pixalive Goldlease Network',
      thumb: divisionThumb5,
      description: [
        `Pixalive Goldlease Network allows users to buy gold and lease it for a fixed duration to earn attractive yields. This unique gold leasing model combines the stability and security of gold with the opportunity for passive income through regular returns.`,
        `Through Pixalive Goldlease Network, you can purchase gold in digital form and lease it to earn a consistent yield over the chosen term. The gold is securely stored with MMTC-PAMP, one of India’s most trusted precious metals refiners, ensuring the highest level of safety and transparency. As your gold continues to accrue yield, you can track your investment and monitor its performance in real-time. Each lease term is designed to maximize returns based on the current gold market performance, allowing you to earn predictable income while retaining the value of your gold. At the end of the lease period, you can either redeem your gold or continue with a new leasing term, offering you flexibility and control over your investment strategy.`,
        `Pixalive Goldlease Network also ensures complete security for your gold assets. All leased gold is stored with MMTC-PAMP, renowned for its state-of-the-art refining and secure storage practices. Your transactions are safeguarded with the latest encryption technologies, ensuring your assets remain protected throughout the leasing period.`,
        `Whether you’re looking to diversify your wealth or earn a steady income from gold, Pixalive Goldlease Network offers a secure, transparent, and efficient platform to make your gold work for you.`,
      ],
    },
    {
      title: 'Pixalive Bullion Network',
      thumb: divisionThumb6,
      description: [
        `Pixalive Bullion Network offers a specialized platform for wholesale and retail gold trading. Whether you're looking to buy or sell gold bullion, Pixalive provides a secure, transparent, and efficient trading environment with real-time pricing and secure storage options.`,
        `This division connects individual investors, traders, and businesses to the global gold market, ensuring competitive pricing and a seamless trading experience. Pixalive Bullion Network enables users to access high-quality gold bars and coins, making it easy to engage in gold trading with confidence. Our platform also offers the added benefit of secure storage with MMTC-PAMP, ensuring that your gold assets are safeguarded to the highest standards of security. Whether you prefer to buy and hold gold or engage in more active buying and selling, Pixalive Bullion Network provides a reliable and transparent marketplace for your gold transactions.`,
        `Additionally, all gold products available on the platform are certified for authenticity and purity, ensuring that your investment is both secure and valuable. Real-time pricing updates and secure storage options ensure you are always in control of your investments.`,
        `Whether you are an experienced gold trader or new to the gold market, Pixalive Bullion Network provides a simple and secure way to buy, sell, and store gold, ensuring full compliance with global standards and regulations.`,
      ],
    },
    {
      title: 'Pixalive Payment Network',
      thumb: divisionThumb7,
      description: [
        `Pixalive Payment Network revolutionizes the way you can use your digital gold for everyday transactions. This platform allows users to convert their digital gold into products or services, giving you the flexibility to spend your gold seamlessly across a wide range of offerings.`,
        `With Pixalive Payment Network, your gold becomes more than just an investment—it becomes a practical tool for making purchases. Whether you want to buy electronics, fashion, groceries, or even services, you can use your digital gold to pay for it. The platform offers a wide variety of online and offline partners where you can spend your gold, providing unparalleled convenience and flexibility. The process is simple: convert your digital gold into the equivalent value in currency, and use it to complete transactions. You can easily track your gold balance, manage transactions, and make payments directly through the Pixalive platform. It’s a secure, transparent, and fast way to leverage your gold in your day-to-day life.`,
        `Pixalive Payment Network also ensures the highest level of security, utilizing cutting-edge encryption technologies to protect your transactions and personal information. Your digital gold is stored securely, and all payments are processed quickly and efficiently.`,
        `Whether you're using your gold for a quick purchase or as part of your long-term financial planning, Pixalive Payment Network gives you the ability to unlock the full potential of your gold holdings. Experience the future of payments—where your gold works for you in more ways than ever before.`,
      ],
    },
    {
      title: 'Pixalive Shopping Network',
      thumb: divisionThumb8,
      description: [
        `Pixalive Shopping Network is a comprehensive B2C platform that enables users to shop for a wide range of products online, with the added benefit of seamless integration with Pixalive's unique gold-based payment system. Whether you're shopping for electronics, fashion, home goods, or specialty items, Pixalive Shopping Network brings you an unparalleled online shopping experience.`,
        `With Pixalive Shopping Network, users can browse and purchase products from top brands and trusted sellers, enjoying a smooth, secure, and user-friendly shopping process. What's unique about this platform is the ability to use your digital gold to pay for products, providing a fresh, innovative way to shop. This gives users flexibility in how they choose to spend their gold, while still enjoying a conventional e-commerce experience. The platform is designed to offer a wide variety of categories to cater to diverse shopping needs. You can shop for anything—from gadgets to luxury items—and enjoy exclusive deals, discounts, and offers that are tailored to your shopping preferences. With Pixalive’s robust and secure payment gateway, every transaction is completed with the highest levels of security.`,
        `For businesses and retailers, Pixalive Shopping Network provides a powerful platform to reach a wide audience of gold-savvy consumers. Sellers can list their products easily, manage their inventory, and attract more customers by integrating with a rapidly growing community that values both quality products and the convenience of digital gold payments.`,
        `Whether you're a consumer looking for an effortless shopping experience or a seller wanting to expand your reach, Pixalive Shopping Network offers a comprehensive, flexible, and secure online marketplace for all your needs.`,
      ],
    },
  ]);

  const handleRecentClick = (index) => {
    const clicked = recentDivisions[index];
    const currentFeatured = { ...featuredDivision };

    const newRecent = [...recentDivisions];
    newRecent[index] = currentFeatured;

    setFeaturedDivision(clicked);
    setRecentDivisions(newRecent);
  };

  return (
    <div className="min-h-screen bg-[#140014] text-white px-4 py-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Left Column: Main Division Info */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-2">{featuredDivision.title}</h2>
          <p className="text-lg text-gray-400 mb-4">Division Overview</p>

          <img
            src={featuredDivision.thumb}
            alt={featuredDivision.title}
            className="w-80 h-80 md:w-2/3 lg:w-1/2 rounded-lg mb-3 mx-auto"
          />

          <div className="text-md text-gray-200 leading-relaxed space-y-4">
            {featuredDivision.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              Our divisions are built to drive innovation and trust in the digital gold ecosystem. Each one plays a vital role in empowering users to save, invest, and earn with confidence.
            </p>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          {/* Promo Card */}
          <div className="bg-white text-black rounded-lg p-4 shadow-md">
            <h4 className="font-semibold mb-1">Explore More with</h4>
            <p className="text-sm text-gray-700 mb-2">Pixalive Divisions: Redefining the digital gold experience.</p>
            <img src={promoImage} alt="Promo" className="w-full h-auto rounded-md" />
          </div>

          {/* Recent Divisions */}
          <div>
            <h4 className="text-white font-semibold mb-2">Other Divisions</h4>
            <div className="space-y-3 max-h-[550px] overflow-y-auto pr-1">
              {recentDivisions.map((division, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer hover:opacity-80"
                  onClick={() => handleRecentClick(index)}
                >
                  <img
                    src={division.thumb}
                    alt={division.title}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <p className="text-sm text-gray-300">{division.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionPage;