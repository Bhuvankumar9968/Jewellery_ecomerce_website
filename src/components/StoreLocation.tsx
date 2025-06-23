import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle, MapPin } from 'lucide-react';

import Store1 from '@/assets/Store-1.jpg';
import Store2 from '@/assets/Store-2.jpg';

const storeBranches = [
  {
    id: 1,
    name: 'Kothapet',
    image: Store1,
    mapLink: 'https://www.google.com/maps/place/Swarna+Kanchi',
  },
  {
    id: 2,
    name: 'Peerzadiguda',
    image: Store2,
    mapLink: 'https://www.google.com/maps/place/Swarna+Kanchi',
  },
  {
    id: 3,
    name: 'Dilsukhnagar',
    image: Store1,
    mapLink: 'https://www.google.com/maps/place/Swarna+Kanchi',
  },
  {
    id: 4,
    name: 'Nalgonda',
    image: Store2,
    mapLink: 'https://www.google.com/maps/place/Swarna+Kanchi',
  },
];

const OurStores = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % storeBranches.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 w-full overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-3">
          Our Stores
        </h2>
      </div>

      <div className="max-w-[1440px] px-4 mx-auto flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left Carousel Section */}
        <div className="w-full md:w-1/2 relative pb-4">
          <div className="aspect-[16/8] w-full rounded overflow-hidden shadow-md relative group">
            {storeBranches.map((store, index) => (
              <div
                key={store.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <a
                  href={store.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative overflow-hidden"
                >
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-golden text-black px-4 py-2 text-center text-sm md:text-base font-medium">
                    <span className="inline-flex items-center justify-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Visit Our Store
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Store Name */}
          <div className="mt-2 text-maroon text-xl font-normal text-left">
            {storeBranches[currentIndex].name}
          </div>

          {/* Pagination Dots */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {storeBranches.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full border border-maroon transition-all duration-300 ${
                  index === currentIndex ? 'bg-maroon scale-110' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <div className="flex flex-col h-full gap-2">
            {/* Top Card */}
            <div className="bg-white rounded border border-gray-300 p-6 text-center flex-1 flex flex-col justify-center items-center">
              <a href="tel:+919513777002" className="text-3xl font-semibold text-maroon hover:underline mb-2">
                +91-9513-777-002
              </a>
              <p className="text-base text-gray-600">For store queries and schemes</p>
            </div>

            {/* Bottom Cards */}
            <div className="flex gap-2 flex-1">
              {/* Follow Us */}
              <div className="bg-white rounded border border-gray-200 p-6 text-center w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-normal text-black mb-4">Follow Us On</h3>
                <div className="flex justify-center gap-4 text-maroon">
                  <a href="#"><Facebook className="w-5 h-5" /></a>
                  <a href="#"><Instagram className="w-5 h-5" /></a>
                  <a href="#"><Twitter className="w-5 h-5" /></a>
                  <a href="#"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>

              {/* Chat with Us */}
              <div className="bg-white rounded border border-gray-200 p-6 text-center w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-normal text-black mb-2">Chat with Us</h3>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon underline inline-flex items-center justify-center gap-1 text-xl font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  9513-777-002
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStores;
