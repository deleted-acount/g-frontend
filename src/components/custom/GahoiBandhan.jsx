import React from "react";

const GahoiBandhan = () => {
  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  const issues = [
    { number: 1, title: "Gahoi March 2025 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/March2025.part0.pdf" },
    { number: 2, title: "Gahoi February 2025 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/February2025.part0.pdf" },
    { number: 3, title: "Gahoi January 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/January2024.part0.pdf" },
    { number: 4, title: "Gahoi December 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/December2024.pdf" },
    { number: 5, title: "Gahoi November 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/November2024.pdf" },
    { number: 6, title: "Gahoi October 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/October2024..pdf" },
    { number: 7, title: "Gahoi September 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/September2024.pdf" },
    { number: 8, title: "Gahoi August 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/August2024.pdf" },
    { number: 9, title: "Gahoi July 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/July2024.pdf" },
    { number: 10, title: "Gahoi June 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/June2024.pdf" },
    { number: 11, title: "Gahoi May 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/May2024.pdf" },
    { number: 12, title: "Gahoi April 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/April2024.pdf" },
    { number: 13, title: "Gahoi March 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/March2024.pdf" },
    { number: 14, title: "Gahoi February 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhan/February2024.pdf" }
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
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-24 sm:mt-20 md:mt-24">
        {/* Header */}
        <div className="text-center py-3 sm:py-3 md:py-4 mb-3 sm:mb-3 md:mb-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 border-red-200/50 p-2 sm:p-3 md:p-4">
            <div className="inline-block bg-red-800 rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 shadow-md sm:shadow-lg">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white">
                गहोई बंधन
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 border-red-200/50 p-2 sm:p-3 md:p-4">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-red-800 mb-3 sm:mb-4 md:mb-6 text-center">
            गहोई बंधन मासिक समाचार पत्रिका
          </h2>

          {/* Grid of Download Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 sm:gap-2">
            {issues.map((issue) => (
              <div
                key={issue.number}
                onClick={() => handleDownload(issue.url)}
                className="group relative cursor-pointer transition-all duration-300"
              >
                <div className="absolute inset-0 bg-red-800 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-lg p-1.5 sm:p-2 shadow-md border-2 border-red-200/50 hover:border-red-300/50 transition-colors duration-300 overflow-hidden">
                  {/* Logo Background */}
                  <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 text-red-800" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center space-y-1">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <svg 
                        className="w-3 h-3 sm:w-4 sm:h-4 text-red-800" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h3 className="text-[8px] sm:text-[10px] font-medium text-red-800 leading-tight line-clamp-2 lg:whitespace-nowrap">
                        {issue.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GahoiBandhan; 