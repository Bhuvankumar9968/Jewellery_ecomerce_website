import React from 'react';
import { Heart } from 'lucide-react';
import PropTypes from 'prop-types';

const ProductCard = ({ image, name, price, showWishlist = true }) => {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden flex flex-col h-[400px] w-full sm:w-[300px] md:w-[320px] lg:w-[320px] bg-white shadow-sm mx-auto group">
      <div className="relative flex-grow overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {showWishlist && (
          <button
            className="absolute top-2 right-2 transition group/icon"
            aria-label="Add to wishlist"
          >
            <Heart
              size={22}
              className="text-golden group-hover/icon:fill-golden transition-colors duration-200"
            />
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 hover:text-maroon cursor-pointer transition-colors duration-200">
          {name}
        </h3>
        <p className="text-maroon text-sm font-bold mt-1">{price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  showWishlist: PropTypes.bool
};

export default ProductCard;
