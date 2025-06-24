import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = ({ image, name, quantity, mrp }) => {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-3">
      {/* Left: Product Image */}
      <div className="w-16 h-16 rounded overflow-hidden border border-gray-300">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle: Product Details */}
      <div className="flex-1 px-4">
        <p className="font-semibold text-gray-800 text-sm truncate">{name}</p>
        {quantity && (
          <p className="text-xs text-gray-500 mt-1">Quantity: {quantity}</p>
        )}
      </div>

      {/* Right: Price */}
      <div className="text-right">
        <p className="text-maroon font-semibold text-sm">{mrp}</p>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mrp: PropTypes.string.isRequired
};

export default OrderCard;
