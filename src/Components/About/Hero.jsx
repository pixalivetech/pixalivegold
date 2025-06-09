import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import bgImage from "../../assets/About/aboutbg.png";
import logo from "../../assets/Headermain/logo copy.png";

const Hero = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = React.useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gold dots", path: "/golddots" },
    { name: "Buy Coins", path: "/buycoins" },
    { name: "Franchise", path: "/franchise" },
    { name: "Gold Lease", path: "/goldlease" },
    { name: "About us", path: "/about" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 bg-opacity-50 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 pt-[15px] ">
        {/* Header */}
        <header className="flex items-center max-w-[1260px] mx-auto justify-between p-4 bg-opacity-70">
          <Link to="/">
            <img src={logo} className="w-[42px] h-[42px] cursor-pointer" alt="Pixalive Logo" />
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-white text-[16px]  border-b-[1px] cursor-pointer    border-transparent hover:border-white transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>


          <div className="hidden md:block">
            <Link to="/signup">
            <button className="group bg-white text-black px-4 py-2 cursor-pointer">
              Sign up &nbsp;
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
              
            </button>
            </Link>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              <FaBars className="text-xl text-white" />
            </button>
          </div>
        </header>

        {/* Mobile nav */}
        {navOpen && (
          <div className="md:hidden bg-white bg-opacity-90 border-b shadow-md relative z-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setNavOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                {item.name}
              </button>
            ))}
            <div className="p-4">
              <Link to="/signup">
              <button className="bg-black text-white px-4 py-2 w-full rounded">Sign up</button></Link>
            </div>
          </div>
        )}

        <div className="py-20 max-w-[1260px] px-4 mx-auto  flex flex-col md:flex-row items-center justify-between">
          {/* Left Text div */}
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Experience the Future of Gold with    <br />
              <span className="text-white"> Pixalive Gold Network</span>
            </h1>
            <p className="text-[16px] text-white" style={{ wordSpacing: '0.2em' }}>
              "Unlock the power of gold like never before — seamlessly invest, trade, and connect in a trusted ecosystem that blends financial services with your everyday life."
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link to="/">
              <button className="group bg-white text-black px-5 py-2 cursor-pointer">
                Explore Pixalive Network &nbsp;
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
