import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CartCard = ({
  image,
  productName,
  productCode,
  pricePerUnit,
  pills = [],
  dispatchText,
  onRemove = () => {},
  onMoveToWishlist = () => {},
}) => {
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const totalPrice = quantity * pricePerUnit;

  return (
    <div
      className={`bg-gray-50 p-4 rounded-lg relative ${
        showDetails ? '' : ''
      }`}
    >
      {/* Wishlist / Remove - Desktop */}
      <div className="hidden sm:flex absolute top-2 right-2 gap-4 text-sm">
        <button onClick={onMoveToWishlist} className="text-gray-500 hover:underline">
          Move to Wishlist
        </button>
        |
        <button onClick={onRemove} className="text-gray-500 hover:underline">
          Remove
        </button>
      </div>

      {/* Top Row: Image + Info */}
      <div className="flex gap-4">
        {/* Image */}
        <div className="w-24 sm:w-32 aspect-square flex-shrink-0 rounded-md overflow-hidden bg-white">
          <img src={image} alt={productName} className="w-full h-full object-cover" />
        </div>

        {/* Info Area */}
        <div className="flex flex-col mt-3 justify-start flex-1 w-full space-y-2">
          {/* Name + Price */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <h3 className="text-base text-xl font-semibold font-serif text-maroon break-words">
              {productName}
            </h3>
            <div className="text-lg font-medium text-gray-800 whitespace-nowrap mt-1 sm:mt-0">
              ₹{totalPrice.toLocaleString()}
            </div>
          </div>

          {/* Product Code */}
          <div className="text-sm text-gray-600">Product Code: {productCode}</div>

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Qty:</span>
            <div className="flex items-center gap-1">
              <button
                className="px-2 py-1 bg-white border border-gray-300 rounded-md"
                onClick={() => handleQuantityChange(-1)}
              >
                −
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button
                className="px-2 py-1 bg-white border border-gray-300 rounded-md"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Pills - Desktop only */}
          {pills.length > 0 && (
            <div className="hidden sm:flex flex-wrap gap-2 mt-1">
              {pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white text-xs text-gray-700 border border-gray-300 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          )}

          {/* Dispatch */}
          <div className="text-sm text-green-800 mt-1">
            Dispatch by: {dispatchText}
          </div>
        </div>
      </div>

      {/* Mobile: Toggle Details */}
      <button
        className="flex sm:hidden items-center gap-1 text-sm text-maroon font-medium mt-3"
        onClick={() => setShowDetails(!showDetails)}
      >
        Product Details
        <ChevronDown
          className={`transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`}
          size={16}
        />
      </button>

      {/* Pills - Mobile only when expanded */}
      {showDetails && (
        <div className="sm:hidden mt-3 flex flex-wrap gap-2">
          {pills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white text-xs text-gray-700 border border-gray-300 rounded-full"
            >
              {pill}
            </span>
          ))}
        </div>
      )}

      {/* Mobile Action Buttons */}
      <div className="sm:hidden mt-4 flex gap-3">
        <button
          onClick={onMoveToWishlist}
          className="w-full py-2 bg-gray-200 text-sm rounded-md text-center"
        >
          Move to Wishlist
        </button>
        <button
          onClick={onRemove}
          className="w-full py-2 bg-gray-200 text-sm rounded-md text-center"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
