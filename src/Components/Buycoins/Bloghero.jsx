import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import goldCoinImage from './../../assets/coin-1g.png';
import goldCoinImage1 from "./../../assets/coin-2g.png";
import goldCoinImage2 from "./../../assets/coin-3g.png";
import goldCoinImage3 from "./../../assets/coin-4g.png";

const productData = [
  {
    id: 1,
    name: '1 Gram PixaliveGold Coin',
    purity: '24K, 99.99%',
    price: '10,630.4',
    deliveryInfo: '2-5+ Delivers',
    image: goldCoinImage,
    productType: 'Bullion',
    shape: 'Coin',
    weight: '1g',
  },
  {
    id: 2,
    name: '2 Gram PixaliveGold Coin',
    purity: '24K, 99.99%',
    price: '21,260.8',
    deliveryInfo: '2-5+ Delivers',
    image: goldCoinImage1,
    productType: 'Bullion',
    shape: 'Coin',
    weight: '2g',
  },
  {
    id: 3,
    name: '3 Gram PixaliveGold Coin',
    purity: '24K, 99.99%',
    price: '31,891.2',
    deliveryInfo: '2-5+ Delivers',
    image: goldCoinImage2,
    productType: 'Bullion',
    shape: 'Coin',
    weight: '3g',
  },
  {
    id: 4,
    name: '4 Gram PixaliveGold Coin',
    purity: '24K, 99.99%',
    price: '42,521.6',
    deliveryInfo: '2-5+ Delivers',
    image: goldCoinImage3,
    productType: 'Bullion',
    shape: 'Coin',
    weight: '4g',
  },
];

const productTypes = [
  'All',
  'Banyan Tree',
  'Cast Bar',
  'Ganesha',
  'Lakshmi',
  'Lotus',
  'Peacock',
  'Ram Darbar',
  'Rose',
  'Shankh',
  'Raksha Bandhan',
  'Sovereign',
  'Tola',
  'Guru Nanak Dev',
];

export default function ProductListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('All');
  const [selectedSortBy, setSelectedSortBy] = useState('Bullion');

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedProductType('All');
    setSelectedSortBy('Bullion');
  };

  const filteredProducts = productData
    .filter((product) => {
      const matchesProductType =
        selectedProductType === 'All' ||
        product.productType.toLowerCase() === selectedProductType.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesProductType && matchesSearch;
    });

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black pb-8">
      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="w-full flex flex-col md:flex-row items-start md:gap-24">
          <div className="w-full md:w-[150px] flex-shrink-0 mb-4 md:mb-0">
            <p className="text-sm ml-2 text-gray-400 whitespace-nowrap">Pixalive Blog</p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black leading-snug max-w-4xl">
              Insights, updates, and stories from the pioneers of a next-gen gold network platform — where innovation meets real-world value.
            </h1>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="relative md:w-1/4 p-2 mb-4">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 text-sm mt-3 w-full border-b border-gray-300 focus:outline-none focus:border-black bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Sidebar + Products */}
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row md:gap-60">
        {/* Sidebar */}
        <div className="md:w-1/4 space-y-6 flex-shrink-0">
          <div className="bg-white p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-700">Filter</h2>
              <button onClick={clearFilters} className="text-sm text-gray-500 hover:underline">
                Clear Filter
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />
            <h3 className="text-sm text-gray-600 mb-2 font-medium">Product Series Type</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {productTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedProductType(type)}
                  className={`px-3 py-1 text-sm border ${
                    selectedProductType === type
                      ? 'bg-black text-white'
                      : 'bg-white text-black border-gray-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <h3 className="text-sm text-gray-600 mb-2 font-medium">Sort by</h3>
            <div className="space-y-2 text-sm text-gray-700">
              {['Bullion', 'Devotional', 'Gifting', 'Classic'].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sortBy"
                    value={option}
                    checked={selectedSortBy === option}
                    onChange={() => setSelectedSortBy(option)}
                    className="form-radio text-black focus:ring-0"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="md:w-3/4 w-full mb-10 flex justify-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 w-full">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No products available.
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-sm overflow-hidden flex flex-col justify-between w-full sm:w-[280px]"
                  style={{ border: '1px solid #f0f0f0' }}
                >
                  <div className="flex flex-col items-center px-4 pt-6 pb-4">
                    <div className="w-[120px] h-[120px] flex items-center justify-center mb-4" style={{ perspective: '1000px' }}>
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                        animate={{ rotateY: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 6,
                          ease: "linear",
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      />
                    </div>
                    <div className="w-full mb-4">
                      <hr className="border-t border-gray-200 w-1/3 mx-auto" />
                    </div>
                    <div className="bg-[#f6f6f6] text-[#EFA61A] text-xs font-medium px-2 py-1 mb-2 rounded-[2px]">
                      {product.purity}
                    </div>
                    <p className="text-base text-gray-800 font-medium mb-2 text-center">
                      {product.name}
                    </p>
                    <p className="text-2xl font-semibold text-black mb-4">
                      ₹{product.price}
                    </p>
                    <button className="bg-black text-white py-2 sm:py-2  lg:py-2 px-14 text-md lg:text-sm font-medium hover:bg-gray-800 transition-colors ">
                      Add to Cart
                    </button>
                  </div>
                  <div
                    className="w-full text-center py-2 text-sm font-medium"
                    style={{
                      background: 'linear-gradient(to right, #FFFFFF, #f8c972, #FFFFFF)',
                      color: '#7A7A7A',
                    }}
                  >
                    {product.deliveryInfo}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
