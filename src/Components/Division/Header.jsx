import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Techlogo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/divisions", label: "Divisions" },
    { path: "/services", label: "Services" },
    { path: "/franchise", label: "Franchise" },
    { path: "/goldlease", label: "Gold Lease" },
    { path: "/about", label: "About us" },
  ];

  const activeClass = "underline underline-offset-4 ";

  return (
    <header className=" max-w-[1280px] mx-auto text-black  md:px-4   py-6 flex items-center justify-between  relative">
      {/* Logo */}
      <div className="flex items-center gap-3 -mb-7">
        <img src={logo} alt="Pixalive Logo" className="w-12 h-12 mb-5 md:mb-0" />

      
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center font-medium mt-0">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? activeClass : "hover:underline"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Button */}
      <button
        className="hidden md:block  px-5 py-2  font-semibold cursor-pointer hover:translate-x-1.5"
        onClick={() => navigate("/signup")}
      >
        Sign up
        <span className="ml-1 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1 hover:translate-x-1.5">
              ↗
            </span>
      </button>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden z-20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black p-6 flex flex-col gap-4 font-medium md:hidden z-10 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : "hover:underline"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/signup");
            }}
            className=" mt-4 cursor-pointer font-semibold hover:translate-x-1.5" 
          >
            Sign up
             <span className="ml-1 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1 hover:translate-x-1.5">
              ↗
            </span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
