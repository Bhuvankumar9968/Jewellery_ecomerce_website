import React, { useState, useRef, useEffect } from 'react';
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
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const accountRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setIsAccountDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#5e313a] shadow-md sticky top-0 z-[1000]">
      <div className="container mx-auto px-4 py-4 relative z-[1000]">
        <div className="flex items-center justify-between">
          {/* Left */}
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
              <img
                src={logo}
                alt="Sri Swarna Kanchi Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Search */}
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

            {/* Account Dropdown */}
            <div className="relative z-[9999]" ref={accountRef}>
              <button
                onClick={() => setIsAccountDropdownOpen((prev) => !prev)}
                className="flex flex-col items-center justify-center text-white focus:outline-none"
              >
                <User className="w-6 h-6" />
                <span className="hidden md:block text-xs mt-1">Account</span>
              </button>

              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-[9999]">
                  {/* Welcome Text */}
                  <div className="px-4 py-3 text-xs text-gray-700 font-semibold leading-tight">
                    <div>Welcome,</div>
                    <div className="text-lg font-regural text-[#501614]">Prashanth</div>
                  </div>
                  <hr className="border-t" />
                  {/* Logout Button */}
                  <div className="flex justify-center items-center px-4 py-2">
                    <button
                      className="bg-[#f8e8e6] text-[#501614] px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-[#f3d2ce] transition"
                      onClick={() => {
                        console.log('Logout clicked');
                        // logout logic here
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative flex flex-col items-center justify-center"
            >
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

      {/* Mega Menu */}
      <div className="relative z-[100]">
        <MegaMenu isOpen={isMegaOpen} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
