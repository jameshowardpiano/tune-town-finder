
import React from 'react';
import { Piano } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Piano className="h-8 w-8 text-piano-blue" />
          <span className="font-playfair text-2xl font-bold text-piano-blue">TuneTown</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#" className="text-gray-600 hover:text-piano-blue transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-piano-blue transition-colors">How It Works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-piano-blue transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-piano-blue transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-piano-blue">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
