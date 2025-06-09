import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Blog1 from "./../../assets/Blogs/blog1.png";
import Blog2 from "./../../assets/Blogs/blog2.png"; // Corrected path
import Blog3 from "./../../assets/Blogs/blogpage.png";
import { Link } from "react-router-dom";
import HeaderAlone from '../HeaderAlone';



const cardData = [
  {
    id: 1,
    title: 'Empowering Communities Through Gold: Pixalive Franchises',
    tag: 'Marketing',
    author: 'Somanathan',
    date: '21 Apr 2025',
    image: Blog1,
    description: 'At Pixalive Gold Network, we believe in creating a gold-centric ecosystem that...',
  },
  {
    id: 2,
    title: 'A Partnership Built on Trust: Pixalive and MMTC-PAMP',
    tag: 'Gold Investing',
    author: 'Mayakannan',
    date: '12 May 2025',
    image: Blog2,
    description: 'The Pixalive Gold Network is proud to partner with MMTC-PAMP, one of the most...',
  },
  {
    id: 3,
    title: 'The Future of Wealth: Digital Gold with Pixalive',
    tag: 'Finance',
    author: 'Kathirvel',
    date: '18 Apr 2025',
    image: Blog3,
    description: 'The Pixalive Gold Network revolutionizes gold ownership with services like digital gold investment, gold loans, jewelry purchases, and gold-backed everyday transactions. ',
  },
];

const topics = [
  'All',
  'Festive Reads',
  'Credit Cards',
  'Sell Gold',
  'Gold Dots',
  'Taxes',
  'Savings',
  'Investment',
  'Finance',
  'Digital Gold',
  'Financial Education',
  'Marketing',
  'Gold bar',
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTopic('All');
    setSortBy('newest');
  };

  const filteredCards = cardData
    .filter((card) => {
      const matchesTopic =
        selectedTopic === 'All' || card.tag.toLowerCase() === selectedTopic.toLowerCase();
      const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTopic && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return b.id - a.id;
      return 0;
    });

  return (
    <>
      <HeaderAlone /> {/* HeaderAlone usually doesn't need to be in a div wrapper here */}
      <div className="min-h-screen bg-[#f6f6f6] text-black pb-8"> {/* Removed px-4 py-8 from here */}
        {/* Hero Section */}
        <div className="max-w-[1280px] mx-auto px-4 py-8"> {/* Added max-w, mx-auto, and px-4 */}
          <div className="w-full flex flex-col md:flex-row items-start md:gap-24">
            {/* Left: Vertical Label - Specific width for alignment */}
            <div className="w-full md:w-[150px] flex-shrink-0 mb-4 md:mb-0">
              <p className="text-sm ml-2 text-gray-400 whitespace-nowrap">Pixalive Blog</p>
            </div>

            {/* Right: Main Heading - Takes remaining space */}
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black leading-snug max-w-4xl">
                Insights, updates, and stories from the pioneers of a next-gen gold network platform — where innovation meets real-world value.
              </h1>
            </div>
          </div>
        </div>

        {/* Search bar (already correctly aligned) */}
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="relative md:w-1/4 p-2 mb-4">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 text-sm mt-3 w-full "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <hr className="mt-3" />
          </div>
        </div>

        {/* Main content (Sidebar + Blog Cards - already correctly aligned) */}
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 space-y-6">
            {/* Filter */}
            <div className="bg-white p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-gray-700">Filter</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:underline"
                >
                  Clear Filter
                </button>
              </div>
              <hr className="border-gray-300 mb-4" />
              <h3 className="text-sm text-gray-600 mb-2">Topic</h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1 text-sm border ${
                      selectedTopic === topic
                        ? 'bg-black text-white'
                        : 'bg-white text-black border-gray-300'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="bg-white p-4">
              <h3 className="text-sm text-gray-600 mb-2">Sort by</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sort"
                    value="newest"
                    checked={sortBy === 'newest'}
                    onChange={() => setSortBy('newest')}
                  />
                  Newest first
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="sort" disabled />
                  Most popular
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="sort" disabled />
                  Upload date
                </label>
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="md:w-3/4 w-full grid mb-10 sm:grid-cols-2 gap-6">
            {filteredCards.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No blogs available for this topic.
              </div>
            ) : (
              filteredCards.map((card) => (
                <Link
                  key={card.id}
                  to="/blogpage" // Link to the blogpage route (consider making this dynamic for individual blog posts later)
                  className="relative overflow-hidden hover:shadow-md transition block"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 text-xs font-semibold text-black bg-white px-2 py-0.5">
                    {card.tag}
                  </span>
                  <div className="p-4 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      {card.author} · {card.date}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}