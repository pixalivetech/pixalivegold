import React, { useState } from 'react';
import office from './../../assets/Service/office.png';
import office1 from './../../assets/Service/office1.png';
import office2 from './../../assets/Service/office2.png';
import office3 from './../../assets/Service/office3.png';

const accordionData = [
  {
    title: 'Authenticity and Quality',
    content:
      'All digital gold investments on the Pixalive platform are backed by MMTC-PAMP 24K, 999.9 pure gold, ensuring the highest standards of quality and authenticity.',
    image: office,
  },
  {
    title: 'Secure Storage',
    content:
      'MMTC-PAMP provides bank-grade vault storage for all digital gold, guaranteeing safety and peace of mind for users.',
    image: office1,
  },
  {
    title: 'Seamless Transactions',
    content:
      'Users can buy, sell, and redeem their digital gold with ease, supported by MMTC-PAMP infrastructure for physical gold delivery.',
    image: office2,
  },
  {
    title: 'Accessibility',
    content:
      'The collaboration makes gold investment simple and accessible, integrating secure gold transactions into Pixalive diverse services.',
    image: office3,
  },
];

const Authentication = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto bg-white border-[10px] border-white shadow-lg grid md:grid-cols-2 overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-full max-h-[600px]">
          <img
            src={accordionData[activeIndex].image}
            alt={`Illustration for ${accordionData[activeIndex].title}`}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Accordion Section */}
        <div className="p-8 md:p-10 space-y-6">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveIndex(index);
              }}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-content-${index}`}
              id={`accordion-header-${index}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[26px] font-bold text-black">{`0${index + 1}`}</p>
                  <h4 className="text-base font-semibold text-black mt-1">{item.title}</h4>
                </div>
                <div className="text-2xl text-gray-500 select-none">
                  {activeIndex === index ? '−' : '+'}
                </div>
              </div>

              {activeIndex === index && (
                <p
                  className="mt-3 text-sm text-gray-600 leading-relaxed pr-2 transition-all duration-300"
                  id={`accordion-content-${index}`}
                >
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authentication;
