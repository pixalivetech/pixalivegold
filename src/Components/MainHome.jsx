import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import bgImage from "../assets/Headermain/herobg.jpg";
import logo from "../assets/Headermain/logo copy.png";

const MainHome = () => {
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
    const [activeTab, setActiveTab] = React.useState("Buy");

    return (
        <div
            className="min-h-screen bg-cover bg-center relative "
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 z-0"></div>

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
                            <button className="bg-black text-white px-4 py-2 w-full ">Sign up</button></Link>
                        </div>
                    </div>
                )}

                {/* Hero + Buy Widget Section */}
                <div className="py-20 max-w-[1260px] px-4 mx-auto  flex flex-col md:flex-row items-center justify-between">
                    {/* Left Text div */}
                    <div className="max-w-xl space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            Pixalive Gold Network: <br />
                            <span className="text-white">Trusted Gold, Endless Possibilities</span>
                        </h1>
                        <p className="text-[16px] text-white" style={{ wordSpacing: '0.2em' }}>
                            "Secure Your Future with India’s First Social Gold Network."
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <button className="group bg-white text-black px-5 py-2 cursor-pointer">
                                See How It Works &nbsp;
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    ↗
                                </span>
                            </button>

                            <button className="flex items-center gap-2 bg-transparent border border-white text-white px-5 py-2 cursor-pointer">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                                    alt="Play Store"
                                    className="w-5 h-5"
                                />
                                Download Pixalive App
                            </button>


                        </div>
                    </div>



                    {/* Buy Gold Widget */}
                    <div className="bg-white text-black p-6 shadow-lg w-full md:w-96 mt-10 md:mt-0 ">
                        {/* Tabs */}
                        <div className="flex items-center justify-between  mb-4 cursor-pointer">
                            {["Buy", "Sell", "Jewellery"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-2 cursor-pointer text-sm font-medium text-center ${activeTab === tab
                                        ? "text-yellow-600 font-semibold border-b-2 border-black"
                                        : "text-gray-500 mb-2"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Fixed height content container */}
                        <div className="min-h-[220px] flex flex-col justify-between">
                            {activeTab === "Buy" && (
                                <>
                                    <div>
                                        <div className="flex justify-between items-center mb-3 text-sm">
                                            <div>
                                                <p className="text-gray-500 flex items-center gap-1">
                                                    <span className="w-2 h-2 bg-red-500  inline-block"></span> Live Buy Price
                                                </p>
                                                <p className="text-lg font-bold text-gray-800">₹10,200.64/ gm</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Purity</p>
                                                <p className="text-yellow-600 font-medium">24k 99.99%</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 mb-3 text-sm">
                                            <label className="flex items-center gap-2">
                                                <input type="radio" name="buyOption" defaultChecked />
                                                Buy in rupees
                                            </label>
                                            <label className="flex items-center gap-2">
                                                <input type="radio" name="buyOption" />
                                                Buy in grams
                                            </label>
                                        </div>

                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                defaultValue="₹2000"
                                                className="w-full border-b-2 border-gray-300 focus:border-yellow-500 outline-none px-2 py-1 text-lg"
                                            />
                                            <p className="text-right text-xs text-gray-500 mt-1">= 0.9854 gm</p>
                                        </div>
                                    </div>

                                    <button className="bg-black text-white cursor-pointer w-full py-2  hover:scale-105 transition-transform mt-4">
                                        Buy Gold
                                    </button>
                                </>
                            )}

                            {activeTab === "Sell" && (
                                <div className="text-center text-gray-600 text-sm flex items-center justify-center h-full">
                                    <p>Sell gold feature coming soon.</p>
                                </div>
                            )}

                            {activeTab === "Jewellery" && (
                                <div className="text-center text-gray-600 text-sm flex items-center justify-center h-full">
                                    <p>Explore jewellery options here.</p>
                                </div>
                            )}
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default MainHome;
