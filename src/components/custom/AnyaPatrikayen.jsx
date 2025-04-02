import React from "react";

const AnyaPatrikayen = () => {
  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  const issues = [
    { number: 1, title: "Gahoi Bandhu March 2017 Issue", url: "https://www.gahoi.co.in/pdf/AnyaPatrikayen/Urai_KKBaithak.pdf" }
  ];

  return (
    <div className="min-h-screen py-4 sm:py-4 md:py-6 lg:py-8 relative bg-red-800">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-red-800/70"></div>
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-24 sm:mt-20 md:mt-24 lg:mt-28">
        {/* Header */}
        <div className="text-center py-3 sm:py-3 md:py-4 mb-3 sm:mb-3 md:mb-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 border-red-200/50 p-3 sm:p-3 md:p-4">
            <div className="inline-block bg-red-800 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-1.5 md:py-2 shadow-md sm:shadow-lg">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white">
                अन्य पत्रिकाएं
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 border-red-200/50 p-3 sm:p-3 md:p-4">
          {/* Grid of Download Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3">
            {issues.map((issue) => (
              <div
                key={issue.number}
                onClick={() => handleDownload(issue.url)}
                className="group relative cursor-pointer transition-all duration-300 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 max-w-md mx-auto w-full"
              >
                <div className="absolute inset-0 bg-red-800 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-lg p-4 sm:p-4 shadow-md border-2 border-red-200/50 hover:border-red-300/50 transition-colors duration-300 overflow-hidden">
                  {/* Logo Background */}
                  <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                    <svg 
                      className="w-16 h-16 text-red-800" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 text-red-800" 
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
                      <h3 className="text-sm sm:text-base md:text-lg font-medium text-red-800 leading-tight">
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

export default AnyaPatrikayen; 