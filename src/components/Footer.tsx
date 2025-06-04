
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-xl mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 6h18l-2 12H5L3 6zm0 0L2 4H1v2h2l2 14h14l2-12H3z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">WasteAway</h3>
                <p className="text-sm text-gray-400">Skip Hire Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional skip hire services across the UK. Fast delivery, competitive prices, and exceptional customer service.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@wasteaway.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">London, Manchester, Birmingham</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Residential Skip Hire</li>
              <li className="hover:text-white transition-colors cursor-pointer">Commercial Waste</li>
              <li className="hover:text-white transition-colors cursor-pointer">Construction Skips</li>
              <li className="hover:text-white transition-colors cursor-pointer">Garden Clearance</li>
              <li className="hover:text-white transition-colors cursor-pointer">House Clearance</li>
              <li className="hover:text-white transition-colors cursor-pointer">Office Clearance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Coverage Areas</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-white transition-colors cursor-pointer">What Can Go In</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 WasteAway. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
