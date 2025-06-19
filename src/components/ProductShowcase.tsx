import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Local images
import BanglesImg from '@/assets/categories/Bangles.jpg';
import ChainsImg from '@/assets/categories/Chains.jpg';
import EarringsImg from '@/assets/categories/Earrings.jpg';
import NecklacesImg from '@/assets/categories/Necklace.jpg';
import PendantsImg from '@/assets/categories/Pendants.jpg';
import RingsImg from '@/assets/categories/Rings.jpg';
import AnkletsImg from '@/assets/categories/Anklets.jpg';
import BraceletsImg from '@/assets/categories/Bracelets.jpg';

const categories = [
  { id: 1, name: 'Bangles', image: BanglesImg },
  { id: 2, name: 'Chains', image: ChainsImg },
  { id: 3, name: 'Earrings', image: EarringsImg },
  { id: 4, name: 'Necklaces', image: NecklacesImg },
  { id: 5, name: 'Pendants', image: PendantsImg },
  { id: 6, name: 'Rings', image: RingsImg },
  { id: 7, name: 'Anklets', image: AnkletsImg },
  { id: 8, name: 'Bracelets', image: BraceletsImg },
];

const ShopByCategory = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-maroon mb-12">
          Shop By Category
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div className="text-center cursor-pointer group">
                  <div className="w-full aspect-[3/4] overflow-hidden rounded bg-white">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-lg font-medium text-gray-700">{cat.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="swiper-pagination mt-14 text-center" /> */}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
