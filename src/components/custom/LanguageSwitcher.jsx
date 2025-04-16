import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const isHindi = language === 'hi';

  return (
    <div 
      onClick={toggleLanguage}
      className="flex items-center cursor-pointer rounded-full hover:bg-red-800/10 transition-colors px-1.5 py-1"
      title={isHindi ? 'Switch to English' : 'हिंदी में बदलें'}
    >
      <span 
        className={`text-[10px] font-medium w-4 text-center ${
          !isHindi ? "text-black md:text-white font-bold" : "text-black/70 md:text-white/70"
        }`}
      >
        EN
      </span>
      <div 
        className="relative inline-flex h-4 w-7 mx-1 items-center rounded-full transition-colors"
        style={{
          backgroundColor: isHindi ? '#dc2626' : '#991b1b'
        }}
      >
        <span className="sr-only">Toggle language</span>
        <span
          className={`${
            isHindi ? 'translate-x-1.5' : 'translate-x-0.5'
          } inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-200`}
        />
      </div>
      <span 
        className={`text-[10px] font-medium w-4 text-center ${
          isHindi ? "text-black md:text-white font-bold" : "text-black/70 md:text-white/70"
        }`}
      >
        हिं
      </span>
    </div>
  );
};

export default LanguageSwitcher;