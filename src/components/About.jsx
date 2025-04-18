import React from 'react'
import AboutImg from "../assets/about.png";


const About = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center py-12 md:py-20'>
            <h1 className='text-3xl   leading-tight font-bold text-gray-800'>
           ABOUT US</h1>
            <p className='text-lg mt-2 text-gray-700  text-center max-w-4xl'>
            We are a team of passionate individuals dedicated to providing the best services to our clients. Our mission is to deliver high-quality solutions that meet the needs of our customers.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 ">
           
        
              
              <div className=" col-span-1">
                <img
                  src={AboutImg}
                  alt="Banner Visual"
                  className="w-full "
                />
              </div>
        
             
              <div className=" col-span-1 text-left">
                <h1 className="text-3xl  mb-4 leading-tight font-bold text-gray-800">
                  Elegant and creative solutions
                </h1>           
                <p className="text-lg font-medium text-gray-600 max-w-xl mx-auto md:mx-0">
                  We are a team of talented designers making websites with Bootstrap
                </p>
                <div>
                <ul className='mt-3 space-y-6'>
  <li className='flex items-start gap-3'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#7ed321" fill="none">
      <path d="M3 13.3333C3 13.3333 4.5 14 6.5 17C6.5 17 6.78485 16.5192 7.32133 15.7526M17 6C14.7085 7.14577 12.3119 9.55181 10.3879 11.8223" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13.3333C8 13.3333 9.5 14 11.5 17C11.5 17 17 8.5 22 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
  </li>

  <li className='flex items-start gap-3'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#7ed321" fill="none">
      <path d="M3 13.3333C3 13.3333 4.5 14 6.5 17C6.5 17 6.78485 16.5192 7.32133 15.7526M17 6C14.7085 7.14577 12.3119 9.55181 10.3879 11.8223" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13.3333C8 13.3333 9.5 14 11.5 17C11.5 17 17 8.5 22 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>Duis aute irure dolor in reprehenderit in voluptate velit</span>
  </li>

  <li className='flex items-start gap-3'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#7ed321" fill="none">
      <path d="M3 13.3333C3 13.3333 4.5 14 6.5 17C6.5 17 6.78485 16.5192 7.32133 15.7526M17 6C14.7085 7.14577 12.3119 9.55181 10.3879 11.8223" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13.3333C8 13.3333 9.5 14 11.5 17C11.5 17 17 8.5 22 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>
      Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
  </li>
</ul>


                    <div className='mt-4'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </div>
                </div>

               
        
                
              </div>
            </div>
    </div>
  )
}

export default About