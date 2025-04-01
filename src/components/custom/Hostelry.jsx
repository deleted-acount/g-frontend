import React, { useState, useEffect } from "react";

const Hostelry = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [showBhindLocations, setShowBhindLocations] = useState(false);
  const [showGwaliorLocations, setShowGwaliorLocations] = useState(false);
  const [showDatiaLocations, setShowDatiaLocations] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Add useEffect to control body scroll
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handleBhindClick = () => {
    setActiveFilter("Bhind");
    setShowBhindLocations(true);
    setShowGwaliorLocations(false);
    setShowDatiaLocations(false);
  };

  const handleGwaliorClick = () => {
    setActiveFilter("Gwalior");
    setShowGwaliorLocations(true);
    setShowBhindLocations(false);
    setShowDatiaLocations(false);
  };

  const handleDatiaClick = () => {
    setActiveFilter("Datia");
    setShowDatiaLocations(true);
    setShowBhindLocations(false);
    setShowGwaliorLocations(false);
  };

  const handleOtherFilters = (filter) => {
    setActiveFilter(filter);
    setShowBhindLocations(false);
    setShowGwaliorLocations(false);
    setShowDatiaLocations(false);
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
    {
      src: "/resources/ayodhya-dharmasala-1.webp",
      category: "अयोध्या"
    },
    {
      src: "/resources/ayodhya-dharmasala-2.webp",
      category: "अयोध्या"
    },
    {
      src: "/resources/ayodhya-dharmasala-3.webp",
      category: "अयोध्या"
    },
    {
      src: "/resources/ayodhya-dharmasala-4.webp",
      category: "अयोध्या"
    },
    {
      src: "/resources/satna-dharmasala-1.webp",
      category: "सतना",
    },
    {
      src: "/resources/satna-dharmasala-2.webp",
      category: "सतना",
    },
    {
      src: "/resources/satna-dharmasala-3.webp",
      category: "सतना",
    },
    {
      src: "/resources/satna-dharmasala-4.webp",
      category: "सतना",
    },

    {
      src: "/resources/bhind-mahasabha-1.webp",
      category: "महासभा",
    },
    {
      src: "/resources/bhind-mahasabha-2.webp",
      category: "महासभा",
    },
    {
      src: "/resources/bhind-mahasabha-3.webp",
      category: "महासभा",
    },
    {
      src: "/resources/bhind-mahasabha-4.webp",
      category: "महासभा",
    },

    // Bhind Gohad Images
    {
      src: "/resources/bhind-gohad-1.webp",
      category: "भिंड-गोहद"
    },
    {
      src: "/resources/bhind-gohad-2.webp",
      category: "भिंड-गोहद"
    },
    {
      src: "/resources/bhind-gohad-3.webp",
      category: "भिंड-गोहद"
    },
    {
      src: "/resources/bhind-gohad-4.webp",
      category: "भिंड-गोहद"
    },
    {
      src: "/resources/bhind-gohad-5.webp",
      category: "भिंड-गोहद"
    },
    // Bhind Dabho Images
    {
      src: "/resources/bhind-dabho-1.webp",
      category: "भिंड-दबोह"
    },
    {
      src: "/resources/bhind-dabho-2.webp",
      category: "भिंड-दबोह"
    },
    // Bhind Mihona Images
    {
      src: "/resources/bhind-mihona-1.webp",
      category: "भिंड-मिहोना"
    },
    {
      src: "/resources/bhind-mihona-2.webp",
      category: "भिंड-मिहोना"
    },
    {
      src: "/resources/bhind-mihona-3.webp",
      category: "भिंड-मिहोना"
    },
    // Bhind Lahar Images
    {
      src: "/resources/bhind-lahar-1.webp",
      category: "भिंड-लहार"
    },
    {
      src: "/resources/bhind-lahar-2.webp",
      category: "भिंड-लहार"
    },
    {
      src: "/resources/bhind-lahar-3.webp",
      category: "भिंड-लहार"
    },
    {
      src: "/resources/bhind-lahar-4.webp",
      category: "भिंड-लहार"
    },

    // Gwalior Dabra Images
    {
      src: "/resources/Gwalior-dabra-1.webp",
      category: "ग्वालियर-डबरा",
    },
    {
      src: "/resources/Gwalior-dabra-2.webp",
      category: "ग्वालियर-डबरा",
    },
    {
      src: "/resources/Gwalior-dabra-3.webp",
      category: "ग्वालियर-डबरा",
    },
    {
      src: "/resources/Gwalior-dabra-4.webp",
      category: "ग्वालियर-डबरा",
    },
    {
      src: "/resources/Gwalior-dabra-5.webp",
      category: "ग्वालियर-डबरा",
    },
    {
      src: "/resources/Gwalior-dabra-6.webp",
      category: "ग्वालियर-डबरा",
    },
    {
      src: "/resources/Gwalior-dabra-7.webp",
      category: "ग्वालियर-डबरा",
    },

    // Gwalior Lohamandi Images
    {
      src: "/resources/Gwalior-LohaMandi-1.webp",
      category: "ग्वालियर-लोहामंडी",
    },
    {
      src: "/resources/Gwalior-LohaMandi-2.webp",
      category: "ग्वालियर-लोहामंडी",
    },
    {
      src: "/resources/Gwalior-LohaMandi-3.webp",
      category: "ग्वालियर-लोहामंडी",
    },
    {
      src: "/resources/Gwalior-LohaMandi-4.webp",
      category: "ग्वालियर-लोहामंडी",
    },

    // Gwalior Hostel Images
    {
      src: "/resources/Gwalior-hostel-1.webp",
      category: "ग्वालियर-होस्टल",
    },
    {
      src: "/resources/Gwalior-hostel-2.webp",
      category: "ग्वालियर-होस्टल",
    },
    {
      src: "/resources/Gwalior-hostel-3.webp",
      category: "ग्वालियर-होस्टल",
    },
    {
      src: "/resources/Gwalior-hostel-4.webp",
      category: "ग्वालियर-होस्टल",
    },

    // Gwalior Morar Images
    {
      src: "/resources/Gwalior-morar-1.webp",
      category: "ग्वालियर-मुरार",
    },
    {
      src: "/resources/Gwalior-morar-2.webp",
      category: "ग्वालियर-मुरार",
    },
    {
      src: "/resources/Gwalior-morar-3.webp",
      category: "ग्वालियर-मुरार",
    },
    {
      src: "/resources/Gwalior-morar-4.webp",
      category: "ग्वालियर-मुरार",
    },
    {
      src: "/resources/Gwalior-morar-5.webp",
      category: "ग्वालियर-मुरार",
    },

    // Datia Main Image
    {
      src: "/resources/datia.webp",
      category: "दतिया",
    },
    // Datia Chotibadoni Images
    {
      src: "/resources/datia-chotibadoni-1.webp",
      category: "दतिया-छोटी बड़ौनी",
    },
    {
      src: "/resources/datia-chotibadoni-2.webp",
      category: "दतिया-छोटी बड़ौनी",
    },
    // Datia Indergarh Images
    {
      src: "/resources/datia-indergarh-1.webp",
      category: "दतिया-इंदरगढ़",
    },
    {
      src: "/resources/datia-indergarh-2.webp",
      category: "दतिया-इंदरगढ़",
    },
    {
      src: "/resources/datia-indergarh-3.webp",
      category: "दतिया-इंदरगढ़",
    },
    // Datia Seondha Images
    {
      src: "/resources/datia-seondha-1.webp",
      category: "दतिया-सेवंढा",
    },
    {
      src: "/resources/datia-seondha-2.webp",
      category: "दतिया-सेवंढा",
    },
    {
      src: "/resources/datia-seondha-3.webp",
      category: "दतिया-सेवंढा",
    },
    {
      src: "/resources/datia-seondha-4.webp",
      category: "दतिया-सेवंढा",
    },
  ];

  const filteredImages =
    activeFilter === "ALL"
      ? images
      : activeFilter === "Bhind"
      ? images.filter((img) => img.src.toLowerCase().includes("bhind"))
      : activeFilter === "Gwalior"
      ? images.filter((img) => img.src.toLowerCase().includes("gwalior"))
      : activeFilter === "Datia"
      ? images.filter((img) => img.src.toLowerCase().includes("datia"))
      : images.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen py-2 sm:py-4 md:py-6 relative bg-red-800">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-red-800/70"></div>
      <div className="relative max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-28 sm:mt-20 md:mt-24 border-2 border-red-200/50 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-3 sm:p-4 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-800 mb-2 sm:mb-4">
                श्री गहोई शक्ति फाउंडेशन
              </h1>
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-yellow-500/30">
                <p className="text-base sm:text-lg font-medium text-yellow-100">धर्मशाला</p>
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
                onClick={() => handleOtherFilters("Ayodhya")}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                  activeFilter === "Ayodhya"
                    ? "bg-red-700 text-white"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                अयोध्या
              </button>
              <button
                onClick={() => handleOtherFilters("Satna")}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                  activeFilter === "Satna"
                    ? "bg-red-700 text-white"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                सतना
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
              <button
                onClick={() => handleOtherFilters("Assembly")}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center text-base sm:text-lg whitespace-nowrap ${
                  activeFilter === "Assembly"
                    ? "bg-red-700 text-white"
                    : "bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                महासभा
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
            </div>
          </div>

          {/* Bhind Sub-locations */}
          {showBhindLocations && (
            <div className="p-2 sm:p-4 bg-red-50/50 border-b border-red-100">
              <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 flex-wrap gap-y-2 px-2">
                <button
                  onClick={() => setActiveFilter("Bhind-Gohad")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Bhind-Gohad"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  गोहद
                </button>
                <button
                  onClick={() => setActiveFilter("Bhind-Dabho")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Bhind-Dabho"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  दबोह
                </button>
                <button
                  onClick={() => setActiveFilter("Bhind-Mihona")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Bhind-Mihona"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  मिहोना
                </button>
                <button
                  onClick={() => setActiveFilter("Bhind-Lahar")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Bhind-Lahar"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  लहार
                </button>
              </div>
            </div>
          )}

          {/* Gwalior Sub-locations */}
          {showGwaliorLocations && (
            <div className="p-2 sm:p-4 bg-red-50/50 border-b border-red-100">
              <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 flex-wrap gap-y-2 px-2">
                <button
                  onClick={() => setActiveFilter("Gwalior-Dabra")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Gwalior-Dabra"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  डबरा
                </button>
                <button
                  onClick={() => setActiveFilter("Gwalior-Lohamandi")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Gwalior-Lohamandi"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  लोहामंडी
                </button>
                <button
                  onClick={() => setActiveFilter("Gwalior-Hostel")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Gwalior-Hostel"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  होस्टल
                </button>
                <button
                  onClick={() => setActiveFilter("Gwalior-Morar")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Gwalior-Morar"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  मुरार
                </button>
              </div>
            </div>
          )}

          {/* Datia Sub-locations */}
          {showDatiaLocations && (
            <div className="p-2 sm:p-4 bg-red-50/50 border-b border-red-100">
              <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 flex-wrap gap-y-2 px-2">
                <button
                  onClick={() => setActiveFilter("Datia-Chotibadoni")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Datia-Chotibadoni"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  छोटी बड़ौनी
                </button>
                <button
                  onClick={() => setActiveFilter("Datia-Indergarh")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Datia-Indergarh"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  इंदरगढ़
                </button>
                <button
                  onClick={() => setActiveFilter("Datia-Seondha")}
                  className={`px-6 py-2.5 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 transform-origin-center whitespace-nowrap ${
                    activeFilter === "Datia-Seondha"
                      ? "bg-red-700 text-white"
                      : "text-red-700 hover:bg-red-50"
                  }`}
                >
                  सेवंढा
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
                alt={filteredImages[selectedImage].title || ""}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hostelry;