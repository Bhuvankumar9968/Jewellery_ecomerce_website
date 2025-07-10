// components/layout/TopBar.tsx

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center bg-[#5E1412] text-white py-2 px-6 text-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <span>For any queries reach out to us on :</span>
        <a
          href="tel:+918121006820"
          className="flex items-center space-x-1 hover:text-gold"
        >
          <Phone className="w-4 h-4" />
          <span>81210 06820</span>
        </a>
        <a
          href="https://wa.me/919100903659"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 hover:text-gold"
        >
          <MessageCircle className="w-4 h-4" />
          <span>91009 03659</span>
        </a>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4">
        {/* Silver Box */}
        <div className="bg-transparent text-white border border-[#ffffff] rounded-md px-3 py-2 flex items-center justify-between w-44">
          <div>
            <div className="font-normal text-md">Silver</div>
            <div className="text-xs italic text-gray-300">18 Jun 2025</div>
          </div>
          <div className="text-right font-semibold text-md">₹111/gm</div>
        </div>

        {/* Gold Box */}
        <div className="bg-transparent text-white border border-[#D4AF37] rounded-md px-3 py-2 flex items-center justify-between w-44">
          <div>
            <div className="font-normal text-md">Gold</div>
            <div className="text-xs italic text-gray-300">18 Jun 2025</div>
          </div>
          <div className="text-right font-semibold text-md">₹9240/gm</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
