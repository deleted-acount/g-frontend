import React, { useState, useEffect } from "react";
import { FaImages, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const RegionalAssembly = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      title: "चम्बल क्षेत्रीय गहोई वैश्य सभा की चतुर्थ कार्यकारिणी बैठक",
      date: "2012",
      location: "ग्राम-बेहट, जिला ग्वालियर",
      images: [
      "/Gallery/chambal-meeting-1.webp",
"/Gallery/chambal-meeting-2.webp",
"/Gallery/chambal-meeting-3.webp",
"/Gallery/chambal-meeting-4.webp",
"/Gallery/chambal-meeting-5.webp",
"/Gallery/chambal-meeting-6.webp",
"/Gallery/chambal-meeting-7.webp",
"/Gallery/chambal-meeting-8.webp",
"/Gallery/chambal-meeting-9.webp",
"/Gallery/chambal-meeting-10.webp",
"/Gallery/chambal-meeting-11.webp",
"/Gallery/chambal-meeting-12.webp",
"/Gallery/chambal-meeting-13.webp",
"/Gallery/chambal-meeting-14.webp",
"/Gallery/chambal-meeting-15.webp",
"/Gallery/chambal-meeting-16.webp",
"/Gallery/chambal-meeting-17.webp",
"/Gallery/chambal-meeting-18.webp",
"/Gallery/chambal-meeting-19.webp",
"/Gallery/chambal-meeting-20.webp",
"/Gallery/chambal-meeting-21.webp",
"/Gallery/chambal-meeting-22.webp",
"/Gallery/chambal-meeting-23.webp",
"/Gallery/chambal-meeting-24.webp",
"/Gallery/chambal-meeting-25.webp",
"/Gallery/chambal-meeting-26.webp",
"/Gallery/chambal-meeting-27.webp",
"/Gallery/chambal-meeting-28.webp",
"/Gallery/chambal-meeting-29.webp",
"/Gallery/chambal-meeting-30.webp"
      ],
      description: "23 सितम्बर 2012 रविवार को संगीत सम्राट तानसेन की जन्म स्थली ग्राम -बेहट, जिला ग्वालियर में आयोजित की गई। कार्यक्रम में नवीन पदाधिकारियों को शपथ दिलाई गई एवं प्रमाण-पत्र प्रदान किये गए। उपस्थिति बंधुओं ने दाल-बाटी का आनन्द प्राप्त किया।"
    },
    {
      id: 2,
      title: "चम्बल क्षेत्रीय गहोई वैश्य सभा की द्वितीय कार्यकारिणी बैठक एवं सामूहिक विवाह सम्मान समारोह",
      date: "2011",
      location: "श्रीराम पैलेश, ग्वालियर",
      images: [
        "/Gallery/chambal-samuhik-vivah-1.webp",
        "/Gallery/chambal-samuhik-vivah-2.webp",
        "/Gallery/chambal-samuhik-vivah-3.webp",
        "/Gallery/chambal-samuhik-vivah-4.webp",
        "/Gallery/chambal-samuhik-vivah-5.webp",
        "/Gallery/chambal-samuhik-vivah-6.webp",
        "/Gallery/chambal-samuhik-vivah-7.webp",
        "/Gallery/chambal-samuhik-vivah-8.webp",
        "/Gallery/chambal-samuhik-vivah-9.webp",
        "/Gallery/chambal-samuhik-vivah-10.webp",
        "/Gallery/chambal-samuhik-vivah-11.webp",
        "/Gallery/chambal-samuhik-vivah-12.webp",
        "/Gallery/chambal-samuhik-vivah-13.webp",
        "/Gallery/chambal-samuhik-vivah-14.webp",
        "/Gallery/chambal-samuhik-vivah-15.webp",
        "/Gallery/chambal-samuhik-vivah-16.webp",
        "/Gallery/chambal-samuhik-vivah-17.webp",
        "/Gallery/chambal-samuhik-vivah-18.webp",
        "/Gallery/chambal-samuhik-vivah-19.webp",
        "/Gallery/chambal-samuhik-vivah-20.webp",
        "/Gallery/chambal-samuhik-vivah-21.webp",
        "/Gallery/chambal-samuhik-vivah-22.webp",
        "/Gallery/chambal-samuhik-vivah-23.webp",
        "/Gallery/chambal-samuhik-vivah-24.webp",
        "/Gallery/chambal-samuhik-vivah-25.webp",
        "/Gallery/chambal-samuhik-vivah-26.webp",
        "/Gallery/chambal-samuhik-vivah-27.webp",
        "/Gallery/chambal-samuhik-vivah-28.webp",
        "/Gallery/chambal-samuhik-vivah-29.webp",
        "/Gallery/chambal-samuhik-vivah-30.webp",
        "/Gallery/chambal-samuhik-vivah-31.webp",
        "/Gallery/chambal-samuhik-vivah-32.webp",
        "/Gallery/chambal-samuhik-vivah-33.webp",
        "/Gallery/chambal-samuhik-vivah-34.webp",
        "/Gallery/chambal-samuhik-vivah-35.webp",
        "/Gallery/chambal-samuhik-vivah-36.webp",
        "/Gallery/chambal-samuhik-vivah-37.webp",
        "/Gallery/chambal-samuhik-vivah-38.webp",
        "/Gallery/chambal-samuhik-vivah-39.webp",
        "/Gallery/chambal-samuhik-vivah-40.webp",
        "/Gallery/chambal-samuhik-vivah-41.webp"
      ],
      description: "29 मई 2011 श्रीराम पैलेश, ग्वालियर"
    },
    {
      id: 3,
      title: "चम्बल क्षेत्रीय गहोई वैश्य सभा के 16 वें स्थापना दिवस कार्यक्रम की झलकियाँ",
      date: "2012",
      location: "रामलला मंदिर धर्मशाला डबरा",
      images: [
        "/Gallery/chambal-program-1.webp",
        "/Gallery/chambal-program-2.webp",
        "/Gallery/chambal-program-3.webp",
        "/Gallery/chambal-program-4.webp",
        "/Gallery/chambal-program-5.webp",
        "/Gallery/chambal-program-6.webp",
        "/Gallery/chambal-program-7.webp",
        "/Gallery/chambal-program-8.webp",
        "/Gallery/chambal-program-9.webp",
        "/Gallery/chambal-program-10.webp",
        "/Gallery/chambal-program-11.webp",
        "/Gallery/chambal-program-12.webp",
      ],
      description: "20 अप्रेल 2012 को रामलला मंदिर धर्मशाला डबरा में नवयुवक मण्डल डबरा के सोजन्य से पहली बार स्थापना दिवस मनाया गया ! चम्बल की प्रथम कार्यकारिणी के पदाधिकारियों एवं आयोजकों का सम्मान चम्बल क्षेत्रीय सभा द्वारा किया गया !"
    },
    {
      id: 4,
      title: "चम्बल क्षेत्रीय गहोई वैश्य सभा की तृतीय कार्यकारिणी बैठक",
      date: "2012",
      location: "श्री रामलला गहोई वैश्य ट्रष्ट धर्मशाला, गोमती पुरा, डबरा",
      images: [
       "/Gallery/chambal-3rdprogram-01.webp",  
"/Gallery/chambal-3rdprogram-02.webp",  
"/Gallery/chambal-3rdprogram-03.webp",  
"/Gallery/chambal-3rdprogram-04.webp",  
"/Gallery/chambal-3rdprogram-05.webp",  
"/Gallery/chambal-3rdprogram-06.webp",  
"/Gallery/chambal-3rdprogram-07.webp",  
"/Gallery/chambal-3rdprogram-08.webp",  
"/Gallery/chambal-3rdprogram-09.webp",  
"/Gallery/chambal-3rdprogram-10.webp",  
"/Gallery/chambal-3rdprogram-11.webp",  
"/Gallery/chambal-3rdprogram-12.webp",  
"/Gallery/chambal-3rdprogram-13.webp",  
"/Gallery/chambal-3rdprogram-14.webp",  
"/Gallery/chambal-3rdprogram-15.webp",  
"/Gallery/chambal-3rdprogram-16.webp",  
"/Gallery/chambal-3rdprogram-17.webp",  
"/Gallery/chambal-3rdprogram-18.webp",  
"/Gallery/chambal-3rdprogram-19.webp",  
"/Gallery/chambal-3rdprogram-20.webp",  
 
"/Gallery/chambal-3rdprogram-22.webp",  
"/Gallery/chambal-3rdprogram-23.webp",  
"/Gallery/chambal-3rdprogram-24.webp",  
"/Gallery/chambal-3rdprogram-25.webp",  
"/Gallery/chambal-3rdprogram-26.webp"

      ],
      description: "5 फरवरी 2012 रविवार, स्थान - श्री रामलला गहोई वैश्य ट्रष्ट धर्मशाला, गोमती पुरा, डबरा में श्री गहोई वैश्य समाज डबरा द्वारा आयोजित की गई ! कार्यक्रम उपरांत पधारे हुए अथितियों को स्मृत चिन्ह भेंट किये गए एवं सभी को स्वरुचि भोज के लिए आमंत्रित किया !"
    },
    {
      id: 5,
      title: "चम्बल क्षेत्रीय गहोई वैश्य सभा की प्रथम कार्य कारिणी बैठक",
      date: "2011",
      location: "गहोई वैश्य समाज पंचायत, कम्पू, ग्वालियर",
      images: [
        "/Gallery/chambal-1stprogram-01.webp",
        "/Gallery/chambal-1stprogram-02.webp",
        "/Gallery/chambal-1stprogram-03.webp",
        "/Gallery/chambal-1stprogram-04.webp",
        "/Gallery/chambal-1stprogram-05.webp",
        "/Gallery/chambal-1stprogram-06.webp",
        "/Gallery/chambal-1stprogram-07.webp",
        "/Gallery/chambal-1stprogram-08.webp",
        "/Gallery/chambal-1stprogram-09.webp",
        "/Gallery/chambal-1stprogram-10.webp",
        "/Gallery/chambal-1stprogram-12.webp",
        "/Gallery/chambal-1stprogram-13.webp",
        "/Gallery/chambal-1stprogram-11.webp",
        "/Gallery/chambal-1stprogram-14.webp",
      ],
      description: "26 जनवरी 2011 गहोई वैश्य समाज पंचायत, कम्पू, ग्वालियर(म. प्र.) द्वारा आयोजित कार्य क्रम की झलकियां"
    },
    {
      id: 6,
      title: "चम्बल क्षेत्रीय गहोई वैश्य सभा का निर्वाचन",
      date: "2010",
      location: "मिहोना जिला -भिंड (म. प्र.)",
      images: [
        "/Gallery/chambal-election-1.webp",
        "/Gallery/chambal-election-2.webp",
        "/Gallery/chambal-election-3.webp",
        "/Gallery/chambal-election-4.webp",
       
      ],
      description: "14 नवम्बर 2010 मिहोना जिला -भिंड (म. प्र.)"
    },
    {
      id: 7,
      title: "चम्बल क्षेत्रीय गहोई वैश्य सभा का शपथ ग्रहण समारोह",
      date: "2010",
      location: "थरेट जिला -दतिया (म. प्र.)",
      images: [
        "/Gallery/chambal-oat-taking-ceremony-1.webp",
        "/Gallery/chambal-oat-taking-ceremony-2.webp",
        "/Gallery/chambal-oat-taking-ceremony-3.webp",
        "/Gallery/chambal-oat-taking-ceremony-4.webp",
        "/Gallery/chambal-oat-taking-ceremony-5.webp",
        "/Gallery/chambal-oat-taking-ceremony-6.webp",
        "/Gallery/chambal-oat-taking-ceremony-7.webp",
        "/Gallery/chambal-oat-taking-ceremony-8.webp",
        "/Gallery/chambal-oat-taking-ceremony-9.webp",
        "/Gallery/chambal-oat-taking-ceremony-10.webp",
        "/Gallery/chambal-oat-taking-ceremony-11.webp",
        "/Gallery/chambal-oat-taking-ceremony-12.webp",
        "/Gallery/chambal-oat-taking-ceremony-13.webp",
        "/Gallery/chambal-oat-taking-ceremony-14.webp",
        "/Gallery/chambal-oat-taking-ceremony-15.webp",
        "/Gallery/chambal-oat-taking-ceremony-16.webp",
        "/Gallery/chambal-oat-taking-ceremony-17.webp",
        "/Gallery/chambal-oat-taking-ceremony-18.webp",
        "/Gallery/chambal-oat-taking-ceremony-19.webp",
        "/Gallery/chambal-oat-taking-ceremony-20.webp",
        "/Gallery/chambal-oat-taking-ceremony-21.webp",
        "/Gallery/chambal-oat-taking-ceremony-22.webp",
        "/Gallery/chambal-oat-taking-ceremony-23.webp",
        "/Gallery/chambal-oat-taking-ceremony-24.webp",
        "/Gallery/chambal-oat-taking-ceremony-25.webp",
        "/Gallery/chambal-oat-taking-ceremony-26.webp",
        "/Gallery/chambal-oat-taking-ceremony-27.webp",
        "/Gallery/chambal-oat-taking-ceremony-28.webp",
        "/Gallery/chambal-oat-taking-ceremony-29.webp",
        "/Gallery/chambal-oat-taking-ceremony-30.webp",
        "/Gallery/chambal-oat-taking-ceremony-31.webp"
      ],
      description: "18 दिसंबर 2010 थरेट जिला -दतिया (म. प्र.)"
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
    <div className="min-h-screen py-2 sm:py-4 md:py-6 relative bg-red-800">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-red-800/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-16">
        {/* Header */}
        <div className="text-center py-8">
         
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-6 sm:p-8">
            <div className="inline-block bg-red-800 rounded-full px-8 py-3 shadow-lg">
              <p className="text-xl sm:text-2xl font-medium text-white">क्षेत्रीय सभा</p>
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
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionalAssembly; 