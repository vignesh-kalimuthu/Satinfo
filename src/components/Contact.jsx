import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-white">
       <div className='flex flex-col items-center justify-center py-16'>
            <h1 className='text-3xl   leading-tight font-bold text-gray-800'>
           CONTACT</h1>
            <p className='text-lg mt-2 text-gray-700  text-center max-w-4xl'>
            We are a team of passionate individuals dedicated to providing the best services to our clients. 
            </p>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:mx-[5em]">
        {/* Left - Contact Info (40%) */}
        <div className="w-full md:w-[40%] bg-white p-8 shadow-2xl rounded">
          <div className="mb-6 flex items-start gap-4">
            <FaMapMarkerAlt className="text-green-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">Address</h4>
              <p className="text-sm text-gray-600">A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-4">
            <FaPhoneAlt className="text-green-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">Call Us</h4>
              <p className="text-sm text-gray-600">+1 5589 55488 55</p>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-4">
            <FaEnvelope className="text-green-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">Email Us</h4>
              <p className="text-sm text-gray-600">info@example.com</p>
            </div>
          </div>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.881198650821!2d-74.00890268459226!3d40.71382864592607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a3bd6bb5d203264!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            className="w-full h-56 rounded"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right - Contact Form (60%) */}
        <div className="w-full md:w-[60%] bg-white p-8 shadow-2xl rounded">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
