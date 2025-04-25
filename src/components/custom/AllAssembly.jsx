"use client";
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet";

const AllAssembly = () => {
  const [activeTab, setActiveTab] = useState("2015");
  const { language } = useLanguage();

  // Language-specific font class
  const languageFontClass = language === "hi" ? "font-[Noto_Sans_Devanagari]" : "font-inter";

  const translations = {
    pageTitle: {
      hi: "गहोई वैश्य महासभा",
      en: "Gahoi Vaishya Mahasabha"
    },
    pageSubtitle: {
      hi: "सभी महासभाओं का विवरण",
      en: "Details of All Assemblies"
    },
    tab2015: {
      hi: "2015 महासभा",
      en: "2015 Assembly"
    },
    tabCentral: {
      hi: "कार्यकारिणी महासभा",
      en: "Executive Assembly"
    },
    executiveList: {
      hi: "अ.भा.ग.वैश्य महासभा कार्यकारिणी सूची",
      en: "All India Gahoi Vaishya Mahasabha Executive List"
    },
    executiveList2015: {
      hi: "अ.भा.ग.वैश्य महासभा कार्यकारिणी सूची-2015",
      en: "All India Gahoi Vaishya Mahasabha Executive List-2015"
    },
    nominatedOfficials2015: {
      hi: "मनोनीत पदाधिकारी गण 2015",
      en: "Nominated Officials 2015"
    },
    nominatedOfficialsCentral: {
      hi: "महासभा के मनोनीत पदाधिकारी एबं का. का. सदस्यों की सूची",
      en: "List of Nominated Officials and Executive Members"
    },
    projectOfficials: {
      hi: "प्रकल्पों के पधाधिकारी",
      en: "Project Officials"
    }
  };

  const Assembly2015Data = {
    officials: [
      {
        position: language === "hi" ? "राष्ट्रीय अध्यक्ष" : "National President",
        name: language === "hi" ? "श्री कैलाश नारायण सावला" : "Shri Kailash Narayan Sawla",
        address: language === "hi" ? "5 / 45 कृष्णपुरा डबरा (ग्वालियर) (म. प्र.)" : "5/45 Krishnapura Dabra (Gwalior) (M.P.)",
        mobile: language === "hi" ? "मोबा. 9425481606" : "Mob. 9425481606",
        image: "/executive/1.webp"
      },
      {
        position: language === "hi" ? "वरिष्ठ उपाध्यक्ष" : "Senior Vice President",
        name: language === "hi" ? "श्रीमती पुष्पा ददरया" : "Smt. Pushpa Dadarya",
        address: language === "hi" ? "3664 मनमोहन नगर, गायत्री मन्दिर के पास, जबलपुर (म.प्र.)" : "3664 Manmohan Nagar, Near Gayatri Mandir, Jabalpur (M.P.)",
        mobile: language === "hi" ? "मोबा. 9479495800" : "Mob. 9479495800",
        image: "/executive/2.webp"
      }
    ],
    nominatedOfficials: [
      {
        position: "प्रबं.",
        name: "श्री संजय बिष्वारी",
        address: "राजाबेटी भवन128/240 एच-1 ब्लॉक किदवई नगर कानपुर (उ.प्र.)",
        mobile: "मोबा. 9415591278",
        image: "/executive/img-8.webp"
      }
    ],
    projectOfficials: [
      {
        position: "अध्यक्ष न्यायाधिकरण",
        name: "श्री सुन्दरलाल नौगरैया (पूर्ब न्याय़धीश )",
        address: "ऍम.आइ.जी .173 ,माधव नगर ,ग्वालियर",
        mobile: "मोबा. 09425112036",
        image: "/executive/img-8.webp"
      }
    ]
  };

  const ExecutiveCentralData = {
    officials: [
      {
        position: language === "hi" ? "राष्ट्रीय अध्यक्ष" : "National President",
        name: language === "hi" ? "श्री राधेश्याम कुमिया" : "Shri Radheshyam Kumiya",
        address: language === "hi" ? "J -46 गांधी नगर,ग्वालियर" : "J-46 Gandhi Nagar, Gwalior",
        mobile: language === "hi" ? "मोबा. 09425114006" : "Mob. 09425114006",
        image: "/executive/img-1.webp"
      },
      {
        position: "महामंत्री",
        name: "श्री राजीव साहवे",
        address: "29 भोपाल विखारा वार्ड होशी",
        mobile: "मोबा. 09415073295",
        image: "/executive/img-2.webp"
      }
    ],
    nominatedOfficials: [
      {
        position: "कार्यकारी अध्यक्ष",
        name: "श्री उमाशंकर लहारिया",
        address: "MZ - 5 , गुल मोहर ,ग्रीन गार्डन, सिटी सेंटर ,ग्वालियर",
        mobile: "मोबा. 09425150272",
        image: "/executive/img-8.webp"
      }
    ],
    projectOfficials: [
      {
        position: "अध्यक्ष न्यायाधिकरण",
        name: "श्री सुन्दरलाल नौगरैया (पूर्ब न्याय़धीश )",
        address: "ऍम.आइ.जी .173 ,माधव नगर ,ग्वालियर",
        mobile: "मोबा. 09425112036",
        image: "/executive/img-8.webp"
      }
    ]
  };

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
            <h3 className={`text-white font-medium text-xs sm:text-sm md:text-base text-center whitespace-normal leading-tight ${languageFontClass}`}>
              {official.position}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-1.5 sm:p-2 md:p-3 text-center">
        <h2 className={`text-sm sm:text-base md:text-lg font-bold text-red-800 mb-0.5 sm:mb-1 ${languageFontClass}`}>
          {official.name}
        </h2>
        <div className={`space-y-0.5 text-gray-700 text-xs sm:text-sm ${languageFontClass}`}>
          <p className="leading-tight">{official.address}</p>
          <p className="font-medium">{official.mobile}</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    const data = activeTab === "2015" ? Assembly2015Data : ExecutiveCentralData;
    const title = activeTab === "2015" ? translations.executiveList2015[language] : translations.executiveList[language];

    return (
      <>
        {/* Header */}
        <div className="text-center py-3 sm:py-3 md:py-4 mb-3 sm:mb-3 md:mb-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6">
            <div className="inline-block bg-red-800 rounded-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 shadow-lg">
              <p className={`text-base sm:text-lg md:text-xl font-medium text-white ${languageFontClass}`}>
                {title}
              </p>
            </div>
          </div>
        </div>

        {/* Officials Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
          <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center ${languageFontClass}`}>
            {title}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {data.officials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>

        {/* Nominated Officials Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
          <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center ${languageFontClass}`}>
            {activeTab === "2015" ? translations.nominatedOfficials2015[language] : translations.nominatedOfficialsCentral[language]}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {data.nominatedOfficials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>

        {/* Project Officials Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-3 sm:p-4 md:p-6">
          <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-4 sm:mb-5 md:mb-6 text-center ${languageFontClass}`}>
            {translations.projectOfficials[language]}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 lg:gap-8">
            {data.projectOfficials.map((official, index) => (
              <OfficialCard key={index} official={official} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>
          {language === "hi"
            ? "सभी महासभाएँ - गहोई समाज"
            : "All Assemblies - Gahoi Samaj"}
        </title>
        <meta
          name="description"
          content={
            language === "hi"
              ? "गहोई समाज की सभी महासभाओं का विवरण और कार्यकारिणी सूची।"
              : "Details of all assemblies and executive committees of Gahoi Samaj."
          }
        />
      </Helmet>

      {/* Hero Banner with Background Image */}
      <div className="relative w-full bg-red-800 pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/all-assembly-hero.webp"
          alt="All Assembly Background"
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 ${languageFontClass}`}>
              {translations.pageTitle[language]}
            </h1>
            <p className={`text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto ${languageFontClass}`}>
              {translations.pageSubtitle[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 -mt-8 relative z-20 mb-8">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-red-100 p-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab("2015")}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${languageFontClass} ${
                activeTab === "2015"
                  ? "bg-red-800 text-white"
                  : "bg-red-100 text-red-800 hover:bg-red-200"
              }`}
            >
              {translations.tab2015[language]}
            </button>
            <button
              onClick={() => setActiveTab("central")}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${languageFontClass} ${
                activeTab === "central"
                  ? "bg-red-800 text-white"
                  : "bg-red-100 text-red-800 hover:bg-red-200"
              }`}
            >
              {translations.tabCentral[language]}
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default AllAssembly; 