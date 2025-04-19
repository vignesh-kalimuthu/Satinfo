import React, { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleScroll = () => {
    setScroll(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Services", "Portfolio", "Team", "Dropdown", "Contact"];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-20 transition-shadow duration-500 ${scroll ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="flex justify-between items-center px-4 py-6 max-w-7xl lg:mx-[5em]">
          <div style={{color:"#10BC69"}} className="text-green-800 font-bold  text-2xl">Satinfo Name</div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-9">
            <ul className="flex space-x-9 text-gray-600">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActive(item)}
                  className={`cursor-pointer transition duration-700 ease-out hover:text-green-600 hover:border-b-2 hover:border-green-500 ${
                    active === item ? "text-green-600  border-b-2 border-green-500 pb-1" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-green-500 text-white px-6 py-2 text-sm rounded-full">
              Get Started
            </button>
          </div>

         
          <div className="flex lg:hidden items-center space-x-3">
            <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-full">
              Get Started
            </button>
            <Bars3Icon className="w-7 h-7 text-green-800" onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </nav>

     
      {isOpen && (
        <div className="fixed inset-0 bg-white z-30 flex flex-col m-6 rounded-xl shadow-xl space-y-6 text-gray-700 text-xl px-6">
          <XMarkIcon className="absolute top-4 right-6 w-8 h-8 text-gray-600 cursor-pointer" onClick={() => setIsOpen(false)} />
          <ul className="flex flex-col mt-12 space-y-8">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setIsOpen(false); 
                }}
                className={`cursor-pointer transition duration-700  ease-out hover:text-green-600 hover:border-b-2 hover:border-green-500 ${
                  active === item ? "text-green-600  border-b-2 border-green-500 pb-1" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
