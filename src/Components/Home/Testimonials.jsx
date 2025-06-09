import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BsHeadset, BsShieldCheck } from "react-icons/bs";
import PriyaImg from "./../../assets/About/avatar2.png"; // Update with actual path

const testimonials = [
  {
    text: "A seamless and secure way to invest in gold! I’ve always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.",
    name: "Priya R",
    location: "Chennai",
    rating: 4,
    badge: {
      icon: <BsShieldCheck className="w-4 h-4 text-green-600" />,
      text: "100% Safe and Secure",
      position: "bottom",
    },
  },
  {
    text: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
    name: "Karan P",
    location: "Mumbai",
    rating: 4,
    badge: null,
    centerText: true,
  },
  {
    text: "A seamless and secure way to invest in gold! I’ve always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy.",
    name: "Anjali S",
    location: "Bangalore",
    rating: 4,
    badge: {
      icon: <BsHeadset className="w-4 h-4 text-blue-600" />,
      text: "24/7 Support",
      position: "top",
    },
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const length = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 3000);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [length]);

  const getVisibleIndexes = () => {
    if (windowWidth < 768) return [activeIndex];
    const prev = (activeIndex - 1 + length) % length;
    const next = (activeIndex + 1) % length;
    return [prev, activeIndex, next];
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-6 py-16 max-w-[1280px] mx-auto font-[Lufga]">
      {/* Top Headings */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-14">
        <h3 className="text-sm md:text-sm text-[#4B4B4B] font-lufga md:w-1/4 ">
          Loved by the People <br />
          Who Work Here
        </h3>
        <p className="mt-4 lg:mt-0 text-[23px] md:text-[30px] lg:text-[35px] leading-[32px] md:leading-[56px] text-black font-lufga md:w-3/4">
          Joining Pixalive Gold Network has been a game-changer for my business. The support,
          visibility, and growth opportunities I received are unmatched.
        </p>
      </div>

        {/* Slider Cards */}
        <div
          className={`flex justify-center items-stretch gap-8 overflow-hidden ${
            windowWidth < 768 ? "flex-col" : "flex-row"
          }`}
        >
          {getVisibleIndexes().map((index) => {
            const item = testimonials[index];
            const isCenter = index === activeIndex;

          return (
            <div
              key={index}
              className="flex flex-col gap-3 w-full max-w-xs md:max-w-sm lg:max-w-md"
            >
              {/* Badge Top */}
              {item.badge?.position === "top" && (
                <div
                  className={`px-4 py-5 flex items-center gap-2 shadow-sm w-full mb-4  ${
                    isCenter ? "bg-black text-white" : "bg-white text-gray-800"
                  }`}
                >
                  <div
                    className={`p-1.5  shadow ${
                      isCenter ? "bg-gray-900" : "bg-white"
                    }`}
                  >
                    {item.badge.icon}
                  </div>
                  <span className="text-sm lg:text-[16px] font-medium">{item.badge.text}</span>
                </div>
              )}

              {/* Main Card */}
              <div
                className={`shadow-md p-6 h-full flex flex-col justify-between  transition-transform duration-700 ease-in-out ${
                  isCenter ? "bg-black text-white scale-110 z-10" : "bg-white text-gray-800"
                } ${item.centerText ? "text-center" : ""}`}
                style={{ minHeight: "300px" }}
              >
                <div className={`${item.centerText ? "flex-grow flex items-center justify-center" : ""}`}>
                  <p
                    className={`text-base lg:text-md leading-relaxed  ${
                      isCenter ? "text-white" : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t pt-4 border-gray-300">
                  <div className="flex items-center gap-3">
                    <img
                      src={PriyaImg}
                      alt={item.name}
                      className={`w-9 h-9 lg:w-12 lg:h-12  rounded-full object-cover ${
                        isCenter ? "ring-2 ring-white" : ""
                      }`}
                    />
                    <div>
                      <p
                        className={`text-sm sm:text-md lg:text-md font-semibold ${
                          isCenter ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {item.name}
                      </p>
                      <p
                        className={`text-xs sm:text-sm lg:text-md ${
                          isCenter ? "text-gray-300" : "text-[#7A7A7A]"
                        }`}
                      >
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-1 text-base md:text-md lg:text-md ${
                      isCenter ? "text-white" : "text-black"
                    }`}
                  >
                    {item.rating}{" "}
                    <FaStar
                      className={`w-4 h-4 ${isCenter ? "text-yellow-400" : "text-yellow-500"}`}
                    />
                  </div>
                </div>
              </div>

              {/* Badge Bottom */}
              {item.badge?.position === "bottom" && (
                <div
                  className={`px-4 py-5 flex items-center gap-2 shadow-sm w-full mt-4  ${
                    isCenter ? "bg-black text-white" : "bg-white text-gray-800"
                  }`}
                >
                  <div
                    className={`p-1.5  shadow ${
                      isCenter ? "bg-gray-900" : "bg-white"
                    }`}
                  >
                    {item.badge.icon}
                  </div>
                  <span className={`text-sm lg:text-[16px] font-medium ${isCenter ? "text-white" : ""}`}>
                    {item.badge.text}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
