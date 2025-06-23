import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import img1 from '@/assets/herocarousel-1.jpg';
import Ring1 from '@/assets/Ring-1.png';
import Ring2 from '@/assets/Ring-2.png';
import Ring3 from '@/assets/Ring-3.png';
import Ring4 from '@/assets/Ring-4.png';
import Ring5 from '@/assets/Ring-5.png';
import Ring6 from '@/assets/Ring-6.png';
import Ring7 from '@/assets/Ring-7.png';
import Ring8 from '@/assets/Ring-8.png';

const ProductListing = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: 1,
      name: "Glowing Pirouette Ring",
      code: "FRTMN40133",
      price: "₹ 79,434",
      images: [Ring1],
      isNew: false,
      showAddToCart: true,
      showDelete: true,
      showWishlist: false
    },
    {
      id: 2,
      name: "Modish Links Diamond Ring",
      code: "DEF456",
      price: "₹ 35,618",
      images: [Ring2],
      isNew: false,
      showAddToCart: true,
      showDelete: true,
      showWishlist: false
    },
    {
      id: 3,
      name: "Fancy Traditional Gold and Diamond Ring",
      code: "TBS789",
      price: "₹ 37,787",
      images: [Ring3],
      isNew: false,
      showAddToCart: true,
      showDelete: true,
      showWishlist: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-maroon">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="hover:text-maroon">
                My Account
              </a>
            </li>
            <li>/</li>
            <li>
              <li className="text-maroon">My Wishlist</li>
            </li>

          </ol>
        </nav>

        <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-3 text-left">
          My Wishlist
        </h2>
      </div>

        <div className="flex gap-8">
          {/* Sidebar hidden */}

          <div className="flex-1 w-full">

            {/* Products grid: 4 columns on large screens */}
            <div
              className={`grid gap-6 ${
                viewType === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                images={product.images}
                name={product.name}
                code={product.code}
                price={product.price}
                isNew={product.isNew}
                showAddToCart={product.showAddToCart}
                showWishlist={product.showWishlist}
                showDelete={product.showDelete}
                onDelete={(id) => {
                  // optional: remove from array or log
                  console.log("Deleted product ID:", id);
                }}
              />
            ))}


            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductListing;
