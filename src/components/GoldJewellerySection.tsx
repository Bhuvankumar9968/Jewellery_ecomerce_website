import React from 'react';

// Image imports
import Banner1 from '@/assets/Gold-product-1.jpg';
import Banner2 from '@/assets/Gold-product-2.jpg';
import Banner3 from '@/assets/Gold-product-3.jpg';
import Banner4 from '@/assets/Gold-product-4.jpg';
import Banner5 from '@/assets/Gold-product-5.jpg';
import Banner6 from '@/assets/Gold-product-6.jpg';

const leftBanners = [
  { id: 1, src: Banner1, alt: 'Birthday Sparkles' },
  { id: 2, src: Banner2, alt: 'Love That Lasts' },
];

const centerBanners = [
  { id: 5, src: Banner5, alt: 'Gold Card' },
  { id: 6, src: Banner6, alt: 'Corporate Gifting' },
];

const rightBanners = [
  { id: 3, src: Banner3, alt: 'Festive Jewelry' },
  { id: 4, src: Banner4, alt: 'Big Smiles' },
];

const GoldBanners = () => {
  return (
    <section className="py-12 bg-white w-screen overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif  font-medium text-maroon mb-4">
          Gold Jewellery
        </h2>
        <p className="text-warmGrey text-lg max-w-2xl mx-auto">
          Discover our curated collections designed for every occasion and celebration
        </p>
      </div>

      {/* Layout wrapper */}
      <div className="flex flex-col xl:flex-row justify-center items-stretch gap-4 px-4 max-w-[1440px] mx-auto">

        {/* Left Section */}
        <div className="w-full xl:w-1/4 flex flex-row xl:flex-col gap-4 xl:h-[540px]">
          {leftBanners.map((banner) => (
            <div
              key={banner.id}
              className="w-1/2 xl:w-full h-[180px] xl:h-1/2 overflow-hidden rounded relative group"
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Center Section */}
        <div className="w-full xl:w-1/2 flex gap-4 aspect-[2/1] xl:h-[540px] min-h-[300px]">
          {centerBanners.map((banner) => (
            <div
              key={banner.id}
              className="w-1/2 h-full overflow-hidden rounded relative group"
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full xl:w-1/4 flex flex-row xl:flex-col gap-4 xl:h-[540px]">
          {rightBanners.map((banner) => (
            <div
              key={banner.id}
              className="w-1/2 xl:w-full h-[180px] xl:h-1/2 overflow-hidden rounded relative group"
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GoldBanners;
