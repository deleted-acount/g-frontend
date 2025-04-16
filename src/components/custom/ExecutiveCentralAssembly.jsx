import React from "react";

const ExecutiveCentralAssembly = () => {
  const officials = [
    {
      position: "राष्ट्रीय अध्यक्ष",
      name: "श्री राधेश्याम कुमिया",
      address: "J -46 गांधी नगर,ग्वालियर",
      mobile: "मोबा. 09425114006",
      image: "/executive/img-1.webp"
    },
    {
      position: "महामंत्री",
      name: "श्री राजीव साहवे",
      address: "29 भोपाल विखारा वार्ड होशी",
      mobile: "मोबा. 09415073295",
      image: "/executive/img-2.webp"
    },
    {
        position: "वरिष्टउपाध्यक्ष",
        name: "श्री भोगीलाल बिलैया",
        address: "न्यू कालोनी, करेरा जिला- शिवपुरी",
        mobile: "मोबा. 09406589899",
        image: "/executive/img-3.webp"
      },
      {
        position: "प्रचार मंत्री",
        name: "श्री रमेश चन्द्र सरावगी",
        address: "पुराने थाने के सामने ,गोहद जिला -भिंड मोबा",
        mobile: "मोबा. 9893140676",
        image: "/executive/img-4.webp"
      },
      {
        position: "प्रबंधक राजाबेटी",
        name: "श्री परमानन्द कटारे",
        address: "74 M.I.G, Wब्लाक केसव नगर जूही, कानपुर मोबा.",
        mobile: "मोबा. 09415044099",
        image: "/executive/img-5.webp"
      },
      {
        position: "प्रबंधक गहोई भवन चित्रकूट",
        name: "श्री हरीबाबू सेठ",
        address: "जवाहर गंज ,गल्ला मंडी के सामने ,डबरा जिला -ग्वालियर",
        mobile: "मोबा. 09300102240",
        image: "/executive/img-6.webp"
      },
      {
        position: "कोषाध्यक्ष",
        name: "उमाशंकर कुचिया",
        address: "15 / 21 ए , सहयोग सदन ,सिविल लाइन, कानपुर (उ. प्र.)",
        mobile: "मोबा. 09839240116",
        image: "/executive/img-7.webp"
      },
      {
        position: "लेखा परीक्षक",
        name: "श्री प्रदीप नीखरा",
        address: "भोपाल",
        mobile: "",
        image: "/executive/img-8.webp"
      },
      
  ];

  const nominatedOfficials = [
    {
      position: "कार्यकारी अध्यक्ष",
      name: "श्री उमाशंकर लहारिया",
      address: "MZ - 5 , गुल मोहर ,ग्रीन गार्डन, सिटी सेंटर ,ग्वालियर",
      mobile: "मोबा. 09425150272",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपाध्यक्ष",
      name: "श्रीराम गोपाल छिरोल्या (डल्लू भैया )",
      address: "13 ,दाता कालोनी ,एअरपोर्ट रोड ,भोपाल",
      mobile: "9993953844",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपाद्यक्ष",
      name: "श्रीमती पुष्पा ददरया",
      address: "1664, मनमोहन नगर, कृषि उपज मंडी के पास जबलपुर",
      mobile: "मोबा. 9479495800",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपाध्यक्ष",
      name: "श्री बाबू लाल डेंगरे",
      address: "117, जावरा कम्पाउन्ड ,इंदौर",
      mobile: "फोन 0731 -2705182",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपाद्यक्ष",
      name: "श्री सतीश सुहाने",
      address: "305 ,तानसेन अपार्टमेन्ट ,तानसेन रोड ग्वालियर",
      mobile: "मोबा. 9425482181",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपाध्यक्ष",
      name: "श्री प्रकाश नौगरैया",
      address: "जैन नर्सिंग होम के पास ,सिविल लाइन , झाँसी",
      mobile: "मोबा. 9415030373",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री",
      name: "श्री शशिकांत निगोतिया",
      address: "160 ,गोपाल गंज ,उरई जिला -जालोन (उ.प्र.)",
      mobile: "मोबा. 9336031818",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री",
      name: "डॉ . करुणेश गुप्ता (चपरा )",
      address: "1 / 10074 ,बी गली न. 35 ,द्धितीय तल, वेस्ट गोरख पार्क ,दिल्ली",
      mobile: "मोबा. 9891317151",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री",
      name: "श्री भगवानदास बिलैया",
      address: "242 ,न्यू मिनरल जेससीम बंगला ,भोपाल",
      mobile: "मोबा. 9827049690",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री",
      name: "श्री अरुण नीखरा",
      address: "बलदेव बाग, जबलपुर",
      mobile: "मोबा. 9425163183",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपकोषाध्यक्ष",
      name: "श्री राजेश जैन",
      address: "जैन मंदिर के पास ,सिविल लाइन ,झाँसी",
      mobile: "मोबा. 9415032222",
      image: "/executive/img-8.webp"
    },
    {
      position: "संगठन मंत्री",
      name: "श्री अजय जैन",
      address: "जैन मंदिर के पास ,सिविल लाइन ,झाँसी",
      mobile: "मोबा. 9415032222",
      image: "/executive/img-8.webp"
    },
    {
      position: "संगठन मंत्री",
      name: "श्री अजय जैन",
      address: "जैन मंदिर के पास ,सिविल लाइन ,झाँसी",
      mobile: "मोबा. 9415032222",
      image: "/executive/img-8.webp"
    },
    {
      position: "संगठन मंत्री",
      name: "श्री अजय जैन",
      address: "जैन मंदिर के पास ,सिविल लाइन ,झाँसी",
      mobile: "मोबा. 9415032222",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री पुरषोत्तम बरसैया",
      address: "द्वारा -महेश बलेचा का मकान,स्वर्णकार कालोनी ,विदिशा",
      mobile: "मोबा. 9425431588",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री रमेश लोहिया",
      address: "भोपाल",
      mobile: "",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री कालीचरण मोदी",
      address: "मोदी सदन ,ठाकुर बाबा रोड ,डबरा",
      mobile: "मोबा. 9685233127",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री संतोष कुरेले",
      address: "आनंद टाकीज के पास ,दतिया",
      mobile: "मोबा. 9425113401",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री दिलीप लोहिया",
      address: "फ्लेट न. 805 ,सत्यम रेसीडेंसी ,सत्यदेव नगर , गाँधी रोड, ग्वालियर",
      mobile: "मोबा. 9827221215",
      image: "/executive/img-8.webp"
    },
    {
      position: "विशि. का. सदस्य",
      name: "श्री कैलाशनारायण सावला",
      address: "5/45 कृष्णपुरा, डबरा जिला- ग्वालियर",
      mobile: "मोबा. 09425481606",
      image: "/executive/img-8.webp"
    },
    {
      position: "विशि. का. सदस्य",
      name: "श्री हरिनारायण बडेरिया",
      address: "बी-144 , ग्रीन पार्क कालोनी ,बेरसिया रोड भोपाल",
      mobile: "मोबा. 9425301237",
      image: "/executive/img-8.webp"
    },
    {
      position: "विशि. का. सदस्य",
      name: "श्री द्वारिका प्रसाद सुहाने",
      address: "418 -गोपाल गंज ,मोनीबाबा मंदिर के पीछे उरई जिला - जालोन",
      mobile: "मोबा. 09451317617",
      image: "/executive/img-8.webp"
    },
    {
      position: "विशि. का. सदस्य",
      name: "श्रीमति शोभाखरैया",
      address: "40 ,खेरा नर्सिंग होम ,बड़ा बाज़ार ,पन्ना",
      mobile: "",
      image: "/executive/img-8.webp"
    },
    {
      position: "विशि. का. सदस्य",
      name: "श्री दिनेश गेंडा",
      address: "खोड (शिवपुरी)",
      mobile: "",
      image: "/executive/img-8.webp"
    },
    {
      position: "विशि. का. सदस्य",
      name: "श्री भारत नीखरा",
      address: "जेपीका हॉउस ,म.न. 3 ,व्हाइट चर्च कालोनी इंदौर",
      mobile: "मोबा. 9425057286",
      image: "/executive/img-8.webp"
    },
    {
      position: "विशि. का. सदस्य",
      name: "श्री रमेश सुहाने",
      address: "विनोद ट्रेडिंग कंपनी ,ए.बी. रोड ,शिवपुरी",
      mobile: "मोबा. 9425136173",
      image: "/executive/img-8.webp"
    }
  ];

  const projectOfficials = [
    {
      position: "अध्यक्ष न्यायाधिकरण",
      name: "श्री सुन्दरलाल नौगरैया (पूर्ब न्याय़धीश )",
      address: "ऍम.आइ.जी .173 ,माधव नगर ,ग्वालियर",
      mobile: "मोबा. 09425112036",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री न्यायाधिकरण",
      name: "श्री ब्रिजेश कुमार गुप्ता (मतेले) एडवो.",
      address: "मुख्य डाकखाने के पास ,भिंड",
      mobile: "मोबा. 9425129575",
      image: "/executive/img-8.webp"
    },
    {
      position: "अध्यक्ष अक्षय निधि",
      name: "श्री सुभास कुचिया (पूर्ब आयकर अधिकारी)",
      address: "वार्ड न. 27 ,गुप्ता काम्पलेक्स ,प्रेम नगर बालाघाट",
      mobile: "मोबा. 09425146302",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री अक्षय निधि",
      name: "श्री मदन छिरोल्या",
      address: "उषा कालोनी , डबरा जिला -ग्वालियर",
      mobile: "मोबा. 9425482001",
      image: "/executive/img-8.webp"
    },
    {
      position: "अध्यक्ष गहोई ग्लो. चे.ऑ. कॉमर्स",
      name: "श्री योगेश नौगरैया",
      address: "ई 1 /121 ,अरेरा कालोनी ,भोपाल",
      mobile: "मोबा. 09827052676",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री गहोई ग्लो. चे.ऑ. कॉमर्स",
      name: "श्री सुभाष खर्द",
      address: "91 /92 ,सिविल लाइन , झाँसी",
      mobile: "मोबा. 09415031397",
      image: "/executive/img-8.webp"
    },
    {
      position: "अध्यक्ष - शास . कर्मचारी",
      name: "श्री रामगोपाल नीखरा",
      address: "मोटे गणेश जी मंदिर के पास ,खासगी बाज़ार ग्वालियर",
      mobile: "मोबा. 09425243435",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री - शास . कर्मचारी",
      name: "श्री विनोद सिपौलिया",
      address: "नेताजी चोक ,दुर्गा मंदिर के पास ,न्यू शांति नगर ,रायपुर",
      mobile: "मोबा. 9424218451",
      image: "/executive/img-8.webp"
    },
    {
      position: "अध्यक्ष राजनीतिज्ञ",
      name: "श्री जुगलकिशोर इटोरिया",
      address: "ई -6 , 42 अरोरा कालोनी ,भोपाल",
      mobile: "मोबा. 09826025346",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री राजनीतिज्ञ",
      name: "श्री राजकुमार नीखरा",
      address: "सागर कंसयानी प्रा.लिम.कासिम खां का बड़ा ,दाल बाज़ार,ग्वालियर",
      mobile: "मोबा. 09826344311",
      image: "/executive/img-8.webp"
    },
    {
      position: "अध्यक्ष गहोई कल्याण कोष",
      name: "श्री कैलाश नारायण सुहाने",
      address: "ई -२5,अरेरा कालोनी ,भोपाल",
      mobile: "मोबा. 09452012411",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री गहोई कल्याण कोष",
      name: "श्री अलोक टिकरिया",
      address: "383 ,टिकरया मार्ग ,छतरपुर",
      mobile: "मोबा. 9425304544",
      image: "/executive/img-8.webp"
    },
    {
      position: "अध्यक्ष अखिल भारतीय गहोई वैश्य महिला सभा",
      name: "श्री मती संध्या नगरिया",
      address: "कोठी न. 8 प्रियंका नगर, कोलार रोड,भोपाल",
      mobile: "मोबा. 09893041693",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री अखिल भारतीय गहोई वैश्य महिला सभा",
      name: "श्री मती रजनी रावत",
      address: "ग्वाल मंगरा तालाब के पास, छतरपुर",
      mobile: "मोबा. 09425146234",
      image: "/executive/img-8.webp"
    },
    {
      position: "अध्यक्ष अखिल भारतीय गहोई वैश्य नव युवक मण्डल",
      name: "श्री प्रोमोद सेठ (भारती )",
      address: "करेरा, जिला शिवपुरी",
      mobile: "मोबा. 09425489922",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री अखिल भारतीय गहोई वैश्य युवक मण्डल",
      name: "श्री राहुल नगरिया",
      address: "घंटा घर चौराहा, मेन रोड, उरई",
      mobile: "मोबा. 09415153212",
      image: "/executive/img-8.webp"
    },
    {
      position: "अध्यक्ष अखिल भारतीय गहोई वैश्य वरिष्ठ संघ",
      name: "श्री गनपत राम निखरा",
      address: "विवेकानंद कालोनी, फलका बाज़ार, ग्वालियर",
      mobile: "मोबा. 09425113476",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री अखिल भारतीय गहोई वैश्य वरिष्ठ संघ",
      name: "श्री एम. सी. सुहाने",
      address: "2 बी/540 वसुन्धरा, गाज़ियाबाद",
      mobile: "मोबा. 09873666369",
      image: "/executive/img-8.webp"
    },
    {
      position: "मुख्या चुनाव आयुक्त",
      name: "श्री आर. एन. गुप्ता",
      address: "ग्वालियर",
      mobile: "मोबा. 09425111349",
      image: "/executive/img-8.webp"
    },
    {
      position: "संयोजक जनगणना",
      name: "श्री कुबेर चन्द्र रेजा",
      address: "भोपाल",
      mobile: "मोबा. 09303135377",
      image: "/executive/img-8.webp"
    }
  ];

  const OfficialCard = ({ official }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-red-200/50 transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent z-10"></div>
        <img
          src={official.image}
          alt={official.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "/resources/default-profile.webp";
          }}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 z-20 flex justify-center">
          <div className="bg-red-800/90 backdrop-blur-sm rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 inline-block">
            <h3 className="text-white font-medium text-xs sm:text-sm md:text-base text-center whitespace-normal leading-tight">
              {official.position}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-1.5 sm:p-2 md:p-3 text-center">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-red-800 mb-0.5 sm:mb-1">
          {official.name}
        </h2>
        <div className="space-y-0.5 text-gray-700 text-xs sm:text-sm">
          <p className="leading-tight">{official.address}</p>
          <p className="font-medium">{official.mobile}</p>
        </div>
      </div>
    </div>
  );

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
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6">
            <div className="inline-block bg-red-800 rounded-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 shadow-lg">
              <p className="text-base sm:text-lg md:text-xl font-medium text-white">
                कार्यकारिणी महासभा
              </p>
            </div>
          </div>
        </div>

        {/* Elected Officials Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center">
            अ.भा.ग.वैश्य महासभा कार्यकारिणी सूची
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {officials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>

        {/* Nominated Officials Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center">
            महासभा के मनोनीत पदाधिकारी एबं का. का. सदस्यों की सूची
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {nominatedOfficials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>

        {/* Project Officials Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center">
            प्रकल्पों के पधाधिकारी
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {projectOfficials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCentralAssembly; 