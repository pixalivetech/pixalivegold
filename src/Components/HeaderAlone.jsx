import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "./../assets/Headermain/logo copy.png";

const HeaderAlone = () => {
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
    <div>
      {/* Main content */}
      <div className="relative z-10 pt-[15px]">
        {/* Header */}
        <header className="flex items-center max-w-[1260px] mx-auto justify-between p-4 bg-opacity-70">
          <Link to="/">
            <img
              src={logo}
              className="w-[42px] h-[42px] cursor-pointer"
              alt="Pixalive Logo"
            />
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-black text-[16px] border-b-[1px] cursor-pointer border-transparent hover:border-black transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/signup">
            <button className="group bg-white text-black px-4 py-2 cursor-pointer">
              Sign up&nbsp;
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              <FaBars className="text-xl text-black" />
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

            {/* Mobile Sign Up Button */}
            <button
              onClick={() => {
                navigate("/signup"); // Change this path if needed
                setNavOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-black font-medium hover:bg-gray-100"
            >
              Sign Up ↗
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAlone;
