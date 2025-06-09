import React from "react";
import { useNavigate } from "react-router-dom";
import jewImage from "./../../assets/jewImage.png";
import Pixalive from "./../../assets/Techlogo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-6 relative">
        {/* Pixalive Logo */}
        <div className="mb-6">
          <img src={Pixalive} alt="Pixalive Logo" className="w-10 h-10" />
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl md:text-5xl text-black mb-10 font-normal">
          Welcome back!
        </h2>

        {/* Mobile Number Input */}
        <input
          type="tel"
          placeholder="Enter mobile number"
          className="w-[260px] border border-gray-300 px-4 py-2 mb-4 focus:outline-none focus:border-black"
        />

        {/* Login Button */}
        <button className="w-[260px] bg-black text-white py-2 mb-3 hover:opacity-90 transition">
          Login
        </button>

        {/* Google Login */}
        <button className="w-[260px] border border-gray-300 flex items-center justify-center gap-2 py-2 text-sm bg-white hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

        {/* Terms */}
        <p className="text-[11px] text-gray-400 mt-6 underline cursor-pointer">
          Terms and Conditions
        </p>

        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute bottom-6 text-sm text-black underline hover:text-gray-700 transition"
        >
          ← Go back to Home
        </button>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src={jewImage}
          alt="Jewellery"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default LoginPage;
