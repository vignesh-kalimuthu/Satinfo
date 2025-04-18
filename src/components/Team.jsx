import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from 'react-icons/fa';
import Team1 from '../assets/team-1.jpg';
import Team2 from '../assets/team-2.jpg';
import Team3 from '../assets/team-3.jpg';

const teamMembers = [
  {
    name: 'Walter White',
    title: 'Chief Executive Officer',
    image: Team1,
  },
  {
    name: 'Sarah Jhonson',
    title: 'Product Manager',
    image: Team2,
  },
  {
    name: 'William Anderson',
    title: 'CTO',
    image: Team3,
  },
];

const Team = () => {
  return (
    <div className="py-16 px-4 bg-white">
    <div className='flex flex-col items-center justify-center py-18'>
            <h1 className='text-3xl   leading-tight font-bold text-gray-800'>
           TEAM</h1>
            <p className='text-lg mt-2 text-gray-700  text-center max-w-4xl'>
            We are a team of passionate individuals dedicated to providing the best services to our clients. 
            </p>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-[5em]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative shadow-lg rounded-md  group"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[400px] object-cover rounded"
            />

         {/* Bottom Card - Positioned Above Image */}
<div className="absolute -bottom-10 left-5 right-5 bg-white px-5 py-4 rounded shadow-md z-10 flex flex-col items-start">
  <div>
    <h4 className="text-gray-800 font-semibold text-[17px]">{member.name}</h4>
  </div>

  
  <div className="w-1/2 h-[1px] bg-gray-300 my-2"></div>

 
  <div className="flex items-center justify-between w-full mt-2">
    <p className="text-gray-500 text-sm">{member.title}</p>
    <div className="flex gap-3 text-gray-400 text-[14px]">
      <FaTimes className="hover:text-gray-600 cursor-pointer" />
      <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
      <FaInstagram className="hover:text-pink-500 cursor-pointer" />
      <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
    </div>
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
