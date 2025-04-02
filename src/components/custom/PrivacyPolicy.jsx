import React from "react";

const PrivacyPolicy = () => {
  return (
    <div 
      className="min-h-screen py-2 sm:py-4 md:py-6 relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#991b1b',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-800/80"></div>
      <div className="relative max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-28 sm:mt-20 md:mt-24 border-2 border-red-200/50 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
        <div className="bg-white/90 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="relative p-3 sm:p-4 text-center border-b border-red-200">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-90"></div>
            <div className="relative z-10">
              
              <div className="inline-block bg-red-800/50 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-yellow-500/30">
                <p className="text-base sm:text-lg font-medium text-yellow-100">Privacy Policy</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="prose prose-sm sm:prose lg:prose-lg mx-auto text-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-4">Privacy Policy</h2>
              
              <p className="mb-4">
              Your privacy is important to us, and so is being transparent about how we collect, use, and share information about you. This policy is intended to help you understand
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">Information submitted by you</h3>
              {/* <p className="mb-4">
                When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </p> */}

              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li className="text-gray-800">
                  While registering for our service, you share with us your personal details, such as name, your gender, date of birth, contact details, educational qualification, employment details, photos, marital status and your interests etc...
                </li>
                
                <li className="text-gray-800">
                  Testimonials submitted by you including your success story and photos.
                </li>
                
                <li className="text-gray-800">
                  Information submitted by you voluntarily while participating in surveys contest, promotions or events.
                </li>
                
                <li className="text-gray-800">
                  Details shared with our customer care team. (This information used to monitor or for training purposes and to ensure a better service).
                </li>
                
                <li className="text-gray-800">
                  You have the option to send interesting profiles/ articles to your friends. We will use your friend's email address only to send a one-time message to them per request. Then they will never ever hear from us again unless they voluntarily subscribe to our services.
                </li>
                
                <li className="text-gray-800">
                  Your chats and messages with other users as well as the content you publish will be processed as a part of the service.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">SMS Permission</h3>
              <p className="mb-6 text-gray-800">
                ● We need SMS permission for registration, birthday wish and marriage wish
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">How Do We Use Your Personal Information?</h3>
              <p className="mb-4">
                We use the information that we collect generally to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li className="text-gray-800">
                  We use the information submitted by you to provide the Service.
                </li>
                <li className="text-gray-800">
                  Manage your account
                </li>
                <li className="text-gray-800">
                  Provide you with customer support
                </li>
                <li className="text-gray-800">
                  Conduct research and analysis about your use of our services for providing better services
                </li>
                <li className="text-gray-800">
                  Communicate with you by email, phone about services, promotions or offers that may be of your interest.
                </li>
                <li className="text-gray-800">
                  Recommend relevant matches to you and display your profile to other users.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">With whom does we share your information?</h3>
              <p className="mb-4 text-gray-800">
                Except where you are expressly informed on the site or as described in this privacy policy we do not sell, rent, share, trade or give away any of your personal information.
              </p>

              <h4 className="text-base sm:text-lg font-semibold text-red-700 mb-2">With our service providers and partners</h4>
              <p className="mb-4 text-gray-800">
                We may use third party service providers to provide website and application development, hosting, maintenance, backup, storage, payment processing, analysis and other services for us, which may require them to access or use information about you. If a service provider needs to access information about you to perform services on our behalf, they do so under close instruction from us, including policies and procedures designed to protect your information. All of our service providers and partners agree to strict confidentiality obligations.
              </p>

              <h4 className="text-base sm:text-lg font-semibold text-red-700 mb-2">With law enforcement agencies</h4>
              <p className="mb-6 text-gray-800">
                We will disclose your personally identifiable information as required by law and when we believe that disclosure is necessary to protect our rights, other members interest and protection and/or comply with a judicial proceeding, court order, or legal process served on our Web site.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">How will I know of changes in gahoishakti.in privacy policy?

</h3>
              <p className="mb-4">
              If we make a material change to our privacy policy, we will send an email communication about the update so you are always aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. If at any point we decide to use personally identifiable information in a manner materially different from that stated at the time it was collected, we will notify you by way of an email. We will give you a choice as to whether or not we can use information in this different manner and act accordingly.
              </p>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 