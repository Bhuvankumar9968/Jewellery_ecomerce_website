import React, { useState } from 'react';

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

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const totalPrice = quantity * pricePerUnit;

  return (
    <div className="bg-gray-50 p-4 rounded-lg flex gap-4 relative">
      {/* Left - Product Image */}
      <div className="aspect-square w-32 sm:w-36 md:w-40 flex-shrink-0 rounded-md overflow-hidden bg-white self-stretch">
  <img
    src={image}
    alt={productName}
    className="w-full h-full object-cover"
  />
</div>



      {/* Right - Details */}
      <div className="flex-1 space-y-2">
        {/* Top Row: Product Name and Price */}
        <div className="flex justify-between gap-2 mt-4 flex-wrap sm:flex-nowrap items-start">
          <h3 className="text-base font-semibold font-serif text-xl text-maroon max-w-full sm:max-w-[70%] break-words">
            {productName}
          </h3>
          <span className="text-base  text-lg font-medium text-gray-800 whitespace-nowrap">
            ₹{totalPrice.toLocaleString()}
          </span>
        </div>

        {/* Product Code */}
        <div className="text-sm text-gray-600">Product Code: {productCode}</div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
  <span className="text-sm font-medium text-gray-700">Quantity:</span>
  <div className="flex items-center gap-2">
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


        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {pills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white text-xs text-gray-700 border border-gray-300 rounded-full"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Dispatch Text */}
        <div className="text-sm text-green-800">Dispatch by: {dispatchText}</div>
      </div>

      {/* Action Buttons - Top Right */}
      <div className="absolute top-2 right-2 flex gap-3 text-sm">
        <button onClick={onMoveToWishlist} className="text-gray-500 hover:underline">
          Move to Wishlist
        </button>
        |
        <button onClick={onRemove} className="text-gray-500 hover:underline">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
