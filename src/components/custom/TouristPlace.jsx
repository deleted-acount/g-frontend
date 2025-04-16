import React, { useState, useEffect } from "react";

const TouristPlace = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [showGwaliorLocations, setShowGwaliorLocations] = useState(false);
  const [showDatiaLocations, setShowDatiaLocations] = useState(false);
  const [showBhindLocations, setShowBhindLocations] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  
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

  const handleGwaliorClick = () => {
    setActiveFilter("Gwalior");
    setShowGwaliorLocations(true);
    setShowDatiaLocations(false);
    setShowBhindLocations(false);
  };

  const handleDatiaClick = () => {
    setActiveFilter("Datia");
    setShowDatiaLocations(true);
    setShowGwaliorLocations(false);
    setShowBhindLocations(false);
  };

  const handleBhindClick = () => {
    setActiveFilter("Bhind");
    setShowBhindLocations(true);
    setShowGwaliorLocations(false);
    setShowDatiaLocations(false);
  };

  const handleOtherFilters = (filter) => {
    setActiveFilter(filter);
    setShowGwaliorLocations(false);
    setShowDatiaLocations(false);
    setShowBhindLocations(false);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const images = [
    // Gwalior Sheetlamata Images
    {
      src: "/resources/touristplace-sheetlamata-gwalior-1.webp",
      category: "शीतलामाता"
    },
    {
      src: "/resources/touristplace-sheetlamata-gwalior-2.webp",
      category: "शीतलामाता"
    },
    {
      src: "/resources/touristplace-sheetlamata-gwalior-3.webp",
      category: "शीतलामाता"
    },
    {
      src: "/resources/touristplace-sheetlamata-gwalior-4.webp",
      category: "शीतलामाता"
    },
    {
      src: "/resources/touristplace-sheetlamata-gwalior-5.webp",
      category: "शीतलामाता"
    },
    {
      src: "/resources/touristplace-sheetlamata-gwalior-6.webp",
      category: "शीतलामाता"
    },

    // Gwalior Behat Images
    {
      src: "/resources/touristplace-behat-gwalior-1.webp",
      category: "बेहट"
    },
    {
      src: "/resources/touristplace-behat-gwalior-2.webp",
      category: "बेहट"
    },
    {
      src: "/resources/touristplace-behat-gwalior-3.webp",
      category: "बेहट"
    },

    // Gwalior Dabra Images
    {
      src: "/resources/touristplace-dabra-gwalior-1.webp",
      category: "डबरा"
    },
    {
      src: "/resources/touristplace-dabra-gwalior-2.webp",
      category: "डबरा"
    },
    {
      src: "/resources/touristplace-dabra-gwalior-3.webp",
      category: "डबरा"
    },
    {
      src: "/resources/touristplace-dabra-gwalior-4.webp",
      category: "डबरा"
    },

    // Datia Seondha Images
    {
      src: "/resources/touristplace-Seondha-datia-1.webp",
      category: "सेवंढा"
    },
    {
      src: "/resources/touristplace-Seondha-datia-2.webp",
      category: "सेवंढा"
    },
    {
      src: "/resources/touristplace-Seondha-datia-3.webp",
      category: "सेवंढा"
    },
    {
      src: "/resources/touristplace-Seondha-datia-4.webp",
      category: "सेवंढा"
    },
    {
      src: "/resources/touristplace-Seondha-datia-5.webp",
      category: "सेवंढा"
    },
    {
      src: "/resources/touristplace-Seondha-datia-6.webp",
      category: "सेवंढा"
    },
    {
      src: "/resources/touristplace-Seondha-datia-7.webp",
      category: "सेवंढा"
    },
    {
      src: "/resources/touristplace-Seondha-datia-8.webp",
      category: "सेवंढा"
    },

    // Datia Unnao Images
    {
      src: "/resources/touristplace-unnao-datia-1.webp",
      category: "उन्नाव"
    },
    {
      src: "/resources/touristplace-unnao-datia-2.webp",
      category: "उन्नाव"
    },
    {
      src: "/resources/touristplace-unnao-datia-3.webp",
      category: "उन्नाव"
    },
    {
      src: "/resources/touristplace-unnao-datia-4.webp",
      category: "उन्नाव"
    },
    {
      src: "/resources/touristplace-unnao-datia-7.webp",
      category: "उन्नाव"
    },
    {
      src: "/resources/touristplace-unnao-datia-8.webp",
      category: "उन्नाव"
    },

    // Bhind Mihona Images
    {
      src: "/resources/touristplace-mihona-bhind-1.webp",
      category: "मिहोना"
    },
    {
      src: "/resources/touristplace-mihona-bhind-2.webp",
      category: "मिहोना"
    },
    {
      src: "/resources/touristplace-mihona-bhind-3.webp",
      category: "मिहोना"
    },
    {
      src: "/resources/touristplace-mihona-bhind-4.webp",
      category: "मिहोना"
    },
  ];

  const filteredImages =
    activeFilter === "ALL"
      ? images
      : activeFilter === "Gwalior"
      ? images.filter((img) => img.src.toLowerCase().includes("gwalior"))
      : activeFilter === "Datia"
      ? images.filter((img) => img.src.toLowerCase().includes("datia"))
      : activeFilter === "Bhind"
      ? images.filter((img) => img.src.toLowerCase().includes("bhind"))
      : images.filter((img) => img.category === activeFilter);

  return (
    <div 
      className="min-h-screen py-2 sm:py-4 md:py-6 relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#991b1b',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-800/80"></div>
      <div className="relative max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-28 sm:mt-20 md:mt-24 border-2 border-red-200/50 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-3 sm:p-4 text-center border-b border-red-200 mb-3 sm:mb-4 md:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
             
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-yellow-500/30">
                <p className="text-base sm:text-lg font-medium text-yellow-100">पर्यटन स्थल</p>
              </div>
            </div>
          </div>

          {/* Main Filter Buttons */}
          <div className="p-2 sm:p-4 border-b border-red-100">
            <div className="flex flex-wrap gap-2 sm:flex-row sm:justify-center sm:space-x-4 sm:overflow-x-auto pb-2 py-4 px-2">
              <button
                onClick={() => handleOtherFilters("ALL")}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                  activeFilter === "ALL"
                    ? "bg-red-700 text-white"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                सभी
              </button>
              <button
                onClick={handleGwaliorClick}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                  activeFilter === "Gwalior"
                    ? "bg-red-700 text-white"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                ग्वालियर
              </button>
              <button
                onClick={handleDatiaClick}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                  activeFilter === "Datia"
                    ? "bg-red-700 text-white"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                दतिया
              </button>
              <button
                onClick={handleBhindClick}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                  activeFilter === "Bhind"
                    ? "bg-red-700 text-white"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                भिंड
              </button>
            </div>
          </div>

          {/* Gwalior Sub-locations */}
          {showGwaliorLocations && (
            <div className="p-2 sm:p-4 bg-red-50/50 border-b border-red-100">
              <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 flex-wrap gap-y-2 px-2">
                <button
                  onClick={() => setActiveFilter("शीतलामाता")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "शीतलामाता"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  शीतलामाता
                </button>
                <button
                  onClick={() => setActiveFilter("बेहट")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "बेहट"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  बेहट
                </button>
                <button
                  onClick={() => setActiveFilter("डबरा")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "डबरा"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  डबरा
                </button>
              </div>
            </div>
          )}

          {/* Datia Sub-locations */}
          {showDatiaLocations && (
            <div className="p-2 sm:p-4 bg-red-50/50 border-b border-red-100">
              <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 flex-wrap gap-y-2 px-2">
                <button
                  onClick={() => setActiveFilter("सेवंढा")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "सेवंढा"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  सेवंढा
                </button>
                <button
                  onClick={() => setActiveFilter("उन्नाव")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "उन्नाव"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  उन्नाव
                </button>
              </div>
            </div>
          )}

          {/* Bhind Sub-locations */}
          {showBhindLocations && (
            <div className="p-2 sm:p-4 bg-red-50/50 border-b border-red-100">
              <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 flex-wrap gap-y-2 px-2">
                <button
                  onClick={() => setActiveFilter("मिहोना")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "मिहोना"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  मिहोना
                </button>
              </div>
            </div>
          )}

          {/* Image Grid */}
          <div className="p-2 sm:p-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image.src}
                    alt={image.category || ""}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-medium">{image.category}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].category || ""}
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

export default TouristPlace;