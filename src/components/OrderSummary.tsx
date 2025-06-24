import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

import gpay from '@/assets/gpay.svg';
import maestro from '@/assets/maestro.svg';
import rupay from '@/assets/rupay.svg';
import visa from '@/assets/visa.svg';
import mastercard from '@/assets/master.svg';

const CheckoutStepper = ({
  orderCards = [],
  step2Active = false,
  summaryCollapsible = true,
  showSummary = true,
  discount = 0,
  shipping = 0,
  tax = 0,
}) => {
  const navigate = useNavigate(); // 👈 React Router navigation
  const [isSummaryCollapsed, setIsSummaryCollapsed] = useState(summaryCollapsible);
  const [coupon, setCoupon] = useState('');

  const subtotal = orderCards.reduce(
    (acc, card) => acc + card.price * card.quantity,
    0
  );

  const total = subtotal - discount + shipping + tax;

  const toggleSummary = () => {
    if (summaryCollapsible && orderCards.length > 0) {
      setIsSummaryCollapsed(!isSummaryCollapsed);
    }
  };

  const handleApplyCoupon = () => {
    console.log('Coupon Applied:', coupon);
    // Add actual discount logic here if needed
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg">
      {/* Stepper */}
      <div className="flex justify-between items-center mb-6">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center flex-1 relative">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold ${
                (step === 1 || (step === 2 && step2Active)) ? 'bg-maroon' : 'bg-gray-400'
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

      {/* Coupon Code Input */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter discount code"
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm outline-none"
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

      {/* Order Summary */}
      {showSummary && (
        <>
          <div
            className={`flex items-center justify-between cursor-pointer ${
              orderCards.length === 0 ? 'pointer-events-none' : ''
            }`}
            onClick={toggleSummary}
          >
            <h3 className="text-md font-medium text-gray-700">Order Summary</h3>
            {orderCards.length > 0 && (
              <ChevronDown
                className={`transform transition-transform ${
                  isSummaryCollapsed ? 'rotate-180' : ''
                }`}
              />
            )}
          </div>

          <hr className="my-2" />

          {(!summaryCollapsible || isSummaryCollapsed) && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium text-green-600">− ₹{discount.toLocaleString()}</span>
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

              <div className="flex justify-between text-base font-semibold">
                <span className="text-gray-600">Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
          )}
        </>
      )}

      {/* Continue Button */}
      <button
        onClick={() => navigate('/checkout')}
        className="mt-6 w-full bg-maroon text-white text-md font-normal py-3 rounded-md hover:bg-red-800 transition"
      >
        Add Address
      </button>

      {/* Payment Logos */}
      <div className="text-center mt-4 text-md text-gray-500">WE ACCEPT</div>
      <div className="flex justify-center gap-3 mt-2">
        {[visa, mastercard, rupay, rupay].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Payment Method"
            className="h-4 w-auto object-contain mt-2"
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutStepper;
