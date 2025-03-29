import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
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
        { to: '/Change', label: 'परिर्वतन Change / लॉग इन Login' },
      ]
    },
    { 
      to: '/plans', 
      label: 'Family',
      dropdown: [
        { to: '/Familyregistration', label: 'पंजीकरण Registration' },
        { to: '/Familyssearch', label: 'खोजना Search' },
        { to: '/FamilyChange', label: 'परिर्वतन Change / लॉग इन Login' },
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
        { to: '/free_listing', label: 'Free Listing' },
        { to: '/business_search', label: 'Search' }
      ]
    },
    { 
      to: '/gallery', 
      label: 'Gallery',
      dropdown: [
        { to: '/gallery/photos', label: 'महासभा Central Assembly' },
        { to: '/RegionalAssembly', label: 'क्षेत्रीय सभायें Regional Assembly' },
        { to: '/CommunalMarriage', label: 'सामूहिक विवाह ommunal Marriage' },
        { to: '/OtherProgram', label: 'अन्य कार्यक्रम Other Program' },
      ]
    },
    { 
      to: '/executive', 
      label: 'Executive',
      dropdown: [
        { to: '/gallery/photos', label: 'महासभा entral Assembly' },
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
              src="https://www.gahoi.co.in/images/logo.png" 
              alt="Gahoi Logo" 
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
            {/* <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">श्री गहोई शक्ति</span> */}
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
                className="relative group"
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
                    className="absolute top-full left-0 mt-1 w-56 bg-yellow-100 rounded-lg shadow-lg py-1 z-50"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.to}
                        to={subItem.to}
                        className="block px-3 py-1.5 text-sm text-gray-800 hover:bg-red-700 hover:text-white transition-colors whitespace-nowrap"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
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
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-0.5 bg-black/80 backdrop-blur-sm rounded-lg mt-2">
            {menuItems.map((item) => (
              <div key={item.to}>
                <Link
                  to={item.to}
                  className="block px-3 py-1.5 text-sm text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-0.5">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.to}
                        to={subItem.to}
                        className="block px-3 py-1.5 text-xs text-yellow-200 hover:bg-red-700 hover:text-white rounded-lg transition-colors whitespace-nowrap"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
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
      </nav>
    </header>
  );
};

export default Header; 