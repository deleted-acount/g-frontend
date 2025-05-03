import React from "react";
import { Helmet } from "react-helmet";
import flagImage from "/flag.png";
import { useLanguage } from "../../context/LanguageContext";

const SocialFlagSong = () => {
  const { language } = useLanguage();
  const languageFontClass = "font-inter";

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>ध्वज गीत - गहोई समाज</title>
        <meta
          name="description"
          content="अखिल भारतीय गहोई वैश्य महासभा का ध्वज गीत"
        />
      </Helmet>

      {/* Hero Banner with Background Image */}
      <div className="relative w-full bg-red-800 pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/flagsong-hero.webp"
          alt="Flag Song Background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="p-3 md:p-5 bg-white/10 rounded-full w-20 h-20 mx-auto mb-6 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 ${languageFontClass}`}>
              {language === "hi" ? "अखिल भारतीय गहोई वैश्य महासभा" : "All India Gahoi Vaishya Mahasabha"}
            </h1>
            <p className={`text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto ${languageFontClass}`}>
              {language === "hi" ? "ध्वज गीत" : "Flag Song"}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Flag Image */}
            <div className="w-full md:w-1/4 flex-shrink-0 order-first md:order-2 mb-8 md:mb-0">
              <div className="sticky top-8">
                <img
                  src={flagImage}
                  alt="गहोई ध्वज"
                  className="w-full h-[500px] object-contain max-w-[250px] mx-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Left Side Lyrics */}
            <div className="w-full md:w-1/3 space-y-6 order-2 md:order-1">
              <div className="bg-red-50 rounded-xl p-6">
                <div className="space-y-6">
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-orange-600 font-semibold text-lg leading-relaxed">
                      केशरिया रंग,रवि उजियारा<br />
                      <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-pink-600 font-semibold text-lg leading-relaxed">
                      इस झंडे के नीचे निर्भय<br />
                      सजग संगठन और दृढ़ निश्चय
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-green-600 font-semibold text-lg leading-relaxed">
                      बढ़े प्रेम और भाई चारा<br />
                      <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-blue-600 font-semibold text-lg leading-relaxed">
                      इसकी शान न जाने पाये<br />
                      चाहे जान भले ही जावे
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-purple-600 font-semibold text-lg leading-relaxed">
                      उज्जवल हो यश नाम हमारा<br />
                      <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Lyrics */}
            <div className="w-full md:w-1/3 space-y-6 order-3">
              <div className="bg-red-50 rounded-xl p-6">
                <div className="space-y-6">
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-green-600 font-semibold text-lg leading-relaxed">
                      मिटे कुरीति नीति हो नीकी<br />
                      इस ध्वज की छवि पड़े न फीकी
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-blue-600 font-semibold text-lg leading-relaxed">
                      जब होगा गुण पूर्ण हमारा<br />
                      <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-pink-600 font-semibold text-lg leading-relaxed">
                      ऐसे बनकर रहे गहोई<br />
                      हमें करे बदनाम न कोई
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-orange-600 font-semibold text-lg leading-relaxed">
                      चमके सबके भाग्य सितारा<br />
                      <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-purple-600 font-semibold text-lg leading-relaxed">
                      आओ बंधु गहोई प्यारे<br />
                      महासभा के राज दुलारे
                    </p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-blue-600 font-semibold text-lg leading-relaxed">
                      जाति जनिन ने तुझे पुकारा<br />
                      <span className="text-red-600">झंडा ऊँचा रहे हमारा</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-block bg-red-800 rounded-full px-8 py-3">
              <p className="text-2xl font-bold text-yellow-200">
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