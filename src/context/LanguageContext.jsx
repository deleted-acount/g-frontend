import React, { createContext, useState, useContext, useEffect } from 'react';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
   
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });


  useEffect(() => {
    localStorage.setItem('language', language);    
    document.documentElement.lang = language;
  }, [language]);

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'hi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext; 