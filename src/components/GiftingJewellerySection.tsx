import React from 'react';

// Image imports
import Banner1 from '@/assets/Gift-1.jpg';
import Banner2 from '@/assets/Gift-2.jpg';
import Banner3 from '@/assets/Gift-3.jpg';
import Banner4 from '@/assets/Gift-4.jpg';
import Banner5 from '@/assets/Gift-5.jpg';
import Banner6 from '@/assets/Gift-6.jpg';

const leftBanners = [
  { id: 1, src: Banner1, alt: 'Birthday Sparkles' },
  { id: 2, src: Banner2, alt: 'Love That Lasts' },
  { id: 3, src: Banner3, alt: 'Festive Jewelry' },
  { id: 4, src: Banner4, alt: 'Big Smiles' },
];

const rightBanners = [
  { id: 5, src: Banner5, alt: 'Gold Card' },
  { id: 6, src: Banner6, alt: 'Corporate Gifting' },
];

const GiftingSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-4">
          Gifting & More
        </h2>
      </div>

      <div className="container mx-auto px-4 flex flex-col xl:flex-row gap-6 items-stretch">
        {/* Left Section */}
        <div className="w-full xl:w-1/2 grid grid-cols-2 gap-x-4">
          {leftBanners.map((banner, index) => (
            <div
              key={banner.id}
              className={`aspect-[16/9] overflow-hidden rounded relative group ${
                index < 2 ? 'pb-1' : 'pt-1'
              }`} // creates same 0.5rem vertical space but without affecting container height
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full xl:w-1/2 flex items-stretch">
          <div className="flex w-full h-full gap-4">
            {rightBanners.map((banner) => (
              <div key={banner.id} className="flex-1 overflow-hidden rounded relative group">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingSection;
