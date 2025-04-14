import { useLanguage } from '../context/LanguageContext';
import translations from '../context/translations';

/**
 * A custom hook to handle translations in the application
 * @returns {Object} - An object with a translate function and the current language
 */
export const useTranslation = () => {
  const { language, toggleLanguage } = useLanguage();
  
  /**
   * Translates a key to the current language
   * @param {string} key - The translation key
   * @param {Object} options - Optional parameters
   * @param {boolean} options.includeHindi - Whether to include Hindi text for English display
   * @returns {string} - The translated text
   */
  const translate = (key, options = {}) => {
    const { includeHindi = false } = options;
    
    if (!key) return '';
    
    const translation = translations[language][key];
    
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    
    if (language === 'en' && includeHindi) {
      const hindiText = translations['hi'][key];
      return hindiText ? `${hindiText} ${translation}` : translation;
    }
    
    return translation;
  };
  
  return { 
    t: translate, 
    language,
    toggleLanguage
  };
};

export default useTranslation; 