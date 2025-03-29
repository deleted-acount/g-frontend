import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <div className="flex items-center mb-4">
              <img 
                src="/ring.png" 
                alt="Wedding Rings Icon" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
              About Gahoi Samaj India
            </h2>
            <p className="text-gray-600 mb-6">
              Gahoi Samaj India, religious studies and spirituality for creating a refined society for everyone. we believe in contributing most towards building a peaceful and enlightened society. We work towards building an evil-free society and discard untouchability, superstitions and orthodox beliefs creating an environment of broad-mindedness and acceptance. With all these principles, Gahoi Samaj India Marriage in Gwalior is acceptable for all religion and communities. For the two souls to unite for a lifetime, Gahoi Samaj India Marriage offers a platform to begin their sacred journey.
            </p>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors font-semibold border border-red-600 shadow-lg hover:shadow-red-900/30 text-sm lg:text-base">
              Read More
            </button>
          </div>

          {/* Right Images */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[400px]">
           
              <div className="absolute top-0 left-0 w-3/4 h-3/4 transform rotate-[-5deg] shadow-xl rounded-lg overflow-hidden z-10">
                <img 
                  src="/about-02.webp" 
                  alt="Wedding Hands " 
                  className="w-full h-full object-cover object-[0%_80%]"
                />
              </div>
              
            
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 transform rotate-[5deg] shadow-xl rounded-lg overflow-hidden z-20">
                <img 
                  src="/about-01.webp" 
                  alt="Bride Portrait" 
                  className="w-full h-full object-cover object-[50%_10%]"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-100 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center mt-12">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
            <div className="w-16 h-1 bg-red-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-red-50 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-red-50 rounded-full transform translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default AboutSection; 