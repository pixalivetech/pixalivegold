import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Headeralone from "../HeaderAlone";

const QUERY_OPTIONS = [
  { id: "coins", label: "Gold Coins" },
  { id: "dots", label: "Gold Dots" },
  { id: "lease", label: "Gold Lease" },
  { id: "franchise", label: "Shop Franchise Related" },
];

export default function ContactForm() {
  const form = useRef();

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
    queries: [],
  });

  const toggleQuery = (id) =>
    setData((prev) => ({
      ...prev,
      queries: prev.queries.includes(id)
        ? prev.queries.filter((q) => q !== id)
        : [...prev.queries, id],
    }));

  const handleChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the queries manually to a hidden input field
    const queryInput = document.createElement("input");
    queryInput.type = "hidden";
    queryInput.name = "queries";
    queryInput.value = data.queries.join(", ");
    form.current.appendChild(queryInput);

    emailjs
      .sendForm(
        "service_4ma14it",       // ✅ Service ID
        "template_clphclw",      // ✅ Template ID
        form.current,
        "r92jLRiMF1LN2x6f1"      // ✅ Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setData({
            name: "",
            email: "",
            mobile: "",
            address: "",
            message: "",
            queries: [],
          });
        },
        (error) => {
          alert("Failed to send message, try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <Headeralone />
      <section className="bg-[#f6f6f6] py-14 px-6 flex justify-center">
        <div className="max-w-[1220px] w-full mx-auto">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
              <div className="md:w-1/3 text-sm text-gray-700 leading-relaxed">
                <p>Get in Touch with</p>
                <p className="mt-1">Pixalive Gold</p>
                <p>Network</p>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-[22px] md:text-[36px] leading-snug">
                  We’re here to help—reach out to us for any <br />
                  queries, support, or collaboration.
                </h2>
              </div>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-10 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={handleChange}
                    className="border-b border-gray-300 focus:border-black outline-none py-2"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Mail Id</label>
                  <input
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    className="border-b border-gray-300 focus:border-black outline-none py-2"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Mobile Number</label>
                  <input
                    name="mobile"
                    type="tel"
                    value={data.mobile}
                    onChange={handleChange}
                    className="border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Address</label>
                  <input
                    name="address"
                    type="text"
                    value={data.address}
                    onChange={handleChange}
                    className="border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                </div>
              </div>

              <div>
                <p className="mb-4">Queries</p>
                <div className="flex flex-wrap gap-6">
                  {QUERY_OPTIONS.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-black border border-black"
                        checked={data.queries.includes(opt.id)}
                        onChange={() => toggleQuery(opt.id)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-2">Want to know more? Drop us a line!</label>
                <textarea
                  name="message"
                  rows={4}
                  value={data.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2 placeholder:italic"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 text-sm hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
