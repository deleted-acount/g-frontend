import React, { useState } from 'react';
import PhotoUpload from './PhotoUpload';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    formNumber: '',
    name: '',
    mobileNumber: '',
    whatsappNumber: '',
    gaon: '',
    aakda: '',
    bloodGroup: '',
    birthDate: '',
    marriageDate: '',
    education: '',
    panchayat: '',
    currentAddress: '',
    familyDetails: [
      { relation: 'पिताजी', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'माताजी', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'पत्नी', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'बच्चे', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'बच्चे', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'बच्चे', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'बच्चे', name: '', mobileNumber: '', whatsappNumber: '' },
    ],
    occupation: '',
    companyName: '',
    workArea: '',
    helpOthers: null,
    provideDiscount: null,
    suggestions: '',
    date: '',
    referenceBy: ''
  });


  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if ((name === 'mobileNumber' || name === 'whatsappNumber') && !/^\d*$/.test(value)) {
      return; 
    }
    
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

  const handleFamilyDetailChange = (index, field, value) => {
    
    if ((field === 'mobileNumber' || field === 'whatsappNumber') && !/^\d*$/.test(value)) {
      return; 
    }
    
    const newFamilyDetails = [...formData.familyDetails];
    newFamilyDetails[index] = {
      ...newFamilyDetails[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      familyDetails: newFamilyDetails
    }));

    
    if (errors[`familyDetails.${index}.${field}`]) {
      setErrors(prev => ({
        ...prev,
        [`familyDetails.${index}.${field}`]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
  
    const requiredFields = [
      'name', 'mobileNumber', 'whatsappNumber', 'gaon', 'aakda', 'bloodGroup',
      'birthDate', 'education', 'currentAddress'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'यह फील्ड आवश्यक है';
      }
    });

  
    [0, 1].forEach(index => {
      if (!formData.familyDetails[index].name) {
        newErrors[`familyDetails.${index}.name`] = 'यह फील्ड आवश्यक है';
      }
    });

    if (formData.mobileNumber && formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = 'मोबाइल नंबर 10 अंक का होना चाहिए';
    }

    if (formData.whatsappNumber && formData.whatsappNumber.length !== 10) {
      newErrors.whatsappNumber = 'व्हाट्सएप नंबर 10 अंक का होना चाहिए';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (validateForm()) {
      console.log(formData);
     
      alert('फॉर्म सफलतापूर्वक जमा किया गया!');
    } else {
    const firstErrorField = document.querySelector('.error-field');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };


  const hasError = (fieldName) => {
    return submitted && errors[fieldName];
  };


  const hasFamilyError = (index, field) => {
    return submitted && errors[`familyDetails.${index}.${field}`];
  };

  return (
    <div 
      className="min-h-screen py-4 sm:py-6 md:py-8 relative"
      style={{
        background: `linear-gradient(45deg, #991b1b 25%, transparent 25%),
                    linear-gradient(-45deg, #991b1b 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #991b1b 75%),
                    linear-gradient(-45deg, transparent 75%, #991b1b 75%)`,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
        backgroundColor: '#7f1d1d',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/90 to-red-800/90"></div>
      <div className="relative max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-20">
        <form onSubmit={handleSubmit} className="bg-white/90">
          {/* Header */}
          <div className="relative p-4 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-red-800 mb-4 ">
                श्री गहोई शक्ति फाउंडेशन
              </h1>
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-500/30">
                <p className="text-yellow-100 text-lg font-medium">रजिस्ट्रेशन फॉर्म</p>
              </div>
            </div>
          </div>
          
          {/* Form Number */}
          <div className="p-4 border-b border-red-100">
            <div className="flex items-center">
              <span className="text-gray-700 font-medium">फॉर्म क्रमांक : </span>
              <input
                type="text"
                name="formNumber"
                value={formData.formNumber}
                onChange={handleInputChange}
                className="ml-2 px-2 py-1 border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>
          </div>
          
          {/* Personal Information */}
          <div className="border-b border-red-100">
            <div className="bg-red-50 p-3 text-center border-b border-red-100">
              <h3 className="text-lg font-semibold text-red-800">स्वयं की जानकारी</h3>
            </div>
            
            <div className="flex flex-col md:flex-row p-4">
              {/* Photo Upload Component */}
              <PhotoUpload />
              
              <div className="flex-1 md:ml-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">नाम</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('name') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                    {hasError('name') && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">मोबाइल नम्बर</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('mobileNumber') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      maxLength={10}
                    />
                    {hasError('mobileNumber') && (
                      <p className="text-red-500 text-xs">{errors.mobileNumber}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">व्हाट्सऐप नंबर</label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('whatsappNumber') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      maxLength={10}
                    />
                    {hasError('whatsappNumber') && (
                      <p className="text-red-500 text-xs">{errors.whatsappNumber}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">गाँव</label>
                    <input
                      type="text"
                      name="gaon"
                      value={formData.gaon}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('gaon') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                    {hasError('gaon') && (
                      <p className="text-red-500 text-xs">{errors.gaon}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">आँकड़ा</label>
                    <input
                      type="text"
                      name="aakda"
                      value={formData.aakda}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('aakda') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                    {hasError('aakda') && (
                      <p className="text-red-500 text-xs">{errors.aakda}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">ब्लड ग्रुप</label>
                    <input
                      type="text"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('bloodGroup') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                    {hasError('bloodGroup') && (
                      <p className="text-red-500 text-xs">{errors.bloodGroup}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">जन्म तिथि</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('birthDate') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                    {hasError('birthDate') && (
                      <p className="text-red-500 text-xs">{errors.birthDate}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">विवाह तिथि</label>
                    <input
                      type="date"
                      name="marriageDate"
                      value={formData.marriageDate}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('marriageDate') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">उच्चतम शिक्षा</label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('education') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                    {hasError('education') && (
                      <p className="text-red-500 text-xs">{errors.education}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">पंचायत</label>
                    <input
                      type="text"
                      name="panchayat"
                      value={formData.panchayat}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('panchayat') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">वर्तमान पता</label>
                    <textarea
                      name="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        hasError('currentAddress') ? 'border-red-500 bg-red-50' : 'border-red-200'
                      }`}
                    />
                    {hasError('currentAddress') && (
                      <p className="text-red-500 text-xs">{errors.currentAddress}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Family Information */}
          <div className="border-b border-red-100">
            <div className="bg-red-50 p-3 text-center border-b border-red-100">
              <h3 className="text-lg font-semibold text-red-800">परिवार की जानकारी</h3>
            </div>
            
            <div className="p-4">
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="min-w-full inline-block align-middle">
                  <table className="min-w-full divide-y divide-red-100">
                    <thead>
                      <tr className="bg-red-50">
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-red-800">क्रमांक</th>
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-red-800">सम्बन्ध</th>
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-red-800">नाम</th>
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-red-800">मोबाइल नम्बर</th>
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-red-800">whatsapp नंबर</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-red-100">
                      {formData.familyDetails.map((member, index) => (
                        <tr key={index} className="hover:bg-red-50/50">
                          <td className="px-3 py-2 text-xs sm:text-sm whitespace-nowrap">{index + 1}</td>
                          <td className="px-3 py-2 text-xs sm:text-sm whitespace-nowrap">{member.relation}</td>
                          <td className="px-3 py-2">
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => handleFamilyDetailChange(index, 'name', e.target.value)}
                              className={`w-full px-2 py-1.5 text-xs sm:text-sm border rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
                                hasFamilyError(index, 'name') ? 'border-red-500 bg-red-50' : 'border-red-200'
                              }`}
                              placeholder="नाम दर्ज करें"
                            />
                            {hasFamilyError(index, 'name') && (
                              <p className="text-red-500 text-xs mt-1">{errors[`familyDetails.${index}.name`]}</p>
                            )}
                          </td>
                          <td className="px-3 py-2">
                            <input
                              type="tel"
                              value={member.mobileNumber}
                              onChange={(e) => handleFamilyDetailChange(index, 'mobileNumber', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs sm:text-sm border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                              pattern="[0-9]*"
                              inputMode="numeric"
                              maxLength={10}
                              placeholder="मोबाइल नंबर"
                            />
                          </td>
                          <td className="px-3 py-2">
                            <input
                              type="tel"
                              value={member.whatsappNumber}
                              onChange={(e) => handleFamilyDetailChange(index, 'whatsappNumber', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs sm:text-sm border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                              pattern="[0-9]*"
                              inputMode="numeric"
                              maxLength={10}
                              placeholder="व्हाट्सएप नंबर"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Work Information */}
          <div className="border-b border-red-100">
            <div className="bg-red-50 p-3 text-center border-b border-red-100">
              <h3 className="text-lg font-semibold text-red-800">कार्य की जानकारी</h3>
            </div>
            
            {/* (below 768px) */}
            <div className="md:hidden p-4 space-y-4">
              
              <div className="border border-red-100 rounded-lg overflow-hidden">
                <div className="bg-red-50/50 p-2 flex items-center">
                  <span className="w-8 text-center text-sm">1</span>
                  <span className="text-sm">व्यवसाय /नौकरी</span>
                </div>
                <div className="p-2">
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-red-100 rounded focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="border border-red-100 rounded-lg overflow-hidden">
                <div className="bg-red-50/50 p-2 flex items-center">
                  <span className="w-8 text-center text-sm">2</span>
                  <span className="text-sm">व्यवसाय /कंपनी का नाम</span>
                </div>
                <div className="p-2">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-red-100 rounded focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Work Area */}
              <div className="border border-red-100 rounded-lg overflow-hidden">
                <div className="bg-red-50/50 p-2 flex items-center">
                  <span className="w-8 text-center text-sm">3</span>
                  <span className="text-sm">कार्य क्षेत्र</span>
                </div>
                <div className="p-2">
                  <input
                    type="text"
                    name="workArea"
                    value={formData.workArea}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-red-100 rounded focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Help Others */}
              <div className="border border-red-100 rounded-lg overflow-hidden">
                <div className="bg-red-50/50 p-2 flex items-center">
                  <span className="w-8 text-center text-sm">4</span>
                  <span className="text-sm">क्या आप अपने कार्य से सम्बंधित मामलों में समाजजनों को उनकी समस्या सुलझाने में मदद करना चाहेंगे।</span>
                </div>
                <div className="p-2">
                  <div className="flex items-center space-x-8">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="helpOthers"
                        checked={formData.helpOthers === true}
                        onChange={() => setFormData(prev => ({ ...prev, helpOthers: true }))}
                        className="mr-2"
                      />
                      <span className="text-sm">हाँ</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="helpOthers"
                        checked={formData.helpOthers === false}
                        onChange={() => setFormData(prev => ({ ...prev, helpOthers: false }))}
                        className="mr-2"
                      />
                      <span className="text-sm">नहीं</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Provide Discount */}
              <div className="border border-red-100 rounded-lg overflow-hidden">
                <div className="bg-red-50/50 p-2 flex items-center">
                  <span className="w-8 text-center text-sm">5</span>
                  <span className="text-sm">क्या आप अपके द्वारा किये जा रहे कार्य /व्यापार में गहोई शक्ति के सदस्यों को डिस्काउंट देना चाहेंगे।</span>
                </div>
                <div className="p-2">
                  <div className="flex items-center space-x-8">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="provideDiscount"
                        checked={formData.provideDiscount === true}
                        onChange={() => setFormData(prev => ({ ...prev, provideDiscount: true }))}
                        className="mr-2"
                      />
                      <span className="text-sm">हाँ</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="provideDiscount"
                        checked={formData.provideDiscount === false}
                        onChange={() => setFormData(prev => ({ ...prev, provideDiscount: false }))}
                        className="mr-2"
                      />
                      <span className="text-sm">नहीं</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop View (768px and above) */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-max">
                  <tbody>
                    <tr>
                      <td className="border border-red-100 p-1 sm:p-2 text-center w-8 sm:w-12 text-sm sm:text-base">1</td>
                      <td className="border border-red-100 p-1 sm:p-2 text-sm sm:text-base">व्यवसाय /नौकरी</td>
                      <td className="border border-red-100 p-1 sm:p-2">
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleInputChange}
                          className="w-full p-1 focus:outline-none text-sm sm:text-base"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-red-100 p-1 sm:p-2 text-center text-sm sm:text-base">2</td>
                      <td className="border border-red-100 p-1 sm:p-2 text-sm sm:text-base">व्यवसाय /कंपनी का नाम</td>
                      <td className="border border-red-100 p-1 sm:p-2">
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full p-1 focus:outline-none text-sm sm:text-base"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-red-100 p-1 sm:p-2 text-center text-sm sm:text-base">3</td>
                      <td className="border border-red-100 p-1 sm:p-2 text-sm sm:text-base">कार्य क्षेत्र</td>
                      <td className="border border-red-100 p-1 sm:p-2">
                        <input
                          type="text"
                          name="workArea"
                          value={formData.workArea}
                          onChange={handleInputChange}
                          className="w-full p-1 focus:outline-none text-sm sm:text-base"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-red-100 p-1 sm:p-2 text-center text-sm sm:text-base">4</td>
                      <td className="border border-red-100 p-1 sm:p-2 text-sm sm:text-base">
                        क्या आप अपने कार्य से सम्बंधित मामलों में समाजजनों को उनकी समस्या सुलझाने में मदद करना चाहेंगे।
                      </td>
                      <td className="border border-red-100 p-1 sm:p-2">
                        <div className="flex items-center space-x-4 sm:space-x-8 text-sm sm:text-base">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="helpOthers"
                              checked={formData.helpOthers === true}
                              onChange={() => setFormData(prev => ({ ...prev, helpOthers: true }))}
                              className="mr-1 sm:mr-2"
                            />
                            हाँ
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="helpOthers"
                              checked={formData.helpOthers === false}
                              onChange={() => setFormData(prev => ({ ...prev, helpOthers: false }))}
                              className="mr-1 sm:mr-2"
                            />
                            नहीं
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-red-100 p-1 sm:p-2 text-center text-sm sm:text-base">5</td>
                      <td className="border border-red-100 p-1 sm:p-2 text-sm sm:text-base">
                        क्या आप अपके द्वारा किये जा रहे कार्य /व्यापार में गहोई शक्ति के सदस्यों को डिस्काउंट देना चाहेंगे।
                      </td>
                      <td className="border border-red-100 p-1 sm:p-2">
                        <div className="flex items-center space-x-4 sm:space-x-8 text-sm sm:text-base">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="provideDiscount"
                              checked={formData.provideDiscount === true}
                              onChange={() => setFormData(prev => ({ ...prev, provideDiscount: true }))}
                              className="mr-1 sm:mr-2"
                            />
                            हाँ
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="provideDiscount"
                              checked={formData.provideDiscount === false}
                              onChange={() => setFormData(prev => ({ ...prev, provideDiscount: false }))}
                              className="mr-1 sm:mr-2"
                            />
                            नहीं
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Suggestions */}
          <div className="border-b border-red-100">
            <div className="p-2 border-b border-red-100">
              <span className="font-semibold text-sm sm:text-base">आपके सुझाव :</span>
            </div>
            <div className="p-2 h-16 sm:h-24">
              <textarea
                name="suggestions"
                value={formData.suggestions}
                onChange={handleInputChange}
                className="w-full h-full p-1 focus:outline-none border-none text-sm sm:text-base"
              />
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-2 flex flex-col sm:flex-row">
            <div className="flex-1 mb-4 sm:mb-0">
              <div className="mb-4">
                <span className="text-sm sm:text-base">दिनांक : </span>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="border-b border-black focus:outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <span className="text-sm sm:text-base">Reference by : </span>
                <input
                  type="text"
                  name="referenceBy"
                  value={formData.referenceBy}
                  onChange={handleInputChange}
                  className="border-b border-black focus:outline-none w-32 sm:w-48 text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-start sm:justify-end items-end">
              <div className="text-left sm:text-right">
                <div className="mb-2 text-sm sm:text-base">सदस्य हस्ताक्षर</div>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="p-6 flex justify-center">
            <button 
              type="submit" 
              className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
            >
              फॉर्म जमा करें
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

