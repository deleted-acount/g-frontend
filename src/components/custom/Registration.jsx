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
      className="min-h-screen py-4 sm:py-6 md:py-8 bg-red-800"

      // style={{ 
      //   backgroundImage: "url('/header-texture.jpg')",
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundAttachment: 'fixed',
      // }}
   
    >
      <div className="max-w-5xl mx-auto border border-blue-800 bg-white/95 backdrop-blur-sm mt-20">
        <form onSubmit={handleSubmit} className="bg-white">
          {/* Header */}
          <div 
            className="relative p-2 sm:p-3 text-center border-b border-blue-800 h-24 sm:h-12 "
            style={{ 
              backgroundImage: 'url("https://www.gahoi.co.in/images/header-texture.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%'
            }}
          >
            <div className="absolute inset-0 bg-blue-400"></div>
            <div className="relative z-10 h-full flex items-center justify-center bg-blue-400">
              <h1 className="text-xl sm:text-2xl font-bold text-black drop-shadow-lg">
                श्री गहोई शक्ति फाउंडेशन
              </h1>
            </div>
          </div>
          
          {/* Form Number */}
          <div className="p-2 border-b border-blue-800">
            <div className="flex">
              <div className="text-left text-sm sm:text-base">फॉर्म क्रमांक : 
                <input
                  type="text"
                  name="formNumber"
                  value={formData.formNumber}
                  onChange={handleInputChange}
                  className="inline-block w-20 sm:w-32 border-b border-black focus:outline-none text-sm sm:text-base ml-1"
                />
              </div>
            </div>
          </div>
          
          {/* Form Title */}
          <div className="p-2 sm:p-3 text-center border-b border-blue-800">
            <h2 className="text-lg sm:text-xl font-semibold">रजिस्ट्रेशन फॉर्म</h2>
          </div>
          
          {/* Personal Information */}
          <div className="border-b border-blue-800">
            <div className="bg-purple-200 p-2 text-center border-b border-blue-800">
              <h3 className="font-semibold">स्वयं की जानकारी</h3>
            </div>
            
            <div className="flex flex-col md:flex-row">
        {/* Photo Upload Component */}
           <PhotoUpload />
              
              <div className="flex-1">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 w-10 sm:w-16 text-sm sm:text-base">क्रमांक</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">नाम</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasError('name') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                          />
                          {hasError('name') && (
                            <div className="text-red-500 text-xs mt-1">{errors.name}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">1</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">मोबाइल नम्बर</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasError('mobileNumber') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                            pattern="[0-9]*"
                            inputMode="numeric"
                            maxLength={10}
                          />
                          {hasError('mobileNumber') && (
                            <div className="text-red-500 text-xs mt-1">{errors.mobileNumber}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">2</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">whatsapp नंबर</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="tel"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasError('whatsappNumber') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                            pattern="[0-9]*"
                            inputMode="numeric"
                            maxLength={10}
                          />
                          {hasError('whatsappNumber') && (
                            <div className="text-red-500 text-xs mt-1">{errors.whatsappNumber}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">3</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">गाँव</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="text"
                            name="gaon"
                            value={formData.gaon}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasError('gaon') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                          />
                          {hasError('gaon') && (
                            <div className="text-red-500 text-xs mt-1">{errors.gaon}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">4</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">आँकड़ा</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="text"
                            name="aakda"
                            value={formData.aakda}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasError('aakda') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                          />
                          {hasError('aakda') && (
                            <div className="text-red-500 text-xs mt-1">{errors.aakda}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">5</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">ब्लड ग्रुप</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="text"
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasError('bloodGroup') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                          />
                          {hasError('bloodGroup') && (
                            <div className="text-red-500 text-xs mt-1">{errors.bloodGroup}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">6</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">जन्म तिथि</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasError('birthDate') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                          />
                          {hasError('birthDate') && (
                            <div className="text-red-500 text-xs mt-1">{errors.birthDate}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">7</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">विवाह तिथि</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <input
                          type="date"
                          name="marriageDate"
                          value={formData.marriageDate}
                          onChange={handleInputChange}
                          className="w-full p-1 focus:outline-none text-sm sm:text-base"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">8</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">उच्चतम शिक्षा</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasError('education') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                          />
                          {hasError('education') && (
                            <div className="text-red-500 text-xs mt-1">{errors.education}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">9</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">पंचायत</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <input
                          type="text"
                          name="panchayat"
                          value={formData.panchayat}
                          onChange={handleInputChange}
                          className="w-full p-1 focus:outline-none text-sm sm:text-base"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center align-top text-sm sm:text-base">10</td>
                      <td className="border border-blue-800 p-1 sm:p-2 align-top text-sm sm:text-base">वर्तमान पता</td>
                      <td colSpan="2" className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <textarea
                            name="currentAddress"
                            value={formData.currentAddress}
                            onChange={handleInputChange}
                            className={`w-full p-1 focus:outline-none h-12 sm:h-16 text-sm sm:text-base ${hasError('currentAddress') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                          />
                          {hasError('currentAddress') && (
                            <div className="text-red-500 text-xs mt-1">{errors.currentAddress}</div>
                          )}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Family Information */}
          <div className="border-b border-blue-800">
            <div className="bg-purple-200 p-2 text-center border-b border-blue-800">
              <h3 className="font-semibold">परिवार की जानकारी</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-max">
                <thead>
                  <tr>
                    <th className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">क्रमांक</th>
                    <th className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">सम्बन्ध</th>
                    <th className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">नाम</th>
                    <th className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">मोबाइल नम्बर</th>
                    <th className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">whatsapp नंबर</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.familyDetails.map((member, index) => (
                    <tr key={index}>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">{index + 1}</td>
                      <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">{member.relation}</td>
                      <td className="border border-blue-800 p-1 sm:p-2">
                        <div className="relative">
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleFamilyDetailChange(index, 'name', e.target.value)}
                            className={`w-full p-1 focus:outline-none text-sm sm:text-base ${hasFamilyError(index, 'name') ? 'bg-red-100 border border-red-500 error-field' : ''}`}
                          />
                          {hasFamilyError(index, 'name') && (
                            <div className="text-red-500 text-xs mt-1">{errors[`familyDetails.${index}.name`]}</div>
                          )}
                        </div>
                      </td>
                      <td className="border border-blue-800 p-1 sm:p-2">
                        <input
                          type="tel"
                          value={member.mobileNumber}
                          onChange={(e) => handleFamilyDetailChange(index, 'mobileNumber', e.target.value)}
                          className="w-full p-1 focus:outline-none text-sm sm:text-base"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={10}
                        />
                      </td>
                      <td className="border border-blue-800 p-1 sm:p-2">
                        <input
                          type="tel"
                          value={member.whatsappNumber}
                          onChange={(e) => handleFamilyDetailChange(index, 'whatsappNumber', e.target.value)}
                          className="w-full p-1 focus:outline-none text-sm sm:text-base"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={10}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Work Information */}
          <div className="border-b border-blue-800">
            <div className="bg-purple-200 p-2 text-center border-b border-blue-800">
              <h3 className="font-semibold">कार्य की जानकारी</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-max">
                <tbody>
                  <tr>
                    <td className="border border-blue-800 p-1 sm:p-2 text-center w-8 sm:w-12 text-sm sm:text-base">1</td>
                    <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">व्यवसाय /नौकरी</td>
                    <td className="border border-blue-800 p-1 sm:p-2">
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
                    <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">2</td>
                    <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">व्यवसाय /कंपनी का नाम</td>
                    <td className="border border-blue-800 p-1 sm:p-2">
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
                    <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">3</td>
                    <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">कार्य क्षेत्र</td>
                    <td className="border border-blue-800 p-1 sm:p-2">
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
                    <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">4</td>
                    <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">
                      क्या आप अपने कार्य से सम्बंधित मामलों में समाजजनों को उनकी समस्या सुलझाने में मदद करना चाहेंगे।
                    </td>
                    <td className="border border-blue-800 p-1 sm:p-2">
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
                    <td className="border border-blue-800 p-1 sm:p-2 text-center text-sm sm:text-base">5</td>
                    <td className="border border-blue-800 p-1 sm:p-2 text-sm sm:text-base">
                      क्या आप अपके द्वारा किये जा रहे कार्य /व्यापार में गहोई शक्ति के सदस्यों को डिस्काउंट देना चाहेंगे।
                    </td>
                    <td className="border border-blue-800 p-1 sm:p-2">
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
          
          {/* Suggestions */}
          <div className="border-b border-blue-800">
            <div className="p-2 border-b border-blue-800">
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
          <div className="p-4 flex justify-center">
            <button 
              type="submit" 
              className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 focus:outline-none text-sm sm:text-base"
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

