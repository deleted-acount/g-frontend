import React from "react";

const GahoiBandhu = () => {
  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  const issues = [
    { number: 1, title: "Gahoi March 2025 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/March2025.part0.pdf" },
    { number: 2, title: "Gahoi February 2025 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/February2025.part0.pdf" },
    { number: 3, title: "Gahoi January 2025 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/January2025.part0.pdf" },
    { number: 4, title: "Gahoi December 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/December2024.pdf" },
    { number: 5, title: "Gahoi October 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/October2024.pdf" },
    { number: 6, title: "Gahoi September 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/September2024.pdf" },
    { number: 7, title: "Gahoi June 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/June2024.pdf" },
    { number: 8, title: "Gahoi May 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/May2024.pdf" },
    { number: 9, title: "Gahoi April 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/April2024.pdf" },
    { number: 10, title: "Gahoi March 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/March2024.pdf" },
    { number: 11, title: "Gahoi February 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/February2024.pdf" },
    { number: 12, title: "Gahoi January 2024 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/January2024.pdf" },
    { number: 13, title: "Gahoi December 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/December2023.pdf" },
    { number: 14, title: "Gahoi November 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/November2023.pdf" },
    { number: 15, title: "Gahoi October 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/October2023.pdf" },
    { number: 16, title: "Gahoi September 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/September2023.pdf" },
    { number: 17, title: "Gahoi August 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/August2023.pdf" },
    { number: 18, title: "Gahoi July 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/July2023.pdf" },
    { number: 19, title: "Gahoi June 2023 Issue", url: "pdf/GahoiBandhu/June2023.pdf" },
    { number: 20, title: "Gahoi May 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/May2023.pdf" },
    { number: 21, title: "Gahoi April 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/April2023.pdf" },
    { number: 22, title: "Gahoi March 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/March2023.pdf" },
    { number: 23, title: "Gahoi February 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/February2023.pdf" },
    { number: 24, title: "Gahoi January 2023 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/January2023.pdf" },
    { number: 25, title: "Gahoi December 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/December2022.pdf" },
    { number: 26, title: "Gahoi November 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/November2022.pdf" },
    { number: 27, title: "Gahoi October 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/October2022.pdf" },
    { number: 28, title: "Gahoi September 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/September2022.pdf" },
    { number: 29, title: "Gahoi August 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/August2022.pdf" },
    { number: 30, title: "Gahoi July 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/July2022.pdf" },
    { number: 31, title: "Gahoi June 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/June2022.pdf" },
    { number: 32, title: "Gahoi May 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/May2022.pdf" },
    { number: 33, title: "Gahoi April 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/April2022.pdf" },
    { number: 34, title: "Gahoi March 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/March2022.pdf" },
    { number: 35, title: "Gahoi Febuary 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/Febuary2022.pdf" },
    { number: 36, title: "Gahoi January 2022 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/January2022.pdf" },
    { number: 37, title: "Gahoi December 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/December2021.pdf" },
    { number: 38, title: "Gahoi November 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/November2021.pdf" },
    { number: 39, title: "Gahoi October 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/October2021.pdf" },
    { number: 40, title: "Gahoi September Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/September2021.pdf" },
    { number: 41, title: "Gahoi August 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/August2021.pdf" },
    { number: 42, title: "Gahoi July 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/July2021.pdf" },
    { number: 43, title: "Gahoi April 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/April2021.pdf" },
    { number: 44, title: "Gahoi March 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/March2021.pdf" },
    { number: 45, title: "Gahoi Bandhu February 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/February2021.pdf" },
    { number: 46, title: "Gahoi Bandhu January 2021 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/January.pdf" },
    { number: 47, title: "Gahoi Bandhu December 2020 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/december.pdf" },
    { number: 48, title: "Gahoi Bandhu November 2020 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/November2020.pdf" },
    { number: 49, title: "Gahoi Bandhu October 2020 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/oct2020.pdf" },
    { number: 50, title: "Gahoi Bandhu September 2020 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/September2020.pdf" },
    { number: 51, title: "Gahoi Bandhu July 2020 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/JULY20.pdf" },
    { number: 52, title: "Gahoi Bandhu March 2017 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/1.pdf" },
    { number: 53, title: "Gahoi Bandhu February 2017 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/2.pdf" },
    { number: 54, title: "Gahoi Bandhu January 2017 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/3.pdf" },
    { number: 55, title: "Gahoi Bandhu December 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/4.pdf" },
    { number: 56, title: "Gahoi Bandhu November 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/5.pdf" },
    { number: 57, title: "Gahoi Bandhu October 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/6.pdf" },
    { number: 58, title: "Gahoi Bandhu September 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/7.pdf" },
    { number: 59, title: "Gahoi Bandhu August 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/8.pdf" },
    { number: 60, title: "Gahoi Bandhu July 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/9.pdf" },
    { number: 61, title: "Gahoi Bandhu June 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/10.pdf" },
    { number: 62, title: "Gahoi Bandhu May 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/11.pdf" },
    { number: 63, title: "Gahoi Bandhu April 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/12.pdf" },
    { number: 64, title: "Gahoi Bandhu March 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/13.pdf" },
    { number: 65, title: "Gahoi Bandhu February 2015 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/14.pdf" },
    { number: 66, title: "Gahoi Bandhu March 2012 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/15.pdf" },
    { number: 67, title: "Gahoi Bandhu February 2012 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/16.pdf" },
    { number: 68, title: "Gahoi Bandhu January 2012 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/17.pdf" },
    { number: 69, title: "Gahoi Bandhu December 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/18.pdf" },
    { number: 70, title: "Gahoi Bandhu November 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/19.pdf" },
    { number: 71, title: "Gahoi Bandhu October 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/20.pdf" },
    { number: 72, title: "Gahoi Bandhu September 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/21.pdf" },
    { number: 73, title: "Gahoi Bandhu August 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/22.pdf" },
    { number: 74, title: "Gahoi Bandhu July 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/23.pdf" },
    { number: 75, title: "Gahoi Bandhu June 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/24.pdf" },
    { number: 76, title: "Gahoi Bandhu May 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/25.pdf" },
    { number: 77, title: "Gahoi Bandhu April 2011 Issue", url: "https://www.gahoi.co.in/pdf/GahoiBandhu/26.pdf" }
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
                गहोई बंधु
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 border-red-200/50 p-2 sm:p-3 md:p-4">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-red-800 mb-3 sm:mb-4 md:mb-6 text-center">
            गहोई बंधु मासिक समाचार पत्रिका
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

export default GahoiBandhu; 