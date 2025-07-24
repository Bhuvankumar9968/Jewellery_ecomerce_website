import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Search,
  Store,
  User,
  Heart,
  ShoppingCart,
  Truck,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import logo from '../../src/logo.png';

const Header = ({ user, cartCount = 0, wishCount = 0, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#501614] shadow-md sticky top-0 z-50">
      {/* Top Row - Contact Info */}
      <div className="hidden md:flex justify-end items-center px-6 py-2 bg-[#3c1010] text-white text-sm space-x-6">
        <a
          href="tel:+919513777001"
          className="flex items-center space-x-1 hover:underline transition"
        >
          <Phone className="w-4 h-4" />
          <span>+91 9513777001</span>
        </a>
        <a
          href="https://wa.me/919513777001"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 hover:underline transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span>+91 9513777001</span>
        </a>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Hamburger + Logo */}
          <div className="flex items-center space-x-4">
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
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto">
              <Link to="/">
                <img
                  src={logo}
                  alt="Sri Swarna Kanchi Logo"
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
          </div>

          {/* Center - Search bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <div className="relative w-full border-b border-white">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-transparent text-white placeholder:text-white px-0 py-1 border-none outline-none"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
            </div>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4 text-white text-center">
            {/* Store */}
            <Link to="/stores" className="flex flex-col items-center justify-center">
              <Store className="w-6 h-6" />
              <span className="hidden md:block text-xs mt-1">Stores</span>
            </Link>

            {/* Account */}
            {user ? (
              <Link to="/profile" className="flex flex-col items-center justify-center">
                <User className="w-6 h-6" />
                <span className="hidden md:block text-xs mt-1">{user.full_name}</span>
              </Link>
            ) : (
              <Link to="/login" className="flex flex-col items-center justify-center">
                <User className="w-6 h-6" />
                <span className="hidden md:block text-xs mt-1">Account</span>
              </Link>
            )}

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative flex flex-col items-center justify-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Heart className="w-6 h-6" />
              {wishCount > 0 && (
                <Badge className="absolute top-[-14px] right-[-12px] text-xs">
                  {wishCount > 9 ? '9+' : wishCount}
                </Badge>
              )}
              <span className="hidden md:block text-xs mt-1">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex flex-col items-center justify-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <Badge className="absolute top-[-14px] right-[-12px] text-xs">
                  {cartCount > 9 ? '9+' : cartCount}
                </Badge>
              )}
              <span className="hidden md:block text-xs mt-1">Cart</span>
            </Link>

            {/* Orders */}
            <Link
              to="/orders"
              className="flex flex-col items-center justify-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Truck className="w-6 h-6" />
              <span className="hidden md:block text-xs mt-1">Orders</span>
            </Link>

            {/* Logout */}
            {user && (
              <Button
                variant="ghost"
                size="sm"
                className="bg-white text-[#501614] cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <MegaMenu isOpen={false} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
