import React from "react";
import { Helmet } from "react-helmet";

const Rite = () => {
  return (
    <div className="min-h-screen py-2 sm:py-4 md:py-6 relative bg-red-800">
      <Helmet>
        <title>Rite - Gahoi Samaj India | धर्मशाला अ.भा.गहोई धर्मशाला मंदिर ट्रष्ट</title>
        <meta name="description" content="Learn about the sacred rites and ceremonies at Gahoi Temple Trust. Discover our religious practices, rituals, and spiritual traditions." />
        <meta name="keywords" content="Gahoi Temple Rites, Religious Ceremonies, Spiritual Practices, Temple Rituals, Religious Traditions" />
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
                  <p className="text-lg sm:text-xl font-medium text-yellow-100">धार्मिक कृत्य</p>
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
                <h2 className="text-4xl font-bold text-red-800 mb-4">धार्मिक कृत्य</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
              </div>
              <div className="bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 transform hover:scale-[1.02] transition-transform duration-300">
                <p className="text-gray-700 leading-relaxed text-lg">
                  हमारे मंदिर में विभिन्न धार्मिक कृत्यों का आयोजन किया जाता है। ये कृत्य हमारी सांस्कृतिक विरासत का महत्वपूर्ण हिस्सा हैं और समाज को एक सूत्र में बांधने का कार्य करते हैं।
                </p>
              </div>
            </div>

            {/* Rites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "पूजा-अर्चना",
                  description: "नियमित पूजा-अर्चना और आरती का आयोजन किया जाता है। सुबह और शाम की आरती में भक्तों की भारी भीड़ उमड़ती है।"
                },
                {
                  title: "यज्ञ",
                  description: "विभिन्न अवसरों पर यज्ञ का आयोजन किया जाता है। यज्ञ में वैदिक मंत्रों का उच्चारण किया जाता है।"
                },
                {
                  title: "कीर्तन",
                  description: "भजन और कीर्तन का आयोजन किया जाता है। इसमें भक्तगण भगवान की स्तुति करते हैं।"
                },
                {
                  title: "सत्संग",
                  description: "नियमित सत्संग का आयोजन किया जाता है। इसमें धार्मिक प्रवचन और चर्चा होती है।"
                }
              ].map((rite, index) => (
                <div key={index} className="relative bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <img src="/ring.png" alt={rite.title} className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-red-800">{rite.title}</h3>
                    </div>
                    <p className="text-gray-700 text-lg">{rite.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Events Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-red-800 mb-4">विशेष कार्यक्रम</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "जन्माष्टमी",
                    description: "भगवान श्रीकृष्ण के जन्मदिन पर विशेष पूजा और कार्यक्रम का आयोजन।"
                  },
                  {
                    title: "रामनवमी",
                    description: "भगवान श्रीराम के जन्मदिन पर विशेष पूजा और कार्यक्रम का आयोजन।"
                  },
                  {
                    title: "दीपावली",
                    description: "दीपावली के अवसर पर विशेष पूजा और कार्यक्रम का आयोजन।"
                  }
                ].map((event, index) => (
                  <div key={index} className="relative bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <img src="/ring.png" alt={event.title} className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-red-800">{event.title}</h3>
                      </div>
                      <p className="text-gray-700 text-lg">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Section */}
            <div className="bg-white/80 rounded-xl p-8 shadow-xl border border-red-100 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-red-800 mb-4">नियमित कार्यक्रम</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-red-800 mb-4">सुबह का कार्यक्रम</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">मंगला आरती - सुबह 5:00 बजे</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">पूजा - सुबह 6:00 बजे</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">भोग - सुबह 7:00 बजे</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-800 mb-4">शाम का कार्यक्रम</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">संध्या आरती - शाम 6:00 बजे</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">पूजा - शाम 7:00 बजे</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">शयन आरती - रात 9:00 बजे</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rite; 