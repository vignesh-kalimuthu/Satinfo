import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
          Join Our <span className="text-gray-900">Newsletter</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and receive the latest news about our products and services!
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-6 py-3 shadow-xl bg-white rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
