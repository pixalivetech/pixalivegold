import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import logo from "./../../assets/logowhite.png";
import { Link } from "react-router-dom";
import pixaliveFooterImage from "./../../assets/Pixalive.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Container for center alignment */}
      <div className="max-w-[1280px] w-full mx-auto px-6">
        {/* Top Grid - Logo, Description, Links */}
        <div className="grid grid-cols-1 py-10 md:grid-cols-12 gap-10 z-10 relative">
          {/* Left Column */}
          <div className="md:col-span-4 space-y-4">
            <img src={logo} alt="Pixalive Logo" className="w-10 h-10" />
            <p className="text-base sm:text-lg leading-relaxed">
              Pixalive Gold Network is India’s first social gold platform offering
              secure, 100% gold-backed investment and trading solutions in partnership
              with MMTC-PAMP
            </p>
            <a
              href="mailto:info@pixalive.network"
              className="inline-flex items-center space-x-1 border-b border-white w-fit hover:opacity-100"
            >
              <span>info@pixalive.network</span>
              <FaArrowUpRightFromSquare className="text-md" />
            </a>
            <p className="text-sm mt-4 text-[#FFFFFF]">+91 87785 84566</p>
          </div>

          {/* Right Column - Nav & Social Links */}
          <div className="md:col-span-8 flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-10 md:gap-16 lg:gap-20 md:justify-end">
            {/* Nav Links */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-10 gap-6 text-base w-full sm:w-auto">
              <div className="flex flex-col gap-5 md:mr-10 text-left">
                <Link to="/" onClick={scrollToTop} className="hover:underline cursor-pointer">Home</Link>
                <Link to="/services" onClick={scrollToTop} className="hover:underline cursor-pointer">Services</Link>
                <Link to="/golddots" onClick={scrollToTop} className="hover:underline cursor-pointer">Gold dots</Link>
                <Link to="/buycoins" onClick={scrollToTop} className="hover:underline cursor-pointer">Buy Coins</Link>
              </div>
              <div className="flex flex-col gap-5 text-left">
                <Link to="/franchise" onClick={scrollToTop} className="hover:underline cursor-pointer">Franchise</Link>
                <Link to="/goldlease" onClick={scrollToTop} className="hover:underline cursor-pointer">Gold Lease</Link>
                <Link to="/about" onClick={scrollToTop} className="hover:underline cursor-pointer">About us</Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-5 text-base">
              <a
                href="https://www.facebook.com/profile.php?id=61572736722664"
                className="inline-flex items-center space-x-1 hover:underline cursor-pointer"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
                <FaArrowUpRightFromSquare className="text-md" />
              </a>
              <a
                href="https://www.instagram.com/pixalivetech/?next=%2F"
                className="inline-flex items-center space-x-1 hover:underline cursor-pointer"
              >
                <FaInstagram />
                <span>Instagram</span>
                <FaArrowUpRightFromSquare className="text-md" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572736722664"
                className="inline-flex items-center space-x-1 hover:underline cursor-pointer"
              >
                <FaFacebook />
                <span>Facebook</span>
                <FaArrowUpRightFromSquare className="text-md" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright + Terms */}
        <div className="pb-4 sm:pb-6 text-sm text-[#FFFFFF] flex justify-between items-center flex-col sm:flex-row gap-4 sm:gap-10">
          <p className="hidden sm:block">
            © 2025 Pixalive Gold Network. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-10 sm:ml-auto">
            <Link to="/" onClick={scrollToTop} className="hover:underline cursor-pointer">
              Terms of Use
            </Link>
            <Link to="/" onClick={scrollToTop} className="hover:underline cursor-pointer">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Pixalive Strip Image */}
      <div className="w-full mt-10 flex justify-center">
        <img
          src={pixaliveFooterImage}
          alt="Pixalive Footer Logo"
          className="max-w-[1440px] w-full h-auto object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
