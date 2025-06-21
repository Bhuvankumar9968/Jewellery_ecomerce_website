import { useState } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import SidebarFilter from "@/components/SidebarFilter";

const FilterBar = () => {
  const [sortOption, setSortOption] = useState("Popularity");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  // Sample filters — you can initialize from SidebarFilter logic
  const [selectedFilters, setSelectedFilters] = useState([
    "Gold",
    "Diamond",
    "Under ₹10,000",
  ]);

  const sortOptions = [
    "Popularity",
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  return (
    <>
      <div className="w-full px-4 py-2">
        {/* Filter & Sort Button Row */}
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
          {/* Filter Button */}
          <button
            onClick={() => setShowFilterSidebar(true)}
            className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100"
          >
            <SlidersHorizontal size={16} />
            <span>Filter</span>
            <ChevronDown size={16} />
          </button>

          {/* Sort By Button */}
          <div className="relative">
            <button
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100"
            >
              <span>Sort By:</span>
              <span className="font-medium">{sortOption}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  showSortOptions ? "rotate-180" : ""
                }`}
              />
            </button>

            {showSortOptions && (
              <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow z-10">
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSortOption(option);
                      setShowSortOptions(false);
                    }}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Applied Filters Pills Row */}
        {selectedFilters.length > 0 && (
          <div className="flex items-center flex-wrap gap-2 mt-3">
            <span className="text-sm font-normal text-gray-700">
              Applied Filters:
            </span>
            {selectedFilters.map((filter) => (
              <span
                key={filter}
                className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
              >
                {filter}
                <button
                  onClick={() => removeFilter(filter)}
                  className="hover:text-maroon"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar Filter Component */}
      <SidebarFilter
        isOpen={showFilterSidebar}
        onClose={() => setShowFilterSidebar(false)}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </>
  );
};

export default FilterBar;
