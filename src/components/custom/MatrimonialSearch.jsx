import React, { useState, useEffect } from 'react';

const citiesByState = {
  "delhi": ["नई दिल्ली", "दक्षिण दिल्ली", "पूर्वी दिल्ली", "पश्चिमी दिल्ली", "उत्तरी दिल्ली"],
  "haryana": ["गुड़गांव", "फरीदाबाद", "पानीपत", "करनाल", "अंबाला", "रोहतक", "हिसार", "यमुनानगर"],
  "uttar-pradesh": ["लखनऊ", "कानपुर", "आगरा", "वाराणसी", "मेरठ", "गाजियाबाद", "नोएडा", "प्रयागराज"],
  "rajasthan": ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर", "कोटा", "बीकानेर", "भरतपुर", "अलवर"],
  "madhya-pradesh": ["भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", "उज्जैन", "सागर", "रीवा", "सतना"],
  "gujarat": ["अहमदाबाद", "सूरत", "वडोदरा", "राजकोट", "भावनगर", "जामनगर", "गांधीनगर"],
  "maharashtra": ["मुंबई", "पुणे", "नागपुर", "नासिक", "औरंगाबाद", "सोलापुर", "कोल्हापुर"],
  "punjab": ["चंडीगढ़", "लुधियाना", "अमृतसर", "जालंधर", "पटियाला", "बठिंडा", "होशियारपुर"],
  "bihar": ["पटना", "गया", "भागलपुर", "मुजफ्फरपुर", "पूर्णिया", "दरभंगा", "बिहार शरीफ"],
  "west-bengal": ["कोलकाता", "हावड़ा", "दुर्गापुर", "आसनसोल", "सिलीगुड़ी", "बर्धमान"]
};

const MatrimonialSearch = () => {
  const [formData, setFormData] = useState({
    lookingFor: '',
    maritalStatus: '',
    hasChildren: '',
    numberOfChildren: '',
    ageFrom: '',
    ageTo: '',
    heightFrom: '',
    heightTo: '',
    occupation: '',
    manglikGrah: '',
    state: '',
    city: '',
    annualIncome: '',
    smoking: '',
    drinking: ''
  });

  const [errors, setErrors] = useState({});
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    
    if (formData.state) {
      setAvailableCities(citiesByState[formData.state] || []);
      // Clear city selection if state changes
      setFormData(prev => ({ ...prev, city: '' }));
    } else {
      setAvailableCities([]);
    }
  }, [formData.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search data:', formData);
  };

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8 relative bg-red-800">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-red-800/70"></div>
      <div className="relative max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-24 sm:mt-12 md:mt-20 border-2 border-red-200/50 mx-4 sm:mx-auto">
        <form onSubmit={handleSubmit} className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-4 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-red-800 mb-4">
                श्री गहोई शक्ति फाउंडेशन
              </h1>
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-500/30">
                <p className="text-yellow-100 text-lg font-medium">
                  वैवाहिक खोज
                </p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="p-6 space-y-6">
            {/* Looking For */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">खोज रहे हैं</label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="lookingFor"
                    value="groom"
                    checked={formData.lookingFor === 'groom'}
                    onChange={handleInputChange}
                    className="text-red-600 focus:ring-red-500"
                  />
                  <span className="text-gray-700">वर</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="lookingFor"
                    value="bride"
                    checked={formData.lookingFor === 'bride'}
                    onChange={handleInputChange}
                    className="text-red-600 focus:ring-red-500"
                  />
                  <span className="text-gray-700">वधू</span>
                </label>
              </div>
            </div>

            {/* Marital Status */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">वैवाहिक स्थिति</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">चुनें</option>
                <option value="unmarried">अविवाहित</option>
                <option value="married">विवाहित</option>
              </select>
            </div>

            {/* Children - Only show if not unmarried */}
            {formData.maritalStatus !== 'unmarried' && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">संतान</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="hasChildren"
                      value="yes"
                      checked={formData.hasChildren === 'yes'}
                      onChange={handleInputChange}
                      className="text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">हाँ</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="hasChildren"
                      value="no"
                      checked={formData.hasChildren === 'no'}
                      onChange={handleInputChange}
                      className="text-red-600 focus:ring-red-500"
                    />
                    <span className="text-gray-700">नहीं</span>
                  </label>
                </div>
                {formData.hasChildren === 'yes' && (
                  <input
                    type="number"
                    name="numberOfChildren"
                    value={formData.numberOfChildren}
                    onChange={handleInputChange}
                    placeholder="संतान की संख्या"
                    className="mt-2 w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                )}
              </div>
            )}

            {/* Age Range */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">आयु से</label>
                <input
                  type="number"
                  name="ageFrom"
                  value={formData.ageFrom}
                  onChange={handleInputChange}
                  placeholder="आयु से"
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">आयु तक</label>
                <input
                  type="number"
                  name="ageTo"
                  value={formData.ageTo}
                  onChange={handleInputChange}
                  placeholder="आयु तक"
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Height Range */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">लंबाई से</label>
                <input
                  type="number"
                  name="heightFrom"
                  value={formData.heightFrom}
                  onChange={handleInputChange}
                  placeholder="लंबाई से"
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">लंबाई तक</label>
                <input
                  type="number"
                  name="heightTo"
                  value={formData.heightTo}
                  onChange={handleInputChange}
                  placeholder="लंबाई तक"
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Occupation */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">व्यवसाय</label>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">चुनें</option>
                <option value="artist">कलाकार</option>
                <option value="author">लेखक</option>
                <option value="business">व्यवसाय</option>
                <option value="doctor">डॉक्टर</option>
                <option value="engineer">इंजीनियर</option>
                <option value="entrepreneur">उद्यमी</option>
                <option value="farmer">किसान</option>
                <option value="fashion_designer">फैशन डिजाइनर</option>
                <option value="lawyer">वकील</option>
                <option value="teacher">शिक्षक</option>
                <option value="scientist">वैज्ञानिक</option>
                <option value="software_developer">सॉफ़्टवेयर डेवलपर</option>
                <option value="nurse">नर्स</option>
                <option value="police_officer">पुलिस अधिकारी</option>
                <option value="pilot">पायलट</option>
                <option value="chef">शेफ</option>
                <option value="photographer">फोटोग्राफर</option>
                <option value="plumber">प्लम्बर</option>
                <option value="carpenter">बढ़ई</option>
                <option value="mechanic">मैकेनिक</option>
                <option value="journalist">पत्रकार</option>
                <option value="nurse">नर्स</option>
                <option value="researcher">अनुसंधानकर्ता</option>
                <option value="teacher">शिक्षक</option>
                <option value="tailor">दरजी</option>
                <option value="truck_driver">ट्रक चालक</option>
                <option value="electrician">इलेक्ट्रिशियन</option>
                <option value="writer">लेखक</option>
              </select>
            </div>

            {/* Manglik Grah */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">मंगलिक ग्रह</label>
              <select
                name="manglikGrah"
                value={formData.manglikGrah}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">चुनें</option>
                <option value="Yes">हाँ</option>
                <option value="No">नहीं</option>
              </select>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">राज्य</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">चुनें</option>
                  <option value="delhi">दिल्ली</option>
                  <option value="haryana">हरियाणा</option>
                  <option value="uttar-pradesh">उत्तर प्रदेश</option>
                  <option value="rajasthan">राजस्थान</option>
                  <option value="madhya-pradesh">मध्य प्रदेश</option>
                  <option value="gujarat">गुजरात</option>
                  <option value="maharashtra">महाराष्ट्र</option>
                  <option value="punjab">पंजाब</option>
                  <option value="bihar">बिहार</option>
                  <option value="west-bengal">पश्चिम बंगाल</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">शहर</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  disabled={!formData.state}
                >
                  <option value="">चुनें</option>
                  {availableCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Annual Income */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">वार्षिक आय</label>
              <input
                type="number"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleInputChange}
                placeholder="वार्षिक आय"
                className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Habits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">धूम्रपान</label>
                <select
                  name="smoking"
                  value={formData.smoking}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">चुनें</option>
                  <option value="yes">हाँ</option>
                  <option value="no">नहीं</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">शराब</label>
                <select
                  name="drinking"
                  value={formData.drinking}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">चुनें</option>
                  <option value="yes">हाँ</option>
                  <option value="no">नहीं</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button 
                type="submit" 
                className="px-16 bg-red-700 text-white py-3 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
              >
                खोज करें
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MatrimonialSearch;