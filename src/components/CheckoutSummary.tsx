import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import OrderCard from './OrderCard';

import gpay from '@/assets/gpay.svg';
import maestro from '@/assets/maestro.svg';
import rupay from '@/assets/rupay.svg';
import visa from '@/assets/visa.svg';
import mastercard from '@/assets/master.svg';
import ring1 from '@/assets/Ring-1.png';
import ring2 from '@/assets/Ring-2.png';    

const CheckoutSummary = () => {
  const [isSummaryCollapsed, setIsSummaryCollapsed] = useState(true);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(500); // placeholder value

  // Sample dynamic data
  const orderCards = [
    {
      image: ring1,
      name: 'Glowing Pirouette Ring',
      quantity: 1,
      price: 79434
    },
    {
      image: ring2,
      name: 'Modish Links Diamond Ring',
      quantity: 1,
      price: 35618
    }
  ];

  const shipping = 100;
  const tax = 150;
  const buttonText = 'Continue to Payment';

  const subtotal = orderCards.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal - discount + shipping + tax;

  const toggleSummary = () => {
    if (orderCards.length > 0) {
      setIsSummaryCollapsed(!isSummaryCollapsed);
    }
  };

  const handleApplyCoupon = () => {
    if (coupon.toLowerCase() === 'save10') {
      setDiscount(1000);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg">
      {/* Stepper */}
      <div className="flex justify-between items-center mb-6">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center flex-1 relative">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold ${
                step <= 2 ? 'bg-maroon' : 'bg-gray-400'
              }`}
            >
              {step}
            </div>
            <div className="text-xs text-center mt-2">
              {step === 1 && 'Bag'}
              {step === 2 && 'Address'}
              {step === 3 && 'Payment'}
            </div>
            {step !== 3 && (
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <ChevronRight className="text-gray-400" size={16} />
              </div>
            )}
          </div>
        ))}
      </div>

      <hr className="mb-4" />

      {/* Coupon Input */}
      <div className="mb-4 flex gap-2">
  <input
    type="text"
    placeholder="Enter discount code"
    className="flex-1 border border-gray-500 px-4 py-2 rounded-md text-sm outline-none"
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
  />
  <button
    onClick={handleApplyCoupon}
    className="bg-maroon text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-maroon-dark transition"
  >
    Apply
  </button>
</div>

      {/* Order Items */}
      <div className="space-y-3 mb-4">
        {orderCards.length === 0 ? (
          <p className="text-sm text-center text-gray-500">No items in bag.</p>
        ) : (
          orderCards.map((card, idx) => <OrderCard key={idx} {...card} />)
        )}
      </div>

      {/* Summary Toggle */}
      <div
        className={`flex items-center justify-between cursor-pointer ${
          orderCards.length === 0 ? 'pointer-events-none opacity-50' : ''
        }`}
        onClick={toggleSummary}
      >
        <h3 className="text-md font-medium text-gray-700">Order Summary</h3>
        {orderCards.length > 0 &&
          (isSummaryCollapsed ? (
            <ChevronUp className="transition-transform" />
          ) : (
            <ChevronDown className="transition-transform" />
          ))}
      </div>

      <hr className="my-2" />

      {/* Collapsible Section */}
      {isSummaryCollapsed && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount</span>
            <span className="font-medium text-green-600">
              − ₹{discount.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">₹{shipping.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">₹{tax.toLocaleString()}</span>
          </div>

          <hr />
        </div>
      )}

      {/* ✅ Total Always Visible */}
      <div className="flex justify-between text-base font-semibold mt-2">
        <span className="text-gray-600">Total</span>
        <span>₹{total.toLocaleString()}</span>
      </div>

      {/* Payment Button */}
      <button className="mt-6 w-full bg-maroon text-white text-md font-normal py-3 rounded-md hover:bg-maroon-dark transition">
        {buttonText}
      </button>

      {/* Payment Logos */}
      <div className="text-center mt-4 text-md text-gray-500">WE ACCEPT</div>
      <div className="flex justify-center gap-3 mt-2">
        {[visa, mastercard, rupay, gpay, maestro].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="payment-logo"
            className="h-4 w-auto object-contain mt-2"
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutSummary;
