import React from 'react';
import { X, Facebook, Instagram, Twitter } from 'lucide-react';
import MegaMenu from './MegaMenu';
import logo from '../../src/logo.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 transition-transform duration-300 ease-in-out overflow-y-auto shadow-lg ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="w-auto h-14 overflow-hidden">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <button onClick={onClose} className="text-maroon">
          <X size={24} />
        </button>
      </div>

      {/* Mega Menu in Mobile */}
      <div className="px-4 py-3">
        <MegaMenu isOpen={true} />
      </div>

      {/* Extra Mobile Links */}
      <div className="bg-[#f6f6f6] px-4 py-6 space-y-4 border-t">
  <a
    href="/stores"
    className="block text-gray-700 font-normal hover:text-maroon transition-colors"
  >
    Find a Store
  </a>
  <a
    href="/faqs"
    className="block text-gray-700 font-normal hover:text-maroon transition-colors"
  >
    FAQs
  </a>

  <div>
    <p className="text-gray-700 font-normal mb-2">Follow us</p>
    <div className="flex space-x-4">
      <a
        href="#"
        className="bg-white rounded-full p-2 flex items-center justify-center hover:text-maroon transition-colors"
      >
        <Facebook size={20} className="text-gray-600 group-hover:text-maroon" />
      </a>
      <a
        href="#"
        className="bg-white rounded-full p-2 flex items-center justify-center hover:text-maroon transition-colors"
      >
        <Instagram size={20} className="text-gray-600 group-hover:text-maroon" />
      </a>
      <a
        href="#"
        className="bg-white rounded-full p-2 flex items-center justify-center hover:text-maroon transition-colors"
      >
        <Twitter size={20} className="text-gray-600 group-hover:text-maroon" />
      </a>
    </div>
  </div>
</div>

      </div>
  );
};

export default MobileMenu;