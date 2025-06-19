import React from 'react';

import Gem1 from '@/assets/Gemstone.jpg';
import Gem2 from '@/assets/Gemstone.jpg';
import Gem3 from '@/assets/Gemstone.jpg';
import Gem4 from '@/assets/Gemstone.jpg';

const gems = [
  { id: 1, src: Gem1, alt: 'Gemstone 1' },
  { id: 2, src: Gem2, alt: 'Gemstone 2' },
  { id: 3, src: Gem3, alt: 'Gemstone 3' },
  { id: 4, src: Gem4, alt: 'Gemstone 4' },
];

const GemstoneCollection = () => {
  return (
    <section className="py-12 bg-white w-full overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-3">
          Gemstone Collection
        </h2>
        <p className="text-warmGrey text-base md:text-lg max-w-2xl mx-auto">
          Explore timeless gemstone pieces designed for every occasion
        </p>
      </div>

      {/* Apply the same max-width wrapper as Gold Section */}
      <div className="max-w-[1440px] px-4 mx-auto">
        {/* Desktop: 4 items side by side */}
        <div className="hidden md:flex gap-4">
          {gems.map((item) => (
            <div
              key={item.id}
              className="flex-1 h-[380px] overflow-hidden rounded relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {gems.map((item) => (
            <div
              key={item.id}
              className="w-full h-[320px] overflow-hidden rounded relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemstoneCollection;
