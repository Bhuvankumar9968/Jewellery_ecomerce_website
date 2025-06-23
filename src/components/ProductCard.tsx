import React, { useState, useEffect, useRef } from 'react';
import { Heart, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({
  id,
  images = [],
  name,
  price,
  code,
  showWishlist = true,
  showDelete = false,
  isNew = false,
  showAddToCart = false,
  onDelete
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const [visible, setVisible] = useState(true);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const hasMultipleImages = images.length > 1;

  // Auto slide for mobile
  useEffect(() => {
    if (isMobile && hasMultipleImages) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [images, isMobile, hasMultipleImages]);

  const startSlideShow = () => {
    if (isMobile || !hasMultipleImages) return;
    setActiveIndex(1);
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 2000);
  };

  const stopSlideShow = () => {
    if (isMobile) return;
    clearInterval(intervalRef.current);
    setActiveIndex(0);
  };

  const handleDelete = () => {
    setVisible(false);
    if (onDelete) onDelete(id);
  };

  if (!visible) return null;

  return (
    <div
      className="border border-gray-300 rounded-xl overflow-hidden flex flex-col w-full sm:w-[300px] md:w-[318px] bg-white mx-auto group transition-all duration-300 h-auto"
      onMouseEnter={startSlideShow}
      onMouseLeave={stopSlideShow}
    >
      <div className="relative w-full h-[238px] overflow-hidden">
        <div
          className="h-full w-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: hasMultipleImages ? `translateX(-${activeIndex * 100}%)` : 'none'
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${name}-${index}`}
              className={`h-full w-full object-cover flex-none shrink-0 grow-0 basis-full transition-transform duration-500 ${
                !hasMultipleImages ? 'group-hover:md:scale-105' : ''
              }`}
            />
          ))}
        </div>

        {/* New badge */}
        {isNew && (
          <span className="absolute top-2 left-2 bg-maroon text-white text-xs font-semibold px-3 py-1 rounded-md">
            New Product
          </span>
        )}

        {/* Wishlist or Delete */}
        {showDelete ? (
          <button
            onClick={handleDelete}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition-colors"
            aria-label="Delete"
          >
            <Trash2 size={22} />
          </button>
        ) : showWishlist && (
          <button
            className="absolute top-2 right-2 group/heart"
            aria-label="Add to wishlist"
          >
            <Heart
              size={22}
              className="text-golden transition-colors duration-200 group-hover/heart:fill-golden"
            />
          </button>
        )}
      </div>

      <div className={`p-4 flex flex-col ${showAddToCart ? 'justify-between h-[160px]' : 'h-auto'}`}>
        <div>
          <Link to="/productDetail">
            <h3 className="text-base text-xl font-serif text-gray-800 group-hover:text-maroon transition-colors duration-200 cursor-pointer truncate">
              {name}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 mt-1">{code}</p>
          <p className="text-maroon text-lg font-medium mt-1">{price}</p>
        </div>

        {showAddToCart && (
          <button className="mt-3 w-full bg-maroon text-white text-sm font-semibold py-3 rounded-md hover:bg-maroon-dark transition">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  showWishlist: PropTypes.bool,
  showDelete: PropTypes.bool,
  isNew: PropTypes.bool,
  showAddToCart: PropTypes.bool,
  onDelete: PropTypes.func
};

export default ProductCard;
