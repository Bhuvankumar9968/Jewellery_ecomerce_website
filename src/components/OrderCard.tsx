import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = ({ image, name, quantity, price }) => {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-3 bg-white">
      {/* Image */}
      <div className="w-16 h-16 rounded overflow-hidden border border-gray-300">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1 px-4">
          <p className="font-semibold text-gray-800 font-serif text-lg truncate w-48 overflow-hidden">{name}</p>
        {quantity && (
          <p className="text-sm text-gray-500 mt-1">Quantity: {quantity}</p>
        )}
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-maroon font-medium text-lg">₹{price.toLocaleString()}</p>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.number.isRequired
};

export default OrderCard;
