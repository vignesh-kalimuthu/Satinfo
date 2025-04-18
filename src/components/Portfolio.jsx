import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  // Web Apps
  {
    id: 1,
    name: "Cloud Manager",
    description: "Manage all cloud infrastructure from a single dashboard.",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
  },
  {
    id: 6,
    name: "Remote Admin",
    description: "Control systems remotely via mobile device.",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
  },
   {
    id: 12,
    name: "Ad Analyzer",
    description: "AI-powered ad analytics dashboard.",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },

  

  // Mobile Apps
  
 
  {
    id: 10,
    name: "SEO Audit Tool",
    description: "Optimize your IT service sites for search engines.",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  
  {
    id: 2,
    name: "Client Portal",
    description: "Secure platform for client interaction and file exchange.",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
  },
 

  // AI Tools
  {
    id: 7,
    name: "AI Chat Support",
    description: "24/7 virtual IT helpdesk assistant.",
    category: "AI Tools",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
  },

  {
    id: 3,
    name: "IT Inventory",
    description: "Track and manage IT hardware and licenses.",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
  },
  
  {
    id: 9,
    name: "Smart Insights",
    description: "Auto-generate IT analytics reports.",
    category: "AI Tools",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
  },
  {
    id: 4,
    name: "Mobile ERP",
    description: "Manage business operations from your mobile.",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  },
 

  // Digital Marketing
  
  {
    id: 11,
    name: "Email Campaign Tracker",
    description: "Track performance of email outreach.",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
  },
  {
    id: 5,
    name: "Tech Support App",
    description: "Instant IT help and knowledge base access.",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
  },
  
  {
    id: 8,
    name: "Log Analyzer",
    description: "Detect issues in real time using AI models.",
    category: "AI Tools",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
];

const categories = ["All", "Web Apps", "Mobile Apps", "AI Tools", "Digital Marketing"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto lg:mx-[5em]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">PRODUCTS</h2>
        <p className="text-sm text-gray-500 mt-2">Explore our IT solutions and digital tools.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-10 ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 border rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-green-500 text-white border-green-500"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-black/40 transition duration-300 flex items-end p-4">
  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-white/80 backdrop-blur-md rounded-md px-4 py-3 w-full">
    <h3 className="text-md text-gray-800 font-semibold">{product.name}</h3>
    <p className="text-sm mt-1 text-gray-500">{product.description}</p>
  </div>
</div>

        

            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
