
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-green text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-earth-green" />
              <span className="font-playfair font-bold text-xl">
                EcoThrive Africa
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering African communities through comprehensive sustainability strategies. 
              Together, we're building a greener, more sustainable future for the continent.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-earth-green transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-earth-green transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-earth-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-earth-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-earth-green" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-earth-green" />
                <span className="text-gray-300">info@ecothriveafrica.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-earth-green" />
                <span className="text-gray-300">+254 (0) 700 000 000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 EcoThrive Africa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-earth-green text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-earth-green text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
