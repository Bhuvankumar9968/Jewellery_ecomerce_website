import React from 'react';

// Using same gold images for now
import Banner1 from '@/assets/Earring-1.jpg';
import Banner2 from '@/assets/Earring-3.png';
import Banner3 from '@/assets/Earring-4.png';
import Banner4 from '@/assets/Earring-2.jpg';

const banners = [
  { id: 1, src: Banner1, alt: 'Elegant Earring 1' },
  { id: 2, src: Banner2, alt: 'Charming Earring 2' },
  { id: 3, src: Banner3, alt: 'Stylish Earring 3' },
  { id: 4, src: Banner4, alt: 'Classic Earring 4' },
];

const EarringCollection = () => {
  return (
    <section className="py-12 bg-white w-screen overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif  font-medium text-maroon mb-3">
          Earring Collection
        </h2>
        <p className="text-warmGrey text-base md:text-lg max-w-2xl mx-auto">
          Stunning earrings to match every style and occasion
        </p>
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-1 gap-4 px-4 max-w-[1440px] mx-auto">
        {/* Top Row */}
        <div className="flex gap-4">
          <div className="w-[60%] h-[220px] overflow-hidden rounded relative group">
            <img
              src={banners[0].src}
              alt={banners[0].alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="w-[40%] h-[220px] overflow-hidden rounded relative group">
            <img
              src={banners[1].src}
              alt={banners[1].alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex gap-4">
          <div className="w-[40%] h-[220px] overflow-hidden rounded relative group">
            <img
              src={banners[2].src}
              alt={banners[2].alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="w-[60%] h-[220px] overflow-hidden rounded relative group">
            <img
              src={banners[3].src}
              alt={banners[3].alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center gap-4 px-4">
        {/* Top full width image */}
        <div className="w-full h-[160px] overflow-hidden rounded relative group">
          <img
            src={banners[0].src}
            alt={banners[0].alt}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Two small images side by side, centered */}
        <div className="flex gap-4 justify-center w-full">
          <div className="w-1/2 h-[120px] overflow-hidden rounded relative group">
            <img
              src={banners[1].src}
              alt={banners[1].alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="w-1/2 h-[120px] overflow-hidden rounded relative group">
            <img
              src={banners[2].src}
              alt={banners[2].alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom full width image */}
        <div className="w-full h-[160px] overflow-hidden rounded relative group">
          <img
            src={banners[3].src}
            alt={banners[3].alt}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default EarringCollection;
