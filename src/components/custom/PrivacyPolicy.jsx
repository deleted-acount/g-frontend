import React from "react";
// import { useNavigate } from 'react-router-dom';


const decorativeImages = {
  hero: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200", // Privacy/Security related image
  pattern: "https://www.transparenttextures.com/patterns/diamond-upholstery.png",
};

const PrivacyPolicy = () => {
  // const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={decorativeImages.hero}
          alt="Privacy Policy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        
        

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-center text-gray-200 max-w-2xl mx-auto px-4">
            Your privacy is important to us. Learn how we protect and manage your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 space-y-8">
            {/* Introduction */}
            <div className="border-l-4 border-red-800 pl-4">
              <p className="text-gray-600">
                Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you. This policy is intended to help you understand how we handle your information.
              </p>
            </div>

            {/* Information Collection Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Information We Collect</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>Personal details during registration (name, gender, date of birth, contact details, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>Testimonials and success stories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>Survey and promotional participation information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>Customer support interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>Messages and content shared within the platform</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SMS Permission Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">SMS Permissions</h2>
              <div className="bg-red-50 rounded-lg p-6">
                <p className="text-gray-700">
                  We require SMS permissions for:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-800 mr-2">•</span>
                    <span>Registration verification</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-800 mr-2">•</span>
                    <span>Birthday wishes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-800 mr-2">•</span>
                    <span>Marriage anniversary wishes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Usage Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">How We Use Your Information</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>To provide and improve our services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>To manage your account and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>To provide customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>To analyze service usage and improve user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">•</span>
                    <span>To communicate about services and offers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Sharing Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Information Sharing</h2>
              <div className="bg-red-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6">
                  We do not sell, rent, or trade your personal information. We may share information with:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Service Providers</h3>
                    <p className="text-gray-700">
                      Third-party services that help us operate our platform, process payments, and analyze data.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Legal Requirements</h3>
                    <p className="text-gray-700">
                      When required by law or to protect our legal rights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates Section */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Policy Updates</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  We will notify you of any material changes to this privacy policy via email. You will have the choice to accept or decline these changes in how we use your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 