import React from "react";
import flagImage from "/flag.png";

const SocialFlagSong = () => {
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
      <div className="relative w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-red-200/50 mx-4 mt-28 sm:mt-20 md:mt-24">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-4 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-800 mb-3 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text">
                अखिल भारतीय गहोई वैश्य महासभा
              </h1>
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full border border-yellow-500/30">
                <p className="text-base sm:text-lg font-medium text-yellow-100">ध्वज गीत</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
             
              <div className="w-full md:w-1/4 flex-shrink-0 order-first md:order-2 mb-8 md:mb-0">
                <div className="relative">
                  <img
                    src={flagImage}
                    alt="गहोई ध्वज"
                    className="w-full h-auto object-contain max-w-[200px] mx-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Left Side Lyrics */}
              <div className="w-full md:w-1/3 text-center space-y-6 order-2 md:order-1">
                <div className="space-y-4">
                  <p className="text-orange-600 font-semibold text-lg">
                    केशरिया रंग,रवि उजियारा<br />
                    <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                  </p>
                  <p className="text-pink-600 font-semibold text-lg">
                    इस झंडे के नीचे निर्भय<br />
                    सजग संगठन और दृढ़ निश्चय
                  </p>
                  <p className="text-green-600 font-semibold text-lg">
                    बढ़े प्रेम और भाई चारा<br />
                    <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                  </p>
                  <p className="text-blue-600 font-semibold text-lg">
                    इसकी शान न जाने पाये<br />
                    चाहे जान भले ही जावे
                  </p>
                  <p className="text-purple-600 font-semibold text-lg">
                    उज्जवल हो यश नाम हमारा<br />
                    <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                  </p>
                </div>
              </div>

              {/* Right Side Lyrics */}
              <div className="w-full md:w-1/3 text-center space-y-6 order-3">
                <div className="space-y-4">
                  <p className="text-green-600 font-semibold text-lg">
                    मिटे कुरीति नीति हो नीकी<br />
                    इस ध्वज की छवि पड़े न फीकी
                  </p>
                  <p className="text-blue-600 font-semibold text-lg">
                    जब होगा गुण पूर्ण हमारा<br />
                    <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                  </p>
                  <p className="text-pink-600 font-semibold text-lg">
                    ऐसे बनकर रहे गहोई<br />
                    हमें करे बदनाम न कोई
                  </p>
                  <p className="text-orange-600 font-semibold text-lg">
                    चमके सबके भाग्य सितारा<br />
                    <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                  </p>
                  <p className="text-purple-600 font-semibold text-lg">
                    आओ बंधु गहोई प्यारे<br />
                    महासभा के राज दुलारे
                  </p>
                  <p className="text-blue-600 font-semibold text-lg">
                    जाति जनिन ने तुझे पुकारा<br />
                    <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                  </p>
                </div>
              </div>
            </div>
            
         
            <div className="text-center mt-8">
              <p className="text-red-800 font-bold text-xl bg-clip-text">
                जय गहोई जय भारत
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFlagSong; 