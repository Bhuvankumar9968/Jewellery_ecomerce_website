import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Address from '@/components/Address'; 
import CheckoutSummary from '@/components/CheckoutSummary';
import Ring1 from '@/assets/Ring-1.png';
import Ring2 from '@/assets/Ring-2.png';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: Ring1,
      productName: 'Glowing Pirouette Ring',
      productCode: 'FRTMN40133',
      pricePerUnit: 79434,
      pills: ['Gold Colour: Yellow', 'Gold Colour: White', 'Gold Colour: White'],
      dispatchText: 'June 28, 2025',
    },
    {
      id: 2,
      image: Ring2,
      productName: 'Modish Links Diamond Ring',
      productCode: 'DEF456',
      pricePerUnit: 35618,
      pills: ['Gold Colour: White', 'Gold Colour: White', 'Gold Colour: White'],
      dispatchText: 'June 30, 2025',
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-maroon">Home</a>
            </li>
            <li>/</li>
            <li>
              <span className="text-maroon">Checkout</span>
            </li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon">
            Checkout
          </h2>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Address Form */}
          <div className="w-full lg:w-[60%]">
            <Address />
          </div>

          {/* Right - Checkout Summary */}
          <div className="w-full lg:w-[40%]">
            <CheckoutSummary items={cartItems} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
