import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import LanguageSwitcher from '../custom/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../context/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState([]);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 300);
  };

  const toggleMobileDropdown = (label) => {
    setExpandedMobileItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const menuItems = [
    { to: '/', label: t?.home || 'Home' },
    { 
      to: '/about', 
      label: t?.matrimonial || 'Matrimonial',
      dropdown: [
        { to: '/registration', label: `${language === 'hi' ? 'पंजीकरण' : ''} ${t?.register || 'Registration'}` },
        { to: '/matrimonialsearch', label: `${language === 'hi' ? 'खोजना' : ''} ${t?.search || 'Search'}` },
        { to: '/login', label: `${language === 'hi' ? 'परिर्वतन' : ''} ${t?.change || 'Change'} / ${language === 'hi' ? 'लॉग इन' : ''} ${t?.login || 'Login'}` },
      ]
    },
    { 
      to: '/plans', 
      label: t?.family || 'Family',
      dropdown: [
        { to: '/registration', label: `${language === 'hi' ? 'पंजीकरण' : ''} ${t?.register || 'Registration'}` },
        { to: '/matrimonialsearch', label: `${language === 'hi' ? 'खोजना' : ''} ${t?.search || 'Search'}` },
        { to: '/familylogin', label: `${language === 'hi' ? 'परिर्वतन' : ''} ${t?.change || 'Change'} / ${language === 'hi' ? 'लॉग इन' : ''} ${t?.login || 'Login'}` },
      ]
    },
    { 
      to: '/blog', 
      label: t?.resources || 'Resources',
      dropdown: [
        { to: '/Hostelry', label: `${language === 'hi' ? 'धर्मशाला' : ''} Hostelry` },
        { to: '/temple', label: `${language === 'hi' ? 'मंदिर' : ''} Temple` },
        { to: '/touristplace', label: `${language === 'hi' ? 'दर्शनीय स्थल' : ''} Tourist place` },
      ]
    },
    { 
      to: '/contact', 
      label: t?.businessListing || 'Business Listing',
      dropdown: [
        { to: '/login', label: t?.login || 'Login' },
        { to: '/freelisting', label: 'Free Listing' },
        { to: '/business_search', label: t?.search || 'Search' }
      ]
    },
    { 
      to: '/gallery', 
      label: t?.gallery || 'Gallery',
      dropdown: [
        { 
          label: `${language === 'hi' ? 'महासभा' : ''} Central Assembly`,
          subDropdown: [
            { to: '/CentralAssembly', label: `${language === 'hi' ? 'पुरानी महासभा' : ''} Central Assembly` },
            { to: '/Mahasabha2015', label: `${language === 'hi' ? 'महासभा' : ''} 2015` }
          ]
        },
        { to: '/RegionalAssembly', label: `${language === 'hi' ? 'क्षेत्रीय सभायें' : ''} Regional Assembly` },
        { to: '/CommunalMarriage', label: `${language === 'hi' ? 'सामूहिक विवाह' : ''} Communal Marriage` },
        { to: '/OtherProgram', label: `${language === 'hi' ? 'अन्य कार्यक्रम' : ''} Other Program` },
      ]
    },
    { 
      to: '/executive', 
      label: t?.executive || 'Executive',
      dropdown: [
        { 
          label: `${language === 'hi' ? 'महासभा' : ''} Central Assembly`, 
          subDropdown: [
            { to: '/ExecutiveCentralAssembly', label: `${language === 'hi' ? 'पुरानी महासभा' : ''} Central Assembly` },
            { to: '/Assembly2015', label: `${language === 'hi' ? 'महासभा' : ''} 2015 Assembly` },
            { to: '/gallery/photos/assembly2', label: `${language === 'hi' ? 'महासभा' : ''} 2019 Assembly` },
          ]
        },
        { to: '/ExecutiveRegionalAssembly', label: `${language === 'hi' ? 'क्षेत्रीय सभायें' : ''} Regional Assembly` },
        { to: '/Arbitrament', label: `${language === 'hi' ? 'पंचायत' : ''} Arbitrament` },
      ]
    },
    { 
      to: '/publication', 
      label: t?.publication || 'Publication',
      dropdown: [
        { to: '/GahoiBandhan', label: `${language === 'hi' ? 'गहोई बंधन' : 'Gahoi Bandhan'}` },
        { to: '/GahoiBandhu', label: `${language === 'hi' ? 'गहोई बन्धु' : 'Gahoi Bandhu'}` },
        { to: '/', label: `${language === 'hi' ? 'गहोई दर्पण' : 'Gahoi Darpan'}` },
        { to: '/AnyaPatrikayen', label: `${language === 'hi' ? 'अन्य पत्रिकाएं' : 'Other Magazines'}` },
        { to: '/', label: `${language === 'hi' ? 'स्मारिकाएं' : 'Souvenirs'}` },
      ]
    },
    { 
      to: '/literature', 
      label: t?.literature || 'Literature',
      dropdown: [
        { to: '/NationalPoet', label: `${language === 'hi' ? 'राष्ट्रकवि' : ''} National Poet` },
        { to: '/', label: `${language === 'hi' ? 'अन्य कवि' : ''} Other Poet` },
      ]
    },
    { 
      to: '/history', 
      label: t?.history || 'History',
      dropdown: [
        { to: '/HistoryGahoiSamaj', label: `${language === 'hi' ? 'इतिहास गहोई समाज' : 'History Gahoi Samaj'}` },
        { to: '/HistoryMahasabha', label: `${language === 'hi' ? 'इतिहास महासभा' : 'History Mahasabha'}` },
        { to: '/HistoryKashetriyaSabha', label: `${language === 'hi' ? 'इतिहास क्षेत्रीय सभा' : 'History Regional Sabha'}` }
      ]
    }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Gahoi Logo" 
              className="h-20 sm:h-14 md:h-16 lg:h-28 w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Remove the language switcher from mobile header */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 lg:space-x-4 items-center mt-8" ref={dropdownRef}>
            {menuItems.map((item) => (
              <div 
                key={item.to}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.to}
                  className="text-white hover:text-yellow-200 transition-colors drop-shadow-lg text-[11px] lg:text-sm px-1 lg:px-2 whitespace-nowrap"
                >
                  {item.label}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div 
                    className={`absolute top-full mt-1 w-60 bg-yellow-100 rounded-lg shadow-lg py-1 z-50 ${
                      item.label === t?.literature || item.label === t?.history || item.label === t?.executive
                        ? 'right-0 translate-x-[10%]' 
                        : 'left-0'
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((subItem) => (
                      <div 
                        key={subItem.to ? subItem.to : subItem.label} 
                        className="relative"
                        onMouseEnter={() => {
                          if (subItem.subDropdown) {
                            setActiveSubDropdown(subItem.label);
                          }
                        }}
                        onMouseLeave={() => {
                          if (subItem.subDropdown) {
                            setActiveSubDropdown(null);
                          }
                        }}
                      >
                        {subItem.to ? (
                          <Link
                            to={subItem.to}
                            className="block px-3 py-1.5 text-sm text-gray-800 hover:bg-red-700 hover:text-white transition-colors whitespace-nowrap"
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveSubDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ) : (
                          <div className="block px-3 py-1.5 text-sm text-gray-800 hover:bg-red-700 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                            {subItem.label}
                          </div>
                        )}
                        
                        {/* Sub-dropdown Menu */}
                        {subItem.subDropdown && activeSubDropdown === subItem.label && (
                          <div 
                            className={`absolute top-0 w-72 bg-yellow-100 rounded-lg shadow-lg py-1 ${
                              item.label === t?.literature || item.label === t?.history || item.label === t?.gallery || item.label === t?.executive
                                ? 'right-full -mr-1' 
                                : 'left-full'
                            }`}
                            onMouseEnter={() => setActiveSubDropdown(subItem.label)}
                            onMouseLeave={() => setActiveSubDropdown(null)}
                          >
                            {subItem.subDropdown.map((subSubItem) => (
                              <Link
                                key={subSubItem.to}
                                to={subSubItem.to}
                                className="block px-3 py-1.5 text-sm text-gray-800 hover:bg-red-700 hover:text-white transition-colors break-words"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setActiveSubDropdown(null);
                                }}
                              >
                                {subSubItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Switcher - Desktop */}
            <div className="ml-3 border-l border-white/30 pl-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/50 transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className={`absolute top-0 left-0 right-0 bottom-0 overflow-y-auto transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative px-2 pt-2 pb-3 space-y-0.5 bg-yellow-100/90 backdrop-blur-sm rounded-lg mt-2 mx-4">
              <div className="flex justify-between items-center mb-2 px-2">
                <div className="text-gray-800 font-medium text-sm">
                  {language === 'hi' ? 'भाषा चुनें' : 'Select Language'}
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 text-gray-800 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-200 rounded-md p-1.5 flex justify-center mb-3">
                <div className="bg-white rounded-md shadow-sm ring-1 ring-gray-300">
                  <LanguageSwitcher />
                </div>
              </div>
              {menuItems.map((item) => (
                <div key={item.to}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between px-3 py-1.5 text-sm text-gray-800 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
                      >
                        <span>{item.label}</span>
                        <svg 
                          className={`w-4 h-4 transform transition-transform`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          {expandedMobileItems.includes(item.label) ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          )}
                        </svg>
                      </button>
                      {expandedMobileItems.includes(item.label) && (
                        <div className="pl-4 space-y-0.5 mt-1">
                          {item.dropdown.map((subItem) => (
                            <div key={subItem.to}>
                              {subItem.subDropdown ? (
                                <div>
                                  <button
                                    onClick={() => toggleMobileDropdown(subItem.label)}
                                    className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-gray-800 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
                                  >
                                    <span>{subItem.label}</span>
                                    <svg 
                                      className={`w-3 h-3 transform transition-transform`}
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      {expandedMobileItems.includes(subItem.label) ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                      ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      )}
                                    </svg>
                                  </button>
                                  {expandedMobileItems.includes(subItem.label) && (
                                    <div className="pl-4 space-y-0.5 mt-1">
                                      {subItem.subDropdown.map((subSubItem) => (
                                        <Link
                                          key={subSubItem.to}
                                          to={subSubItem.to}
                                          className="block px-3 py-1.5 text-xs text-gray-800 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {subSubItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  to={subItem.to}
                                  className="block px-3 py-1.5 text-xs text-gray-800 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className="block px-3 py-1.5 text-sm text-gray-800 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/registration" 
                className="block px-3 py-1.5 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors font-semibold text-center text-sm mt-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t?.register || 'Register'}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 