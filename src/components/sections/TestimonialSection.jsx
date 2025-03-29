import React, { useState } from 'react';
import StripeLine from '../custom/StripeLine';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ajay",
      image: "/groom-1.webp",
      text: "Marrying my soulmate was a dream come true. Every moment of our wedding felt like a beautiful chapter in our love story."
    },
    {
      id: 2,
      name: "Ramesh",
      image: "groom-2.webp",
      text: "From the vows to the celebrations, every detail was perfect. A day to cherish for a lifetime, with my love by my side."
    },
    {
      id: 3,
      name: "Sanjeev",
      image: "/groom-3.webp",
      text: "Our journey began with smiles, laughter, and promises. This wedding was not just an event but the start of our forever."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mb-16">
      
      <section className="py-16 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            {/* Ring image above title */}
            <div className="relative inline-block mb-6">
              <img 
                src="/ring.png" 
                alt="Wedding Ring" 
                className="w-18 h-18 mx-auto animate-pulse"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full filter blur-md -z-10"></div>
            </div>
            
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
                What Is Says Our GROOMS
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="max-w-xl w-full">
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden mb-8 border-4 border-red-200 hover:border-red-300 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed text-lg max-w-2xl">
                  {testimonials[currentIndex].text}
                </p>

                {/* Interactive dots for carousel */}
                <div className="flex justify-center mt-10 space-x-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        currentIndex === index 
                          ? 'bg-gradient-to-r from-red-600 to-red-700 scale-125 shadow-md' 
                          : 'bg-red-200 hover:bg-red-300 hover:scale-110'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StripeLine />
    </div>
  );
};

export default TestimonialSection;

