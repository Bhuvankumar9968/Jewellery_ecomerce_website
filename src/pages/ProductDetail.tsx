import React, { useState } from "react";
import { Heart, Minus, Plus, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ring1 from "@/assets/Ring-1.png";
import Ring2 from "@/assets/Ring-2.png";
import Ring3 from "@/assets/Ring-3.png";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const product = {
    id: 1,
    name: "Exquisite Pearl and Gold Necklace",
    sku: "SKU987654",
    price: 64441,
    availability: "In Stock",
    images: [Ring1, Ring2, Ring3],
    description:
      "This breathtaking necklace features a stunning arrangement of lustrous pearls set in 22K gold. The intricate design showcases exceptional craftsmanship, making it a perfect accessory for weddings, special occasions, or as a timeless addition to your collection. Each pearl is hand-selected for its quality and radiance, ensuring a piece that is both beautiful and valuable.",
    dispatchDate: "June 25, 2025",
    productInfo: {
      category: "Pearl Set",
      metalPurity: "22K",
    },
    productDetails: {
      Metal: "GOLD",
      Purity: "22K",
      "Metal Weight": "2.009 Grams",
    },
    priceBreakdown: {
      "Metal Cost": 18489,
      "Gemstone Cost": 4316,
      "Pearl Cost": 34000,
      "Making Charges": 1507,
      Wastage: 4252,
      Taxes: 1877,
      "Final Selling Price": 64441,
    },
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-warmGrey">
            <li><a href="/" className="hover:text-golden">Home</a></li>
            <li>/</li>
            <li><a href="#" className="hover:text-golden">Jewellery</a></li>
            <li>/</li>
            <li><a href="#" className="hover:text-golden">Necklaces</a></li>
            <li>/</li>
            <li className="text-maroon">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="max-w-[600px] mx-auto rounded-lg bg-white overflow-hidden border">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex justify-center space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? "border-golden" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-serif font-medium text-maroon">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray hover:bg-transparent group"
                >
                  <Heart className="w-8 h-8 transition-colors group-hover:fill-maroon" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray hover:bg-transparent hover:text-maroon"
                >
                  <Share2 className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                product.availability === "In Stock"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.availability}
            </span>

            <p className="text-gray-700 text-sm">
              Free Shipping In India | Hallmarked jewellery available for sale
            </p>

            <p className="text-4xl font-medium text-maroon">
              ₹{product.price.toLocaleString()}
            </p>

            <p className="text-gray-700 text-md">SKU: {product.sku}</p>

            <hr className="border-gray-200" />

            <div>
              <p className="text-gray-700 leading-relaxed">
                {readMore ? product.description : `${product.description.substring(0, 150)}...`}
              </p>
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-maroon font-semibold hover:underline mt-2"
              >
                {readMore ? "Read Less" : "Read More"}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <label className="font-medium">Quantity:</label>
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={decrementQuantity}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={incrementQuantity}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button size="lg" className="w-full bg-maroon hover:bg-red-800 text-white">
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Order Now
              </Button>
            </div>

            <p className="text-sm text-gray-700">Dispatch by: {product.dispatchDate}</p>
          </div>
        </div>

        {/* Detailed Info Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-2">
            {/* Product Information Box */}
            <div className="border p-6 rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg mb-4 text-maroon">Product Information</h3>
              <div className="space-y-3 text-sm">
                {Object.entries(product.productInfo).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Box */}
            <div className="border p-6 rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg mb-4 text-maroon">Product Details</h3>
              <div className="space-y-3 text-sm">
                {Object.entries(product.productDetails).map(([key, value]) => (
                   <div key={key} className="flex justify-between">
                   <span className="text-gray-700">{key}:</span>
                   <span className="font-medium text-gray-800">{value}</span>
                 </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="border p-6 rounded-lg h-full flex flex-col bg-gray-50">
            <h3 className="font-semibold text-lg mb-4 text-maroon">Price Breakdown</h3>
            <div className="space-y-3 text-sm flex-grow">
              {Object.entries(product.priceBreakdown).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-700">{key}:</span>
                  <span className={`font-medium ${key === 'Final Selling Price' ? 'text-maroon text-lg' : 'text-gray-800'}`}>
                    ₹{value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;