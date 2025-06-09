import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "./../../assets/Headermain/log.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Divisions", path: "/divisions" },
  { name: "Franchise", path: "#" },
  { name: "Gold Lease", path: "#" },
  { name: "About us", path: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="bg-white text-[#2D1D2F] ">
      <div className="flex justify-between items-center px-6 md:px-20 py-3">
        {/* Logo + Text */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Pixalive Logo" className="h-12 w-12 object-contain" />
          <div className="leading-tight text-xs md:text-sm">
                   <p className="font-bold">PIXALIVE</p>
                   <p className="tracking-wide">GOLD NETWORK</p>
                   <p className="text-[10px] md:text-xs text-[#b98a30]">INFINITE OPPORTUNITIES TO EARN</p>
                 </div>
        
        </div>

        {/* Right Side Content */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 mr-24 font-semibold text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActive(item.name)}
                className={`transition hover:underline underline-offset-4 ${
                  active === item.name
                    ? "text-[#C098C3] underline decoration-[#C098C3]"
                    : "text-[#C098C3] hover:text-[#B98A30]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="bg-[#B98A30] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#a07429] transition"
              onClick={() => window.location.href = '/signup'}>
              Login/Sign up
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col px-6 py-4 space-y-4 bg-white text-[#2D1D2F]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setActive(item.name);
                  setIsOpen(false);
                }}
                className={`block text-sm font-medium ${
                  active === item.name
                    ? "text-[#B98A30] underline underline-offset-4 decoration-[#B98A30]"
                    : "text-[#C098C3] hover:text-[#B98A30]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[#B98A30] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#a07429] transition w-fit"
            onClick={() => window.location.href = '/signup'}>
              Login/Sign up
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
