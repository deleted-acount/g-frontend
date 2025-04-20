import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PhotoUpload from './PhotoUpload';

const RegistrationForm = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
   
    name: '',
    mobileNumber: location.state?.mobileNumber || '',
    whatsappNumber: '',
    display_picture: null,
    village: '',
    email: '',
    bloodGroup: '',
    birthDate: '',
    marriageDate: '',
    education: '',   
    currentAddress: '',
    familyDetails: [
      { relation: 'Father', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'Mother', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'Spouse', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'Child', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'Child', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'Child', name: '', mobileNumber: '', whatsappNumber: '' },
      { relation: 'Child', name: '', mobileNumber: '', whatsappNumber: '' },
    ],
    manglik: '',
    grah: '',
    handicap: '',
    gotra: '',
    aakna: '',
    mamaAakna: '',
    occupation: '',
    companyName: '',
    workArea: '',
    helpOthers: null,
    provideDiscount: null,
    suggestions: '',
    date: '',
    referenceBy: '',
    gender: ''
  });

  const [processSteps, setProcessSteps] = useState([
    { name: 'Login', completed: true },
    { name: 'OTP Verification', completed: true },
    { name: 'Registration', completed: false },
    { name: 'Completion', completed: false }
  ]);
  const [progress, setProgress] = useState(50);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hide header, footer and other elements when registration form is shown
  useEffect(() => {
   
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const nav = document.querySelector('nav');
    
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (nav) nav.style.display = 'none';
    
   
    document.body.classList.add('fullscreen-form');
    
   
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (nav) nav.style.display = '';
      document.body.classList.remove('fullscreen-form');
    };
  }, []);

  const formSteps = [
    { name: 'Personal Information', fields: ['name', 'mobileNumber', 'whatsappNumber', 'village', 'id'] },
    { name: 'Additional Details', fields: ['bloodGroup', 'birthDate', 'marriageDate', 'education', 'currentAddress'] },
    { name: 'Family Information', fields: ['familyDetails'] },
    { name: 'Biographical Details', fields: ['manglik', 'grah', 'handicap', 'gotra', 'aakna', 'mamaAakna'] },
    { name: 'Work Information', fields: ['occupation', 'companyName', 'workArea', 'helpOthers', 'provideDiscount'] },
    { name: 'Final Submission', fields: ['suggestions', 'date', 'referenceBy'] }
  ];

 
  useEffect(() => {
    if (location.state?.fromLogin) {
      if (location.state?.processSteps) {
        setProcessSteps(location.state.processSteps);
      }
      
      // If mobile number is verified, we can start from the form
      if (location.state?.mobileNumber) {
        setFormData(prev => ({
          ...prev,
          mobileNumber: location.state.mobileNumber
        }));
      }
    }
  }, [location.state]);

  // Update progress 
  useEffect(() => {
    const completedSteps = processSteps.filter(step => step.completed).length;
    const totalSteps = processSteps.length;
    setProgress(Math.round((completedSteps / totalSteps) * 100));
  }, [processSteps]);

  // Update registration progress based on current form step
  useEffect(() => {
 
    const registrationProgress = (currentStep / (formSteps.length - 1));
    
    // Update the process steps
    const updatedSteps = [...processSteps];
    updatedSteps[2].completed = registrationProgress > 0; 
    setProcessSteps(updatedSteps);
  }, [currentStep, formSteps.length, processSteps]);

  // map Gotra to Aakna 
  const gotraAaknaMap = {
    'Badal': ['Amaroha', 'Bageriya', 'Baraha', 'Chauda'],
    'Bhal': ['Bajrang Gadiya', 'Chandaiya', 'Dengare', 'Ghura', 'Jhudele', 'Khangat', 'Kharda', 'Kudariya', 'Naina', 'Pachanone'],
    'Gagal': ['Barele', 'Chapara', 'Dengare', 'Geda', 'Jhudele', 'Mihi ke kunvar', 'Nisunge', 'Nogaraiya', 'Nolyeha', 'Rawat'],
    'Gol': ['Andhi', 'Baderiya', 'Bamoriya', 'Bardiya', 'Bed', 'Bhagoriya', 'Bijpuriya', 'Bilaiya', 'Chiroliya', 'Chungele'],
    'Jaital': ['Baderiya', 'Kathal', 'Lahariya', 'Nagariya', 'Rikholya', 'Seth', 'Sipolya', 'Sirojiya'],
    'Kachil': ['Amoriya', 'Bhondiya', 'Chapara', 'Damele', 'Dhusar', 'Jhudele', 'Katare', 'Piparseniya', 'Rawat', 'Seth'],
    'Kasib': ['Aasu', 'AasuDeepa', 'Bedar', 'Deepa', 'Khantal', 'Sudipa'],
    'Kochal': ['Badonya', 'Binoriya', 'Dadraya', 'Ikasade', 'Indurakhya', 'Kanjolya', 'Kastawar', 'Kharaya', 'Kurele', 'Misuriya'],
    'Kohil': ['Jhuke', 'Kandele', 'Lohiya', 'Shav']
  };

  //  Aakna options based on selected Gotra
  const getAaknaOptions = () => {
    return formData.gotra ? (gotraAaknaMap[formData.gotra] || []) : [];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if ((name === 'mobileNumber' || name === 'whatsappNumber') && !/^\d*$/.test(value)) {
      return; 
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset aakna when gotra changes
    if (name === 'gotra') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        aakna: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

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

  const validateCurrentStep = () => {
    const newErrors = {};
    const currentFields = formSteps[currentStep].fields;
    
    // Check required fields 
    if (currentFields.includes('name') && !formData.name) {
      newErrors.name = 'This field is required';
    }
    
    if (currentFields.includes('mobileNumber')) {
      if (!formData.mobileNumber) {
        newErrors.mobileNumber = 'This field is required';
      } else if (formData.mobileNumber.length !== 10) {
        newErrors.mobileNumber = 'Mobile number must be 10 digits';
      }
    }
    
    if (currentFields.includes('whatsappNumber')) {
      if (!formData.whatsappNumber) {
        newErrors.whatsappNumber = 'This field is required';
      } else if (formData.whatsappNumber.length !== 10) {
        newErrors.whatsappNumber = 'WhatsApp number must be 10 digits';
      }
    }
    
    if (currentFields.includes('village') && !formData.village) {
      newErrors.village = 'This field is required';
    }
    
    if (currentFields.includes('email') && !formData.email) {
      newErrors.email = 'This field is required';
    }
    
    if (currentFields.includes('bloodGroup') && !formData.bloodGroup) {
      newErrors.bloodGroup = 'This field is required';
    }
    
    if (currentFields.includes('birthDate') && !formData.birthDate) {
      newErrors.birthDate = 'This field is required';
    }
    
    if (currentFields.includes('education') && !formData.education) {
      newErrors.education = 'This field is required';
    }
    
    if (currentFields.includes('currentAddress') && !formData.currentAddress) {
      newErrors.currentAddress = 'This field is required';
    }
    
    //  family details 
    if (currentFields.includes('familyDetails')) {
      [0, 1].forEach(index => {
        if (!formData.familyDetails[index].name) {
          newErrors[`familyDetails.${index}.name`] = 'This field is required';
        }
      });
    }
    
    //  biographical details 
    if (currentFields.includes('manglik') && !formData.manglik) {
      newErrors.manglik = 'This field is required';
    }
    
    if (currentFields.includes('grah') && !formData.grah) {
      newErrors.grah = 'This field is required';
    }
    
    if (currentFields.includes('handicap') && !formData.handicap) {
      newErrors.handicap = 'This field is required';
    }
    
    if (currentFields.includes('gotra') && !formData.gotra) {
      newErrors.gotra = 'This field is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setSubmitted(true);
    
    if (validateCurrentStep()) {
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(currentStep + 1);
        setSubmitted(false);
        window.scrollTo(0, 0);
      } else {
        
        handleSubmit();
      }
    } else {
      // Scroll to first error
      const firstErrorField = document.querySelector('.error-field');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSubmitted(false);
      window.scrollTo(0, 0);
    }
  };

  const handleImageSelect = (file) => {
    setFormData(prev => ({
      ...prev,
      display_picture: file
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const strapiData = {
        family_details: {
          father_name: formData.familyDetails[0].name,
          mother_name: formData.familyDetails[1].name,
          phone_number: formData.mobileNumber,
          spouse_name: formData.familyDetails[2].name,
        },
        child_name: formData.familyDetails.slice(3).map(child => ({ child_name: child.name })),
        biographical_details: {
          Gotra: formData.gotra,
          Aakna: formData.aakna,
          Mama_Aakna: formData.mamaAakna,
          manglik_status: formData.manglik,
          Grah: formData.grah,
          Handicap: formData.handicap,
        },
        personal_information: {
          full_name: formData.name,
          village: formData.village,
          mobile_number: formData.mobileNumber,
          whatsapp_number: formData.whatsappNumber,
          Gender: formData.gender,
          email_address: formData.email,
          display_picture: formData.display_picture,
        },
        work_information: {
          occupation: formData.occupation,
          company_name: formData.companyName,
          work_area: formData.workArea,
        },
        additional_details: {
          blood_group: formData.bloodGroup,
          date_of_birth: formData.birthDate,
          date_of_marriage: formData.marriageDate,
          higher_education: formData.education,
          current_address: formData.currentAddress,
        },
        your_suggestions: {
          suggestions: formData.suggestions,
          date: formData.date,
        },
      };

      const response = await fetch('http://localhost:1337/api/registration-pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
        body: JSON.stringify({ data: strapiData }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);

      // Update progress steps
      const updatedSteps = [...processSteps];
      updatedSteps[2].completed = true;
      updatedSteps[3].completed = true;
      setProcessSteps(updatedSteps);

      // Show success popup
      const successPopup = document.createElement('div');
      successPopup.className = 'fixed inset-0 flex items-center justify-center z-50';
      successPopup.innerHTML = `
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="bg-white rounded-lg p-6 shadow-xl max-w-md w-full mx-4 relative z-10 border-2 border-[#FD7D01]">
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-[#FD7D01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
            <p class="text-gray-600 mb-6">Form submitted successfully! Redirecting to homepage...</p>
            <div class="w-full bg-gray-200 h-2 rounded-full mt-4">
              <div class="bg-[#FD7D01] h-2 rounded-full" style="width: 0%; transition: width 2s ease-in-out;" id="progress-bar"></div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(successPopup);

      const progressBar = document.getElementById('progress-bar');
      setTimeout(() => {
        progressBar.style.width = '100%';
      }, 100);

      // Redirect after delay
      setTimeout(() => {
        document.body.removeChild(successPopup);
        window.location.href = '/';
      }, 2500); // Increased delay to ensure the progress bar completes

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const hasError = (fieldName) => {
    return submitted && errors[fieldName];
  };

  const hasFamilyError = (index, field) => {
    return submitted && errors[`familyDetails.${index}.${field}`];
  };

  // Render the appropriate form fields based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('name') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {hasError('name') && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('mobileNumber') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  disabled={location.state?.fromLogin}
                />
                {hasError('mobileNumber') && (
                  <p className="text-red-500 text-xs">{errors.mobileNumber}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('whatsappNumber') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit WhatsApp number"
                />
                {hasError('whatsappNumber') && (
                  <p className="text-red-500 text-xs">{errors.whatsappNumber}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Village
                </label>
                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('village') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  placeholder="Enter your village name"
                />
                {hasError('village') && (
                  <p className="text-red-500 text-xs">{errors.village}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                  </svg>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('email') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {hasError('email') && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              <div className="space-y-3 md:col-span-2">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Gender
                </label>
               <div className="flex items-center space-x-8 px-4 py-2.5 border border-gray-300 rounded-lg bg-white">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        className="h-4 w-4 text-red-700 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Male</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        className="h-4 w-4 text-red-700 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Female</span>
                    </label>
                  </div>

                {hasError('gender') && (
                  <p className="text-red-500 text-xs">{errors.gender}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 1:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                  Blood Group
                </label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('bloodGroup') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  placeholder="Enter your blood group"
                />
                {hasError('bloodGroup') && (
                  <p className="text-red-500 text-xs">{errors.bloodGroup}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('birthDate') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                />
                {hasError('birthDate') && (
                  <p className="text-red-500 text-xs">{errors.birthDate}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  Date of Marriage
                </label>
                <input
                  type="date"
                  name="marriageDate"
                  value={formData.marriageDate}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('marriageDate') ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
              </div>

              <div className="space-y-3">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Highest Education
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('education') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  placeholder="Enter your highest education"
                />
                {hasError('education') && (
                  <p className="text-red-500 text-xs">{errors.education}</p>
                )}
              </div>

              <div className="md:col-span-2 space-y-3">
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Current Address
                </label>
                <textarea
                  name="currentAddress"
                  value={formData.currentAddress}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('currentAddress') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  rows="3"
                  placeholder="Enter your current address"
                />
                {hasError('currentAddress') && (
                  <p className="text-red-500 text-xs">{errors.currentAddress}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <h2 className="text-base font-semibold text-gray-800">Family Details</h2>
            </div>
            
            <div className="overflow-hidden">
              <div className="inline-block align-middle w-full">
                <table className="w-full text-xs divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-2 py-2 text-left font-medium text-slate-700">Sr.</th>
                      <th className="px-2 py-2 text-left font-medium text-slate-700">Relation</th>
                      <th className="px-2 py-2 text-left font-medium text-slate-700">Name</th>
                      <th className="px-2 py-2 text-left font-medium text-slate-700">Mobile</th>
                      <th className="px-2 py-2 text-left font-medium text-slate-700">WhatsApp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {formData.familyDetails.map((member, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-150">
                        <td className="px-2 py-2 whitespace-nowrap">{index + 1}</td>
                        <td className="px-2 py-2 whitespace-nowrap font-medium text-slate-700">{member.relation}</td>
                        <td className="px-2 py-2">
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleFamilyDetailChange(index, 'name', e.target.value)}
                            className={`w-full px-2 py-1 text-xs border rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                              hasFamilyError(index, 'name') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                            }`}
                            placeholder="Enter name"
                          />
                          {hasFamilyError(index, 'name') && (
                            <p className="text-red-500 text-xs mt-1">{errors[`familyDetails.${index}.name`]}</p>
                          )}
                        </td>
                        <td className="px-2 py-2">
                          <input
                            type="tel"
                            value={member.mobileNumber}
                            onChange={(e) => handleFamilyDetailChange(index, 'mobileNumber', e.target.value)}
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="Mobile number"
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            type="tel"
                            value={member.whatsappNumber}
                            onChange={(e) => handleFamilyDetailChange(index, 'whatsappNumber', e.target.value)}
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="WhatsApp number"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic mt-2">Note: Fill in details for family members you wish to register. Father and Mother details are required.</p>
          </div>
        );
        
      case 3:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <h2 className="text-lg font-semibold text-gray-800">Biographical Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Manglik Status */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Manglik Status</label>
                <div className="space-y-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white">
                  {['Manglik', 'Non Manglik', 'Aanshik', 'Other'].map((option) => (
                    <label key={option} className="flex items-center text-sm">
                      <input
                        type="radio"
                        name="manglik"
                        value={option}
                        checked={formData.manglik === option}
                        onChange={handleInputChange}
                        className="mr-2 h-4 w-4 text-red-700"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {hasError('manglik') && (
                  <p className="text-red-500 text-xs">{errors.manglik}</p>
                )}
              </div>
              
              {/* Grah */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Grah</label>
                <div className="space-y-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white">
                  {['Devta', 'Manushya', 'Rakshasa'].map((option) => (
                    <label key={option} className="flex items-center text-sm">
                      <input
                        type="radio"
                        name="grah"
                        value={option}
                        checked={formData.grah === option}
                        onChange={handleInputChange}
                        className="mr-2 h-4 w-4 text-red-700"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {hasError('grah') && (
                  <p className="text-red-500 text-xs">{errors.grah}</p>
                )}
              </div>
              
              {/* Handicap */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Handicap</label>
                <div className="space-y-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white">
                  {['None', 'Physically', 'Mentally', 'Other'].map((option) => (
                    <label key={option} className="flex items-center text-sm">
                      <input
                        type="radio"
                        name="handicap"
                        value={option}
                        checked={formData.handicap === option}
                        onChange={handleInputChange}
                        className="mr-2 h-4 w-4 text-red-700"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {hasError('handicap') && (
                  <p className="text-red-500 text-xs">{errors.handicap}</p>
                )}
              </div>
              
              {/* Gotra */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Gotra</label>
                <select
                  name="gotra"
                  value={formData.gotra}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('gotra') ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Gotra</option>
                  {['Badal', 'Bhal', 'Gagal', 'Gol', 'Jaital', 'Kachil', 'Kasib', 'Kochal', 'Kohil'].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {hasError('gotra') && (
                  <p className="text-red-500 text-xs">{errors.gotra}</p>
                )}
              </div>
              
              {/* Aakna */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Aakna</label>
                <select
                  name="aakna"
                  value={formData.aakna}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('aakna') ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  disabled={!formData.gotra}
                >
                  <option value="">Select Aakna</option>
                  {getAaknaOptions().map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {hasError('aakna') && (
                  <p className="text-red-500 text-xs">{errors.aakna}</p>
                )}
                {!formData.gotra && (
                  <p className="text-gray-500 text-xs">Select a Gotra first</p>
                )}
              </div>
              
              {/* Mama Aakna */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Mama Aakna</label>
                <select
                  name="mamaAakna"
                  value={formData.mamaAakna}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('mamaAakna') ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Mama Aakna</option>
                  {['Aasu', 'Amar', 'Amolya', 'Amoriya', 'Andhi', 'Baderiya', 'Badonya', 'Bajrangdiya', 'Bedar'].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {hasError('mamaAakna') && (
                  <p className="text-red-500 text-xs">{errors.mamaAakna}</p>
                )}
              </div>
            </div>
            
            <p className="text-xs text-gray-500 italic mt-4">
              These details are important for community records and can be useful for various purposes.
            </p>
          </div>
        );
        
      case 4:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <h2 className="text-lg font-semibold text-gray-800">Work Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('occupation') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  placeholder="Enter your occupation"
                />
                {hasError('occupation') && (
                  <p className="text-red-500 text-xs">{errors.occupation}</p>
                )}
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('companyName') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  placeholder="Enter your company name"
                />
                {hasError('companyName') && (
                  <p className="text-red-500 text-xs">{errors.companyName}</p>
                )}
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Work Area</label>
                <input
                  type="text"
                  name="workArea"
                  value={formData.workArea}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ${
                    hasError('workArea') ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'
                  }`}
                  placeholder="Enter your work area/location"
                />
                {hasError('workArea') && (
                  <p className="text-red-500 text-xs">{errors.workArea}</p>
                )}
              </div>
              
              <div className="space-y-3 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Would you like to help other community members with your skills/services?</label>
                <div className="flex items-center space-x-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="helpOthers"
                      value="yes"
                      checked={formData.helpOthers === "yes"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-700 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="helpOthers"
                      value="no"
                      checked={formData.helpOthers === "no"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-700 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
                {hasError('helpOthers') && (
                  <p className="text-red-500 text-xs">{errors.helpOthers}</p>
                )}
              </div>
              
              <div className="space-y-3 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Can you provide any discounts or special services for community members?</label>
                <div className="flex items-center space-x-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="provideDiscount"
                      value="yes"
                      checked={formData.provideDiscount === "yes"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-700 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="provideDiscount"
                      value="no"
                      checked={formData.provideDiscount === "no"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-700 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
                {hasError('provideDiscount') && (
                  <p className="text-red-500 text-xs">{errors.provideDiscount}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
              </svg>
              <h2 className="text-lg font-semibold text-gray-800">Final Submission</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Suggestions:</label>
                  <textarea
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 min-h-[120px]"
                    placeholder="Please share any suggestions or feedback you may have"
                  />
                </div>
              </div>
              
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 flex flex-col sm:flex-row">
                <div className="flex-1 mb-4 sm:mb-0">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date:</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div className="flex-1 flex justify-center sm:justify-end items-end">
                  <div className="text-center sm:text-right">
                    <div className="mb-2 text-sm font-medium text-gray-700">
                      By submitting this form, I confirm that the information provided is accurate to the best of my knowledge.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-gray-500 text-sm">
                Thank you for completing the registration form. Your information will be processed shortly.
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen py-8 px-4 flex items-center justify-center relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#1e293b', // Fallback color
      }}
    >
      {/* Back to Home Button */}
      <button 
        onClick={() => window.location.href = '/'}
        className="absolute top-4 left-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors duration-200 z-20 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </button>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-800/70"></div>
      <div className="w-full max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden relative z-10 mt-8 bg-white border border-[#FD7D01]">
        {/* Header */}
        <div className="bg-red-800 text-white p-3">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold mb-2 text-center">Registration Form</h1>

            {/* Progress Tracker */}
            <div className="w-full bg-gray-200 h-1.5 mt-3 mb-2 rounded-full overflow-hidden">
              <div 
                className="bg-white h-1.5 transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between px-2 text-xs">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center ${step.completed ? 'text-white' : 'text-gray-300'}`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mb-1 ${
                    step.completed ? 'bg-white text-red-800' : 'bg-gray-300 text-gray-500'
                  }`}>
                    {step.completed ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="text-center text-[10px]">{step.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Steps Tabs */}
        <div className="bg-gray-100 border-b">
          <div className="container mx-auto flex flex-wrap">
            {formSteps.map((step, index) => (
              <button
                key={index}
                type="button"
                className={`py-2 px-3 text-xs font-medium border-b-2 ${
                  currentStep === index 
                    ? 'border-red-700 text-red-700'
                    : index < currentStep
                      ? 'border-green-500 text-green-700'
                      : 'border-transparent text-gray-500'
                } whitespace-nowrap`}
                onClick={() => index <= currentStep && setCurrentStep(index)}
                disabled={index > currentStep}
              >
                {index + 1}. {step.name}
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-4">
          <div className="container mx-auto">
            {currentStep === 0 && (
              <div className="mb-4">
               <PhotoUpload onImageSelect={handleImageSelect} />
              </div>
            )}
            
            {renderStepContent()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`px-4 py-1.5 rounded-lg font-medium text-sm ${
                  currentStep === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={loading}
                className="bg-red-700 text-white px-4 py-1.5 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 font-medium text-sm"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : currentStep === formSteps.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
