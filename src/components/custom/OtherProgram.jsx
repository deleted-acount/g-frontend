import React, { useState, useEffect } from "react";

const OtherProgram = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handlePrevious = () => {
    setSelectedImage((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleLocationClick = (locationName) => {
    setActiveFilter(locationName);
    setSelectedImage(null); 
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  
  const images = [
    {
      src: "/resources/alampur-program-1.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 1"
    },
    {
      src: "/resources/alampur-program-2.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 2"
    },
    {
      src: "/resources/alampur-program-3.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 3"
    },
    {
      src: "/resources/alampur-program-5.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 5"
    },
    {
      src: "/resources/alampur-program-6.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 6"
    },
    {
      src: "/resources/alampur-program-7.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 7"
    },
    {
      src: "/resources/alampur-program-8.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 8"
    },
    {
      src: "/resources/alampur-program-9.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 9"
    },
    {
      src: "/resources/alampur-program-10.webp",
      category: "आलमपुर",
      alt: "आलमपुर कार्यक्रम 10"
    },
    // Badoni program images
    {
      src: "/resources/badoni-program-1.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 1"
    },
    {
      src: "/resources/badoni-program-2.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 2"
    },
    {
      src: "/resources/badoni-program-3.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 3"
    },
    {
      src: "/resources/badoni-program-4.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 4"
    },
    {
      src: "/resources/badoni-program-5.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 5"
    },
    {
      src: "/resources/badoni-program-6.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 6"
    },
    {
      src: "/resources/badoni-program-7.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 7"
    },
    {
      src: "/resources/badoni-program-8.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 8"
    },
    {
      src: "/resources/badoni-program-9.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 9"
    },
    {
      src: "/resources/badoni-program-10.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 10"
    },
    {
      src: "/resources/badoni-program-11.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 11"
    },
    {
      src: "/resources/badoni-program-12.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 12"
    },
    {
      src: "/resources/badoni-program-13.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 13"
    },
    {
      src: "/resources/badoni-program-14.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 14"
    },
    {
      src: "/resources/badoni-program-15.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 15"
    },
    {
      src: "/resources/badoni-program-16.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 16"
    },
    {
      src: "/resources/badoni-program-17.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 17"
    },
    {
      src: "/resources/badoni-program-18.webp",
      category: "बड़ोनी",
      alt: "बड़ोनी कार्यक्रम 18"
    }
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === "ALL" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Add error state for images
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (src) => {
    setImageErrors(prev => ({
      ...prev,
      [src]: true
    }));
  };

  const locations = [
    { name: "आलमपुर", date: "8-05-2014" },
    { name: "बड़ोनी", date: "10-03-2014" },
    { name: "भगुरामपुरा", date: "8-03-2014" },
    { name: "भाण्डेर", date: "9-03-2014" },
    { name: "भिन्ड", date: "7-03-2014" },
    { name: "दबोह", date: "8-03-2014" },
    { name: "डबरा", date: "10-03-2014" },
    { name: "दतिया", date: "9-03-2014 एवं 10-03-2014" },
    { name: "गोहद", date: "07-03-2014" },
    { name: "गोहद चौराहा", date: "7-03-2014" },
    { name: "ग्वालियर", date: "7-03-2014" },
    { name: "इन्दरगढ", date: "9-03-2014" },
    { name: "लहार", date: "8-03-2014" },
    { name: "मालनपुर", date: "7-03-2014" },
    { name: "मिहोना", date: "7-03-2014" },
    { name: "रोन, सालोन :बी", date: "9-03-2014" },
    { name: "सेवढ़ा", date: "8-03-2014" },
    { name: "थरेट", date: "9-03-2014" },
    { name: "उडिना", date: "9-03-2014" },
    { name: "उनाव बालाजी", date: "9-03-2014" },
  ];

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
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-20 md:mt-24">
        {/* Header */}
        <div className="text-center py-3 sm:py-3 md:py-4 mb-3 sm:mb-3 md:mb-4">
         
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6">
            <div className="inline-block bg-red-800 rounded-full px-6 sm:px-8 py-2 sm:py-2.5 shadow-lg">
              <p className="text-lg sm:text-xl font-medium text-white">अन्य कार्यक्रम</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-6 text-center">
            शताब्दी उत्सव चल समारोह कार्यक्रम की झलकियां 7 मार्च से 10 मार्च तक
          </h2>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              अखिल भारतीय गहोई वैश्य महासभा स्थापना के 100 वें वर्ष पर चम्बल क्षेत्रीय गहोई वैश्य सभा द्वारा "शताब्दी उत्सव चल समारोह" मनाया गया । यह उत्सव 7 मार्च से 10 मार्च 2014 तक चम्बल क्षेत्र की समस्त पंचायतों में रथ यात्रा के रूप में जाकर मनाया गया । चम्बल क्षेत्रीय सभा ने प्रत्येक पंचायत में जाकर वहाँ के 85 वर्ष से ऊपर समस्त वरिष्ठ जनों का सम्मान कर आशीर्वाद प्राप्त किया । साथ ही पूर्व एवं वर्तमान पार्षद ,पंच,सरपंच,बैंक डायरेक्टर ,मंडी सदस्य आदि का भी सम्मान किया । 10 मार्च 2014 को समापन कार्यक्रम डबरा में महासभा पदाधिकारियों , सम्पूर्ण चम्बल कार्यकारिणी , चम्बल क्षेत्र की समस्त पंचायतों , एवं यात्रा में 4 दिन साथ चलने वाले समाज सेवी महिला एवं पुरुषों का भी सम्मान किया । इस तरह कुल मिलाकर करीब 450 ब्यक्तियों को सम्मानित किया गया ।
            </p>

            <p className="text-gray-700 leading-relaxed">
              "शताब्दी उत्सव चल समारोह" की यात्रा जिस भी पंचायत में पहुंच कर रेली के रूप में निकली तो रास्ते में समाज बंधुओं के साथ - साथ अन्य समाज के लोंगो के द्वारा भी पुष्प माला एवं स्वल्पाहार से स्वागत किया गया । प्रत्येक पंचायत ने यात्रा के स्वागत के लिए पलक पावड़े विचा रखे थे । उनकी व्यवस्था एवं स्वागत चिरस्मरणीय रहेगा । चम्बल क्षेत्रीय गहोई वैश्य सभा इस स्वागत एवं सम्मान के लिए सदा उनकी आभारी रहेगी ।
            </p>
          </div>

          {/* Location Buttons */}
          <div className="mt-6 sm:mt-8">
            <div className="flex flex-wrap gap-2 sm:flex-row sm:justify-center sm:space-x-4 sm:overflow-x-auto pb-2 py-4 px-2">
              <button
                onClick={() => handleLocationClick("ALL")}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                  activeFilter === "ALL"
                    ? "bg-red-700 text-white"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                सभी
              </button>
              {locations.map((location, index) => (
                <button
                  key={index}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                    activeFilter === location.name
                      ? "bg-red-700 text-white"
                      : "bg-red-50 text-red-700 hover:bg-red-100"
                  }`}
                  onClick={() => handleLocationClick(location.name)}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleImageClick(index)}
              >
                {!imageErrors[image.src] && (
                  <img
                    src={image.src}
                    alt={image.alt || `${image.category} image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    onError={() => handleImageError(image.src)}
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative line */}
          <div className="w-24 h-0.5 bg-red-800 mx-auto mt-4 sm:mt-6"></div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-50"
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
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 z-50"
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
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 z-50"
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
            <div className="max-w-[90vw] max-h-[90vh] relative">
              <img
                src={images[selectedImage]?.src}
                alt={images[selectedImage]?.alt || ""}
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

export default OtherProgram; 