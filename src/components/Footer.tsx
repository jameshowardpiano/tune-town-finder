
import React from 'react';
import { Piano } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-piano-light py-10 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <Piano className="h-6 w-6 text-piano-blue" />
              <span className="font-playfair text-xl font-bold text-piano-blue">TuneTown</span>
            </div>
            <p className="mt-2 text-gray-600 max-w-md">
              Connecting piano owners with skilled tuners in their area. Keep your piano sounding beautiful with professional tuning services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-4">For Piano Owners</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Find a Tuner</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Piano Care Tips</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Pricing Guide</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-playfair text-lg font-semibold mb-4">For Tuners</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Join as a Tuner</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Login</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-piano-blue">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TuneTown Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
