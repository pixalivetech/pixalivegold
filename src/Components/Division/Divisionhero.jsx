import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './../../assets/Division/Hero-1.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full px-4 pt-0 bg-[#140113]">
      {/* Fullscreen Hero Section with Background */}
      <header
        className="relative w-[94%]   bg-[#140113] mx-auto rounded-2xl  text-white shadow-lg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh', // increased from 60vh to 80vh
        }}
      >
        <div className="relative  z-0 flex flex-col justify-center h-full p-6 sm:p-20 pb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Pixalive: Transform Your Digital Gold into Everyday Luxury
          </h1>
          <p className="mt-4 text-lg  sm:text-xl max-w-2xl">
            Seamlessly convert your Pixalive wallet gold into real-world services—shop, dine,
            groom, and more. Enjoy unparalleled convenience and value at your fingertips.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6  w-fit px-6 py-3 bg-[#b98a30] hover:bg-[#a27626] transition text-white font-semibold rounded-full shadow-md"
          >
            Explore Our Networks →
          </button>
        </div>
      </header>
    </div>
  );
}
