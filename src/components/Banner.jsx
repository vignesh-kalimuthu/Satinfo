import React from 'react';
import bannerImg from "../assets/hero-img.png";

const Banner = () => {
  const floatKeyframes = {
    '0%, 100%': {
      transform: 'translateY(0px)',
      animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    '50%': {
      transform: 'translateY(-20px)',
      animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
  };

  const floatKeyframesString = Object.keys(floatKeyframes)
    .map(key => `${key} { ${Object.entries(floatKeyframes[key]).map(([prop, value]) => `${prop}: ${value};`).join(' ')} }`)
    .join('\n');

  const floatAnimation = 'float 4s ease-in-out infinite';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-12 md:py-20">
      <style>
        {`
          @keyframes float {
            ${floatKeyframesString}
          }

          .animate-float-custom {
            animation: ${floatAnimation};
          }
        `}
      </style>

      {/* Image comes first on small screens */}
      <div className="order-1 md:order-2 col-span-1">
        <img
          src={bannerImg}
          alt="Banner Visual"
          className="w-full animate-float-custom"
        />
      </div>

      {/* Text content comes second on small screens */}
      <div className="order-2 md:order-1 col-span-1 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight font-bold text-gray-800">
          Elegant and creative solutions
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-600 max-w-xl mx-auto md:mx-0">
          We are a team of talented designers making websites with Bootstrap
        </p>

        <div className="mt-8 flex flex-row items-center  justify-start gap-6">
          <button className="bg-green-500 text-white text-md px-8 py-3 rounded-full">
            Get Started
          </button>

          <div className="flex items-center space-x-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" color="#11BD6A" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
            <span className="text-gray-700 font-semibold text-lg">Watch Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
