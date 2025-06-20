import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TrendingImage from '../assets/TrendingProducts.jpg';

const videos = [
  'https://www.youtube.com/embed/Eb4O0wbePeU?autoplay=1&mute=1&loop=1&playlist=Eb4O0wbePeU&controls=0',
  'https://www.youtube.com/embed/qrZfllvem1c?autoplay=1&mute=1&loop=1&playlist=qrZfllvem1c&controls=0',
  'https://www.youtube.com/embed/BuM4880Lhyg?autoplay=1&mute=1&loop=1&playlist=BuM4880Lhyg&controls=0',
  'https://www.youtube.com/embed/vm-bsszjc7E?autoplay=1&mute=1&loop=1&playlist=vm-bsszjc7E&controls=0',
  'https://www.youtube.com/embed/KUTsELTkIzk?autoplay=1&mute=1&loop=1&playlist=KUTsELTkIzk&controls=0',
  'https://www.youtube.com/embed/z4WWXaj6Sfw?autoplay=1&mute=1&loop=1&playlist=z4WWXaj6Sfw&controls=0',
  'https://www.youtube.com/embed/0FYW9ZnFi7A?autoplay=1&mute=1&loop=1&playlist=0FYW9ZnFi7A&controls=0',
  'https://www.youtube.com/embed/acJOwoiAkDY?autoplay=1&mute=1&loop=1&playlist=acJOwoiAkDY&controls=0',
];

const TrendingProducts = () => {
  return (
    <section className="bg-maroon py-16">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-6">
          {/* Left Image */}
          <div className="w-[40%]">
            <img
              src={TrendingImage}
              alt="Trending Product"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Right Videos */}
          <div className="w-[60%]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={4}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={3000}
              loop={true}
              className="w-full"
              breakpoints={{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 2 },
              }}
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[9/16] overflow-hidden rounded group">
                    <iframe
                      src={video}
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full pointer-events-none group-hover:pointer-events-auto"
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-4">
          <div>
            <img
              src={TrendingImage}
              alt="Trending Product"
              className="w-full object-cover rounded"
            />
          </div>

          {/* Scrollable Shorts */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={2}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            loop={true}
            className="w-full"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[9/16] overflow-hidden rounded group">
                  <iframe
  src={video.replace('&controls=0', '&controls=1')} // enable controls
  title={`Video ${index + 1}`}
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="w-full h-full rounded md:pointer-events-none md:group-hover:pointer-events-auto"
/>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
