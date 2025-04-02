import React from "react";

const Assembly2015 = () => {
  const officials = [
    {
      position: "राष्ट्रीय अध्यक्ष",
      name: "श्री कैलाश नारायण सावला",
      address: "5 / 45 कृष्णपुरा डबरा (ग्वालियर) (म. प्र.)",
      mobile: "मोबा. 9425481606",
      image: "/executive/1.webp"
    },
    {
      position: "वरिष्ठ उपाध्यक्ष",
      name: "श्रीमती पुष्पा ददरया",
      address: "3664 मनमोहन नगर, गायत्री मन्दिर के पास, जबलपुर (म.प्र.)",
      mobile: "मोबा. 9479495800",
      image: "/executive/2.webp"
    },
    {
      position: "उपाध्यक्ष",
      name: "श्री सतीष सुहाने",
      address: "305 तानसेन अपार्टमेन्ट, तानसेन रोड, ग्वालियर (म.प्र.)",
      mobile: "मोबा. 9425482181",
      image: "/executive/3.webp"
    },
    {
      position: "उपाध्यक्ष",
      name: "श्री रमेश सेठ",
      address: "1389, रिफ्यूजी कॉलोनी, सीपरी बाजार, झांसी (उ.प्र.)",
      mobile: "मोबा. 9415030647",
      image: "/executive/4.webp"
    },
    {
      position: "उपाध्यक्ष",
      name: "श्री पुरूशोत्तम पोद्दार",
      address: "पोद्दार ज्वैलर्स, इन्दरगढ़ जिला-दतिया (म.प्र.)",
      mobile: "मोबा. 9893877819",
      image: "/executive/5.webp"
    },
    {
      position: "उपाध्यक्ष",
      name: "श्री कैलाश नारायण सुहाने",
      address: "डी-72, विश्णु हाईटेक सिटी बाबडि़याकला भोपाल (म.प्र.)",
      mobile: "मोबा. 9425011411",
      image: "/executive/6.webp"
    },
    {
      position: "महामंत्री",
      name: "श्री सतीष महतेले",
      address: "एच-10, चेतकपुरी, ग्वालियर (म.प्र.)",
      mobile: "मोबा. 9425338638",
      image: "/executive/7.webp"
    },
    {
      position: "मंत्री",
      name: "श्री राधेश्याम सेठ",
      address: "माँ भगवती कृपा, मोटे गणेश गली, खासगी बाजार, ग्वालियर (म.प्र.)",
      mobile: "मोबा. 9425336363",
      image: "/executive/8.webp"
    },
    {
      position: "मंत्री",
      name: "श्री मैथिलीशरण सेठ",
      address: "642 कमलसिंह कॉलोनी, खाती बाबा,झांसी (उ.प्र.)",
      mobile: "मोबा. 09415401600",
      image: "/executive/9.webp"
    },
    {
      position: "मंत्री",
      name: "श्री अशोक नगरिया",
      address: "बी-601, षिवदर्षन हाउसिंग सोसायटी, नवी मुम्बई (महा.)",
      mobile: "मोबा. 9320341782",
      image: "/executive/10.webp"
    },
    {
      position: "मंत्री",
      name: "श्री जगदीश प्रसाद गेड़ा",
      address: "राममन्दिर के सामने, फालका बाजार, ग्वालियर (म.प्र.)",
      mobile: "मोबा. 9203305960",
      image: "/executive/img-8.webp"
    },
    {
      position: "मंत्री",
      name: "श्री संजय ब्रजपुरिया",
      address: "910 तुलसी नगर, उरई, जिला-जालौन (उ.प्र.)",
      mobile: "मोबा. 9829743382",
      image: "/executive/12.webp"
    },
    {
      position: "कोशाध्यक्ष",
      name: "श्री राकेश लहारिया",
      address: "लहारिया भवन, लोहिया बाजार,ग्वालियर (म.प्र.)",
      mobile: "मोबा. 9770252486",
      image: "/executive/13.webp"
    },
    {
      position: "प्रचार मंत्री",
      name: "श्री मोहन कनकने",
      address: "थोराट की गोठ, लोहिया बाजार,ग्वालियर (म.प्र.)",
      mobile: "मो. 9425109958",
      image: "/executive/14.webp"
    },
    {
      position: "सम्पत्ति न्यास निरी.",
      name: "श्री मनोज चौधरी",
      address: "बड़ा बाजार, पिछोर, जिला-शिवपुरी (म.प्र.)",
      mobile: "मोबा. 9425763325",
      image: "/executive/img-8.webp"
    },
    {
      position: "अंकेक्षक",
      name: "श्री प्रदीप नीखरा",
      address: "15 अमलतास फेस-2, चूना भट्टी भोपाल (म.प्र.)",
      mobile: "मोबा. 9425011461",
      image: "/executive/15.webp"
    }
  ];

  const nominatedOfficials = [
    {
      position: "प्रबं.",
      name: "श्री संजय बिष्वारी",
      address: "राजाबेटी भवन128/240 एच-1 ब्लॉक किदवई नगर कानपुर (उ.प्र.)",
      mobile: "मोबा. 9415591278",
      image: "/executive/img-8.webp"
    },
    {
      position: "प्रंब.",
      name: "श्री ओमप्रकाश सेठ (दाऊ)",
      address: "चित्रकूट भवनतेजेन्द्रनाथ की गली, दाल बाजार, ग्वालियर (म.प्र.)",
      mobile: "मोबा. 9425116791",
      image: "/executive/img-8.webp"
    },
    {
      position: "कार्यकारी अध्यक्ष",
      name: "श्री भोगीलाल बिलैया",
      address: "न्यू कॉलोनी, करैरा जिला-शिवपुरी (म.प्र.)",
      mobile: "मोबा. 9406589899",
      image: "/executive/img-8.webp"
    },
    {
      position: "केन्द्रीय का. मंत्री",
      name: "श्री भरत सेठ",
      address: "सनराइज़ होटल ए 2072 . सिविल लाइन ए झाँसी (उ. प्र.)",
      mobile: "मोबा.9415123515",
      image: "/executive/img-8.webp"
    },
    {
      position: "संयुक्त मंत्री",
      name: "श्री कमल तपा",
      address: "आई-25 हरीषंकरपुरम ग्वालियर (म.प्र.)",
      mobile: "मोबा. 7697219900",
      image: "/executive/img-8.webp"
    },
    {
      position: "संयुक्त मंत्री",
      name: "श्री राकेश रावत",
      address: "2 / 403 विवेक खंड ए गोमती नगर ए",
      mobile: "मोबा. 9415312458",
      image: "/executive/img-8.webp"
    },
    {
      position: "संयुक्त मंत्री",
      name: "श्री शिवशंकर सेठ",
      address: "सेठ भवन\" सिद्धेश्वर मंदिर के सामने ए सिद्धेश्वर कॉलोनी ए शिवपुरी (म.प्र.)",
      mobile: "मोबा. 9425136790",
      image: "/executive/img-8.webp"
    },
    {
      position: "संयुक्त मंत्री",
      name: "श्री राकेश कनकने",
      address: "कालेज चौराहा, पिछोर, जिला-शिवपुरी (म.प्र.)",
      mobile: "मोबा. 9425490357",
      image: "/executive/img-8.webp"
    },
    {
      position: "विकास मंत्री",
      name: "श्री अशोक सोनी",
      address: "19 राजदेव कॉलोनी, नया कबाड़खाना भोपाल (म.प्र.)",
      mobile: "मोबा.9893052500",
      image: "/executive/img-8.webp"
    },
    {
      position: "विकास मंत्री",
      name: "श्री सुदामाप्रसाद सिजरिया",
      address: "मिहोना, जिला-भिण्ड (म.प्र.)",
      mobile: "मोबा. 9926661905",
      image: "/executive/img-8.webp"
    },
    {
      position: "विकास मंत्री",
      name: "श्री राजकुमार लोहिया",
      address: "पूजा ज्वेलर्स ए सराफा बाजार ए इतवारीए नागपुर (महा.)",
      mobile: "मोबा. 9422146164",
      image: "/executive/img-8.webp"
    },
    {
      position: "विकास मंत्री",
      name: "श्री सतीष सुहाने",
      address: "44 गुरू घासीदास वार्ड, कुसुमबिला के सामने, रिंग रोड, रायपुर (छ.ग.)",
      mobile: "मोबा. 982616502",
      image: "/executive/img-8.webp"
    },
    {
      position: "संगठन मंत्री",
      name: "श्री प्रमोद गेड़ा",
      address: "एफ-91, हरीशंकरपुरम, प्रमिला पैलेस के सामने, ग्वालियर (म.प्र.)",
      mobile: "मोबा. 9301121008",
      image: "/executive/img-8.webp"
    },
    {
      position: "संगठन मंत्री",
      name: "श्री प्रेमनारायण लहारिया",
      address: "432 / 9 बीए साकेत नगर ए भोपाल(म. प्र.)",
      mobile: "मोबा. 9893026732",
      image: "/executive/img-8.webp"
    },
    {
      position: "संगठन मंत्री",
      name: "श्री सुरेश बंधु",
      address: "बीज भण्डार रोड, करैरा, जिला-शिवपुरी (म.प्र.)",
      mobile: "मोबा. 9425765588",
      image: "/executive/img-8.webp"
    },
    {
      position: "संगठन मंत्री",
      name: "श्री नितिन सरावगी",
      address: "झांसी (उ.प्र.)",
      mobile: "मोबा. 9415031136",
      image: "/executive/img-8.webp"
    },
    {
      position: "संगठन मंत्री",
      name: "श्री सतीश सेठ",
      address: "बी -89 ए एकता नगर ए एम. आर. 4रोड ए जबलपुर (म.प्र.)",
      mobile: "मोबा. 9407252501",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री नरेन्द्र खरया",
      address: "एचआईजी-1,-443 हाउसिंग बोर्ड, दुर्ग (छ.ग.)",
      mobile: "मोबा. 9425234740",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री राजेश नीखरा",
      address: "इन्दरगढ़, जिला-दतिया (म.प्र.)",
      mobile: "",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री राकेश कनकने",
      address: "ई-10, एस/आर. हरी शंकरपुरम, ग्वालियर (म.प्र.)",
      mobile: "मोबा. 9893051569",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री विनोद नीखरा",
      address: "द्वारा- जमुना प्रसाद नीखराए डी-185ए अम्बिका नगरए वेलापार्कए ओढवए अहमदाबाद (गुजरात)",
      mobile: "मोबा. 9998071666",
      image: "/executive/img-8.webp"
    },
    {
      position: "उपमंत्री",
      name: "श्री रामकुमार नीखरा",
      address: "ईडबल्यूएफ 635 सरस्वती नगर, जवाहर चौक, भोपाल (म.प्र.)",
      mobile: "मोबा. 9826019279",
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
                2015 महासभा
              </p>
            </div>
          </div>
        </div>

        {/* List 2015 Assembly Officials */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center">
            अ.भा.ग.वैश्य महासभा कार्यकारिणी सूची-2015
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
          मनोनीत पदाधिकारी गण 2015

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

export default Assembly2015; 