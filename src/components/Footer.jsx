import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mx-[3em]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Satinfo</h2>
            <p>A108 Adam Street<br />New York, NY 535022</p>
            <p className="mt-2">
              <span className="font-semibold text-gray-800">Phone:</span> +1 5589 55488 55
            </p>
            <p>
              <span className="font-semibold text-gray-800">Email:</span> info@example.com
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">› Home</a></li>
              <li><a href="#" className="hover:text-green-500">› About us</a></li>
              <li><a href="#" className="hover:text-green-500">› Services</a></li>
              <li><a href="#" className="hover:text-green-500">› Terms of service</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">› Web Design</a></li>
              <li><a href="#" className="hover:text-green-500">› Web Development</a></li>
              <li><a href="#" className="hover:text-green-500">› Product Management</a></li>
              <li><a href="#" className="hover:text-green-500">› Marketing</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">Follow Us</h3>
            <p className="mb-4">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center border rounded-full text-gray-800 hover:text-white hover:bg-gray-800 transition"><FaXTwitter /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border rounded-full text-gray-800 hover:text-white hover:bg-blue-600 transition"><FaFacebookF /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border rounded-full text-gray-800 hover:text-white hover:bg-pink-500 transition"><FaInstagram /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border rounded-full text-gray-800 hover:text-white hover:bg-blue-800 transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-200 pt-10 pb-[6em]">
          <p>© Copyright <strong className="text-gray-800">Satinfo</strong>. All Rights Reserved</p>
          <p>
            Designed by <a href="#" className="text-blue-600 hover:underline">Tailwind CSS Made</a>
            {" "}Distributed by <a href="#" className="text-green-600 hover:underline">Satinfo</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
