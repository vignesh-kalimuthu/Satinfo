import React, { useEffect, useState } from 'react';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; 
    const increment = Math.ceil(end / (duration / 50));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className='text-center'>
      <h1 className='text-4xl text-green-500 font-semibold text-center'>
        {count.toLocaleString()}
      </h1>
      <p className='text-gray-400'>{label}</p>
    </div>
  );
};

const ProjectCounts = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4  mt-10 mb-8 '>
      <Counter end={1000} label="Clients" />
      <Counter end={3000} label="Projects" />
      <Counter end={10000} label="Hours Of Support" />
      <Counter end={200} label="Workers" />
    </div>
  );
};

export default ProjectCounts;
