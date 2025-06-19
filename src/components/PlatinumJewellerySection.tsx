import React from 'react';

import Platinum1 from '@/assets/Platinum.jpg'; // Placeholder
import Platinum2 from '@/assets/Platinum.jpg'; // Placeholder

const platinumImages = [
  { id: 1, src: Platinum1, alt: 'Platinum Jewelry 1' },
  { id: 2, src: Platinum2, alt: 'Platinum Jewelry 2' },
];

const PlatinumCollection = () => {
  return (
    <section className="py-12 bg-white w-full overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-3">
          Platinum Collection
        </h2>
        <p className="text-warmGrey text-base md:text-lg max-w-2xl mx-auto">
          Elegant platinum pieces that embody timeless sophistication
        </p>
      </div>

      <div className="max-w-[1440px] px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {platinumImages.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-1/2 h-[220px] md:h-[300px] overflow-hidden rounded relative group"
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

export default PlatinumCollection;
