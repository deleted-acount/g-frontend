import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
    
    userInput: ""
  });
  const [errors, setErrors] = useState({});

  // Language-specific font class
  const languageFontClass = language === "hi" ? "font-[Noto_Sans_Devanagari]" : "font-inter";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = language === "hi" ? "कृपया अपना नाम दर्ज करें" : "Please enter your name";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = language === "hi" ? "कृपया अपना मोबाइल नंबर दर्ज करें" : "Please enter your mobile number";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = language === "hi" ? "कृपया सही मोबाइल नंबर दर्ज करें" : "Please enter a valid mobile number";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = language === "hi" ? "कृपया विषय दर्ज करें" : "Please enter the subject";
    }
    if (!formData.message.trim()) {
      newErrors.message = language === "hi" ? "कृपया अपना संदेश दर्ज करें" : "Please enter your message";
    }
   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
     setFormData({
        name: "",
        mobile: "",
        subject: "",
        message: "",
     
        userInput: ""
      });
      alert(language === "hi" ? "संदेश सफलतापूर्वक भेज दिया गया है!" : "Message sent successfully!");
    }
  };


  const contact1 = {
    name: { hi: "श्री. wwwww www wwwww", en: "Mr. wwwww www wwwww" },
    designation: { hi: "ww - wwww wwww wwwwww", en: "ww - wwww wwww wwwwww" },
    address1: { hi: "ww wwww ww wwwwww Pwwwu", en: "ww wwww ww wwwwww Pwwwu" },
    address2: { hi: "wwww www (M.P.)", en: "wwww www (M.P.)" },
    phone: "+91-000000000",
    email1: "www@gmail.com",
    email2: "www@yahoo.co.in"
  };


  const contact2 = {
    name: { hi: "श्री. wwwww www", en: "Mr. wwwww www" },
    address1: { hi: "www, 3rd ww, G6 wwwww wwww", en: "www, 3rd ww, G6 wwwww wwww" },
    address2: { hi: "www Maya ww, City Center", en: "www Maya ww, City Center" },
    address3: { hi: "ww (M.P.)", en: "ww (M.P.)" },
    phone: "+91-000000",
    email: "wwwa@www.com"
  };

  // reusable styles 
  const sectionStyles = "mb-8 md:mb-16";
  const cardStyles = "bg-white rounded-lg p-6 md:p-8 shadow-md border-l-4 border-red-700";
  const headingStyles = `text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 ${languageFontClass}`;
  const paragraphStyles = `text-gray-700 leading-relaxed text-sm md:text-base ${languageFontClass}`;

  const SectionTitle = ({ title }) => (
    <div className="text-center mb-8">
      <h2 className={headingStyles}>{title[language]}</h2>
      <div className="w-24 h-1 bg-red-700 mx-auto rounded-full"></div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>
          {language === "hi" ? "संपर्क करें - गहोई समाज" : "Contact Us - Gahoi Samaj"}
        </title>
        <meta
          name="description"
          content={
            language === "hi"
              ? "गहोई समाज से संपर्क करें। हम आपकी सहायता के लिए तत्पर हैं।"
              : "Contact Gahoi Samaj. We are ready to help you."
          }
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="w-full bg-red-800 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center"></div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-6xl -mt-6 md:-mt-10">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-8 mb-6 md:mb-10">
          {/* Page Title */}
          <div className={sectionStyles}>
            <div className="flex justify-center mb-5 md:mb-8">
              <div className="p-3 md:p-5 bg-red-50 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 md:h-16 md:w-16 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
                </div>

            <SectionTitle
              title={{
                hi: "संपर्क करें",
                en: "Contact Us"
              }}
            />

            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border-l-4 border-red-700 text-center">
                <p className={`${paragraphStyles} text-base md:text-xl`}>
                  {language === "hi"
                    ? "हमसे जुड़ने या अधिक जानकारी के लिए संपर्क करें। हम आपकी सहायता के लिए तत्पर हैं।"
                    : "Contact us to connect or for more information. We are ready to assist you."}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-16">
       
            <div className={`${cardStyles} transition-all duration-300 hover:shadow-lg`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className={`text-lg md:text-xl font-bold text-gray-800 ${languageFontClass}`}>
                  {language === "hi" ? "संपर्क 1" : "Contact 1"}
                </h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className={`text-gray-800 font-medium ${languageFontClass}`}>{contact1.name[language]}</span>
                </li>
                <li className="flex items-start">
                  <span className={`text-gray-700 ${languageFontClass}`}>{contact1.designation[language]}</span>
                </li>
                <li className="flex items-start">
                  <span className={`text-gray-700 ${languageFontClass}`}>{contact1.address1[language]}</span>
                </li>
                <li className="flex items-start">
                  <span className={`text-gray-700 ${languageFontClass}`}>{contact1.address2[language]}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center">
                    <svg className="h-5 w-5 text-red-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${contact1.phone}`} className="text-red-600 hover:text-red-700 transition-colors">
                      {contact1.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center">
                    <svg className="h-5 w-5 text-red-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${contact1.email1}`} className="text-red-600 hover:text-red-700 transition-colors">
                      {contact1.email1}
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center">
                    <svg className="h-5 w-5 text-transparent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${contact1.email2}`} className="text-red-600 hover:text-red-700 transition-colors">
                      {contact1.email2}
                    </a>
                  </span>
                </li>
              </ul>
            </div>

        
            <div className={`${cardStyles} transition-all duration-300 hover:shadow-lg`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className={`text-lg md:text-xl font-bold text-gray-800 ${languageFontClass}`}>
                  {language === "hi" ? "संपर्क 2" : "Contact 2"}
                </h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className={`text-gray-800 font-medium ${languageFontClass}`}>{contact2.name[language]}</span>
                </li>
                <li className="flex items-start">
                  <span className={`text-gray-700 ${languageFontClass}`}>{contact2.address1[language]}</span>
                </li>
                <li className="flex items-start">
                  <span className={`text-gray-700 ${languageFontClass}`}>{contact2.address2[language]}</span>
                </li>
                <li className="flex items-start">
                  <span className={`text-gray-700 ${languageFontClass}`}>{contact2.address3[language]}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center">
                    <svg className="h-5 w-5 text-red-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${contact2.phone}`} className="text-red-600 hover:text-red-700 transition-colors">
                      {contact2.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center">
                    <svg className="h-5 w-5 text-red-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${contact2.email}`} className="text-red-600 hover:text-red-700 transition-colors">
                      {contact2.email}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className={sectionStyles}>
            <SectionTitle
              title={{
                hi: "संपर्क फॉर्म",
                en: "Contact Form"
              }}
            />

            <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-red-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className={`block text-gray-700 mb-2 font-medium ${languageFontClass}`}>
                      {language === "hi" ? "आपका नाम" : "Your Name"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${errors.name ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm`}
                      placeholder={language === "hi" ? "अपना नाम दर्ज करें" : "Enter your name"}
                    />
                    {errors.name && <p className={`text-red-500 text-sm mt-1 ${languageFontClass}`}>{errors.name}</p>}
                  </div>

                  <div className="relative">
                    <label className={`block text-gray-700 mb-2 font-medium ${languageFontClass}`}>
                      {language === "hi" ? "आपका मोबाइल नंबर" : "Your Mobile Number"}
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${errors.mobile ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm`}
                      placeholder={language === "hi" ? "अपना मोबाइल नंबर दर्ज करें" : "Enter your mobile number"}
                    />
                    {errors.mobile && <p className={`text-red-500 text-sm mt-1 ${languageFontClass}`}>{errors.mobile}</p>}
                  </div>
                </div>

                <div className="relative">
                  <label className={`block text-gray-700 mb-2 font-medium ${languageFontClass}`}>
                    {language === "hi" ? "विषय" : "Subject"}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${errors.subject ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm`}
                    placeholder={language === "hi" ? "विषय दर्ज करें" : "Enter subject"}
                  />
                  {errors.subject && <p className={`text-red-500 text-sm mt-1 ${languageFontClass}`}>{errors.subject}</p>}
                </div>

                <div className="relative">
                  <label className={`block text-gray-700 mb-2 font-medium ${languageFontClass}`}>
                    {language === "hi" ? "आपका संदेश" : "Your Message"}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg border-2 ${errors.message ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm resize-none`}
                    placeholder={language === "hi" ? "अपना संदेश दर्ज करें" : "Enter your message"}
                  ></textarea>
                  {errors.message && <p className={`text-red-500 text-sm mt-1 ${languageFontClass}`}>{errors.message}</p>}
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full opacity-60 blur-sm group-hover:opacity-100 transition duration-300"></div>
                    <div className={`relative bg-[#FD7D01] text-white px-8 py-3 rounded-full font-semibold shadow-lg group-hover:shadow-xl transition-all ${languageFontClass}`}>
                      {language === "hi" ? "भेजें" : "Submit"}
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className={sectionStyles}>
            <SectionTitle
              title={{
                hi: "हमारा स्थान",
                en: "Our Location"
              }}
            />

            <div className="bg-white shadow-md p-5 rounded-lg border-l-4 border-red-700 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.902579839127!2d78.1901808!3d26.2052578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5b473dae069%3A0x52092015bef7d67b!2sGahoi%20Samaj%20India!5e0!3m2!1sen!2sin!4v1648123456789!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 