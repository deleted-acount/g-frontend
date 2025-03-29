import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-100">श्री गहोई शक्ति</h3>
            <p className="text-red-200">Empowering our community through unity, tradition, and mutual support.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-red-100 hover:text-yellow-100">About Us</Link></li>
              <li><Link to="/plans" className="text-red-200 hover:text-yellow-100">Our Plans</Link></li>
              <li><Link to="/team" className="text-red-200 hover:text-yellow-100">Our Team</Link></li>
              <li><Link to="/registration" className="text-red-200 hover:text-yellow-100">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-100">Contact Info</h4>
            <ul className="space-y-2 text-red-200">
              <li>Email: contact@gahoi.org</li>
              <li>Phone: +91 XXX XXX XXXX</li>
              <li>Address: Your Address Here</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-100">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-red-200 hover:text-yellow-100">Facebook</a>
              <a href="#" className="text-red-200 hover:text-yellow-100">Twitter</a>
              <a href="#" className="text-red-200 hover:text-yellow-100">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-red-800 mt-8 pt-8 text-center text-red-200">
          <p>&copy; {new Date().getFullYear()} श्री गहोई शक्ति. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 