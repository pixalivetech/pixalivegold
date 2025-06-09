import React from "react";
import Playstore from "./../../assets/About/playlogo.png";
import Appstore from "./../../assets/About/applelogo.png";

const HeroSection = () => {
  return (
    <section className=" w-full lg:py-20 py-10 px-4  md:px-8 lg:px-6  max-w-[1280px] mx-auto font-[Lufga] flex justify-center">
      <div className=" bg-[#E7E7E7] py-20 px-4  md:px-8 lg:px-6 text-center max-w-7xl w-full">
        {/* Red dot + Heading */}
        <div className="flex items-center justify-center gap-2 mb-9">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <p className="text-gray-500 text-md sm:text-base lg:text-[20px] font-medium">Pixalive Network</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px]  font-semibold text-black mb-9">
          Connect, Engage and Grow With pixalive
        </h1>

        {/* Subheading */}
        <p className="text-gray-500 text-base sm:text-md lg:text-[20px] font-medium">
          Join Pixalive today and transform your social interactions into <span className="text-black"> a pathway</span> 
          <br />
          <span className="text-black">for wealth creation and community building.</span>
        </p>

        {/* Buttons */}
        <div className="flex justify-center sm:gap-4 gap-4 lg:gap-12 mt-8 flex-wrap">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white flex items-center gap-2 lg:px-5 sm:px-4 px-3 lg:py-3 py-2  text-sm sm:text-base lg:text-md font-lufga"
          >
            <img
              src={Playstore}
              alt="Play Store"
              className="h-6 w-auto"
            />
            Play Store
          </a>
          <a
            href="https://www.apple.com/in/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white flex items-center gap-2 lg:px-5 sm:px-4 px-3 lg:py-3 py-2  text-sm sm:text-base lg:text-md font-lufga"
          >
            <img
              src={Appstore}
              alt="App Store"
              className="h-6 w-auto"
            />
            App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
