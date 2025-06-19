import React from 'react';
import LeftImage from '@/assets/Diamond-1200X1055.jpg';
import RightTopImage from '@/assets/Diamond-1200x555.jpg';
import RightBottom1 from '@/assets/Diamond-2-355X440.jpg';
import RightBottom2 from '@/assets/Diamond-355X440.jpg';
import RightBottom3 from '@/assets/Diamond-3-355X440.jpg';

const DiamondJewellerySection = () => {
  return (
    <section className="bg-white py-12">
       <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif  font-medium text-maroon mb-4">
            Diamond Jewellery
          </h2>
          <p className="text-warmGrey text-lg max-w-2xl mx-auto">
            Discover our curated collections designed for every occasion and celebration
          </p>
        </div>
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden xl:grid grid-cols-2 gap-6 max-h-screen overflow-hidden">
          {/* Left Image */}
          <div className="h-full overflow-hidden rounded group">
            <img
              src={LeftImage}
              alt="Crafted with Pride"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Right Side Images */}
          <div className="flex flex-col h-full gap-4">
            {/* Top Right Image */}
            <div className="h-1/2 overflow-hidden rounded group">
              <img
                src={RightTopImage}
                alt="Timeless Brilliance"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* Bottom Right 3 Images */}
            <div className="grid grid-cols-3 gap-4 h-1/2">
              {[RightBottom1, RightBottom2, RightBottom3].map((src, i) => (
                <div key={i} className="overflow-hidden rounded group">
                  <img
                    src={src}
                    alt={`Diamond ${i + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="xl:hidden flex flex-col gap-4">
          {[LeftImage, RightTopImage].map((src, i) => (
            <div key={i} className="overflow-hidden rounded group">
              <img
                src={src}
                alt={`Diamond ${i + 1}`}
                className="w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}

          {/* Bottom 3 Images in a Row on Mobile */}
          <div className="grid grid-cols-3 gap-4">
            {[RightBottom1, RightBottom2, RightBottom3].map((src, i) => (
              <div key={i} className="overflow-hidden rounded group">
                <img
                  src={src}
                  alt={`Diamond ${i + 3}`}
                  className="w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DiamondJewellerySection;
