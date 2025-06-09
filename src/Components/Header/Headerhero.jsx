import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './../../assets/Headermain/herobg.jpg';
import immtcLogo from './../../assets/Headermain/mmtc1.png';
import lbmaLogo from './../../assets/Headermain/lbma2.png';
import immtcLogoMobile from './../../assets/Headermain/mmtc1.png'; // Import mobile logo
import lbmaLogoMobile from './../../assets/Headermain/lbma2.png';     // Import mobile logo
import { motion, AnimatePresence } from 'framer-motion';
import buyIcon from './../../assets/Headermain/buy.png';
import sellIcon from './../../assets/Headermain/sell2.png';
import jewelleryIcon from './../../assets/Headermain/jewellery.png';
import axios from 'axios'; // Import axios

export default function Header() {
  const [activeTab, setActiveTab] = useState('Buy');
  const [buyMode, setBuyMode] = useState('rupees');
  const [value, setValue] = useState('');
  const [goldPrice, setGoldPrice] = useState(null);
  const purity = '24k 99.99%';
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://gold.g.apised.com/v1/latest?metals=XAU,XAG,XPT,XPD&base_currency=KWD&currencies=EUR,KWD,GBP,USD&weight_unit=gram',
          headers: {
            'x-api-key': 'sk_7d609e0a091aEc79113eEb79e1E16dF6cA6c8524A964148d'
          }
        };

        const response = await axios.request(config);
        const pricePerGram = response.data.data.XAU.USD;
        setGoldPrice(pricePerGram);
      } catch (error) {
        console.error('Error fetching gold price:', error);
      }
    };

    fetchGoldPrice();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile breakpoint as 768px
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getConvertedValue = () => {
    if (!value || isNaN(parseFloat(value)) || !goldPrice) return '';
    if (buyMode === 'rupees') {
      return `${(parseFloat(value) / goldPrice).toFixed(4)} gm`;
    }
    return `₹${(parseFloat(value) * goldPrice).toLocaleString()}`;
  };

  const tabs = [
    { label: 'Buy', icon: buyIcon },
    { label: 'Sell', icon: sellIcon },
    { label: 'Jewellery', icon: jewelleryIcon },
  ];

  return (
    
    <div className="relative w-full pb-4 pt-0">
      {/* Purple border on bottom, left, and right */}
      <div className="absolute inset-0   pointer-events-none z-[-1]" />
    
      <header
        className="relative w-[94%] mx-auto p-2 rounded-2xl mb-4 text-white  overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
        }}
      >
        {/* Main Content */}
        <div className="relative z-0 inset-0 flex flex-col md:flex-row items-center justify-between px-3 md:px-6 pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="p-4 md:p-6 rounded-xl text-center md:text-left md:w-1/2"
          >
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Pixalive Gold Network:</h1>
            <h2 className="text-3xl md:text-5xl font-semibold mt-4">Trusted Gold, Endless</h2>
            <h2 className="text-3xl md:text-5xl font-semibold mt-5">Possibilities</h2>
            <p className="mt-6 text-xl md:text-2xl font-semibold">
              "Secure Your Future with India’s First Social
              <span className="ml-2">Gold Network."</span>
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-6 mt-4">
              {isMobile ? (
                <>
                  <img src={immtcLogoMobile} alt="IMMT Logo" className="h-10 w-24" />
                  <img src={lbmaLogoMobile} alt="LBMA Logo" className="h-10 w-20" />
                </>
              ) : (
                <>
                  <img src={immtcLogo} alt="IMMT Logo" className="h-13 w-60" />
                  <img src={lbmaLogo} alt="LBMA Logo" className="h-13 w-35" />
                </>
              )}
            </div>
          </motion.div>

          {/* Buy/Sell/Jewellery Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#fbffb7] text-black rounded-lg p-3 md:p-4 mt-6 mb-6 mx-2 md:mx-4 w-full max-w-md shadow-md"
          >
            <div className="flex items-center justify-around mb-6">
              {tabs.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveTab(label)}
                  className={`flex flex-col items-center font-bold text-lg transition ${
                    activeTab === label ? 'text-black border-b-2 border-black' : 'text-gray-400'
                    }`}
                >
                  <img src={icon} alt={label} className="h-6 w-6 mb-1" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'Buy' && (
                <motion.div
                  key="buy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white p-4 rounded shadow mb-4 relative flex justify-between">
                    <div>
                      <p className="text-sm font-semibold">Live Buy Price</p>
                      <p className="text-green-700 font-bold">
                        {goldPrice ? `₹${goldPrice.toFixed(2)} / gm` : 'Loading...'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">Purity</p>
                      <p>{purity}</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-center text-sm mb-3">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          checked={buyMode === 'rupees'}
                          onChange={() => setBuyMode('rupees')}
                        />
                        <span>Buy in rupees</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          checked={buyMode === 'grams'}
                          onChange={() => setBuyMode('grams')}
                        />
                        <span>Buy in grams</span>
                      </label>
                    </div>

                    <input
                      type="number"
                      placeholder={`Enter ${buyMode}`}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md mb-2 text-lg"
                    />
                    <p className="text-xs text-right text-gray-600 font-semibold">{getConvertedValue()}</p>

                    <button
                      onClick={() => navigate("/signup")}
                      disabled={!value}
                      className={`mt-4 w-full ${
                        !value ? 'bg-[#b98a30] cursor-not-allowed' : 'bg-[#b98a30]'
                        } text-white font-bold py-2 rounded-lg border-2`}
                    >
                      Buy Gold
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Sell' && (
                <motion.div
                  key="sell"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <img src={sellIcon} alt="Sell" className="mx-auto h-28" />
                  <p className="my-4 font-semibold text-xl">
                    Create an account to buy and sell 24k gold!
                  </p>
                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-[#b98a30] text-white font-bold py-2 px-6 rounded-full"
                  >
                    Sell Now →
                  </button>
                </motion.div>
              )}

              {activeTab === 'Jewellery' && (
                <motion.div
                  key="jewellery"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <img src={jewelleryIcon} alt="Jewellery" className="mx-auto h-28" />
                  <p className="my-4 font-semibold text-xl">
                    Explore our premium 24k gold jewellery collection.
                  </p>
                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-[#b98a30] text-white font-bold py-2 px-6 rounded-full"
                  >
                    Browse Jewellery →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>
    </div>
  );
}
