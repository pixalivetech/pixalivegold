import React from "react";

const SecurityTrustSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-40 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Subtitle */}
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-6">
          Security & Trust
        </p>

        {/* Quotation Block */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
          <span className="text-2xl text-gray-400 font-serif">“</span>
          <span className="text-white font-medium">
            With advanced encryption and secure technologies, 🖥️🛡️{" "}
          </span>
          <span className="text-gray-400">
            Pixalive keeps your Gold Dots and digital gold safe. ⚖️{" "}
          </span>
          <span className="text-white font-medium">
            Built on trust and transparency,{" "}
          </span>
          <span className="text-gray-400">
            our network ensures you're always in control of your wealth.
          </span>
          <span className="text-2xl text-gray-400 font-serif">”</span>
        </p>
      </div>
    </section>
  );
};

export default SecurityTrustSection;