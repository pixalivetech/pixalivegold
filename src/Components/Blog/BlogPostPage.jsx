import React, { useState } from 'react';
import featuredImageBase from './../../assets/Blogs/blogpage.png';
import promoImage from './../../assets/Blogs/blog-promo.png';
import blogThumb1 from './../../assets/Blogs/B1.png';
import blogThumb2 from './../../assets/Blogs/B2.png';
import authorImage from './../../assets/Blogs/author.png';
import { FaRegShareSquare } from 'react-icons/fa';
import { BiCopy } from 'react-icons/bi';
import HeaderAlone from '../HeaderAlone';
import { Link } from 'react-router-dom';

const BlogPostPage = () => {
  const [featuredBlog, setFeaturedBlog] = useState({
    title: 'The Future of Wealth: Digital Gold with Pixalive',
    thumb: featuredImageBase,
  });

  const [recentBlogs, setRecentBlogs] = useState([
    {
      title: 'Building a future with tokenized gold assets',
      thumb: blogThumb1,
    },
    {
      title: 'Guide to Invest in Gold Through SIP: Know This Before You Invest',
      thumb: blogThumb2,
    },
  ]);

  const [activeTocItem, setActiveTocItem] = useState(null);

  const handleRecentBlogClick = (index) => {
    const clickedBlog = recentBlogs[index];
    const currentFeatured = { ...featuredBlog };
    const newRecentBlogs = [...recentBlogs];
    newRecentBlogs[index] = currentFeatured;
    setFeaturedBlog(clickedBlog);
    setRecentBlogs(newRecentBlogs);
  };

  const handleTocClick = (id) => {
    setActiveTocItem(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeaderAlone />
      {/* This outer div primarily sets background and min-height for the whole page content below header */}
      <div className="min-h-screen bg-[#f6f6f6] text-black">
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          /* New CSS for Table of Contents hover effect */
          .toc-item-link {
            display: inline-block; /* Essential for transform to work */
            transition: transform 0.2s ease-in-out; /* Smooth transition for scale */
          }
          .toc-item-link:hover {
            transform: scale(1.02); /* Slightly increase size on hover */
          }
        `}</style>

        {/* This div applies the max-width, centers the content, and provides overall padding */}
        <div className="max-w-[1280px] mx-auto mt-8 px-4 py-8 grid grid-cols-1 lg:grid-cols-8 gap-10">
          {/* Left Column: Blog Content */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold mb-2">{featuredBlog.title}</h2>
            <p className="text-sm text-gray-500 mb-4">by Pixalive Team | Published on Apr 20, 2025</p>
            <div className="flex items-center justify-between mb-4 text-gray-500">
              {/* Left: Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={authorImage}
                  alt="Author"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">Somnaath</p>
                  <p className="text-sm">21 Apr 2025 • 3 min read</p>
                </div>
              </div>

              {/* Right: Icons */}
              <div className="flex items-center gap-4 text-xl">
                <FaRegShareSquare className="cursor-pointer hover:text-black" />
                <BiCopy className="cursor-pointer hover:text-black" />
              </div>
            </div>

            {/* Featured Image */}
            <img
              src={featuredBlog.thumb}
              alt="Featured blog - Digital Gold"
              className="w-auto mb-3"
            />

            {/* Table of Contents */}
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-2">Table of contents</h3>
              <ul className="list-disc list-inside text-gray-500 space-y-1">
                <li>
                  <a
                    href="#why-choose-pixalive"
                    className={`toc-item-link ${activeTocItem === 'why-choose-pixalive' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('why-choose-pixalive')}
                  >
                    Why Choose Pixalive Gold Network?
                  </a>
                </li>
                <li>
                  <a
                    href="#accessibility"
                    className={`toc-item-link ${activeTocItem === 'accessibility' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('accessibility')}
                  >
                    1. Accessibility for Everyone
                  </a>
                </li>
                <li>
                  <a
                    href="#security-purity"
                    className={`toc-item-link ${activeTocItem === 'security-purity' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('security-purity')}
                  >
                    2. Security and Purity Guaranteed
                  </a>
                </li>
                <li>
                  <a
                    href="#liquidity-flexibility"
                    className={`toc-item-link ${activeTocItem === 'liquidity-flexibility' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('liquidity-flexibility')}
                  >
                    3. Liquidity and Flexibility
                  </a>
                </li>
                <li>
                  <a
                    href="#more-than-investment"
                    className={`toc-item-link ${activeTocItem === 'more-than-investment' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('more-than-investment')}
                  >
                    4. More Than an Investment
                  </a>
                </li>
                <li>
                  <a
                    href="#revolutionizing-ecosystem"
                    className={`toc-item-link ${activeTocItem === 'revolutionizing-ecosystem' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('revolutionizing-ecosystem')}
                  >
                    Revolutionizing the Gold Ecosystem
                  </a>
                </li>
                <li>
                  <a
                    href="#gold-wallet"
                    className={`toc-item-link ${activeTocItem === 'gold-wallet' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('gold-wallet')}
                  >
                    Gold Wallet: Securely store and manage your digital gold
                  </a>
                </li>
                <li>
                  <a
                    href="#partnership-trust"
                    className={`toc-item-link ${activeTocItem === 'partnership-trust' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('partnership-trust')}
                  >
                    A Partnership Built on Trust
                  </a>
                </li>
                <li>
                  <a
                    href="#future-digital-gold"
                    className={`toc-item-link ${activeTocItem === 'future-digital-gold' ? 'text-black font-semibold' : 'hover:text-black'}`}
                    onClick={() => handleTocClick('future-digital-gold')}
                  >
                    The Future is Digital, the Future is Gold
                  </a>
                </li>
              </ul>
              <hr className="mt-2 border-gray-300" />
              <p className="text-gray-500 mt-1">Modified on: June 02, 2025</p>
            </div>

            {/* Blog Body (rest of your content) */}
            <div className="space-y-6 leading-relaxed">
              <p>
                For centuries, gold has been the foundation of wealth, a safe haven during economic uncertainties, and a symbol of prosperity. However, traditional ways of owning and investing in gold come with challenges such as high initial investment costs, storage concerns, and limited liquidity. Enter the digital era, where Pixalive Gold Network is reshaping how people invest in and interact with gold.
              </p>

              <h4 id="why-choose-pixalive" className="font-semibold text-3xl">Why Choose Pixalive Gold Network?</h4>
              <p>
                Pixalive Gold Network bridges the gap between tradition and technology, allowing users to buy, store, and manage 24K, 999.9 pure digital gold. Backed by MMTC-PAMP, one of the world’s leading gold refiners and custodians, Pixalive ensures every gram of your investment is secure, authentic, and readily accessible.
              </p>

              <h4 id="accessibility" className="font-semibold text-2xl">1. Accessibility for Everyone</h4>
              <p>
                Gold investment is no longer reserved for the wealthy. With Pixalive, you can start investing with as little as ₹1. This micro-investment approach empowers individuals from all walks of life to own gold, making wealth-building an inclusive opportunity.
              </p>

              <h4 id="security-purity" className="font-semibold text-2xl">2. Security and Purity Guaranteed</h4>
              <p>
                Partnering with MMTC-PAMP guarantees the highest level of purity and safety for your digital gold. Stored in world-class, fully insured vaults, your gold is always secure, with real-time transparency ensuring trust at every step.
              </p>

              <h4 id="liquidity-flexibility" className="font-semibold text-2xl">3. Liquidity and Flexibility</h4>
              <p>
                Digital gold with Pixalive offers unparalleled liquidity. You can buy, sell, or redeem your gold anytime at live market rates. Whether you want to convert your gold into cash, physical gold, or products from Pixalive’s extensive partner network, the choice is yours.
              </p>

              <h4 id="more-than-investment" className="font-semibold text-2xl">4. More Than an Investment</h4>
              <p>
                Pixalive transforms gold into an everyday asset. Use it for payments, redeem it for groceries or jewelry, or leverage it as collateral for instant loans—all from the Pixalive platform.
              </p>

              <h4 id="revolutionizing-ecosystem" className="font-semibold text-2xl">Revolutionizing the Gold Ecosystem</h4>
              <p>
                Pixalive Gold Network isn’t just about digital gold; it’s about creating a holistic gold ecosystem. Through strategic divisions and services, Pixalive integrates gold into daily life in innovative ways.
              </p>

              <h4 id="gold-wallet" className="font-semibold text-2xl">Gold Wallet: Securely store and manage your digital gold</h4>
              <p>
                Redemption Options: Convert your digital gold into physical gold, cash, or everyday products.
                <br />
                Franchise and Merchant Integration: Expand the Pixalive ecosystem by onboarding businesses and enabling digital gold payments.
                <br />
                Educational Resources: Empower users with tools and knowledge for better financial decision-making.
              </p>

              <h4 id="partnership-trust" className="font-semibold text-2xl">A Partnership Built on Trust</h4>
              <p>
                Pixalive’s collaboration with MMTC-PAMP ensures that every gram of digital gold you own is of the highest quality, stored with maximum security, and fully insured. This partnership reflects Pixalive’s commitment to creating a transparent and reliable platform for gold investors.
              </p>

              <h4 id="future-digital-gold" className="font-semibold text-2xl">The Future is Digital, the Future is Gold</h4>
              <p>
                As the world moves towards digitalization, the way we invest and interact with wealth is evolving. Pixalive Gold Network embraces this change by making gold accessible, flexible, and integrated into modern life. With a focus on security, innovation, and user empowerment, Pixalive is more than a gold investment platform—it’s the future of wealth management.
                <br />
                Whether you’re a seasoned investor or just starting your wealth-building journey, Pixalive Gold Network is your gateway to financial growth and security. Embrace the power of digital gold today and secure your golden future.
              </p>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6 lg:col-span-3">
            {/* Promo Card */}
            <div className="bg-[#E7E7E7] text-black p-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                {/* Text Content */}
                <div className="md:w-1/2">
                  <h4 className="font-semibold text-xl mb-1">Save in Digital Gold with Pixalive</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Join the network trusted for digital gold, loans, jewelry & more — all in one seamless, secure platform.
                  </p>
                  <Link to="/">
                  <button className="bg-black text-white text-sm px-4 py-2 mt-2">
                    Explore Pixalive Gold
                  </button>
                  </Link>
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                  <img src={promoImage} alt="Pixalive Promo" className="w-full max-w-[240px] h-auto" />
                </div>
              </div>
            </div>

            {/* Recent Blogs */}
            <div>
              <h4 className="font-semibold mb-2">Recent Blogs</h4>
              <div className="space-y-3">
                {recentBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer hover:opacity-80"
                    onClick={() => handleRecentBlogClick(index)}
                  >
                    <img
                      src={blog.thumb}
                      alt={`Recent blog: ${blog.title}`}
                      className="w-20"
                    />
                    <p className="text-sm">{blog.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;