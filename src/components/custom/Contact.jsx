import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
    securityCode: "",
    userInput: ""
  });
  const [errors, setErrors] = useState({});

  const generateSecurityCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const [securityCode] = useState(generateSecurityCode());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "कृपया अपना नाम दर्ज करें";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "कृपया अपना मोबाइल नंबर दर्ज करें";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "कृपया सही मोबाइल नंबर दर्ज करें";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "कृपया विषय दर्ज करें";
    }
    if (!formData.message.trim()) {
      newErrors.message = "कृपया अपना संदेश दर्ज करें";
    }
    if (!formData.userInput.trim()) {
      newErrors.userInput = "कृपया सुरक्षा कोड दर्ज करें";
    } else if (parseInt(formData.userInput) !== securityCode) {
      newErrors.userInput = "सुरक्षा कोड गलत है";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
     setFormData({
        name: "",
        mobile: "",
        subject: "",
        message: "",
        securityCode: "",
        userInput: ""
      });
      alert("संदेश सफलतापूर्वक भेज दिया गया है!");
    }
  };

  return (
    <div className="min-h-screen py-2 sm:py-4 md:py-6 relative bg-red-800">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-red-800/70"></div>
      <div className="relative w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-red-200/50 mx-4 mt-28 sm:mt-20 md:mt-24">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-4 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
             
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full border border-yellow-500/30">
                <div className="flex items-center justify-center gap-2">
                  <img src="/ring.png" alt="Ring" className="w-6 h-6" />
                  <p className="text-base sm:text-lg font-medium text-yellow-100">संपर्क करें</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* First Contact */}
              <div className="relative bg-white/80 rounded-lg p-6 shadow-lg border border-red-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">संपर्क 1</h3>
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800">Mr. wwwww www wwwww</p>
                    <p className="text-gray-600">ww - wwww wwww wwwwww</p>
                    <p className="text-gray-600">ww wwww ww wwwwww Pwwwu</p>
                    <p className="text-gray-600">wwww www (M.P.)</p>
                    <div className="pt-2">
                      <a href="tel:+000000000" className="text-red-600 hover:text-red-700">
                        +91-000000000
                      </a>
                    </div>
                    <div className="space-y-1">
                      <a href="mailto:wwww@gmail.com" className="text-red-600 hover:text-red-700 block">
                        www@gmail.com
                      </a>
                      <a href="mailto:wwwww@yahoo.co.in" className="text-red-600 hover:text-red-700 block">
                        www@yahoo.co.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Contact */}
              <div className="relative bg-white/80 rounded-lg p-6 shadow-lg border border-red-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-80"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">संपर्क 2</h3>
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800">Mr. wwwww www</p>
                    <p className="text-gray-600">www, 3rd ww, G6 wwwww wwww</p>
                    <p className="text-gray-600">www Maya ww, City Center</p>
                    <p className="text-gray-600">ww (M.P.)</p>
                    <div className="pt-2">
                      <a href="tel:+0000000" className="text-red-600 hover:text-red-700">
                        +91-000000
                      </a>
                    </div>
                    <div>
                      <a href="mailto:wwwwa@wwwww.com" className="text-red-600 hover:text-red-700">
                        wwwa@www.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/80 rounded-lg p-6 shadow-lg border border-red-100 mb-12">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-red-100 rounded-full animate-pulse opacity-20"></div>
                    <img 
                      src="/ring.png" 
                      alt="Wedding Rings" 
                      className="w-12 h-12 object-contain relative z-10"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-red-800 mb-2">संपर्क फॉर्म</h2>
                <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-gray-700 mb-2 font-medium">आपका नाम</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${errors.name ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm`}
                      placeholder="अपना नाम दर्ज करें"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 mb-2 font-medium">आपका मोबाइल नंबर</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${errors.mobile ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm`}
                      placeholder="अपना मोबाइल नंबर दर्ज करें"
                    />
                    {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-gray-700 mb-2 font-medium">विषय</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${errors.subject ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm`}
                    placeholder="विषय दर्ज करें"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div className="relative">
                  <label className="block text-gray-700 mb-2 font-medium">आपका संदेश</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg border-2 ${errors.message ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm resize-none`}
                    placeholder="अपना संदेश दर्ज करें"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="relative">
                  <label className="block text-gray-700 mb-2 font-medium">सुरक्षा कोड: <span className="text-red-600 font-bold">{securityCode}</span></label>
                  <input
                    type="text"
                    name="userInput"
                    value={formData.userInput}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${errors.userInput ? 'border-red-500' : 'border-red-200'} focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm`}
                    placeholder="सुरक्षा कोड दर्ज करें"
                  />
                  {errors.userInput && <p className="text-red-500 text-sm mt-1">{errors.userInput}</p>}
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    भेजें
                  </button>
                </div>
              </form>
            </div>

            {/* Google Maps */}
            <div className="bg-white/80 rounded-lg p-6 shadow-lg border border-red-100">
              <h2 className="text-2xl font-semibold text-red-800 mb-6 text-center">हमारा स्थान</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.902579839127!2d78.1901808!3d26.2052578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5b473dae069%3A0x52092015bef7d67b!2sGahoi%20Samaj%20India!5e0!3m2!1sen!2sin!4v1648123456789!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 