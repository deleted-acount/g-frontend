import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bannerImages = [
    '/Banner-1.webp',
    '/Banner-2.webp',
    '/Banner-3.webp',
    '/Banner-4.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
      {/* Mobile Banner Image (768px and below) */}
      <div 
        className="md:hidden absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ 
          backgroundImage: `url("/banner-mobile.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Desktop Carousel (above 768px) */}
      <div 
        className="hidden md:block absolute inset-0 bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `url("${bannerImages[currentImageIndex]}")`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
          objectFit: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Carousel Dots - Only show on desktop */}
      <div className="hidden md:flex absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 flex-col space-y-2 sm:space-y-3 md:space-y-4">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col justify-center items-center h-full">
          {/* <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Welcome to <br />
              <span className="text-yellow-100">श्री गहोई शक्ति फाउंडेशन</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-lg px-4">
              Connecting and empowering our community through tradition, culture, and mutual support. Join us in preserving our rich heritage and building a stronger future together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 px-4">
              <Link
                to="/registration"
                className="w-full sm:w-auto bg-red-700 backdrop-blur-sm text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-red-800 transition-all duration-300 inline-block border border-white/50 text-center text-sm sm:text-base"
              >
                Register Now
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-block border border-white/50 text-center text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 