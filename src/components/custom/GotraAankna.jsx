import { useLanguage } from '../../context/LanguageContext';
import { Helmet } from "react-helmet";
import { useState } from 'react';

const GotraAankna = () => {
  const { language } = useLanguage();
  const languageFontClass = language === "hi" ? "font-[Noto_Sans_Devanagari]" : "font-inter";
  const [activeGotra, setActiveGotra] = useState(null);

  const gotraAnknaData = [
    {
      mainGotra: "वासर/वास्तिल/वासल",
      rishi: "ऋषि - वत्स",
      kulDevi: "कुलदेवी - वात्सल्य देवी",
      anknaList: [
        "रूपिया/अरूपिया", "बेर/बरे", "बलेरिया", "उजा", "बर/अमर", "बोर", "अरुसिया", 
        "दलेल", "मेहले/मलिल", "मरल", "जार/नार/बार", "कारेखेमऊ", "रमेर", "सागर", 
        "दुबरा", "डाल/डाल के", "सेठ (मऊ के, पलिया के, खकशीस के, महुटा के, भाघोई के)"
      ]
    },
    {
      mainGotra: "गोल",
      rishi: "ऋषि - गौमिल",
      kulDevi: "कुलदेवी - मां गौरी देवी",
      anknaList: [
        "छिकल्या", "तरसोलिया/चिरोलिया", "खरया", "जनकन्या", "जोरिया/जोलिया/जालोन्या",
        "कन्दरिया", "टुटोरिया (टुटोइया)", "कटारे", "कुरेले", "विलैया", "भदेरिया",
        "चिमोली/चिमोलिया", "सोनी", "रावत", "सरवाड़ी", "चिंजपुरिया", "चिंजोरिया/चिजोरिया",
        "गान्धी", "वमोरिया/अमोरिया", "टोटरिया टरवस/टरवइया", "चुनगेले", "सेठ(रोरा के)",
        "मनगेले/मनगोले", "कुरोलिया", "खेरा", "मगोरिया/मोनिया", "हरयाल", "भेट (मऊ के)",
        "बरोदिया (बोधिया)", "सिलोलिया", "टिलोरिया/टेमोरिया", "जार", "पटवारी", ".गंधी"
      ]
    },
    {
      mainGotra: "गागमल / गागिल",
      rishi: "ऋषि - गाग(गागरी)",
      kulDevi: "कुलदेवी - मां जान्हवी देवी (गंगा)",
      anknaList: [
        "गोड़ा", "चपरा / चुपरा", "रावन", "नागरैया", "झुड़ेले / क्षुरेले ", "निसुंगे / निसूरी",
        "सेठ (नोलहा के)", "डेंगरे / डांगरे", "बरेले / बरोल", "नोलहा / चिलहा", "सिंघे के कुवर", " साब / साहु"
      ]
    },
    {
      mainGotra: "वात्सल / गाचिल / वाटल",
      rishi: "ऋषि - वत्सिष्ठ",
      kulDevi: "कुलदेवी - मां विष्णु भक्ति देवी",
      anknaList: [
        "चउदा (चोदहा, चौदा)", "सोनी", "खरया / खैरया", "सेठ (कठोरी, करौली के)", "पटरैया / पटेरहा",
        "बरहा / बरेहे", " हथनोरिया / हथनोटिया ", "दमोरहा", "लखटकिया", "पहारू", "दगरिहा",
        "कुरेटिया /कुरैठिया ", "गुगोरिया / उगोरिया", "जुगोरिया", "सुलगनिया / सुलगहनाया ",
        "अमरोहा", "डाडम", "सावला", "वगेरिया"
      ]
    },
    {
      mainGotra: "कोच्छल / कोच्छिल",
      rishi: "ऋषि -कोशिक ",
      kulDevi: "कुलदेवी - माँ कालिका देवी ",
      anknaList: [
        "नीखरा", "इन्दुरख्या", "कस्तवार", "कुरेले", "मिसुरहा / मसौरया",
        "सावला / साउला / छावला", "विसवारी", "पहारिया", "पिपरसानिया", "ददरया",
        "नाछोला", "बड़ोन्या", "बिनौरया", "खरया / खरहा", "इकसड़े",
        "सुलगहनया / सुलगानियाँ", "कंजौल्या", "निगोती (निगोतिया)", "रावत",
        "सेठ", "सोनी"
      ]
    },
    {
      mainGotra: "जैतल",
      rishi: "ऋषि - जेमिन",
      kulDevi: "कुलदेवी - माँ ज्वाला देवी ",
      anknaList: [
        "बड़ेरिया", "कठल / कठिल", "नगरिया", "रिखोल्या / लखौरया", "सेठ (बरेठ के)",
        "शिकोल्या /सकोरया / शिपौल्या", "लहारिया", "सिरोजिया"
      ]
    },
    {
      mainGotra: "वाच्छिल",
      rishi: "ऋषि - वत्सार",
      kulDevi: "कुलदेवी - माँ सरस्वती देवी",
      anknaList: [
        "कुचिया / कुचहा", "टिकरया / टपकले", "दमेले", "बरसैंया", "तपा",
        "कनकने", "मातेले / महतेले", "हुँका", "सेठ (नवगाँव, नेगुआ के)", "बड़ोन्या",
        "गन्धी", "रिखोल्या", "धनोरिया", "इटोरिया / इटोदिया", "सकेरे / सकहेरे",
        "सोनी", "खड़सरिया / खरसडिया", "बढ़िया", "विनौरया", "सिरसोनिया / रिसौनिया",
        "शिकोल्या / सकोरया / शिपौल्या", "खांगट", "कटारे", "सरावगी (मऊ के)", "चुनगेले"
      ]
    },
    {
      mainGotra: "काछिल",
      rishi: "ऋषि - कात्यायन",
      kulDevi: "कुलदेवी - माँ इलहसरी देवी",
      anknaList: [
        "चपरा / चुपरा", "तुसेले", "पिपरसानिया", "सेठ (पाडरी के)", "धूसर",
        "भोंदिया (भोंदू)", "अमौल्या / अमौरिया", "झुड़ेले / झड़", "रावत", "कटारे"
      ]
    },
    {
      mainGotra: "भाल",
      rishi: "ऋषि - भर",
      kulDevi: "कुलदेवी - माँ भगवती देवी",
      anknaList: [
        "कुदरया", "खर्द", "सुहाने / सोहाने", "डेंगरे / डागरे", "तीतबिलासी / तीतबिरासी",
        "घुरा", "खांगट", "बजरंग गडिया", "नैना / नेहना", "पचनोले / पचरौल्या",
        "साह / साव (मिहोना के)", "सेठ (चंदैया के)", "चन्दैया (चन्द्रसेनिया)", "झुड़ेले / जुरेले / झूड"
      ]
    },
    {
      mainGotra: "कोहिल",
      rishi: "ऋषि - कृषिक",
      kulDevi: "कुलदेवी - माँ कृष्ण शक्ति देवी",
      anknaList: [
        "कन्देले", "लोहिया / लोइया", "शाव / शाह (उन्नाव के)", "झूके (झूंक)"
      ]
    },
    {
      mainGotra: "कासिव / कासव",
      rishi: "ऋषि - कश्यप",
      kulDevi: "कुलदेवी - माँ हिंगलाज देवी",
      anknaList: [
        "आसू / आसूपी / आसूती", "खंताल", "बेडर / बाडिल / बैडाल", "सुदीपा",
        "आसुदीपा", "दीपा / टीपा / तीपा"
      ]
    },
    {
      mainGotra: "सिंगल",
      rishi: "",
      kulDevi: "",
      anknaList: [
        "इस गोत्र के वर्तमान में कोई भी आंकने मौजूद नहीं हैं"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <Helmet>
        <title>
          {language === "hi" ? "गोत्र और आंकना - गहोई समाज" : "Gotra & Aankna - Gahoi Samaj"}
        </title>
        <meta
          name="description"
          content={
            language === "hi"
              ? "गहोई समाज के गोत्र और आंकना की जानकारी"
              : "Information about Gotras and Aankna of Gahoi Samaj"
          }
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative w-full bg-red-800 h-[300px] sm:h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/gotra-bg.webp"
          alt="Gotra & Aankna Background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="text-center w-full pt-12 sm:pt-16 md:pt-20">
            <div className="p-3 md:p-5 bg-white/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 backdrop-blur-sm">
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
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 ${languageFontClass}`}>
              {language === "hi" ? "गोत्र और आंकना" : "Gotra & Aankna"}
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto px-4 ${languageFontClass}`}>
              {language === "hi"
                ? "हमारी परंपरा और विरासत का महत्वपूर्ण हिस्सा"
                : "An important part of our tradition and heritage"}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {gotraAnknaData.map((gotra, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Card Header */}
              <div className="bg-red-700 px-4 sm:px-6 py-3 sm:py-4 text-white">
                <div className="flex items-center justify-between">
                  <h2 className={`text-xl sm:text-2xl font-bold ${languageFontClass} leading-tight`}>
                    {gotra.mainGotra}
                  </h2>
                  <span className="bg-white/20 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Rishi and Kuldevi */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-red-50">
                <div className="space-y-2">
                  <p className={`${languageFontClass} text-sm sm:text-base text-gray-700 flex items-center`}>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                    {gotra.rishi}
                  </p>
                  <p className={`${languageFontClass} text-sm sm:text-base text-gray-700 flex items-center`}>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                    {gotra.kulDevi}
                  </p>
                </div>
              </div>

              {/* Aankna List */}
              <div className="px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className={`text-base sm:text-lg font-medium text-gray-900 ${languageFontClass}`}>
                    {language === "hi" ? "आंकना सूची" : "Aankna List"}
                  </h3>
                  <button
                    onClick={() => setActiveGotra(activeGotra === index ? null : index)}
                    className="text-gray-500 p-1"
                  >
                    {activeGotra === index ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300
                                ${activeGotra === index ? 'max-h-[500px]' : 'max-h-28 sm:max-h-32'}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {gotra.anknaList.map((ankna, idx) => (
                      <div
                        key={idx}
                        className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-50 rounded-lg text-gray-700"
                      >
                        <span className={`block text-sm sm:text-base ${languageFontClass}`}>{ankna}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Importance of Gotra */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-red-700 px-4 sm:px-6 py-3 sm:py-4">
              <h3 className={`text-xl sm:text-2xl font-bold text-white ${languageFontClass}`}>
                {language === "hi" ? "गोत्र का महत्व" : "Importance of Gotra"}
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <p className={`text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 ${languageFontClass}`}>
                {language === "hi" 
                  ? "गोत्र एक प्राचीन परंपरा है जो वंश परंपरा को दर्शाती है। यह हमारी पहचान का एक महत्वपूर्ण हिस्सा है।"
                  : "Gotra is an ancient tradition that represents lineage. It is an important part of our identity."}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  language === "hi" ? "वैवाहिक संबंधों में मार्गदर्शन" : "Guidance in matrimonial relations",
                  language === "hi" ? "वंश परंपरा की पहचान" : "Identification of lineage",
                  language === "hi" ? "सामाजिक व्यवस्था" : "Social organization",
                  language === "hi" ? "धार्मिक अनुष्ठानों में उपयोग" : "Use in religious rituals"
                ].map((item, idx) => (
                  <li key={idx} className={`flex items-center text-sm sm:text-base text-gray-700 ${languageFontClass}`}>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Importance of Aankna */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-red-700 px-4 sm:px-6 py-3 sm:py-4">
              <h3 className={`text-xl sm:text-2xl font-bold text-white ${languageFontClass}`}>
                {language === "hi" ? "आंकना का महत्व" : "Importance of Aankna"}
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <p className={`text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 ${languageFontClass}`}>
                {language === "hi"
                  ? "आंकना हमारी पारिवारिक पहचान का एक विशिष्ट चिह्न है। यह हमारी सामाजिक व्यवस्था को मजबूत बनाता है।"
                  : "Aankna is a unique identifier of our family identity. It strengthens our social structure."}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  language === "hi" ? "पारिवारिक पहचान" : "Family identity",
                  language === "hi" ? "सामाजिक संबंधों का निर्धारण" : "Determination of social relations",
                  language === "hi" ? "परंपराओं का संरक्षण" : "Preservation of traditions",
                  language === "hi" ? "वंशावली का ज्ञान" : "Knowledge of genealogy"
                ].map((item, idx) => (
                  <li key={idx} className={`flex items-center text-sm sm:text-base text-gray-700 ${languageFontClass}`}>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotraAankna; 