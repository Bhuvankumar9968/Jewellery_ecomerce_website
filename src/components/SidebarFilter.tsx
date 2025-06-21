import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp, ChevronRight, RotateCw } from "lucide-react";

const filtersData = [
  {
    label: "Price",
    type: "range",
    options: ["Below ₹1000", "₹1000 - ₹5000", "₹5000 - ₹10,000", "Above ₹10,000"],
  },
  {
    label: "Jewellery Type",
    type: "pill",
    options: ["Rings", "Necklaces", "Earrings", "Bracelets"],
  },
  {
    label: "Product",
    type: "pill",
    options: ["Gold", "Diamond", "Silver", "Platinum"],
  },
  {
    label: "Gender",
    type: "pill",
    options: ["Men", "Women", "Kids"],
  },
];

const SidebarFilter = ({ isOpen, onClose }) => {
  const [expanded, setExpanded] = useState("Price");

  // 🔒 Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Black Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-[9999] w-[420px] bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300 relative">
          <h2 className="text-lg font-normal text-center w-full">Filters</h2>
          <button onClick={onClose} className="absolute right-4">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Filters */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {filtersData.map(({ label, options, type }) => {
            const isSectionOpen = expanded === label;

            return (
              <div key={label} className="border border-gray-200 rounded-md p-3">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setExpanded(isSectionOpen ? "" : label)}
                >
                  <span
                    className={`font-medium ${
                      isSectionOpen ? "text-[#800000]" : "text-gray-800"
                    }`}
                  >
                    {label}
                  </span>
                  {isSectionOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>

                {isSectionOpen && (
                  <div className="mt-3 space-y-2">
                    {type === "pill" && (
                      <div className="flex flex-wrap gap-2">
                        {options.map((option) => (
                          <span
                            key={option}
                            className="px-3 py-1 text-sm border border-gray-400 rounded-full text-gray-700 cursor-pointer hover:bg-gray-100"
                          >
                            {option}
                          </span>
                        ))}
                      </div>
                    )}

                    {type === "range" && (
                      <>
                        <div className="flex flex-wrap gap-2">
                          {options.map((option) => (
                            <span
                              key={option}
                              className="px-4 py-2 text-sm border border-gray-400 rounded-full text-gray-700 cursor-pointer hover:bg-gray-100"
                            >
                              {option}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-3 mb-3">
                          For multiple filter selection, use the range input below
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <input
                            type="number"
                            placeholder="Min value"
                            className="w-1/2 px-3 py-3 border border-gray-300 rounded-lg text-sm appearance-none focus:outline-none"
                          />
                          <span className="text-gray-500">To</span>
                          <input
                            type="number"
                            placeholder="Max value"
                            className="w-1/2 px-3 py-3 border border-gray-300 rounded-lg text-sm appearance-none focus:outline-none"
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sticky Bottom Buttons */}
        <div className="px-4 py-3 border-t border-gray-300 bg-white flex justify-between gap-3">
          <button className="flex items-center gap-1 text-sm text-gray-700 border border-gray-400 px-10 py-4 rounded-md hover:bg-gray-100">
            Clear Filters
            <ChevronRight size={16} />
          </button>
          <button className="flex items-center gap-1 text-sm bg-maroon text-white px-10 py-4 rounded-md hover:bg-red-900">
            Show Results
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarFilter;
