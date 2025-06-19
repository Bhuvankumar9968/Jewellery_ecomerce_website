import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
    name: 'Bridal Necklace Set',
    price: '₹12,999'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
    name: 'Daily Gold Earrings',
    price: '₹2,499'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400',
    name: 'Kids Pendant',
    price: '₹1,299'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    name: 'Men’s Bracelet',
    price: '₹5,999'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400',
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
          <button className="px-6 py-3 bg-white text-maroon font-semibold rounded-lg  hover:bg-golden hover:text-black transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
