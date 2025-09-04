import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import defaultProductImage from '../../src/product-image.jpg';

interface MegaMenuProps {
  isOpen: boolean;
}

// Helper function to create item groups for the mega menu
const createItemGroup = (title: string, labels: string[]) => ({
  title,
  items: labels.map((label) => ({
    label,
    icon: defaultProductImage
  }))
});

// Data for the detailed mega menu content
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
  // Add other subcategory details here as needed
};

const MegaMenu = ({ isOpen }: MegaMenuProps) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const [mobileSubActive, setMobileSubActive] = useState<string | null>(null);
  
  // State for desktop dropdowns
  const [isGoldRateOpen, setGoldRateOpen] = useState(false);
  const [isSavingsPlanOpen, setSavingsPlanOpen] = useState(false);
  
  // State for mobile accordions
  const [isMobileGoldRateOpen, setMobileGoldRateOpen] = useState(false);
  const [isMobileSavingsOpen, setMobileSavingsOpen] = useState(false);

  // Main navigation menu items
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

  // Handler for clicking on a product category item
  const handleItemClick = (category: string, subcategory: string, label: string) => {
    navigate('/products', {
      state: { category, subcategory, label }
    });
  };

  // Handler for clicking on a savings plan
  const handleSavingsPlanClick = (plan: string) => {
    navigate('/gold-savings', {
        state: { plan }
    })
  }

  return (
    <nav
      className={`bg-white border-t border-gray-200 ${isOpen ? 'block' : 'hidden md:block'} relative`}
      onMouseLeave={() => {
        // Reset all menus when the mouse leaves the entire nav area
        setActiveMenu(null);
        setHoveredSub(null);
        setGoldRateOpen(false);
        setSavingsPlanOpen(false);
      }}
    >
      {/* DESKTOP MENU */}
      <div className="hidden md:flex max-w-[1440px] mx-auto px-4">
        {menuItems.map((menu) => {
          const isActive = activeMenu === menu.title;
          return (
            <div
              key={menu.title}
              className="relative"
              onMouseEnter={() => {
                // Open the main mega menu and close other dropdowns
                setActiveMenu(menu.title);
                setHoveredSub(menu.subcategories[0]);
                setGoldRateOpen(false);
                setSavingsPlanOpen(false);
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

        {/* GOLD SAVING PLANS DROPDOWN WRAPPER */}
        {/* <div 
            className="relative"
            onMouseEnter={() => {
                setSavingsPlanOpen(true);
                setGoldRateOpen(false);
                setActiveMenu(null);
            }}
            onMouseLeave={() => setSavingsPlanOpen(false)}
        >
          <button
            className={`flex items-center px-3 py-3 text-base font-medium uppercase tracking-tight transition-colors duration-200 ${
                isSavingsPlanOpen ? 'text-maroon' : 'text-gray-800 hover:text-maroon'
            }`}
          >
            Gold Saving Plans
            {isSavingsPlanOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
          </button>
          {isSavingsPlanOpen && (
             <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl z-50 border-t-2 border-golden animate-fade-in">
                <ul className="space-y-1 p-3">
                    <li onClick={() => handleSavingsPlanClick('Swarna Sampada')} className="px-3 py-2.5 text-base font-medium text-gray-800 hover:text-maroon hover:bg-golden/10 cursor-pointer rounded-md transition-colors duration-200">Swarna Sampada</li>
                    <li onClick={() => handleSavingsPlanClick('Golden Tree')} className="px-3 py-2.5 text-base font-medium text-gray-800 hover:text-maroon hover:bg-golden/10 cursor-pointer rounded-md transition-colors duration-200">Golden Tree</li>
                    <li onClick={() => handleSavingsPlanClick('Silver Leaf')} className="px-3 py-2.5 text-base font-medium text-gray-800 hover:text-maroon hover:bg-golden/10 cursor-pointer rounded-md transition-colors duration-200">Silver Leaf</li>
                </ul>
             </div>
          )}
        </div> */}

        {/* GOLD RATE DROPDOWN WRAPPER */}
        <div 
            className="relative" 
            onMouseEnter={() => {
                setGoldRateOpen(true);
                setSavingsPlanOpen(false);
                setActiveMenu(null);
            }}
            onMouseLeave={() => setGoldRateOpen(false)}
        >
            <button className={`flex items-center px-3 py-3 text-base font-medium uppercase tracking-tight transition-colors duration-200 ${
                isGoldRateOpen ? 'text-maroon' : 'text-gray-800 hover:text-maroon'
            }`}>
              Gold Rate
              {isGoldRateOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </button>
            {isGoldRateOpen && (
              <div className="absolute top-full left-0 mt-0 w-max bg-white shadow-xl z-50 text-center border-t-2 border-golden animate-fade-in">
                <div className="p-4">
                  <h3 className="font-medium text-maroon text-md mb-3">Today's Gold Rate</h3>
                  <div className="space-y-2 text-center text-base text-gray-800">
                      <p>
                        <span className="font-semibold">22 KT (916)</span> - ₹ 9380/g
                      </p>
                    <hr className="my-2 border-t border-gray-300 w-4/4 mx-auto" />
                    <p>
                      <span className="font-semibold">18 KT (916)</span> - ₹ 7680/g
                    </p>
                    <hr className="my-2 border-t border-gray-300 w-4/4 mx-auto" />
                    <p>
                      <span className="font-semibold">14 KT (585)</span> - ₹ 6180/g
                    </p>
                    <hr className="my-2 border-t border-gray-300 w-4/4 mx-auto" />
                  </div>
                  <div className="mt-4 text-sm text-gray-700">
                    <p>Updated on : 23/07/2025</p>
                    <p>09:53 AM</p>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* DESKTOP MEGA MENU CONTENT*/}
      {activeMenu && (
        <div className="hidden md:block absolute left-0 top-full w-screen bg-white shadow-xl border-t-2 border-golden z-40 animate-fade-in">
          <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-[220px_1fr] gap-8">
            <div className="space-y-1">
              {menuItems
                .find((menu) => menu.title === activeMenu)
                ?.subcategories.map((subcat) => (
                  <div
                    key={subcat}
                    className={`cursor-pointer px-3 py-2.5 rounded transition-colors ${
                      hoveredSub === subcat ? 'bg-golden/20' : 'hover:bg-golden/10'
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
            <div>
              {hoveredSub && subcategoryDetails[hoveredSub] && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {subcategoryDetails[hoveredSub].map((group) => (
                    <div key={group.title}>
                      <h4 className="text-maroon font-semibold mb-2">{group.title}</h4>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item.label}
                            className="flex items-center space-x-2 cursor-pointer group"
                            onClick={() => handleItemClick(activeMenu, hoveredSub, item.label)}
                          >
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-8 h-8 object-cover rounded-full border border-golden transition-transform duration-200 group-hover:scale-110"
                            />
                            <span className="text-base text-gray-700 group-hover:text-golden">{item.label}</span>
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
                  ? 'text-maroon bg-golden/10'
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

                    {mobileSubActive === subcat && subcategoryDetails[subcat] && (
                      <div className="px-4 py-3 space-y-4 bg-white rounded-md shadow-sm border-l-2 border-golden mt-2">
                        {subcategoryDetails[subcat].map((group) => (
                          <div key={group.title}>
                            <h5 className="text-base font-semibold text-golden mb-2 border-b pb-1 border-gray-200">
                              {group.title}
                            </h5>
                            <div className="grid grid-cols-3 gap-3">
                              {group.items.map((item) => (
                                <div
                                  key={item.label}
                                  className="flex flex-col items-center text-center cursor-pointer group"
                                  onClick={() => handleItemClick(menu.title, subcat, item.label)}
                                >
                                  <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="w-12 h-12 rounded-full object-cover mb-1 border border-golden transition-transform duration-200 group-hover:scale-110"
                                  />
                                  <span className="text-sm text-gray-700 group-hover:text-golden">{item.label}</span>
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
        
        {/* MOBILE GOLD SAVING & RATE LINKS (as accordions) */}
        <div className="mt-4 pt-2">
           <div className='mb-2'>
              <button
                onClick={() => setMobileSavingsOpen(!isMobileSavingsOpen)}
                className={`w-full flex justify-between items-center px-4 py-2 text-base font-medium uppercase rounded-md transition-colors ${
                    isMobileSavingsOpen ? 'text-maroon bg-golden/10' : 'text-gray-800 hover:text-maroon'
                }`}
              >
                Gold Saving Plans
                {isMobileSavingsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {isMobileSavingsOpen && (
                 <div className="pl-4 mt-2 space-y-2 bg-gray-50 rounded-md p-2">
                    <ul className="space-y-1">
                        <li onClick={() => handleSavingsPlanClick('Swarna Sampada')} className="px-4 py-2 text-gray-700 hover:text-maroon hover:bg-golden/20 cursor-pointer rounded-md">Swarna Sampada</li>
                        <li onClick={() => handleSavingsPlanClick('Golden Tree')} className="px-4 py-2 text-gray-700 hover:text-maroon hover:bg-golden/20 cursor-pointer rounded-md">Golden Tree</li>
                        <li onClick={() => handleSavingsPlanClick('Silver Leaf')} className="px-4 py-2 text-gray-700 hover:text-maroon hover:bg-golden/20 cursor-pointer rounded-md">Silver Leaf</li>
                    </ul>
                </div>
              )}
           </div>
           <div>
              <button
                onClick={() => setMobileGoldRateOpen(!isMobileGoldRateOpen)}
                className={`w-full flex justify-between items-center px-4 py-2 text-base font-medium uppercase rounded-md transition-colors ${
                    isMobileGoldRateOpen ? 'text-maroon bg-golden/10' : 'text-gray-800 hover:text-maroon'
                }`}
              >
                Gold Rate
                {isMobileGoldRateOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {isMobileGoldRateOpen && (
                <div className="mt-2 p-4 bg-gray-50 rounded-md text-center">
                    <h3 className="font-semibold text-maroon text-lg mb-3">Today's Gold Rate</h3>
                    <div className="space-y-2 text-center text-gray-800">
                        <p className="font-bold">22 KT (916) - ₹ 9380/g</p>
                        <hr className="my-2 border-t border-gray-300 w-3/4 mx-auto" />
                        <p>18 KT (750) - ₹ 7780/g</p>
                        <hr className="my-2 border-t border-gray-300 w-3/4 mx-auto" />
                        <p>14 KT (585) - ₹ 6180/g</p>
                    </div>
                    <div className="mt-4 text-xs text-gray-500">
                        <p>Updated on : 23/07/2025</p>
                        <p>09:53 AM</p>
                    </div>
                </div>
              )}
           </div>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;