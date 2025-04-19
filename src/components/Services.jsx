import React from 'react'
import { FaHeartbeat, FaBroadcastTower, FaChalkboardTeacher } from 'react-icons/fa';

const servicesCategory = [
    {
      icon: <FaHeartbeat className="text-green-500 text-4xl mx-auto mb-4" />,
      title: 'Nesciunt Mete',
      description:
        'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
    },
    {
      icon: <FaBroadcastTower className="text-green-500 text-4xl mx-auto mb-4" />,
      title: 'Eosle Commodi',
      description:
        'Ut autem aut autem non a. Sint sit sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
    },
    {
      icon: <FaChalkboardTeacher className="text-green-500 text-4xl mx-auto mb-4" />,
      title: 'Ledo Markt',
      description:
        'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
    },
    {
        icon: <FaBroadcastTower className="text-green-500 text-4xl mx-auto mb-4" />,
        title: 'Eosle Commodi',
        description:
          'Ut autem aut autem non a. Sint sit sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
      },
      {
        icon: <FaChalkboardTeacher className="text-green-500 text-4xl mx-auto mb-4" />,
        title: 'Ledo Markt',
        description:
          'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
      },
      {
        icon: <FaBroadcastTower className="text-green-500 text-4xl mx-auto mb-4" />,
        title: 'Eosle Commodi',
        description:
          'Ut autem aut autem non a. Sint sit sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
      },
      
  ];

const Services = () => {
  return (
    <div className='bg-gray-100 w-full mt-8 pb-10'><div className='flex flex-col items-center justify-center py-12 md:py-20'>
    <h1 className='text-3xl   leading-tight font-bold text-gray-800'>
   SERVICES</h1>
    <p className='text-lg mt-2 text-gray-700  text-center max-w-4xl'>
    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3  lg:mx-[5em]  gap-6 ">
      {servicesCategory.map((service, index) => (
        <div
          key={index}
          className=" border bg-white border-gray-200 rounded-lg p-6 text-center transition-all duration-300 hover:border-green-500 shadow-sm hover:shadow-md"
        >
          {service.icon}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-500">{service.description}</p>
        </div>
      ))}
    </div>

</div>
  )
}

export default Services


