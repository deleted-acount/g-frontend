import React from 'react';

const DhwajGeetMarquee = () => {
  const lyrics = [
    { text: "केशरिया रंग,रवि उजियारा", nextLine: "झंडा ऊँचा रहे हमारा", color: "#01a0c6", align: "left" },
    { text: "इस झंडे के नीचे निर्भय", nextLine: "सजक संगठन और द्रण निष्चय", color: "#f80080", align: "right" },
    { text: "बढे प्रेम ओंर भाई चारा", nextLine: "झंडा ऊँचा रहे हमारा", color: "#005e00", align: "left" },
    { text: "इसकी शान न जाने पाये", nextLine: "चाहे जान भले ही जावे", color: "#0000ff", align: "right" },
    { text: "उज्जवल हो यश नाम हमारा", nextLine: "झंडा ऊँचा रहे हमारा", color: "#f80080", align: "left" },
    { text: "मिटे कुरीत नीति हो नीकी", nextLine: "इस ध्वज की छवि पड़े न फीकी", color: "#005e00", align: "right" },
    { text: "जब होगा प्रण पूर्ण हमारा", nextLine: "झंडा ऊँचा रहे हमारा", color: "#0000ff", align: "left" },
    { text: "ऐसे बनकर रहे गहोई", nextLine: "हमें करे बदनाम न कोई", color: "#85318e", align: "right" },
    { text: "चमके सबके भाग्य सितारा", nextLine: "झंडा ऊँचा रहे हमारा", color: "#ff0000", align: "left" },
    { text: "आओं बंधू गहोई प्यारे", nextLine: "महासभा के राज दुलारे", color: "#cc0928", align: "right" },
    { text: "जाति जननि ने तुम्हे पुकारा", nextLine: "झंडा ऊँचा रहे हमारा", color: "#3a1b9f", align: "left" },
    { text: "जय गहोई जय भारत", nextLine: "", color: "#000000", align: "center" }
  ];

  return (
    <div className="marquee-container h-[175px] overflow-hidden relative rounded-xl bg-white ">
      <div className="marquee-content animate-scroll">
        {lyrics.map((lyric, index) => (
          <div 
            key={index} 
            className={`py-2 ${lyric.align === 'center' ? 'text-center' : lyric.align === 'right' ? 'text-right' : 'text-left'}`}
            style={{ color: lyric.color }}
          >
            <a href="#" className="hover:underline hover:opacity-80 transition-opacity">{lyric.text}</a>
            {lyric.nextLine && <br />}
            {lyric.nextLine && <a href="#" className="hover:underline hover:opacity-80 transition-opacity">{lyric.nextLine}</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

const LatestNewsMarquee = () => {
  const newsItems = [
    { id: 144, text: "कमलेश्वर महादेव मंदिर पर गहोई समाज के सात जोड़ो ने लिए सात फेरे" },
    { id: 141, text: "वडोदरा (गुज) में मनाया अखिल भारतीय गहोई वैश्य महासभा का 108 वाँ स्थापना दिवस" },
    { id: 140, text: "परम श्रद्धेय श्री लक्ष्मीनारायण जी गुप्त (नन्ना जी) का अंतिम संस्कार पूरे राजकीय सम्मान के साथ हुआ संपन्न" },
    { id: 139, text: "माननीय मुख्य मंत्री जी ने नन्ना के दुखद निधन पर की शोक संवेदना व्यक्त" },
    { id: 138, text: "आदर्णीय श्री लक्ष्मीनारायण गुप्त (नन्ना) जी पूर्व राजस्व मंत्री का निधन" },
    { id: 137, text: "गहोई वैश्य नवयुवक मंडल करारखेडा़ का शपथग्रहण समारोह सम्पन्न" },
    { id: 136, text: "श्री गहोई वैश्य समाज ग्रेटर ग्वालियर के तत्वावधान में विशाल नेत्र परीक्षण शिविर संपन्न" },
    { id: 134, text: "डॉ नीता पहारिया को राष्ट्रीय कला रत्न सम्मान से नवाजा" },
    { id: 133, text: "अखिल भारतीय गहोई वैश्य वरिष्ठ संघ की तृतीय कार्यकारिणी बैठक सम्पन्न" },
    { id: 132, text: "धीरज कनकने नवनिर्वाचित अध्यक्ष और सभी सदस्य गहोई वैश्य समाज नवयुवा मंडल बृहत्तर, ग्वालियर को बहुत बहुत बधाई एवं शुभकामनाऐं" }
  ];

  return (
    <div className="marquee-container h-[175px] overflow-hidden relative rounded-xl bg-white ">
      <div className="marquee-content animate-scroll">
        {newsItems.map((item) => (
          <div key={item.id} className="py-2 flex items-center px-4 hover:bg-red-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 text-red-600 flex-shrink-0" viewBox="0 0 512 512">
              <path fill="currentColor" d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.084 34.222 0 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826z"/>
            </svg>
            <a 
              href={`/LatestNews?RID=${item.id}`}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlanSection = () => {
  const categories = [
    {
      title: "ध्वज गीत",
      description: <DhwajGeetMarquee />
    },
    {
      title: "Online Registration",
      description: (
        <div className="space-y-4">
          {[
            "गहोई बंधु सदस्यता",
            "महासभा सदस्यता",
            "वरिष्ठ संघ सदस्यता",
            "नव युवक मण्डल सदस्यता",
            "महिला सभा सदस्यता"
          ].map((item, index) => (
            <div key={index} className="flex items-center group hover:bg-red-50 p-2 rounded-lg transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 text-red-600 flex-shrink-0" viewBox="0 0 512 512">
                <path fill="currentColor" d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.084 34.222 0 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826z"/>
              </svg>
              <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-300">{item}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "ताज़ा खबर",
      description: <LatestNewsMarquee />
    }
  ];

  return (
    <div className="py-4 sm:py-6 bg-gradient-to-b from-white to-red-50 relative w-full">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="absolute inset-0 opacity-10 overflow-hidden w-full">
        <div 
          className="h-full w-full bg-center bg-no-repeat bg-cover"
          style={{ 
            backgroundImage: "url('/decorative-pattern.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 md:w-24 h-16 md:h-24 bg-red-100 rounded-full opacity-20"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute -inset-3 md:-inset-4 bg-red-100 rounded-full animate-pulse opacity-20"></div>
                <img 
                  src="/ring.png" 
                  alt="Wedding Rings" 
                  className="w-8 h-8 md:w-12 md:h-12 object-contain relative z-10"
                />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800 mb-2 md:mb-4">
              पंजीकरण • समाचार • संगीत
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg italic px-2">
              Join our community and stay connected with Gahoi Samaj
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
          {categories.map((category, index) => (
            <div key={index} className="h-[350px] sm:h-[400px] w-full">
              <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-red-100 h-full flex flex-col w-full">
                <div className="w-full bg-red-800 py-2 md:py-3 px-4 md:px-6 min-h-[50px] md:min-h-[60px] flex items-center justify-center">
                  <h3 className="font-bold text-white text-center text-lg md:text-xl">{category.title}</h3>
                </div>
                <div className="p-4 md:p-6 flex-1 w-full">
                  {typeof category.description === 'string' ? (
                    <p className="text-gray-600 text-center whitespace-pre-line leading-relaxed text-sm md:text-base">
                      {category.description}
                    </p>
                  ) : (
                    category.description
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center mt-8 md:mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
            <div className="w-12 md:w-16 h-1 bg-red-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;