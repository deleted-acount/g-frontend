import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Temple = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const locations = {
    gwalior: {
      name: "ग्वालियर",
      temples: [
        {
          name: "ग्वालियर मंदिर",
          images: [
            "/resources/gwalior-temple-1.webp",
            "/resources/gwalior-temple-2.webp",
            "/resources/gwalior-temple-3.webp",
            "/resources/gwalior-temple-4.webp",
            "/resources/gwalior-temple-5.webp",
            "/resources/gwalior-temple-6.webp",
          ],
        },
      ],
    },
    datia: {
      name: "दतिया",
      temples: [
        {
          name: "सेंवढ़ा मंदिर",
          images: [
            "/resources/datia-Seondha-temple-1.webp",
            "/resources/datia-Seondha-temple-2.webp",
            "/resources/datia-Seondha-temple-3.webp",
          ],
        },
        {
          name: "उनाव बलाजी मंदिर",
          images: [
            "/resources/datia-Unao-temple-1.webp",
            "/resources/datia-Unao-temple-2.webp",
            "/resources/datia-Unao-temple-3.webp",
          ],
        },
      ],
    },
  };

  const getCurrentImages = () => {
    if (selectedTemple) {
      return selectedTemple.images;
    }
    if (selectedLocation === "all") {
      return Object.values(locations)
        .flatMap((loc) => loc.temples)
        .flatMap((temple) => temple.images);
    }
    return locations[selectedLocation].temples.flatMap(
      (temple) => temple.images
    );
  };

  const handlePrevious = () => {
    setSelectedImage((prev) =>
      prev === 0 ? getCurrentImages().length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === getCurrentImages().length - 1 ? 0 : prev + 1
    );
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div
      className="min-h-screen py-2 sm:py-4 md:py-6 relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#1e293b",
      }}
    >
      <Helmet>
        <title>Temple - Gahoi Shakti</title>
        <meta
          name="description"
          content="Explore our temples across different locations. View images and information about our sacred places of worship."
        />
        <meta
          name="keywords"
          content="Gahoi Temples, Temple Images, Religious Places, Sacred Temples, Temple Trust"
        />
      </Helmet>

      <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-800/80"></div>
      <div className="relative w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-red-200/50 mx-4 mt-28 sm:mt-20 md:mt-24">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-3 sm:p-4 text-center border-b border-red-200 mb-3 sm:mb-4 md:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-yellow-500/30">
                <p className="text-lg sm:text-xl font-medium text-yellow-100">
                  मंदिर
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Location Selection */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    setSelectedLocation("all");
                    setSelectedTemple(null);
                  }}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedLocation === "all"
                      ? "bg-red-800 text-yellow-100 shadow-lg"
                      : "bg-white/80 text-red-800 hover:bg-red-50"
                  }`}
                >
                  सभी
                </button>
                {Object.entries(locations).map(([key, location]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedLocation(key);
                      setSelectedTemple(null);
                    }}
                    className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedLocation === key
                        ? "bg-red-800 text-yellow-100 shadow-lg"
                        : "bg-white/80 text-red-800 hover:bg-red-50"
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Temple Selection for Datia */}
            {selectedLocation === "datia" && (
              <div className="mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                  {locations.datia.temples.map((temple, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTemple(temple)}
                      className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedTemple?.name === temple.name
                          ? "bg-red-800 text-yellow-100 shadow-lg"
                          : "bg-white/80 text-red-800 hover:bg-red-50"
                      }`}
                    >
                      {temple.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedTemple
                ? selectedTemple.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${selectedTemple.name} - Image ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-lg font-medium">
                            {selectedTemple.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))
                : selectedLocation === "all"
                ? Object.entries(locations).map(([locKey, location]) =>
                    location.temples.map((temple, templeIndex) =>
                      temple.images.map((image, imageIndex) => (
                        <div
                          key={`${locKey}-${templeIndex}-${imageIndex}`}
                          className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                          onClick={() => setSelectedImage(imageIndex)}
                        >
                          <img
                            src={image}
                            alt={`${temple.name} - Image ${imageIndex + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white">
                              <h3 className="text-lg font-medium">
                                {temple.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  )
                : locations[selectedLocation].temples.map(
                    (temple, templeIndex) =>
                      temple.images.map((image, imageIndex) => (
                        <div
                          key={`${templeIndex}-${imageIndex}`}
                          className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                          onClick={() => setSelectedImage(imageIndex)}
                        >
                          <img
                            src={image}
                            alt={`${temple.name} - Image ${imageIndex + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white">
                              <h3 className="text-lg font-medium">
                                {temple.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))
                  )}
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
                src={getCurrentImages()[selectedImage]}
                alt="Selected Temple"
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

export default Temple;
