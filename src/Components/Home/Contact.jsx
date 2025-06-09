import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactBG from './../../assets/Contact/contact.png';

const Whats = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Aspect Ratio Wrapper for Responsiveness */}
      <div className="relative w-full pt-[60%] sm:pt-[50%] md:pt-[40%] lg:pt-[35%]">
        {/* Background Image */}
        <img
          src={ContactBG}
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40">
          <h3 className="text-base sm:text-xl md:text-3xl font-bold mt-20 mb-3">+91 - 87785 84566</h3>
          <p className="text-sm sm:text-base md:text-xl mb-1">Have any questions?</p>
          <p className="text-sm sm:text-base md:text-xl mb-4">We’re here to help. Let’s talk.</p>
          <a
            href="https://wa.me/918778584566"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-600 font-semibold rounded-full px-5 py-2 hover:bg-green-100 transition text-sm sm:text-base"
          >
            <FaWhatsapp className="mr-2 text-xl sm:text-2xl" />
            WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whats;
