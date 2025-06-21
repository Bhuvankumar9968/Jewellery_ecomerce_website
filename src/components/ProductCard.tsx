import React from 'react';
import { Heart } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link

const ProductCard = ({ image, name, price, code, showWishlist = true }) => {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden flex flex-col h-[400px] w-full sm:w-[300px] md:w-[320px] lg:w-[320px] bg-white mx-auto group">
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
        <Link to="/productDetail">
          <h3 className="text-base text-xl font-serif font-regural text-gray-800 hover:text-maroon cursor-pointer transition-colors duration-200 truncate">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1">{code}</p>
        <p className="text-maroon text-lg font-medium mt-1">{price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  showWishlist: PropTypes.bool
};

export default ProductCard;
