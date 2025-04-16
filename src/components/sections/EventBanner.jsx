import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const EventBanner = () => {
  const { language } = useLanguage();

  const eventTranslations = {
    en: {
      banners: "Upcoming Events",
      banner1_title: "Community Service",
      banner1_desc:
        "Join hands in serving our community and preserving traditions",
      banner2_title: "Gau Seva",
      banner2_desc: "Participate in cow protection and service initiatives",
      banner3_title: "Cultural Events",
      banner3_desc: "Celebrate our rich heritage through various events",
    },
    hi: {
      banners: "आगामी कार्यक्रम",
      banner1_title: "सामुदायिक सेवा",
      banner1_desc:
        "हमारे समुदाय की सेवा करने और परंपराओं को संजोने के लिए हाथ मिलाएँ",
      banner2_title: "गौ सेवा",
      banner2_desc: "गायों की रक्षा और सेवा अभियानों में भाग लें",
      banner3_title: "सांस्कृतिक कार्यक्रम",
      banner3_desc:
        "विभिन्न कार्यक्रमों के माध्यम से अपनी समृद्ध विरासत का उत्सव मनाएँ",
    },
  };

  const et = eventTranslations[language];

  return (
    <section className="py-2 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-10 text-dark"
          data-i18n="banners"
        ></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-500  rounded-lg p-6 text-white text-center">
            <i className="fas fa-hands-helping text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2" data-i18n="banner1_title">
              {et.banner1_title}
            </h3>
            <p data-i18n="banner1_desc">{et.banner1_desc}</p>
          </div>
          <div className="bg-[#FD7C00] rounded-lg p-6 text-white text-center">
            <i className="fas fa-cow text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2" data-i18n="banner2_title">
              {et.banner2_title}
            </h3>
            <p data-i18n="banner2_desc">{et.banner2_desc}</p>
          </div>
          <div className="bg-red-500 rounded-lg p-6 text-white text-center">
            <i className="fas fa-calendar-alt text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2" data-i18n="banner3_title">
              {et.banner3_title}
            </h3>
            <p data-i18n="banner3_desc">{et.banner3_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
