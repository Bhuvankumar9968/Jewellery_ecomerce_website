// components/layout/TopBar.tsx

import { useState } from 'react';
import { X } from 'lucide-react';

const TopBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="flex justify-center items-center bg-[#641b19] text-white py-2 px-4 sm:px-6 text-sm relative">
            {/* Centered Text */}
            <div className="font-medium text-center text-xs sm:text-sm">
                For Store and Scheme Queries: 81210 06820
            </div>

            {/* Close (X) Button */}
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => setIsVisible(false)}
                aria-label="Close top bar"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default TopBar;
