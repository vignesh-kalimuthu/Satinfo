import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'Sara Wilsson',
    role: 'Designer',
    text: `Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.`,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Jena Karlis',
    role: 'Store Owner',
    text: `Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.`,
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
  },
  {
    name: 'Matt Brandon',
    role: 'Freelancer',
    text: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.`,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const TestimonialCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: dots => (
          <div className="mt-4">
            <ul className="flex justify-center gap-2">{dots}</ul>
          </div>
        ),
        customPaging: i => (
          <div className="custom-dot w-3 h-3 rounded-full border border-green-500 bg-white hover:bg-green-500 transition-all duration-300"></div>
        ),
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
          },
        ],
      };
      
      

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center bg-white">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Testimonials</h2>
        <p className="text-gray-500">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
        </p>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 py-8 pb-12 relative">
            <div className="bg-gray-50 p-6 rounded-lg shadow h-full flex flex-col justify-between">
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="flex flex-col items-center mt-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-white bg-white shadow-md"
                />
                <h4 className="font-semibold mt-2">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
