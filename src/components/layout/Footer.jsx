import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4 text-yellow-100">गहोई शक्ति जन कल्याण समिति</h3>
            <p className="text-red-200">Empowering our community through unity, tradition, and mutual support.</p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-yellow-100">Quick Links</h4>
            <ul className="flex flex-wrap justify-center sm:justify-start">
              <li className="w-1/2 mb-2"><Link to="/about" className="text-red-100 hover:text-yellow-100 transition-colors">About Us</Link></li>
              <li className="w-1/2 mb-2"><Link to="/suggestions" className="text-red-200 hover:text-yellow-100 transition-colors">Suggestions</Link></li>
              <li className="w-1/2 mb-2"><Link to="/PrivacyPolicy" className="text-red-200 hover:text-yellow-100 transition-colors">Privacy Policy</Link></li>
              <li className="w-1/2 mb-2"><Link to="/LatestNews" className="text-red-200 hover:text-yellow-100 transition-colors">Web Founder Message</Link></li>
              <li className="w-1/2 mb-2"><Link to="/LatestNews" className="text-red-200 hover:text-yellow-100 transition-colors">Latest News</Link></li>
              <li className="w-1/2 mb-2"><Link to="/SocialFlagSong" className="text-red-200 hover:text-yellow-100 transition-colors">Social Flag Song</Link></li>
              <li className="w-1/2 mb-2"><Link to="/Video" className="text-red-200 hover:text-yellow-100 transition-colors">Video</Link></li>
              <li className="w-1/2 mb-2"><Link to="/PrivacyPolicy" className="text-red-200 hover:text-yellow-100 transition-colors">Rite</Link></li>
              <li className="w-1/2 mb-2"><Link to="/contact" className="text-red-100 hover:text-yellow-100 transition-colors">Contact</Link></li>
              <li className="w-1/2 mb-2"><Link to="/login" className="text-red-100 hover:text-yellow-100 transition-colors">Login</Link></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-yellow-100">Contact Info</h4>
            <ul className="space-y-2 text-red-200">
              <li>Email: Gahoiramesh@gmail.com</li>
              <li>Phone: +91 942 510 9934</li>
              <li className="text-sm sm:text-base">Address: 23 - Pant Nagar Extension In Front of Sanskar Public School Mahalgaon Gwalior (M.P.)</li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-yellow-100">Follow Us</h4>
            <div className="flex justify-center sm:justify-start space-x-6">
              <a href="https://www.facebook.com/Gahoisamjindia" 
                className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-red-200 hover:bg-[#1877f2] transition-colors duration-300"
                aria-label="Follow us on Facebook">
                <svg className="w-5 h-5 text-red-900 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/gahoisamajindia/" 
                className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-red-200 hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] transition-all duration-300"
                aria-label="Follow us on Instagram">
                <svg className="w-5 h-5 text-red-900 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/gahoisamajindia/" 
                className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-red-200 hover:bg-[#FF0000] transition-all duration-300"
                aria-label="Subscribe us on Youtube">
                <svg className="w-5 h-5 text-red-900 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.87 4 12 4 12 4s-6.87 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.95 1.96c1.72.46 8.59.46 8.59.46s6.87 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96c.46-1.71.46-5.58.46-5.58s0-3.87-.46-5.58zM10 15.5V8.5l6 3.5-6 3.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-red-800 mt-8 pt-8 text-center text-red-200">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Gahoi Shakti Jan Kalyan Samiti India 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 