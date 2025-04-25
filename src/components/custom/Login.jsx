import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { Helmet } from "react-helmet";
import { useLanguage } from "../../context/LanguageContext";

import { getLoginPageData } from "../../data/loader";


const fetchLoginPageData = async () => {
  try {
    const response = await getLoginPageData();
    
    // Verify the response structure 
    if (!response?.data) {
      throw new Error('Invalid response structure from API');
    }
    
    return response;

  } catch (error) {
    console.error('Error fetching login page data:', error);
  }
};


const response = await fetchLoginPageData();
const baseUrl = 'http://localhost:1337';
const logoUrl = response?.data?.[0]?.logo?.url;
const fullLogoUrl = logoUrl ? `${baseUrl}${logoUrl}` : null;
const welcomeMessage = response?.data?.[0]?.welcomeMessage;
const slogan = response?.data?.[0]?.slogan;



const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: '',
    otp: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const recaptchaRef = useRef(null);
  const [processSteps, setProcessSteps] = useState([
    { name: 'Login', completed: false },
    { name: 'OTP Verification', completed: false },
    { name: 'Registration', completed: false },
    { name: 'Completion', completed: false }
  ]);
  
  // Hide header, footer and other
  useEffect(() => {
    
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const nav = document.querySelector('nav');
    
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (nav) nav.style.display = 'none';
    
    
    document.body.classList.add('fullscreen-form');
    
    // Cleanup function 
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (nav) nav.style.display = '';
      document.body.classList.remove('fullscreen-form');
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'mobileNumber' && !/^\d*$/.test(value)) {
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

  const handleOtpChange = (e) => {
    const { value } = e.target;
    
    // Only allow 6 digit numbers
    if (!/^\d*$/.test(value) || value.length > 6) {
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      otp: value
    }));
    
    if (errors.otp) {
      setErrors(prev => ({
        ...prev,
        otp: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }

    if (showOtpInput && !formData.otp) {
      newErrors.otp = 'OTP is required';
    } else if (showOtpInput && formData.otp.length !== 6) {
      newErrors.otp = 'OTP must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async () => {
    if (formData.mobileNumber.length === 10 && recaptchaVerified) {
      setLoading(true);
      try {
        // Instead of actually calling the API, we'll simulate a successful OTP send
        // await authAPI.sendOTP(formData.mobileNumber);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setOtpSent(true);
        setShowOtpInput(true);
        setErrors({});
        
        // Update steps progress
        const updatedSteps = [...processSteps];
        updatedSteps[0].completed = true;
        setProcessSteps(updatedSteps);
        
      } catch (error) {
        console.error('Error sending OTP:', error);
        let errorMessage = 'Error sending OTP. Please try again.';
        
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        setErrors({ mobileNumber: errorMessage });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (validateForm()) {
      if (!showOtpInput) {
        if (!recaptchaVerified) {
          setErrors({ mobileNumber: 'Please verify reCAPTCHA' });
          return;
        }
        handleSendOtp();
      } else {
        setLoading(true);
        try {
          // Simulate OTP verification - accept any 6-digit OTP
          // const response = await authAPI.verifyOTP(formData.mobileNumber, formData.otp);
          
          // Simulate network delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Simulate successful verification
          const response = { jwt: 'dummy-token-123456' };
          
          // Store the JWT token
          if (response.jwt) {
            localStorage.setItem('token', response.jwt);
          }
          
          // Store mobile number in localStorage for registration page
          localStorage.setItem('verifiedMobile', formData.mobileNumber);
          
          // Update steps progress
          const updatedSteps = [...processSteps];
          updatedSteps[1].completed = true;
          setProcessSteps(updatedSteps);
          
          // Redirect to registration
          setTimeout(() => {
            navigate('/registration', { 
              state: { 
                mobileNumber: formData.mobileNumber,
                fromLogin: true,
                processSteps: updatedSteps
              } 
            });
          }, 500);
          
        } catch (error) {
          console.error('Error verifying OTP:', error);
          let errorMessage = 'Invalid OTP. Please enter the correct OTP.';
          
          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.message) {
            errorMessage = error.message;
          }
          
          setErrors({ otp: errorMessage });
          setLoading(false);
        }
      }
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(!!value);
  };

  const hasError = (fieldName) => {
    return submitted && errors[fieldName];
  };
  const { language } = useLanguage();

  return (
    <div 
      className="min-h-screen py-4 sm:py-6 px-2 sm:px-4 flex items-center justify-center relative"
      style={
        {
          backgroundImage: 'url("/decorative-bg.webp")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#1e293b',
        }
      }
    >

<Helmet>
        <title>{language === "hi" ? "लॉगिन - श्री गहोई शक्ति जन कल्याण समिति" : "Login - Shri Gahoi Shakti Jan Kalyan Samiti"}</title>
       
      </Helmet>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-800/70"></div>
      
      {/* Back to Home Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-700 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-red-800 transition-colors duration-200 z-20 flex items-center text-xs sm:text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </button>

      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden mt-10 md:mt-4 sm:mt-8 border border-2 border-[#DE7D37] relative z-10">
        {/* Left section  */}
        <div className="bg-red-800 text-white p-4 sm:p-6 flex flex-col items-center justify-center w-full md:w-1/3">
          <div className="w-full flex flex-col justify-center items-center h-full py-2 sm:py-4">
            <div className="p-2 sm:p-4 rounded-xl inline-block">
              <img src={fullLogoUrl} alt="Logo" className="w-32 sm:w-40 md:w-48 h-auto drop-shadow-lg" loading="lazy" />
            </div>
            <h2 className="text-white text-base sm:text-xl font-semibold text-center mt-2 sm:mt-1">{welcomeMessage}</h2>
            <p className="text-white/80 text-center mt-1 sm:mt-2 text-xs">{slogan}</p>
          </div>
        </div>
        
        {/* Right section - login form */}
        <div className="bg-white p-4 sm:p-6 w-full md:w-2/3">
          <div className="max-w-lg mx-auto">
            <div className="flex items-center justify-center mb-2 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-7 w-5 sm:w-7 text-red-700 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">Login to Your Account</h1>
            </div>
            
            {/* Progress Tracker */}
            <div className="w-full bg-gray-200 h-1.5 sm:h-2 mt-2 sm:mt-3 mb-3 sm:mb-4 rounded-full overflow-hidden">
              <div 
                className="bg-red-700 h-1.5 sm:h-2 transition-all duration-500 ease-in-out"
                style={{ width: processSteps[0].completed ? '25%' : (processSteps[1].completed ? '50%' : '10%') }}
              ></div>
            </div>
            
            <div className="flex justify-between px-1 sm:px-2 text-xs mb-3 sm:mb-5">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center ${step.completed ? 'text-red-700' : 'text-gray-400'}`}
                >
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mb-1 ${
                    step.completed ? 'bg-red-700 text-white' : 'bg-gray-300 text-gray-500'
                  }`}>
                    {step.completed ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="text-center text-[10px] sm:text-xs">{step.name}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-3 sm:p-5 rounded-lg shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Authentication - OTP */}
                <div className="bg-slate-50 p-2 sm:p-3 rounded-lg flex justify-center border border-slate-200">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-3 w-3 sm:h-4 sm:w-4 text-red-700"
                      name="authType"
                      value="otp"
                      checked={true}
                      readOnly
                    />
                    <span className="ml-2 text-gray-700 font-medium text-xs sm:text-sm">Mobile OTP Authentication</span>
                  </label>
                </div>
                
                {/* Mobile Number Input */}
                <div className="space-y-1 sm:space-y-2">
                  <label className=" text-xs sm:text-sm font-medium text-gray-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 text-sm ${
                      hasError('mobileNumber') ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Enter 10-digit Mobile Number"
                    disabled={showOtpInput || loading}
                  />
                  {hasError('mobileNumber') && (
                    <p className="text-red-500 text-[10px] sm:text-xs">{errors.mobileNumber}</p>
                  )}
                </div>

                {/* CAPTCHA */}
                {!showOtpInput && (
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-center transform scale-90 sm:scale-100 origin-top">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleRecaptchaChange}
                        size="normal"
                      />
                    </div>
                  </div>
                )}

                {/* OTP Input */}
                {showOtpInput && (
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <label className=" text-xs sm:text-sm font-medium text-gray-700 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Enter OTP
                      </label>
                      {otpSent && (
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            onClick={handleSendOtp}
                            className="text-[10px] sm:text-xs text-red-700 hover:text-red-800"
                          >
                            Resend OTP
                          </button>
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      name="otp"
                      value={formData.otp}
                      onChange={handleOtpChange}
                      className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 text-sm ${
                        hasError('otp') ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="Enter 6-digit OTP"
                      disabled={loading}
                    />
                    {hasError('otp') && (
                      <p className="text-red-500 text-[10px] sm:text-xs">{errors.otp}</p>
                    )}
                    {otpSent && (
                      <p className="text-[10px] sm:text-xs text-gray-600">
                        OTP has been sent to your mobile number.
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-1">
                  {!showOtpInput ? (
                    <div className="flex w-full justify-between gap-2">
                      <button 
                        type="submit" 
                        disabled={loading || (!showOtpInput && !recaptchaVerified)}
                        className={`bg-red-700 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                          loading || (!showOtpInput && !recaptchaVerified) ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : "Send OTP"}
                      </button>
                      <button 
                        type="button" 
                        onClick={() => {
                          setFormData({mobileNumber: '', otp: ''});
                          setRecaptchaVerified(false);
                          if (recaptchaRef.current) {
                            recaptchaRef.current.reset();
                          }
                        }}
                        className="px-2 sm:px-4 py-1.5 sm:py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg transition-colors font-medium text-xs sm:text-sm"
                      >
                        Reset
                      </button>
                    </div>
                  ) : (
                    <div className="flex w-full justify-between gap-2">
                      <button 
                        type="button"
                        onClick={() => {
                          setShowOtpInput(false);
                          setOtpSent(false);
                          setFormData(prev => ({...prev, otp: ''}));
                        }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium text-xs sm:text-sm"
                      >
                        Previous
                      </button>
                      <button 
                        type="submit" 
                        disabled={loading}
                        className={`bg-red-700 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 font-medium text-xs sm:text-sm ${
                          loading ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : "Verify OTP"}
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
            
            <div className="text-center mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-600">
              By logging in, you agree to our <a href="/" className="text-red-700">Terms of Service</a> and <a href="/privacy-policy" className="text-red-700">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
