import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProductCard from './ProductCard';

// Import local images
import BridalNecklace from '@/assets/NewArrival-1.jpg';
import GoldEarrings from '@/assets/NewArrival-2.jpg';
import KidsPendant from '@/assets/NewArrival-3.jpg';
import MensBracelet from '@/assets/NewArrival-4.jpg';
import AntiqueBangles from '@/assets/NewArrival-5.jpg';
import AntiqueBangles2 from '@/assets/NewArrival-6.jpg';

const products = [
  {
    id: 1,
    image: BridalNecklace,
    name: 'Bridal Necklace Set',
    price: '₹12,999'
  },
  {
    id: 2,
    image: GoldEarrings,
    name: 'Daily Gold Earrings',
    price: '₹2,499'
  },
  {
    id: 3,
    image: KidsPendant,
    name: 'Kids Pendant',
    price: '₹1,299'
  },
  {
    id: 4,
    image: MensBracelet,
    name: 'Men’s Bracelet',
    price: '₹5,999'
  },
  {
    id: 5,
    image: AntiqueBangles,
    name: 'Antique Bangles',
    price: '₹8,499'
  }
];

const ProductCarousel = () => {
  return (
    <section className="py-12 bg-maroon">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-3">
          New Arrivals
        </h2>
      </div>

      <div className="container mx-auto px-4 pt-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard 
                image={product.image} 
                name={product.name} 
                price={product.price} 
                showWishlist={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Products Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-white text-maroon font-semibold rounded-lg hover:bg-golden hover:text-black transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
