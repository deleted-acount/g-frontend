import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  // Common reusable styles
  const sectionStyles = "mb-8 sm:mb-12 md:mb-16";
  const cardStyles = "relative bg-white/80 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-red-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300";
  const headingStyles = "text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 mb-3 sm:mb-4";
  const paragraphStyles = "text-gray-700 leading-relaxed text-base sm:text-lg";
  
  // Values section data
  const values = [
    {
      title: "सत्य",
      description: "हम सत्य के मार्ग पर चलते हैं और सभी के साथ ईमानदारी से व्यवहार करते हैं।",
    },
    {
      title: "धर्म",
      description: "हम धर्म के मूल्यों को संजोते हैं और उन्हें आगे बढ़ाते हैं।",
    },
    {
      title: "सेवा",
      description: "हम समाज की सेवा को अपना कर्तव्य मानते हैं और सभी की मदद करते हैं।",
    },
  ];

  // Program list data
  const programs = [
    "करियर कॉउंसलिंग / प्रतिभा सम्मान समारोह - मई / जून",
    "वर्षा ऋतू गोठ जुलाई/अगस्त",
    "वैवाहिक परिचय सम्मलेन -सितम्बर/अक्टूबर",
    "व्यापार सम्मेलन - Business Meet - नवंबर/दिसंबर",
    "New Year फन फेयर पार्टी - जनवरी/फ़रबरी",
    "वैवाहिक परिचय सम्मलेन - मार्च / अप्रैल"
  ];

  // Benefits data
  const benefits = [
    "वर्ष में आयोजित होने वाले 2 कार्यक्रम के 2-2 कूपन उपलब्ध कराये जायेगे। जिनमे भोजन की व्यवस्था होगी।",
    "अन्य कार्यक्रम / गतिविधि / सेमिनार में निशुल्क प्रवेश / मार्गदर्शन मिलेगा।",
    "सदस्यों को विभिन्न प्रोडक्ट / सर्विसेज पर डिस्काउंट ऑफर।",
    "संगठन की गतिविधियों में सहभागी होकर कार्य के आधार पर अगले वर्ष प्रकोष्ठ / कार्यकारिणी सदस्य बनने का मौका।",
    "संगठन में शामिल होकर स्वयं को स्थापित करना एवं आपके बिज़नेस को बढ़ाने का मौका।"
  ];

  // Responsibilities data
  const responsibilities = [
    "समाज के आर्थिक रूप से कमजोर बच्चो को पढाई के लिए सरकारी योजनाओं की जानकारी देना एवं आर्थिक मदद उपलब्ध करना।",
    "समाज के अविवाहित बच्चो की शादी के लिए परिचय सम्मलेन का आयोजन।",
    "समाज के उद्योगपतियों के माध्यम से जरूरतमंद बच्चो को नौकरी दिलाने में मदद करना। इसके अलावा अन्य कोई भी दायित्व जिस पर कार्यकारिणी सहमत हो।"
  ];
  
  // Reusable section title component
  const SectionTitle = ({ title }) => (
    <div className="text-center mb-6 sm:mb-8">
      <h2 className={headingStyles}>{title}</h2>
      <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
    </div>
  );

  return (
    <div
      className="min-h-screen py-2 sm:py-4 md:py-6 relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#991b1b",
      }}
    >
      <Helmet>
        <title>
          About Us - Gahoi Samaj India | धर्मशाला अ.भा.गहोई धर्मशाला मंदिर ट्रष्ट
        </title>
        <meta
          name="description"
          content="Learn about Gahoi Samaj India, our history, mission, and values. Discover how we serve our community through cultural preservation, social welfare, and spiritual development."
        />
        <meta
          name="keywords"
          content="Gahoi Samaj, Gahoi Temple Trust, Ayodhya Temple, Indian Culture, Community Service, Religious Trust"
        />
      </Helmet>

      <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-800/80"></div>
      <div className="relative w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-red-200/50 mx-4 sm:mx-auto mt-28 sm:mt-20 md:mt-24">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-3 sm:p-4 text-center border-b border-red-200 mb-3 sm:mb-4 md:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                गहोई शक्ति जन कल्याण समिति
              </h1>
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-yellow-500/30 transform hover:scale-105 transition-transform duration-300">
                <p className="text-base sm:text-lg font-medium text-yellow-100">
                  हमारे बारे में
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Introduction Section */}
            <div className={sectionStyles}>
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 sm:-inset-6 bg-red-100 rounded-full animate-pulse opacity-20"></div>
                    <img
                      src="/ring.png"
                      alt="गहोई समाज प्रतीक"
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain relative z-10 transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h2 className={headingStyles}>हमारे उद्देश्य</h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-red-100 transform hover:scale-[1.02] transition-transform duration-300">
                <p className={paragraphStyles}>
                  संगठन को बनाने का उद्देश्य समाज के लोगो के हित के लिए काम करना
                  एवं सामाजिक जनो को आने वाली परेशानी में मदद उपलब्ध करना है।
                  2025 में संगठन का कार्यक्षेत्र ग्वालियर एवं नजदीकी शहर है।
                  जिसे अगले वर्ष तक मध्य प्रदेश के महानगरों तक पहुँचाना है उसके
                  बाद कार्यक्षेत्र को आगे बढ़ाते हुए पुरे मध्यप्रदेश को फिर पुरे
                  भारत वर्ष में गहोईयो को संगठित करना है।
                </p>
              </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12 md:mb-16">
              {/* Mission */}
              <div className={cardStyles}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <img
                        src="/ring.png"
                        alt="कार्यक्रम प्रतीक"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-800">
                      संगठन के संभावित वार्षिक कार्यक्रम:
                    </h3>
                  </div>
                  <div className={paragraphStyles}>
                    {programs.map((program, index) => (
                      <div key={index} className="flex mb-1">
                        <span className="mr-2">•</span>
                        <span>{program}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className={cardStyles}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <img
                        src="/ring.png"
                        alt="लाभ प्रतीक"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-800">
                      संगठन के सदस्य बनने के लाभ
                    </h3>
                  </div>
                  <div className={paragraphStyles}>
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex mb-1">
                        <span className="mr-2">•</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className={sectionStyles}>
              <SectionTitle title="हमारे मूल्य" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {values.map((value, index) => (
                  <div key={index} className={cardStyles}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <img
                            src="/ring.png"
                            alt={`${value.title} प्रतीक`}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800">
                          {value.title}
                        </h3>
                      </div>
                      <p className={paragraphStyles}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities Section */}
            <div className="bg-white/80 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-red-100 transform hover:scale-[1.02] transition-transform duration-300">
              <SectionTitle title="संगठन द्वारा वर्ष 2025 के लिए निश्चित किये गए मुख्य दायित्व" />
              <div className="prose prose-base sm:prose-lg mx-auto text-gray-700">
                <div className={paragraphStyles}>
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex mb-2">
                      <span className="mr-2">•</span>
                      <span>{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
