import React, { useState, useEffect } from 'react';

const Address = () => {
  const [showModal, setShowModal] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [showModal]);

  const inputClass =
    'w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-300';

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      {/* Shipping Address */}
      <div>
        <h2 className="font-medium mb-3 font-serif text-2xl text-maroon">Shipping Address</h2>

        <div
          className="bg-gray-50 border border-dashed border-gray-300 p-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md min-h-[120px]"
          onClick={() => setShowModal(true)}
        >
          <div className="flex items-center space-x-2 text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-sm font-medium">Add Shipping Address</span>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div>
        <h2 className="font-medium mb-3 font-serif text-2xl text-maroon">Billing Address</h2>
        <div className="flex items-center mb-4 space-x-2">
          <input
            type="checkbox"
            checked={sameAsShipping}
            onChange={(e) => setSameAsShipping(e.target.checked)}
            className="w-4 h-4"
          />
          <label className="text-sm">Same as Shipping Address</label>
        </div>

        {!sameAsShipping && (
          <div
            className="bg-gray-50 border border-dashed border-gray-300 p-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md min-h-[120px]"
            onClick={() => setShowModal(true)}
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-sm font-medium">Add Billing Address</span>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
<div className="bg-white w-[90%] md:w-[50%] lg:w-[45%] xl:w-[40%] rounded-lg shadow-xl p-6 space-y-5 animate-fadeInUp max-h-[90vh] overflow-y-auto">            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-semibold">Add Address</h3>
              <button onClick={() => setShowModal(false)}>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}>
              {/* Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="First Name*" required className={inputClass + " sm:w-1/2"} />
                <input type="text" placeholder="Last Name*" required className={inputClass + " sm:w-1/2"} />
              </div>

              {/* Contact */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Email*" required className={inputClass + " sm:w-1/2"} />
                <input type="tel" placeholder="Mobile Number*" required className={inputClass + " sm:w-1/2"} />
              </div>

              {/* Address Lines */}
              <textarea placeholder="Address Line 1*" required rows={2} className={inputClass} />
              <textarea placeholder="Address Line 2" rows={2} className={inputClass} />

              {/* Location */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="Pincode*" required className={inputClass + " sm:w-1/3"} />
                <input type="text" placeholder="City*" required className={inputClass + " sm:w-1/3"} />
                <input type="text" placeholder="State*" required className={inputClass + " sm:w-1/3"} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-maroon hover:bg-red-800 text-white py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Fade animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.4s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Address;
