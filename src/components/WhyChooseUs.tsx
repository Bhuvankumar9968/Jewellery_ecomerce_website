// components/WhyChooseUsCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const features = [
  {
    title: "Complete Transparency",
    description: "At Sri Swarna Kanchi, every piece of jewellery is sold with full transparency of pricing, purity, and certifications.",
    icon: "https://via.placeholder.com/48?text=Icon1"
  },
  {
    title: "Complimentary Insurance",
    description: "Assured insurance for 1 year against theft, loss or burglary – free of cost.",
    icon: "https://via.placeholder.com/48?text=Icon2"
  },
  {
    title: "Assured Lifetime Maintenance",
    description: "We offer lifetime cleaning and polishing of your jewellery at no extra cost.",
    icon: "https://via.placeholder.com/48?text=Icon3"
  },
  {
    title: "100% HUID Compliant Gold",
    description: "All jewellery comes with BIS hallmark & HUID compliant gold certification.",
    icon: "https://via.placeholder.com/48?text=Icon4"
  },
  {
    title: "Assured Lifetime Maintenance",
    description: "We offer lifetime cleaning and polishing of your jewellery at no extra cost.",
    icon: "https://via.placeholder.com/48?text=Icon3"
  },
  {
    title: "100% HUID Compliant Gold",
    description: "All jewellery comes with BIS hallmark & HUID compliant gold certification.",
    icon: "https://via.placeholder.com/48?text=Icon4"
  }
];

const WhyChooseUsCarousel = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-12 px-6 bg-white">
      {/* Fixed Left Image */}
      <div className="w-full md:w-1/3 flex justify-center mb-10 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"
          alt="Brand Ambassador"
          className="w-[334px] h-[294px] object-cover rounded-lg"
        />
      </div>

      {/* Carousel Right Section */}
      <div className="w-full md:w-2/3">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 h-full flex flex-col items-center justify-start min-h-[300px]">
                <img src={feature.icon} alt={feature.title} className="h-12 mb-4" />
                <h3 className="text-base font-semibold text-center text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-center">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyChooseUsCarousel;
