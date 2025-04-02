import React, { useState } from "react";

const Freelisting = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    category: "",
    description: "",
    website: "",
    images: [],
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = "व्यवसाय का नाम आवश्यक है";
    }
    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "मालिक का नाम आवश्यक है";
    }
    if (!formData.email.trim()) {
      newErrors.email = "ईमेल आवश्यक है";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "कृपया एक मान्य ईमेल पता दर्ज करें";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "फोन नंबर आवश्यक है";
    }
    if (!formData.address.trim()) {
      newErrors.address = "पता आवश्यक है";
    }
    if (!formData.city.trim()) {
      newErrors.city = "शहर आवश्यक है";
    }
    if (!formData.state.trim()) {
      newErrors.state = "राज्य आवश्यक है";
    }
    if (!formData.category) {
      newErrors.category = "श्रेणी चुनें";
    }
    if (!formData.description.trim()) {
      newErrors.description = "विवरण आवश्यक है";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
   
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 relative "
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
    
  
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-red-800/70"></div>
      <div className="relative w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-28 sm:mt-20 md:mt-24 border-2 border-red-200/50 mx-4 sm:mx-6 md:mx-8">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-4 sm:p-6 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
             
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-yellow-500/30">
                <p className="text-lg sm:text-xl font-medium text-yellow-100">व्यवसाय सूची</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  व्यवसाय का नाम
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.businessName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
                )}
              </div>

              {/* Owner Name */}
              <div>
                <label htmlFor="ownerName" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  मालिक का नाम
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.ownerName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.ownerName && (
                  <p className="mt-1 text-sm text-red-600">{errors.ownerName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  ईमेल
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  फोन नंबर
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  पता
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  शहर
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  राज्य
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  श्रेणी
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">श्रेणी चुनें</option>
                  <option value="retail">खुदरा</option>
                  <option value="restaurant">रेस्तरां</option>
                  <option value="service">सेवा</option>
                  <option value="manufacturing">विनिर्माण</option>
                  <option value="other">अन्य</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  विवरण
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2.5 text-base border rounded-md focus:ring-red-500 focus:border-red-500 ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  वेबसाइट
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-base border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Images */}
              <div>
                <label htmlFor="images" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  छवियां
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  onChange={handleImageChange}
                  multiple
                  accept="image/*"
                  className="w-full px-4 py-2.5 text-base border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white py-3 px-6 rounded-md hover:bg-red-800 transition-colors duration-300 text-lg font-medium"
                >
                  सूची जमा करें
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelisting; 