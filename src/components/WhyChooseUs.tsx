// components/WhyChooseUsCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

// Import local image and icon
import OurPromisesImage from '@/assets/OurPromises.png'; // Adjust path if needed
import PromisesIcon from '@/assets/Promises-icon.svg';

const features = [
  { title: "100% Certified Jewellery" },
  { title: "Complete Transparency" },
  { title: "Complimentary Insurance" },
  { title: "Lifetime Maintenance" },
  { title: "100% HUID Compliant Gold" },
  { title: "Free Returns" },
  { title: "Express Delivery" },
  { title: "Certified Diamonds" },
];

const CARD_SIZE = 180;
const CARD_GAP = 12;
const SLIDE_SPEED = 3000;

const WhyChooseUsCarousel = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-golden">
      
      {/* Title Above Both Image and Carousel */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-3">
          Our Promises
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-4">
        
        {/* Left: Fixed Image */}
        <div
          className="hidden md:block"
          style={{ width: CARD_SIZE, height: CARD_SIZE }}
        >
          <img
            src={OurPromisesImage}
            alt="Our Promises"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right: Scrollable Cards */}
        <div className="flex-1 w-full overflow-hidden">
          <Swiper
            loop={true}
            speed={SLIDE_SPEED}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={6}
            spaceBetween={CARD_GAP}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            modules={[Autoplay]}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col items-center justify-center border border-gray-300 shadow-sm rounded-xl pt-6 pb-4 px-3 bg-white"
                  style={{ width: CARD_SIZE, height: CARD_SIZE }}
                >
                  <div className="bg-white">
                    <img src={PromisesIcon} alt={feature.title} className="w-20 h-20 object-contain" />
                  </div>
                  <p className="text-md text-center text-gray-800 mt-3">{feature.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsCarousel;
