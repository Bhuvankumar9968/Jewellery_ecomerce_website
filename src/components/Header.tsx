import React, { useState } from 'react';
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  Store,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu.tsx';
import logo from '../../src/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#501614] shadow-md sticky top-0 z-50">
      {/* Main Header */}
      <div className="container sticky top-0 mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>

            {/* Logo */}
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto">
              <img
                src={logo}
                alt="Sri Swarna Kanchi Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Search Bar - Desktop Only */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <div className="relative w-full">
              <Input
                placeholder="Search here..."
                className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white focus:border-[#d4af37] outline-none"
              />
              <Search className="absolute right-3 top-3 w-4 h-4 text-white pointer-events-none" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 text-white text-center">
            {/* Store */}
            <a href="/stores" className="flex flex-col items-center justify-center">
              <Store className="w-6 h-6" />
              <span className="hidden md:block text-xs mt-1">Stores</span>
            </a>

            {/* Account */}
            <a href="/account" className="flex flex-col items-center justify-center">
              <User className="w-6 h-6" />
              <span className="hidden md:block text-xs mt-1">Account</span>
            </a>

            {/* Wishlist */}
           <Link to="/wishlist" className="relative flex flex-col items-center justify-center">
  <Heart className="w-6 h-6" />
  <Badge className="absolute top-[-14px] right-[-12px] text-xs">0</Badge>
  <span className="hidden md:block text-xs mt-1">Wishlist</span>
</Link>

            {/* Cart */}
            <a href="/cart" className="relative flex flex-col items-center justify-center">
              <ShoppingCart className="w-6 h-6" />
              <Badge className="absolute top-[-14px] right-[-12px] text-xs">0</Badge>
              <span className="hidden md:block text-xs mt-1">Cart</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mega Menu for Desktop */}
      <MegaMenu isOpen={false} />

      {/* Mobile Sliding Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
