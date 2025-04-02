import React, { useState, useEffect } from "react";
import { FaImages, FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const CentralAssembly = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvent]);

  const events = [
    {
      id: 1,
      title: "अखिल भारतीय गहोई वैश्य सभा की चतुर्थ कार्यकारिणी बैठक की झलकियाँ",
      date: "2012",
      location: "छत्तीसगढ़",
      images: [
        "/Gallery/gahoi-4thmeeting-1.webp",
        "/Gallery/gahoi-4thmeeting-2.webp",
        "/Gallery/gahoi-4thmeeting-3.webp",
        "/Gallery/gahoi-4thmeeting-4.webp",
        "/Gallery/gahoi-4thmeeting-5.webp",
        "/Gallery/gahoi-4thmeeting-6.webp",
        "/Gallery/gahoi-4thmeeting-7.webp",
        "/Gallery/gahoi-4thmeeting-8.webp",
        "/Gallery/gahoi-4thmeeting-9.webp"
      ],
      description: "चतुर्थ कार्यकारिणी बैठक में महत्वपूर्ण निर्णय लिए गए"
    },
    {
      id: 2,
      title: "अयोध्या धाम में नव निर्मित धर्मशाला का लोकार्पण ,महासभा कार्यकारिणी बैठक एवं श्रीमद भागवत कथा",
      date: "2012",
      location: "अयोध्या",
      images: [
        "/Gallery/gahoi-ayodhyadham-1.webp",
        "/Gallery/gahoi-ayodhyadham-2.webp",
        "/Gallery/gahoi-ayodhyadham-3.webp",
        "/Gallery/gahoi-ayodhyadham-4.webp",
        "/Gallery/gahoi-ayodhyadham-5.webp",
        "/Gallery/gahoi-ayodhyadham-6.webp",
        "/Gallery/gahoi-ayodhyadham-7.webp",
        "/Gallery/gahoi-ayodhyadham-8.webp",
        "/Gallery/gahoi-ayodhyadham-9.webp",
        "/Gallery/gahoi-ayodhyadham-10.webp",
        "/Gallery/gahoi-ayodhyadham-11.webp",
        "/Gallery/gahoi-ayodhyadham-12.webp",
        "/Gallery/gahoi-ayodhyadham-13.webp",
        "/Gallery/gahoi-ayodhyadham-14.webp",
        "/Gallery/gahoi-ayodhyadham-15.webp",
        "/Gallery/gahoi-ayodhyadham-16.webp",
        "/Gallery/gahoi-ayodhyadham-17.webp",
        "/Gallery/gahoi-ayodhyadham-18.webp",
        "/Gallery/gahoi-ayodhyadham-19.webp",
        "/Gallery/gahoi-ayodhyadham-20.webp",
        "/Gallery/gahoi-ayodhyadham-21.webp",
        "/Gallery/gahoi-ayodhyadham-22.webp"
      ],
      description: "23 मार्च 2012 से प्रारंभ श्री मद भागवत कथा की शोभा यात्रा ,आयोजक श्री द्वारिका प्रसाद जमुना प्रसाद नीखरा अहमदाबाद (गुजरात) 23 मार्च 2012 को नव निर्मित धर्मशाला का लोकार्पण राम जन्मभूमि के अध्यक्ष महंत श्री नृत्य गोपाल दास जी महाराज के कर कमलो द्वारा 24 मार्च 2012 को अखिल भारतीय गहोई वैश्य महासभा की तृतीय कार्य कारिणी बैठक कार्यक्रमों की झलकियाँ"
    },
   
    {
      id: 3,
      title: "अखिल भारतीय गहोई वैश्य महासभा की द्वितीय कार्य कारिणी बैठक की झलकियाँ",
      date: "2012",
      location: "चित्रकूट",
      images: [
        "/Gallery/gahoi-2ndmeeting-1.webp",
        "/Gallery/gahoi-2ndmeeting-2.webp",
        "/Gallery/gahoi-2ndmeeting-3.webp",
        "/Gallery/gahoi-2ndmeeting-4.webp",
        "/Gallery/gahoi-2ndmeeting-5.webp",
        "/Gallery/gahoi-2ndmeeting-6.webp",
        "/Gallery/gahoi-2ndmeeting-7.webp",
        "/Gallery/gahoi-2ndmeeting-8.webp",
        "/Gallery/gahoi-2ndmeeting-9.webp",
        "/Gallery/gahoi-2ndmeeting-10.webp"
      ],
      description: "द्वितीय कार्यकारिणी बैठक में महत्वपूर्ण चर्चाएं"
    },
    {
      id: 4,
      title: "अखिल भारतीय गहोई वैश्य महासभा की प्रथम कार्य कारिणी बैठक की झलकियाँ",
      date: "2011",
      location: "भोपाल",
      images: [
        "/Gallery/gahoi-1stmeeting-1.webp",
        "/Gallery/gahoi-1stmeeting-2.webp",
        "/Gallery/gahoi-1stmeeting-3.webp",
        "/Gallery/gahoi-1stmeeting-4.webp",
        "/Gallery/gahoi-1stmeeting-5.webp",
        "/Gallery/gahoi-1stmeeting-6.webp",
        "/Gallery/gahoi-1stmeeting-7.webp",
        "/Gallery/gahoi-1stmeeting-8.webp",
        "/Gallery/gahoi-1stmeeting-9.webp",
        "/Gallery/gahoi-1stmeeting-10.webp"
      ],
      description: "प्रथम कार्यकारिणी बैठक में महत्वपूर्ण निर्णय लिए गए"
    },
    {
      id: 5,
      title: "अखिल भारतीय गहोई वैश्य महासभा की नवीन कार्यकारिणी का शपथ ग्रहण कार्यक्रम की झलकियां।",
      date: "2011",
      location: "दतिया (म.प्र.)",
      images: [
        "/Gallery/gahoi-oath-1.webp",
        "/Gallery/gahoi-oath-2.webp",
        "/Gallery/gahoi-oath-3.webp",
        "/Gallery/gahoi-oath-4.webp",
        "/Gallery/gahoi-oath-5.webp",
        "/Gallery/gahoi-oath-6.webp",
        "/Gallery/gahoi-oath-7.webp",
        "/Gallery/gahoi-oath-8.webp",
        "/Gallery/gahoi-oath-9.webp",
        "/Gallery/gahoi-oath-10.webp",
        "/Gallery/gahoi-oath-11.webp",
        "/Gallery/gahoi-oath-12.webp",
        "/Gallery/gahoi-oath-13.webp",
        "/Gallery/gahoi-oath-14.webp",
        "/Gallery/gahoi-oath-15.webp",
        "/Gallery/gahoi-oath-16.webp",
        "/Gallery/gahoi-oath-17.webp",
        "/Gallery/gahoi-oath-18.webp",
        "/Gallery/gahoi-oath-19.webp",
        "/Gallery/gahoi-oath-20.webp",
        "/Gallery/gahoi-oath-21.webp",
        "/Gallery/gahoi-oath-22.webp"
      ],
      description: "12 जून 2011 रविवार ,स्थान -गहोई वाटिका ,दतिया (म.प्र.)"
    },
    {
      id: 6,
      title: "अखिल भारतीय गहोई वैश्य महासभा अधिवेशन १६-१७ अप्रैल २०११",
      date: "2011",
      location: "सेक्टर ३३ नॉएडा (दिल्ली)",
      images: [
        "/Gallery/gahoi-noida-1.webp",
        "/Gallery/gahoi-noida-2.webp",
        "/Gallery/gahoi-noida-3.webp",
        "/Gallery/gahoi-noida-4.webp",
        "/Gallery/gahoi-noida-5.webp",
        "/Gallery/gahoi-noida-6.webp",
        "/Gallery/gahoi-noida-7.webp",
        "/Gallery/gahoi-noida-8.webp",
        "/Gallery/gahoi-noida-9.webp",
        "/Gallery/gahoi-noida-10.webp",
        "/Gallery/gahoi-noida-11.webp",
        "/Gallery/gahoi-noida-12.webp",
        "/Gallery/gahoi-noida-13.webp",
        "/Gallery/gahoi-noida-14.webp",
        "/Gallery/gahoi-noida-15.webp",
        "/Gallery/gahoi-noida-16.webp",
        "/Gallery/gahoi-noida-17.webp",
        "/Gallery/gahoi-noida-19.webp",
        "/Gallery/gahoi-noida-20.webp",
        "/Gallery/gahoi-noida-21.webp",
        "/Gallery/gahoi-noida-22.webp",
        "/Gallery/gahoi-noida-23.webp",
        "/Gallery/gahoi-noida-24.webp",
        "/Gallery/gahoi-noida-25.webp",
        "/Gallery/gahoi-noida-26.webp",
        "/Gallery/gahoi-noida-27.webp",
        "/Gallery/gahoi-noida-28.webp",
        "/Gallery/gahoi-noida-29.webp",
        "/Gallery/gahoi-noida-30.webp",
        "/Gallery/gahoi-noida-31.webp",
        "/Gallery/gahoi-noida-32.webp",
        "/Gallery/gahoi-noida-33.webp",
        "/Gallery/gahoi-noida-34.webp",
        "/Gallery/gahoi-noida-35.webp",
        "/Gallery/gahoi-noida-36.webp"
      ],
      description: "महासभा का वार्षिक अधिवेशन"
    }
  ];

  const handleImageClick = (event, index) => {
    setSelectedEvent(event);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    if (selectedEvent && currentImageIndex < selectedEvent.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrevImage = () => {
    if (selectedEvent && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
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
              <p className="text-xl sm:text-2xl font-medium text-white">पुरानी महासभा</p>
            </div>
          </div>
        </div>

        {/* Events and Images */}
        <div className="space-y-12">
          {events.map((event) => (
            <div key={event.id} className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50">
              {/* Event Header */}
              <div className="p-4 sm:p-6 border-b border-red-200">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-800 mb-2">{event.title}</h2>
                <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-2">
                  <div className="flex items-center text-xs sm:text-sm">
                    <FaCalendarAlt className="mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">{event.description}</p>
              </div>

              {/* Images Grid */}
              <div className="p-3 sm:p-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {event.images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => handleImageClick(event, index)}
                      className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${event.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedEvent && (
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
                src={selectedEvent.images[currentImageIndex]}
                alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CentralAssembly; 