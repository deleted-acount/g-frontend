import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState([]);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

 
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
    { to: '/', label: 'Home' },
    { 
      to: '/about', 
      label: 'Matrimonial',
      dropdown: [
        { to: '/registration', label: 'पंजीकरण Registration' },
        { to: '/matrimonialsearch', label: 'खोजना Search' },
        { to: '/login', label: 'परिर्वतन Change / लॉग इन Login' },
      ]
    },
    { 
      to: '/plans', 
      label: 'Family',
      dropdown: [
        { to: '/registration', label: 'पंजीकरण Registration' },
        { to: '/Familyssearch', label: 'खोजना Search' },
        { to: '/login', label: 'परिर्वतन Change / लॉग इन Login' },
      ]
    },
    { 
      to: '/blog', 
      label: 'Resources',
      dropdown: [
        { to: '/Hostelry', label: 'धर्मशाला Hostelry' },
        { to: '/temple', label: 'मंदिर Temple' },
        { to: '/touristplace', label: 'दर्शनीय स्थल Tourist place' },
      ]
    },
    { 
      to: '/contact', 
      label: 'Business Listing',
      dropdown: [
        { to: '/business_login', label: 'Login' },
        { to: '/freelisting', label: 'Free Listing' },
        { to: '/business_search', label: 'Search' }
      ]
    },
    { 
      to: '/gallery', 
      label: 'Gallery',
      dropdown: [
        { 
          to: '/gallery/photos', 
          label: 'महासभा Central Assembly',
          subDropdown: [
            { to: '/CentralAssembly', label: 'पुरानी महासभा Central Assembly ' },
            { to: '/Mahasabha2015', label: 'महासभा 2015' }
          ]
        },
        { to: '/RegionalAssembly', label: 'क्षेत्रीय सभायें Regional Assembly' },
        { to: '/CommunalMarriage', label: 'सामूहिक विवाह Communal Marriage' },
        { to: '/OtherProgram', label: 'अन्य कार्यक्रम Other Program' },
      ]
    },
    { 
      to: '/executive', 
      label: 'Executive',
      dropdown: [
        { to: '/gallery/photos', 
          label: 'महासभा entral Assembly', 
          subDropdown: [
            { to: '/gallery/photos/assembly1', label: 'पुरानी महासभा Central Assembly ' },
            { to: '/gallery/photos/assembly2', label: 'महासभा 2015 Assembly' },
            { to: '/gallery/photos/assembly2', label: 'महासभा 2019 Assembly' },
          ]
        },
        { to: '/ExecutiveRegionalAssembly', label: 'क्षेत्रीय सभायें Regional Assembly' },
        { to: '/Arbitrament', label: 'पंचायत Arbitrament' },
      ]
    },
    { 
      to: '/publication', 
      label: 'Publication',
      dropdown: [
        { to: '/GahoiBandhan', label: 'गहोई बंधन' },
        { to: '/GahoiBandhu', label: 'गहोई बन्धु ' },
        { to: '/', label: 'गहोई दर्पण' },
        { to: '/AnyaPatrikayen', label: 'अन्य पत्रिकाएं' },
        { to: '/', label: 'स्मारिकाएं' },
      ]
    },
    { 
      to: '/literature', 
      label: 'Literature',
      dropdown: [
        { to: '/NationalPoet', label: 'राष्ट्रकवि National Poet' },
        { to: '/', label: 'अन्य कवि Other Poet' },
   
      ]
    },
    { 
      to: '/history', 
      label: 'History',
      dropdown: [
        { to: '/HistoryGahoiSamaj', label: 'इतिहास गहोई समाज' },
        { to: '/HistoryMahasabha', label: 'इतिहास महासभा' },
        { to: '/HistoryKashetriyaSabha', label: 'इतिहास क्षेत्रीय सभा' }
      ]
    }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png
             " 
              alt="Gahoi Logo" 
              className="h-20 sm:h-14 md:h-16 lg:h-28 w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 lg:space-x-4 items-center" ref={dropdownRef}>
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
                      item.label === 'Literature' || item.label === 'History' || item.label === 'Executive'
                        ? 'right-0 translate-x-[10%]' 
                        : 'left-0'
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((subItem) => (
                      <div 
                        key={subItem.to} 
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
                        
                        {/* Sub-dropdown Menu */}
                        {subItem.subDropdown && activeSubDropdown === subItem.label && (
                          <div 
                            className={`absolute top-0 w-72 bg-yellow-100 rounded-lg shadow-lg py-1 ${
                              item.label === 'Literature' || item.label === 'History' || item.label === 'Gallery' || item.label === 'Executive'
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
            {/* <Link 
              to="/registration" 
              className="bg-red-700 text-white px-3 py-1.5 rounded-lg hover:bg-red-800 transition-colors font-semibold border border-red-600 shadow-lg hover:shadow-red-900/30 text-xs lg:text-sm"
            >
              Register
            </Link> */}
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
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-2 right-2 p-1.5 text-gray-800 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors"
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
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 