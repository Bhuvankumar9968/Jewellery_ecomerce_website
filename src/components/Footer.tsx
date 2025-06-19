import React from 'react';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Phone,
  MessageCircle,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2d0000] text-white relative overflow-hidden">
      {/* Decorative top */}

      <div className="relative z-20 container mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* QR + App Download */}
          <div className="text-center xl:text-left">
            <img
              src="../../assets/logo.png"
              alt="Swarna Kanchi"
              className="h-10 mb-6 mx-auto xl:mx-0"
            />
            {/* <p className="text-md font-medium mb-4">Download the Tanishq App Now</p> */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://tanishq.co.in"
              alt="QR Code"
              className="mx-auto xl:mx-0 h-36 mb-4"
            />
            {/* <div className="flex justify-center xl:justify-start space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div> */}
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>Delivery Information</li>
              <li>International Shipping</li>
              <li>Payment Options</li>
              <li>Track your Order</li>
              <li>Returns</li>
              <li>Find a Store</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-white/80">
              <li>Blog</li>
              <li>Offers & Contest Details</li>
              <li>Help & FAQs</li>
              <li>About Tanishq</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="mb-2 text-white/80">1800-266-0123</p>
            <h5 className="font-semibold mb-2">Chat With Us</h5>
            <p className="mb-4 text-white/80 border-b border-white/30 pb-2">+91 8147349242</p>
            <div className="flex space-x-4 text-white/80">
              <MessageCircle className="w-5 h-5" />
              <Mail className="w-5 h-5" />
              <Phone className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            {/* Social */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="font-semibold">Social</span>
              <Instagram className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Facebook className="w-5 h-5" />
              <Youtube className="w-5 h-5" />
            </div>

            {/* Payment Icons */}
            <div className="flex space-x-3">
              <img
                src="https://img.icons8.com/color/48/visa.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/mastercard.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/paypal.png"
                alt="Paypal"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/diners-club.png"
                alt="Diners Club"
                className="h-6"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between text-sm text-white/70">
            <p>&copy; 2025 Titan Company Limited. All Rights Reserved.</p>
            <div className="space-x-4 mt-2 md:mt-0">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>

      </footer>
  );
};

export default Footer;
