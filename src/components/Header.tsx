
import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-earth-green" />
            <span className="font-playfair font-bold text-xl text-forest-green">
              EcoThrive Africa
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-earth-brown hover:text-earth-green transition-colors duration-300">
              Home
            </Link>
            <Link to="/services" className="text-earth-brown hover:text-earth-green transition-colors duration-300">
              Services
            </Link>
            <Link to="/projects" className="text-earth-brown hover:text-earth-green transition-colors duration-300">
              Projects
            </Link>
            <Link to="/blog" className="text-earth-brown hover:text-earth-green transition-colors duration-300">
              Blog
            </Link>
            <a href="#about" className="text-earth-brown hover:text-earth-green transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-earth-brown hover:text-earth-green transition-colors duration-300">
              Contact
            </a>
            <Button className="bg-earth-green hover:bg-forest-green text-white">
              Get Started
            </Button>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-earth-brown hover:text-earth-green transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-earth-brown hover:text-earth-green transition-colors">
                Home
              </Link>
              <Link to="/services" className="block px-3 py-2 text-earth-brown hover:text-earth-green transition-colors">
                Services
              </Link>
              <Link to="/projects" className="block px-3 py-2 text-earth-brown hover:text-earth-green transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-earth-brown hover:text-earth-green transition-colors">
                Blog
              </Link>
              <a href="#about" className="block px-3 py-2 text-earth-brown hover:text-earth-green transition-colors">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-earth-brown hover:text-earth-green transition-colors">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-earth-green hover:bg-forest-green text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
