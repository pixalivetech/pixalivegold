import React from 'react';
import blog1 from "./../../assets/Blogs/blog-1.png";
import blog2 from "./../../assets/Blogs/blog-2.png";
import blog3 from "./../../assets/Blogs/blog-3.png";

const blogs = [
  {
    title: "The Future of Wealth: Digital Gold with Pixalive",
    description: "The Pixalive Gold Network revolutionizes gold-backed investments—secure trading, gold tokens, gold chit plans, jewelry purchases, and more.",
    image: blog1,
    tag: "Finance",
    author: "Somnath",
    date: "21 Apr 2025",
  },
  {
    title: "Empowering Communities Through Gold: Pixalive Franchises",
    description: "At Pixalive Gold Network, we believe in creating a gold-centric ecosystem that helps communities become self-reliant, empowering them through franchise ownership.",
    image: blog2,
    tag: "Gold Investing",
    author: "Somnath",
    date: "21 Apr 2025",
  },
  {
    title: "A Partnership Built on Trust: Pixalive and MMTC-PAMP",
    description: "The Pixalive Gold Network is proud to partner with MMTC-PAMP, the most trusted name in gold purity and security. This collaboration redefines value assurance.",
    image: blog3,
    tag: "Marketing",
    author: "Somnath",
    date: "21 Apr 2025",
  },
];

const Blogs = () => {
  return (
    <section className="bg-[#140113] text-white py-16 px-6 md:px-20">
      <p className="text-center text-sm text-gray-400 mb-2">Blogs</p>
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Our century of <span className="text-[#B98A30]">knowledge</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-[#120016] rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 right-2 bg-white text-xs text-black font-semibold px-2 py-1 rounded">
                {blog.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-base mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{blog.description}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span className="mr-2">👤 {blog.author}</span>•<span className="ml-2">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
      <button
  className="px-6 py-2 border border-white rounded-full  bg-[#b98a30] hover:bg-white hover:text-black transition"
  onClick={() => window.location.href = '/blog'}
>
  View all blogs
</button>

      </div>
    </section>
  );
};

export default Blogs;
