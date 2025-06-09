import React, { useState } from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import googlePlayLogo from './../../assets/About/playlogo.png';

import userAvatar1 from './../../assets/About/avatar1.png';
import userAvatar2 from './../../assets/About/avatar2.png';
import userAvatar3 from './../../assets/About/avatar3.png';

import testimonialAvatar1 from './../../assets/About/avatar1.png';
import testimonialAvatar2 from './../../assets/About/avatar2.png';
import testimonialAvatar3 from './../../assets/About/avatar3.png';

const TestimonialCard = ({ quote, author, location, avatar, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 sm:p-8 shadow-lg transition-all duration-300 ease-in-out
        flex flex-col justify-between  
        ${isHovered ? 'bg-black text-white hover:-translate-y-1 hover:scale-103' : 'bg-white text-black'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute top-4 left-4 text-5xl font-serif leading-none ${isHovered ? 'text-gray-400' : 'text-gray-300'}`}>
        “
      </div>

      <p className={`text-sm sm:text-base leading-relaxed mb-6 mt-8 ${isHovered ? 'text-white' : 'text-gray-700'}`}>
        {quote}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-white"
          />
          <div>
            <p className={`text-sm font-semibold ${isHovered ? 'text-white' : 'text-black'}`}>{author}</p>
            <p className={`text-xs ${isHovered ? 'text-gray-400' : 'text-gray-500'}`}>{location}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaStar className={`text-sm ${isHovered ? 'text-yellow-400' : 'text-yellow-500'}`} />
          <span className={`ml-1 text-sm font-semibold ${isHovered ? 'text-yellow-400' : 'text-black'}`}>{rating}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "A seamless and secure way to invest in gold! I've always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.",
      author: "Arun K",
      location: "Mumbai",
      avatar: testimonialAvatar1,
      rating: "4"
    },
    {
      quote: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I've finally found a space that keeps me focused and inspired.",
      author: "Priya R",
      location: "Chennai",
      avatar: testimonialAvatar2,
      rating: "5"
    },
    {
      quote: "A seamless and secure way to invest in gold! I've always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.",
      author: "Rajesh M",
      location: "Bangalore",
      avatar: testimonialAvatar3,
      rating: "4.5"
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">

        <div className="text-center">

          {/* Top Avatars */}
          <div className="flex justify-center -space-x-2 sm:-space-x-3 mb-6">
            <img src={userAvatar1} alt="User 1" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover" />
            <img src={userAvatar2} alt="User 2" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover" />
            <img src={userAvatar3} alt="User 3" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            3.5 Cr.+ users trust us.
          </h2>
          <p className="text-base text-gray-600 mb-8">
            Rated 4.7 <span className="font-semibold">1.4L</span> reviews on
          </p>

          {/* Store Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <a
              href="#"
              className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              <img src={googlePlayLogo} alt="Play Store" className="h-6 mr-2" />
              <span className="font-medium">Play Store</span>
            </a>
            <a
              href="#"
              className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              <FaApple className="text-lg mr-2" />
              <span className="font-medium">App Store</span>
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
