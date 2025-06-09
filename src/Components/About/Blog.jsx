import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import promoImage from "./../../assets/Blogs/blogpage.png";
import blogThumb1 from "./../../assets/Blogs/B1.png";
import blogThumb2 from "./../../assets/Blogs/B2.png";

const blogs = [
  {
    id: 1,
    title: "The Future of Wealth: Digital Gold with Pixalive",
    description:
      "The Pixalive Gold Network revolutionizes gold ownership with services like digital gold investment, gold loans, jewelry purchases, and more.",
    image: promoImage,
    tag: "Finance",
    author: "Somanaath",
    date: "21 Apr 2025",
  },
  {
    id: 2,
    title: "Empowering Communities Through Gold: Pixalive Franchises",
    description:
      "At Pixalive Gold Network, we believe in creating a gold-centric ecosystem that not only benefits individuals but also empowers local communities.",
    tag: "Gold Investing",
    author: "Mohan",
    date: "28 Apr 2025",
    image: blogThumb1,
  },
  {
    id: 3,
    title: "A Partnership Built on Trust: Pixalive and MMTC-PAMP",
    description:
      "The Pixalive Gold Network is proud to partner with MMTC-PAMP, one of the most trusted names in the gold industry.",
    image: blogThumb2,
    tag: "Marketing",
    author: "Saravanan",
    date: "02 May 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#f6f6f6]  py-14 px-6  flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          {/* Blog Section title on the left */}
          <div className="md:w-1/4">
            <p className="text-sm text-gray-500 mb-2">
              Pixalive Gold Network<br/> Blog
            </p>
          </div>
          {/* Main heading and "View all blogs" link on the right */}
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug mb-4">
              Pixalive Gold Network blogs share insights on digital gold,
              investment tips, and secure wealth-building through blockchain
            </h2>
            <a
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 font-medium hover:underline"
            >
              View all blogs <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <a href="/blogpage" key={blog.id} className="group cursor-pointer block h-full">
              <div className="bg-white  overflow-hidden h-full flex flex-col"> {/* Added h-full and flex flex-col */}
                {/* Image Section */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-white text-xs text-black font-medium px-2 py-1 rounded">
                    {blog.tag}
                  </span>
                </div>

                {/* Content Section (Title & Description) */}
                <div className="p-4 flex-grow"> {/* Apply consistent padding to this section */}
                  <h3 className="text-base font-semibold text-gray-900 leading-snug mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3"> {/* Removed mb-3 here */}
                    {blog.description}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="px-4 pb-4 flex items-center justify-between text-xs text-gray-500 mt-auto"> {/* Removed pt-0, consistent px-4 pb-4 */}
                  <span>
                    👤 {blog.author} · {blog.date}
                  </span>
                  <span className="inline-flex items-center">
                    Read More <ArrowUpRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}