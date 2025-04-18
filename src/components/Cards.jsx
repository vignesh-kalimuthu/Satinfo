import React from 'react'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-2   mt-2'>
      <div
          
          style={{ backgroundColor: '#F8F8F8' }}
          className='px-6 py-10 transition duration-500 ease-in-out transform hover:-translate-y-6 hover:shadow-lg rounded-md'
        >
          <h1 className='text-xl font-bold text-start transition duration-300 ease-in-out hover:text-green-600'>
            Cost Efficient
          </h1>
          <p className='text-start text-gray-500 transition duration-300 ease-in-out hover:text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </div>
        <div
          
          style={{ backgroundColor: '#F8F8F8' }}
          className='px-6 py-10 transition duration-500 ease-in-out transform hover:-translate-y-6 hover:shadow-lg rounded-md'
        >
          <h1 className='text-xl font-bold text-start transition duration-300 ease-in-out hover:text-green-600'>
            Cost Efficient
          </h1>
          <p className='text-start text-gray-500 transition duration-300 ease-in-out hover:text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </div>
        <div
          
          style={{ backgroundColor: '#F8F8F8' }}
          className='px-6 py-10 transition duration-500 ease-in-out transform hover:-translate-y-6 hover:shadow-lg rounded-md'
        >
          <h1 className='text-xl font-bold text-start transition duration-300 ease-in-out hover:text-green-600'>
            Cost Efficient
          </h1>
          <p className='text-start text-gray-500 transition duration-300 ease-in-out hover:text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </div>
    </div>
  )
}

export default Cards