import React from "react";
import playStoreIcon from "../../assets/Headermain/playstore.png"; // Replace with your exact path
import appStoreIcon from "../../assets/Headermain/applestore.png";   // Replace with your exact path

const GetStartedSection = () => {
  return (
    <section className="bg-[#f6f6f6] text-black py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] mx-auto w-full bg-[#eeeeee] p-10 text-center ">
        {/* Red dot + subtitle */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
          <p className="text-gray-600 text-sm">Pixalive Gold Network</p>
        </div><br/>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Connect, Engage and Grow With Pixalive
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Join Pixalive today and transform your social interactions into{" "}
          <span className="text-black font-medium">
            a pathway <br/>for wealth creation and community building.
          </span>
        </p>

        {/* Store Buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {/* Play Store */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-5 py-2"
          >
            <img src={playStoreIcon} alt="Play Store" className="h-5 w-5" />
            <span className="text-sm font-medium">Play Store</span>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-5 py-2"
          >
            <img src={appStoreIcon} alt="App Store" className="h-5 w-5" />
            <span className="text-sm font-medium">App Store</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
