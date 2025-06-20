import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const instagramReels = [
  'https://www.instagram.com/reel/DJGZm-ko1Q4/embed',
  'https://www.instagram.com/reel/DJGZBm7Khxc/embed',
  'https://www.instagram.com/reel/DJGYXklMiz7/embed',
  'https://www.instagram.com/reel/DJGWalGvTQ9/embed',
  'https://www.instagram.com/reel/DJGWFQLoe0l/embed',
  'https://www.instagram.com/reel/DJEsJIpN2t5/embed',
  'https://www.instagram.com/reel/DJD2TySNrqz/embed',
  'https://www.instagram.com/reel/DJBSAkwNNW7/embed',
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={6}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            loop={true}
            className="w-full"
          >
            {instagramReels.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[9/16] overflow-hidden rounded group">
                  <iframe
                    src={url}
                    title={`Instagram Reel ${index + 1}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                    className="w-full h-full pointer-events-none group-hover:pointer-events-auto"
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={2}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            loop={true}
            className="w-full"
          >
            {instagramReels.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[9/16] overflow-hidden rounded">
                  <iframe
                    src={url}
                    title={`Instagram Reel ${index + 1}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                    className="w-full h-full pointer-events-auto"
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
