import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-[#1abc66] py-16 text-center px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Call To Action</h2>
        <p className="text-white text-lg mb-8">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="border-2 border-white text-white px-8 py-2 rounded-full text-lg hover:bg-white hover:text-[#1abc66] transition-all duration-300">
          Call To Action
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
