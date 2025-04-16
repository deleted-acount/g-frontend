import React, { useState, useEffect } from "react";
import { FaImages } from "react-icons/fa";

const CommunalMarriage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const images = Array.from({ length: 90 }, (_, i) => `/Gallery/vivaah-highlights-${i + 1}.webp`);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
      setSelectedImage(images[currentImageIndex + 1]);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
      setSelectedImage(images[currentImageIndex - 1]);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  return (
    <div 
      className="min-h-screen py-4 sm:py-4 md:py-6 relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#991b1b',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-800/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-20 md:mt-24">
        {/* Header */}
        <div className="text-center py-3 sm:py-3 md:py-4 mb-3 sm:mb-3 md:mb-4">
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-6 sm:p-8">
            <div className="inline-block bg-red-800 rounded-full px-8 py-3 shadow-lg">
              <p className="text-xl sm:text-2xl font-medium text-white">सामूहिक विवाह</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-800 mb-6 sm:mb-8 text-center">
            प्रथम बार - चम्बल क्षेत्रीय गहोई वैश्य सभा द्वारा सामूहिक विवाह महायज्ञ
          </h2>
          
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-700 mb-8 sm:mb-12 text-center border-b border-red-200 pb-3 sm:pb-4">
            स्थान -ग्वालियर व्यापार मेला ,ग्वालियर 11 मई 2011
          </h3>

          <div className="space-y-2 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="font-semibold text-red-800 text-lg sm:text-xl">रमेश बाबू गन्धी</span>
                <span className="text-gray-700">अध्यक्ष - चम्बल क्षेत्रीय गहोई वैश्य सभा</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="font-semibold text-red-800 text-lg sm:text-xl">विनोद खांगट (एड.)</span>
                <span className="text-gray-700">मंत्री - चम्बल क्षेत्रीय गहोई वैश्य सभा</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="font-semibold text-red-800 text-lg sm:text-xl">ओमप्रकाश सेठ (दाऊ)</span>
                <span className="text-gray-700">संयोजक -सामूहिक विवाह महायज्ञ</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="font-semibold text-red-800 text-lg sm:text-xl">राजीव बरसैयाँ (जग्गू)</span>
                <span className="text-gray-700">उप संयोजक -सामूहिक विवाह महायज्ञ</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="font-semibold text-red-800 text-lg sm:text-xl">राकेश खरया</span>
                <span className="text-gray-700">कोषाध्यक्ष -सामूहिक विवाह महायज्ञ</span>
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div className="w-32 h-0.5 bg-red-800 mx-auto mt-6 sm:mt-8"></div>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-8 sm:mt-12 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block bg-red-800 rounded-full px-6 sm:px-8 py-2 sm:py-3 shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                सामूहिक विवाह की झलकियाँ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Marriage Ceremony Highlight ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-center text-white">
                      <FaImages className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-[10000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 z-[10000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 z-[10000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="max-w-[90vw] max-h-[90vh] relative z-[9999]">
              <img
                src={selectedImage}
                alt={`Marriage Ceremony Highlight ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunalMarriage; 