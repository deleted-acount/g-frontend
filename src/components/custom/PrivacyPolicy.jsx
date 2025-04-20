import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../../context/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const heroImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200";

  // Language-specific content
  const content = {
    title: {
      en: "Privacy Policy",
      hi: "गोपनीयता नीति"
    },
    subtitle: {
      en: "Your privacy is important to us. Learn how we protect and manage your information.",
      hi: "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। जानें कि हम आपकी जानकारी की सुरक्षा और प्रबंधन कैसे करते हैं।"
    },
    intro: {
      en: "Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you. This policy is intended to help you understand how we handle your information.",
      hi: "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है, और इसी तरह यह भी महत्वपूर्ण है कि हम आपकी जानकारी को कैसे एकत्र करते हैं, उपयोग करते हैं और साझा करते हैं, इस बारे में पारदर्शी होना। यह नीति आपको यह समझने में मदद करने के लिए है कि हम आपकी जानकारी का प्रबंधन कैसे करते हैं।"
    },
    sections: {
      infoCollection: {
        title: {
          en: "Information We Collect",
          hi: "हम कौन सी जानकारी एकत्र करते हैं"
        },
        items: {
          en: [
            "Personal details during registration (name, gender, date of birth, contact details, etc.)",
            "Testimonials and success stories",
            "Survey and promotional participation information",
            "Customer support interactions",
            "Messages and content shared within the platform"
          ],
          hi: [
            "पंजीकरण के दौरान व्यक्तिगत विवरण (नाम, लिंग, जन्म तिथि, संपर्क विवरण, आदि)",
            "प्रशंसापत्र और सफलता की कहानियां",
            "सर्वेक्षण और प्रचार भागीदारी जानकारी",
            "ग्राहक सहायता बातचीत",
            "प्लेटफॉर्म के भीतर साझा किए गए संदेश और सामग्री"
          ]
        }
      },
      smsPermission: {
        title: {
          en: "SMS Permissions",
          hi: "एसएमएस अनुमतियां"
        },
        intro: {
          en: "We require SMS permissions for:",
          hi: "हमें एसएमएस अनुमतियों की आवश्यकता है:"
        },
        items: {
          en: [
            "Registration verification",
            "Birthday wishes",
            "Marriage anniversary wishes"
          ],
          hi: [
            "पंजीकरण सत्यापन",
            "जन्मदिन की शुभकामनाएं",
            "विवाह की वर्षगांठ की शुभकामनाएं"
          ]
        }
      },
      infoUsage: {
        title: {
          en: "How We Use Your Information",
          hi: "हम आपकी जानकारी का उपयोग कैसे करते हैं"
        },
        intro: {
          en: "We use the information that we collect generally to:",
          hi: "हम एकत्र की गई जानकारी का उपयोग सामान्यतः इस प्रकार करते हैं:"
        },
        items: {
          en: [
            "To provide and improve our services",
            "To manage your account and preferences",
            "To provide customer support",
            "To analyze service usage and improve user experience",
            "To communicate about services and offers"
          ],
          hi: [
            "हमारी सेवाओं को प्रदान करने और सुधारने के लिए",
            "आपके खाते और प्राथमिकताओं का प्रबंधन करने के लिए",
            "ग्राहक सहायता प्रदान करने के लिए",
            "सेवा उपयोग का विश्लेषण करने और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए",
            "सेवाओं और ऑफर के बारे में संवाद करने के लिए"
          ]
        }
      },
      infoSharing: {
        title: {
          en: "Information Sharing",
          hi: "जानकारी साझाकरण"
        },
        intro: {
          en: "We do not sell, rent, or trade your personal information. We may share information with:",
          hi: "हम आपकी व्यक्तिगत जानकारी को बेचते, किराए पर देते या व्यापार नहीं करते हैं। हम जानकारी साझा कर सकते हैं:"
        },
        serviceProviders: {
          title: {
            en: "Service Providers",
            hi: "सेवा प्रदाता"
          },
          content: {
            en: "Third-party services that help us operate our platform, process payments, and analyze data.",
            hi: "तृतीय-पक्ष सेवाएं जो हमारे प्लेटफॉर्म को संचालित करने, भुगतान प्रसंस्करण और डेटा विश्लेषण में मदद करती हैं।"
          }
        },
        legal: {
          title: {
            en: "Legal Requirements",
            hi: "कानूनी आवश्यकताएं"
          },
          content: {
            en: "When required by law or to protect our legal rights.",
            hi: "जब कानून द्वारा आवश्यक हो या हमारे कानूनी अधिकारों की रक्षा के लिए।"
          }
        }
      },
      policyUpdates: {
        title: {
          en: "Policy Updates",
          hi: "नीति अपडेट"
        },
        content: {
          en: "We will notify you of any material changes to this privacy policy via email. You will have the choice to accept or decline these changes in how we use your information.",
          hi: "हम इस गोपनीयता नीति में किसी भी महत्वपूर्ण परिवर्तन के बारे में आपको ईमेल के माध्यम से सूचित करेंगे। आपके पास यह चुनने का विकल्प होगा कि आप इन परिवर्तनों को स्वीकार करते हैं या अस्वीकार करते हैं।"
        }
      }
    }
  };

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>{content.title[language]}</title>
        <meta
          name="description"
          content={content.subtitle[language]}
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative w-full bg-red-800 pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={heroImage}
          alt={content.title[language]}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white my-4">
              {content.title[language]}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {content.subtitle[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 space-y-8">
            <div className="border-l-4 border-red-800 pl-4">
              <p className="text-gray-600">
                {content.intro[language]}
              </p>
            </div>

            {/* Information Collection Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">{content.sections.infoCollection.title[language]}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  {content.sections.infoCollection.items[language].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-800 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SMS Permission Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">{content.sections.smsPermission.title[language]}</h2>
              <div className="bg-red-50 rounded-lg p-6">
                <p className="text-gray-700">
                  {content.sections.smsPermission.intro[language]}
                </p>
                <ul className="mt-3 space-y-2">
                  {content.sections.smsPermission.items[language].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-red-800 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Information Usage Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">{content.sections.infoUsage.title[language]}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="mb-4">{content.sections.infoUsage.intro[language]}</p>
                <ul className="space-y-4">
                  {content.sections.infoUsage.items[language].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-800 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Information Sharing Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">{content.sections.infoSharing.title[language]}</h2>
              <div className="bg-red-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6">
                  {content.sections.infoSharing.intro[language]}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">{content.sections.infoSharing.serviceProviders.title[language]}</h3>
                    <p className="text-gray-700">
                      {content.sections.infoSharing.serviceProviders.content[language]}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">{content.sections.infoSharing.legal.title[language]}</h3>
                    <p className="text-gray-700">
                      {content.sections.infoSharing.legal.content[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">{content.sections.policyUpdates.title[language]}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  {content.sections.policyUpdates.content[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 