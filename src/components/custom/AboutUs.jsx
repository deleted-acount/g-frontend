import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-2 sm:py-4 md:py-6 relative bg-red-800">
      <Helmet>
        <title>About Us - Gahoi Samaj India | धर्मशाला अ.भा.गहोई धर्मशाला मंदिर ट्रष्ट</title>
        <meta name="description" content="Learn about Gahoi Samaj India, our history, mission, and values. Discover how we serve our community through cultural preservation, social welfare, and spiritual development." />
        <meta name="keywords" content="Gahoi Samaj, Gahoi Temple Trust, Ayodhya Temple, Indian Culture, Community Service, Religious Trust" />
      </Helmet>

      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-red-800/70"></div>
      <div className="relative w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-red-200/50 mx-4 mt-28 sm:mt-20 md:mt-24">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-6 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-200 rounded-full animate-pulse opacity-20"></div>
                  <img 
                    src="/ring.png" 
                    alt="Wedding Rings" 
                    className="w-16 h-16 object-contain relative z-10 transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 mb-4 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text">
                धर्मशाला अ.भा.गहोई धर्मशाला मंदिर ट्रष्ट, अयोध्या (उ.प्र.)
              </h1>
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-yellow-200 rounded-full animate-pulse opacity-30"></div>
                    <img src="/ring.png" alt="Ring" className="w-8 h-8 relative z-10" />
                  </div>
                  <p className="text-lg sm:text-xl font-medium text-yellow-100">हमारे बारे में</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Introduction Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-red-100 rounded-full animate-pulse opacity-20"></div>
                    <img 
                      src="/ring.png" 
                      alt="Wedding Rings" 
                      className="w-16 h-16 object-contain relative z-10 transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-red-800 mb-4">हमारी कहानी</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
              </div>
              <div className="bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 transform hover:scale-[1.02] transition-transform duration-300">
                <p className="text-gray-700 leading-relaxed text-lg">
                  धर्मशाला अ.भा.गहोई धर्मशाला मंदिर ट्रष्ट, अयोध्या (उ.प्र.) एक ऐसा संगठन है जो हमारी सांस्कृतिक विरासत को संजोने और समाज के कल्याण के लिए समर्पित है। हमारा उद्देश्य समाज के सभी वर्गों के लोगों को एक साथ लाना और उनके आध्यात्मिक, सामाजिक और सांस्कृतिक विकास में योगदान देना है।
                </p>
              </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {/* Mission */}
              <div className="relative bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <img src="/ring.png" alt="Mission" className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-red-800">हमारा मिशन</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    हमारा मिशन समाज के सभी वर्गों के लोगों को एक साथ लाना और उनके आध्यात्मिक, सामाजिक और सांस्कृतिक विकास में योगदान देना है। हम समाज के कल्याण के लिए काम करते हैं और सभी के लिए एक बेहतर भविष्य बनाने का प्रयास करते हैं।
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <img src="/ring.png" alt="Vision" className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-red-800">हमारी दृष्टि</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    हमारी दृष्टि एक ऐसा समाज बनाना है जहां सभी लोग एक साथ मिलकर रहें और अपनी सांस्कृतिक विरासत को संजोएं। हम चाहते हैं कि हमारा समाज आध्यात्मिक रूप से समृद्ध हो और सभी के लिए समान अवसर प्रदान करे।
                  </p>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-red-800 mb-4">हमारे मूल्य</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "सत्य",
                    description: "हम सत्य के मार्ग पर चलते हैं और सभी के साथ ईमानदारी से व्यवहार करते हैं।"
                  },
                  {
                    title: "धर्म",
                    description: "हम धर्म के मूल्यों को संजोते हैं और उन्हें आगे बढ़ाते हैं।"
                  },
                  {
                    title: "सेवा",
                    description: "हम समाज की सेवा को अपना कर्तव्य मानते हैं और सभी की मदद करते हैं।"
                  }
                ].map((value, index) => (
                  <div key={index} className="relative bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <img src="/ring.png" alt={value.title} className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold text-red-800">{value.title}</h3>
                      </div>
                      <p className="text-gray-700 text-lg">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* History Section */}
            <div className="bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-red-800 mb-4">हमारा इतिहास</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
              </div>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="leading-relaxed text-lg">
                  धर्मशाला अ.भा.गहोई धर्मशाला मंदिर ट्रष्ट की स्थापना समाज के कल्याण और सांस्कृतिक विकास के उद्देश्य से की गई थी। वर्षों से, हमारा संगठन समाज के विभिन्न वर्गों के लोगों को एक साथ लाने और उनके विकास में योगदान देने का कार्य करता आ रहा है।
                </p>
                <p className="leading-relaxed mt-6 text-lg">
                  हमारा मंदिर न केवल आध्यात्मिक केंद्र के रूप में कार्य करता है, बल्कि यह समाज के सामाजिक और सांस्कृतिक विकास का भी केंद्र है। यहाँ विभिन्न धार्मिक और सांस्कृतिक कार्यक्रमों का आयोजन किया जाता है, जो समाज को एक सूत्र में बांधने का कार्य करते हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 