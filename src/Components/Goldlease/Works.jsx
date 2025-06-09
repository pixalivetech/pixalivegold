// import React from "react";
// import icon1 from "./../../assets/Goldlease/work1.png";
// import icon2 from "./../../assets/Goldlease/work2.png";
// import icon3 from "./../../assets/Goldlease/work3.png";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: icon1,<br/>
//       title: "Deposit Your Gold",
//       text: "Deposit your gold with Pixalive Gold Lease, and they’ll safely store it with a bank guarantee.",
//     },
//     {
//       icon: icon2,<br/>
//       title: "Earn Consistent Returns",
//       text: "Earn regular payments and enjoy extra returns as gold prices rise during the lease period.",
//     },
//     {
//       icon: icon3,<br/>
//       title: "Redeem or Renew",
//       text: "At lease end, you can either reclaim your gold or renew the lease based on your strategy.",
//     },
//   ];

//   return (
//     <section className="bg-[#F9F9F9] py-20 px-2 md:px-10 lg:px-24">
//       <div className="max-w-4x3 mx-auto">
//         {/* Section title */}
//         <p className="text-sm text-gray-500 font-medium mb-12">How It Work’s</p>

//         {/* Steps */}
//         <div className="grid grid-cols-1 md:grid-cols-3">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className={`flex flex-col gap-4 px-6 py-12 text-center md:text-left ${
//                 index !==-1 ? "border-l border-gray-500" : ""
//               }`}
//             >
//               <img
//                 src={step.icon}
//                 alt={step.title}
//                 className="w-10 h-10 object-contain mx-auto md:mx-0"
//               />
//               <h3 className="text-lg font-semibold text-black">
//                 {step.title}
//               </h3>
//               <p className="text-sm text-gray-600">{step.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
import React from "react";
import icon1 from "./../../assets/Goldlease/work1.png";
import icon2 from "./../../assets/Goldlease/work2.png";
import icon3 from "./../../assets/Goldlease/work3.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: icon1,
      title: "Deposit Your Gold",
      text: "Deposit your gold with Pixalive Gold Lease, and they’ll safely store it with a bank guarantee.",
    },
    {
      icon: icon2,
      title: "Earn Consistent Returns",
      text: "Earn regular payments and enjoy extra returns as gold prices rise during the lease period.",
    },
    {
      icon: icon3,
      title: "Redeem or Renew",
      text: "At lease end, you can either reclaim your gold or renew the lease based on your strategy.",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section title */}
        <p className="text-sm text-gray-500 font-medium mb-12">How It Work’s</p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 px-6 py-2 text-center md:text-left ${
                index !== -1 ? "border-l border-gray-300" : ""
              }`}
            >
              <div>
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10 object-contain mx-auto md:mx-0"
                />
                <br />
                <br />
              </div>
              <h3 className="text-lg font-semibold text-black">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
