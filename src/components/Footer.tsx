import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaLinkedinIn,
  FaWikipediaW,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const footerLinkClass = `
    relative w-fit text-gray-300 hover:text-white cursor-pointer
    before:content-[''] before:absolute before:bottom-0 before:left-0 
    before:h-[1px] before:w-0 before:bg-white before:transition-all before:duration-300
    hover:before:w-full
  `;

  const iconHoverClass = 'hover:text-yellow-400 transition duration-300';

  return (
    <footer className="bg-[#2f0a08] text-white px-6 md:px-16 pt-20 pb-6 text-sm">
      {/* Top Grid Section */}
      <div className="grid md:grid-cols-5 gap-14 border-b border-gray-600 pb-14">
        {/* GET IN TOUCH */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg">SWARNA KANCHI</h3>
          <p className="text-gray-300 leading-relaxed">
            Swarna Kanchi Jewellers brings the heritage of Kanchipuram to life through exquisite gold craftsmanship. Tradition, elegance, and purity—crafted for every celebration.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl mt-6 flex-wrap">
            <FaInstagram className={iconHoverClass} />
            <FaFacebookF className={iconHoverClass} />
            <FaYoutube className={iconHoverClass} />
            <FaTwitter className={iconHoverClass} />
            <FaLinkedinIn className={iconHoverClass} />
          </div>
        </div>

        {/* ABOUT US */}
        <div className="space-y-5">
          <h3 className="font-semibold text-lg">ABOUT US</h3>
          <ul className="space-y-3">
            <li className={footerLinkClass}>Our Story</li>
            <li className={footerLinkClass}>Why Buy From Us</li>
            <li className={footerLinkClass}>SwarnaKanchi</li>
            <li className={footerLinkClass}>Corporate Gifting</li>
            <li className={footerLinkClass}>Blog Posts</li>
            <li className={footerLinkClass}>Press Releases</li>
          </ul>
        </div>

        {/* GUIDES & POLICIES */}
        <div className="space-y-5">
          <h3 className="font-semibold text-lg">GUIDES & POLICIES</h3>
          <ul className="space-y-3">
            <li className={footerLinkClass}>Buying & Price Guide</li>
            <li className={footerLinkClass}>Diamond Guide</li>
            <li className={footerLinkClass}>Jewellery Care Guide</li>
            <li className={footerLinkClass}>Certification Guide</li>
            <li className={footerLinkClass}>Returns & Shipping Policy</li>
            <li className={footerLinkClass}>Buyback & Exchange Policy</li>
          </ul>
        </div>

        {/* NEED HELP? */}
        <div className="space-y-5">
          <h3 className="font-semibold text-lg">NEED HELP?</h3>
          <ul className="space-y-3">
            <li className={footerLinkClass}>Locate Our Stores</li>
            <li className={footerLinkClass}>SwarnaKanchi Authorized Dealers</li>
            <li className={footerLinkClass}>Franchise Enquiry</li>
            <li className={footerLinkClass}>Contact Us</li>
            <li className={footerLinkClass}>Careers</li>
            <li className={footerLinkClass}>FAQs</li>
          </ul>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div className="space-y-5">
          <h3 className="font-semibold text-lg">CUSTOMER SUPPORT</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="tel:+919513777001" className={footerLinkClass}>
              +91 9513777001
              </a>
            </li>
            <li>9:00am – 6:00pm IST | Mon - Fri</li>
            <li>9:00am – 4:00pm IST | Sat</li>
            <li>
              <a href="mailto:support@SwarnaKanchi.com" className={footerLinkClass}>
                support@SwarnaKanchi.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-6 text-gray-300 text-sm">
        <p>© 2025 SwarnaKanchi. All Rights Reserved</p>
        <div className="flex gap-6">
          <span className={footerLinkClass}>Privacy Policy</span>
          <span className={footerLinkClass}>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;