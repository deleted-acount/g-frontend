import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FamilyLogin = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    password: '',
    otp: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if ((name === 'mobileNumber' || name === 'otp') && !/^\d*$/.test(value)) {
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'मोबाइल नंबर आवश्यक है';
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = 'मोबाइल नंबर 10 अंक का होना चाहिए';
    }

    if (!showForgotPassword && !formData.password) {
      newErrors.password = 'पासवर्ड आवश्यक है';
    }

    if (showOtpInput && !formData.otp) {
      newErrors.otp = 'OTP आवश्यक है';
    } else if (showOtpInput && formData.otp.length !== 6) {
      newErrors.otp = 'OTP 6 अंक का होना चाहिए';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = () => {
    if (formData.mobileNumber.length === 10) {
      // API call to send OTP
      console.log('Sending OTP to:', formData.mobileNumber);
      setOtpSent(true);
      setShowOtpInput(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (validateForm()) {
      if (showForgotPassword) {
        if (!showOtpInput) {
          handleSendOtp();
        } else {
          
          console.log('Verifying OTP:', formData.otp);
          // API call to verify OTP
        }
      } else {
        // Handle login logic
        console.log('Login data:', formData);
      }
    }
  };

  const hasError = (fieldName) => {
    return submitted && errors[fieldName];
  };

  return (
    <div 
      className="min-h-screen py-4 sm:py-6 md:py-8 relative"
      style={{
        // background: `linear-gradient(45deg, #991b1b 25%, transparent 25%),
        //             linear-gradient(-45deg, #991b1b 25%, transparent 25%),
        //             linear-gradient(45deg, transparent 75%, #991b1b 75%),
        //             linear-gradient(-45deg, transparent 75%, #991b1b 75%)`,
        // backgroundSize: '40px 40px',
        // backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
        // backgroundColor: '#7f1d1d',
     
      
          backgroundImage: 'url("/decorative-bg.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#991b1b',
      
    
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/90 to-red-800/90"></div>
      <div className="relative max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-24 sm:mt-12 md:mt-20 border-2 border-red-200/50 sm:mx-auto">
        <form onSubmit={handleSubmit} className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-4 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
             
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-500/30">
                <p className="text-yellow-100 text-lg font-medium">
                  {showForgotPassword ? (showOtpInput ? 'OTP सत्यापन' : 'पासवर्ड रीसेट') : 'लॉगिन'}
                </p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="p-6 space-y-4">
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
                placeholder="मोबाइल नंबर दर्ज करें"
                disabled={showOtpInput}
              />
              {hasError('mobileNumber') && (
                <p className="text-red-500 text-xs">{errors.mobileNumber}</p>
              )}
            </div>

            {showOtpInput && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">OTP</label>
                <input
                  type="tel"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    hasError('otp') ? 'border-red-500 bg-red-50' : 'border-red-200'
                  }`}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="OTP दर्ज करें"
                />
                {hasError('otp') && (
                  <p className="text-red-500 text-xs">{errors.otp}</p>
                )}
                {otpSent && (
                  <p className="text-sm text-gray-600">
                    OTP भेज दिया गया है। कृपया अपने मोबाइल नंबर पर जांच करें।
                  </p>
                )}
              </div>
            )}

            {!showForgotPassword && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">पासवर्ड</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    hasError('password') ? 'border-red-500 bg-red-50' : 'border-red-200'
                  }`}
                  placeholder="पासवर्ड दर्ज करें"
                />
                {hasError('password') && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
              >
                {showForgotPassword ? (showOtpInput ? 'OTP सत्यापित करें' : 'OTP भेजें') : 'लॉगिन करें'}
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center space-y-2 pt-4">
              {!showForgotPassword ? (
                <>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-red-700 hover:text-red-800 font-medium"
                  >
                    पासवर्ड भूल गए?
                  </button>
                  <p className="text-sm text-gray-600">
                    अकाउंट नहीं है?{' '}
                    <Link to="/registration" className="text-red-700 hover:text-red-800 font-medium">
                      रजिस्टर करें
                    </Link>
                  </p>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setShowForgotPassword(false);
                    setShowOtpInput(false);
                    setOtpSent(false);
                    setFormData(prev => ({ ...prev, otp: '' }));
                  }}
                  className="text-sm text-red-700 hover:text-red-800 font-medium"
                >
                  लॉगिन पर वापस जाएं
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FamilyLogin;
