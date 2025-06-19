import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import defaultProductImage from '../../src/product-image.jpg';

interface MegaMenuProps {
  isOpen: boolean;
}

// Common image used for all product icons
// const defaultProductImage = '../../src/product-image.jpg';

// Helper to create item groups
const createItemGroup = (title: string, labels: string[]) => ({
  title,
  items: labels.map((label) => ({
    label,
    icon: defaultProductImage
  }))
});

// Subcategory details with common image
const subcategoryDetails: Record<
  string,
  { title: string; items: { label: string; icon: string }[] }[]
> = {
  Rings: [
    createItemGroup('Shop By Style', ['Bands', 'Stackable', 'Cocktail', 'Eternity', 'Casual', 'Solitaire', 'Broad Rings']),
    createItemGroup('Wearing Type', ['Daily Wear', 'Office Wear', 'Casual Wear', 'Party Wear']),
    createItemGroup('Shop By Metal', ['Yellow Gold', 'White Gold', 'Rose Gold', 'Two Tone'])
  ],
  Earrings: [
    createItemGroup('Shop By Style', ['Studs', 'Drops', 'Hoops & Bali', 'Chandelier', 'Clip-On', 'Dangle', 'Jhumki', 'For Kids']),
    createItemGroup('Wearing Type', ['Daily Wear', 'Office Wear', 'Casual Wear']),
    createItemGroup('Shop By Metal', ['Yellow Gold', 'White Gold', 'Rose Gold', 'Two Tone'])
  ]
};

const MegaMenu = ({ isOpen }: MegaMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const [mobileSubActive, setMobileSubActive] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Diamond',
      subcategories: ['Rings', 'Earrings', 'Pendants', 'Nosepins', 'Necklace', 'Bangles', 'Braceletes', 'Mangalsutras', 'Mens', 'Collections']
    },
    {
      title: 'Gold',
      subcategories: ['Rings', 'Earrings', 'Pendants', 'Nosepins', 'Necklace', 'Bangles', 'Braceletes', 'Mangalsutras', 'Mens', 'Collections']
    },
    {
      title: 'Gemstone',
      subcategories: ['Rings', 'Pendants']
    },
    {
      title: 'Platinum',
      subcategories: ['Rings', 'Chains']
    },
    {
      title: 'Collections',
      subcategories: ['Bridal', 'Daily Wear']
    }
  ];

  return (
    <nav
      className={`bg-white border-t border-gray-200 ${isOpen ? 'block' : 'hidden md:block'} relative`}
      onMouseLeave={() => {
        setActiveMenu(null);
        setHoveredSub(null);
      }}
    >
      {/* DESKTOP MENU */}
      <div className="hidden md:flex max-w-[1440px] mx-auto px-4">
        {menuItems.map((menu) => {
          const isActive = activeMenu === menu.title;
          return (
            <div
              key={menu.title}
              className="relative group"
              onMouseEnter={() => {
                setActiveMenu(menu.title);
                setHoveredSub(menu.subcategories[0]);
              }}
            >
              <button
                className={`flex items-center px-2 py-3 transition-colors duration-200 w-full md:w-auto justify-between md:justify-center uppercase tracking-tight text-base font-medium gap-1 ${
                  isActive ? 'text-maroon' : 'text-gray-800 hover:text-maroon'
                }`}
              >
                {menu.title}
                {isActive ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
              </button>
            </div>
          );
        })}
      </div>

      {/* DESKTOP MEGA MENU */}
      {activeMenu && (
        <div className="hidden md:block absolute left-0 top-full w-screen bg-white shadow-xl border-t-2 border-golden z-50 animate-fade-in">
          <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-[220px_1fr] gap-8">
            {/* Subcategory List */}
            <div className="space-y-1">
              {menuItems
                .find((menu) => menu.title === activeMenu)
                ?.subcategories.map((subcat) => (
                  <div
                    key={subcat}
                    className={`cursor-pointer px-3 py-2.5 rounded hover:bg-golden/10 transition-colors ${
                      hoveredSub === subcat ? 'bg-golden/20' : ''
                    }`}
                    onMouseEnter={() => setHoveredSub(subcat)}
                  >
                    <span
                      className={`font-medium text-base transition-colors duration-200 ${
                        hoveredSub === subcat ? 'text-maroon' : 'text-gray-800 hover:text-maroon'
                      }`}
                    >
                      {subcat}
                    </span>
                  </div>
                ))}
            </div>

            {/* Subcategory Details */}
            <div>
              {hoveredSub && subcategoryDetails[hoveredSub] && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {subcategoryDetails[hoveredSub].map((group) => (
                    <div key={group.title}>
                      <h4 className="text-maroon font-semibold mb-2">{group.title}</h4>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.label} className="flex items-center space-x-2 cursor-pointer">
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-8 h-8 object-cover rounded-full border border-[#D4AF37]"
                            />
                            <span className="text-base text-gray-700 hover:text-golden">{item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      <div className="block md:hidden px-4 py-2">
        {menuItems.map((menu) => (
          <div key={menu.title} className="mb-2">
            <button
              onClick={() =>
                setMobileActive(mobileActive === menu.title ? null : menu.title)
              }
              className={`w-full flex justify-between items-center px-4 py-2 rounded-md font-medium text-base uppercase transition-colors ${
                mobileActive === menu.title
                  ? 'text-maroon'
                  : 'text-gray-800 hover:text-maroon'
              }`}
            >
              {menu.title}
              {mobileActive === menu.title ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {mobileActive === menu.title && (
              <div className="pl-4 mt-2 space-y-2 bg-gray-50 rounded-md">
                {menu.subcategories.map((subcat) => (
                  <div key={subcat}>
                    <button
                      onClick={() =>
                        setMobileSubActive(mobileSubActive === subcat ? null : subcat)
                      }
                      className={`w-full flex justify-between items-center px-3 py-2 text-base rounded-md transition-colors ${
                        mobileSubActive === subcat
                          ? 'text-maroon'
                          : 'text-gray-700 hover:text-maroon'
                      }`}
                    >
                      {subcat}
                      {mobileSubActive === subcat ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {/* SUBCATEGORY DETAIL */}
                    {mobileSubActive === subcat && subcategoryDetails[subcat] && (
                      <div className="px-4 py-3 space-y-4 bg-white rounded-md shadow-sm border-l-2 border-golden mt-2">
                        {subcategoryDetails[subcat].map((group) => (
                          <div key={group.title}>
                            <h5 className="text-base font-regural text-golden mb-2 border-b pb-1 border-gray-200">
                              {group.title}
                            </h5>
                            <div className="grid grid-cols-3 gap-3">
                              {group.items.map((item) => (
                                <div
                                  key={item.label}
                                  className="flex flex-col items-center text-center cursor-pointer"
                                >
                                  <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="w-12 h-12 rounded-full object-cover mb-1 border border-[#D4AF37]"
                                  />
                                  <span className="text-sm text-gray-700 hover:text-golden">{item.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MegaMenu;
