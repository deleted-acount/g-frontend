import React, { useState } from 'react'

const ContactusSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
 
    if (name === 'phone') {
      const numbersOnly = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
   
    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    });

    
    if (formData.phone && (formData.phone.length < 10 || formData.phone.length > 12)) {
      newErrors.phone = 'Phone number must be between 10 to 12 digits';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    console.log('Form submitted:', formData);
    // Reset form after successful submission
    setFormData({ name: '', phone: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="relative bg-gradient-to-b from-yellow-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-yellow-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          {/* Ring Decoration */}
          <div className="flex justify-center mb-3">
            <div className="relative">
              <div className="absolute -inset-3 bg-red-100 rounded-full animate-pulse opacity-20"></div>
              <img 
                src="/ring.png" 
                alt="Wedding Rings" 
                className="w-10 h-10 object-contain relative z-10"
              />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-2">Contact Us</h2>
          <div className="w-20 h-1 bg-gray-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    className={`w-full px-3 py-2 rounded-lg bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-red-500 transition-colors`}
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number" 
                    maxLength={12}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className={`w-full px-3 py-2 rounded-lg bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-red-500 transition-colors`}
                  />
                  {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone}</p>}
                </div>
                <div>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    className={`w-full px-3 py-2 rounded-lg bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-red-500 transition-colors`}
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email}</p>}
                </div>
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message" 
                    rows="3"
                    className={`w-full px-3 py-2 rounded-lg bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-red-500 transition-colors resize-none`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
                </div>
                <button 
                  type="submit"
                  className="w-full bg-red-800 hover:bg-red-900 text-white font-semibold py-2 rounded-lg transition-colors shadow-lg hover:shadow-red-500/20"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721042.711726461!2d75.76840161744384!3d23.50107080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397f2c4637de4fb7%3A0x6e8c10b03c9a29e7!2sMadhya%20Pradesh!5e0!3m2!1sen!2sin!4v1707913095990!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center mt-8">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
            <div className="w-12 h-1 bg-red-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactusSection