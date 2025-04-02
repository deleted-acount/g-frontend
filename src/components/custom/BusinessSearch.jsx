import React, { useState } from "react";
import { FaWhatsapp, FaStar, FaPhone, FaMapMarkerAlt, FaBuilding, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const BusinessSearch = () => {
  const [searchQuery, setSearchQuery] = useState({
    companyName: "",
    country: "",
    state: "",
    city: "",
    category: "all"
  });

  const [errors, setErrors] = useState({});

  const categories = {
    all: "सभी",
    retail: "खुदरा",
    restaurant: "रेस्तरां",
    service: "सेवा",
    manufacturing: "विनिर्माण",
    other: "अन्य",
  };

  const validateForm = () => {
    const newErrors = {};
    if (!searchQuery.companyName.trim()) {
      newErrors.companyName = "कृपया कंपनी का नाम दर्ज करें";
    }
    if (!searchQuery.country.trim()) {
      newErrors.country = "कृपया देश दर्ज करें";
    }
    if (!searchQuery.state.trim()) {
      newErrors.state = "कृपया राज्य दर्ज करें";
    }
    if (!searchQuery.city.trim()) {
      newErrors.city = "कृपया शहर दर्ज करें";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery(prev => ({...prev, [name]: value}));
    
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ""}));
    }
  };


  const demoBusinesses = [
    {
      id: 1,
      name: "राजेश टेक्सटाइल्स",
      rating: 4.5,
      reviews: 128,
      address: "महात्मा गांधी रोड, भिंड",
      phone: "+91 12345 12345",
      status: "active",
      category: "retail",
      image: "/gahoi-logo.png"
    },
    {
      id: 2,
      name: "स्वाद भारत रेस्तरां",
      rating: 4.8,
      reviews: 256,
      address: "स्टेशन रोड, ग्वालियर",
      phone: "+91 12345 12345",
      status: "active",
      category: "restaurant",
      image: "round.png"
    },
    {
      id: 3,
      name: "आर्य मोटर्स",
      rating: 4.2,
      reviews: 89,
      address: "इंडस्ट्रियल एरिया, दतिया",
      phone: "+91 12345 12345",
      status: "inactive",
      category: "service",
      image: "/ring.png"
    },
    {
      id: 4,
      name: "आर्य मोटर्स",
      rating: 4.2,
      reviews: 89,
      address: "इंडस्ट्रियल एरिया, दतिया",
      phone: "+91 12345 12345",
      status: "active",
      category: "service",
      image: "/ring.png"
    }
  ];

  return (
    <div 
      className="min-h-screen py-2 sm:py-4 md:py-6 relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#991b1b',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-800/80"></div>
      <div className="relative max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-28 sm:mt-20 md:mt-24 border-2 border-red-200/50">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-4 sm:p-6 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
             
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-yellow-500/30">
                <p className="text-lg sm:text-xl font-medium text-yellow-100">व्यवसाय खोज</p>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    कंपनी का नाम
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={searchQuery.companyName}
                    onChange={handleInputChange}
                    placeholder="कंपनी का नाम दर्ज करें"
                    className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    श्रेणी
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={searchQuery.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-base border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  >
                    {Object.entries(categories).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    देश
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={searchQuery.country}
                    onChange={handleInputChange}
                    placeholder="देश दर्ज करें"
                    className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                      errors.country ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.country && (
                    <p className="mt-1 text-sm text-red-500">{errors.country}</p>
                  )}
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    राज्य
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={searchQuery.state}
                    onChange={handleInputChange}
                    placeholder="राज्य दर्ज करें"
                    className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                      errors.state ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.state && (
                    <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    शहर
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={searchQuery.city}
                    onChange={handleInputChange}
                    placeholder="शहर दर्ज करें"
                    className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <div className="pt-4 flex justify-start">
                <button
                  type="submit"
                  className="bg-red-700 text-white px-12 py-2.5 rounded-md hover:bg-red-800 transition-colors duration-300 text-base font-medium"
                >
                  खोजें
                </button>
              </div>
            </form>
          </div>

          {/* Results Section */}
          <div className="p-6 sm:p-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">खोज परिणाम</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoBusinesses.map((business) => (
                <div key={business.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      {business.status === "active" ? (
                        <FaCheckCircle className="text-green-500 text-2xl" />
                      ) : (
                        <FaTimesCircle className="text-red-500 text-2xl" />
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{business.name}</h3>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-700">{business.rating}</span>
                        <span className="text-gray-500 ml-1">({business.reviews})</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{business.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaPhone className="mr-2" />
                        <span>{business.phone}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors duration-300">
                        अधिक विवरण
                      </button>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(`Check out ${business.name} on Gahoi Foundation!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 transition-colors duration-300"
                      >
                        <FaWhatsapp className="text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSearch; 