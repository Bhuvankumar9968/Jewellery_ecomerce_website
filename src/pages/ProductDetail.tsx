import React, { useState } from "react";
import { Heart, ShoppingCart, Minus, Plus, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IGIDiamonds from "@/assets/IGI-Diamonds.png";
import Hallmarked from "@/assets/Hallmarked-Diamond.png";
import Ring1 from "@/assets/Ring-1.png";
import Ring2 from "@/assets/Ring-2.png";
import Ring3 from "@/assets/Ring-3.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("13");
  const [selectedPurity, setSelectedPurity] = useState("22K");
  const [selectedOccasion, setSelectedOccasion] = useState("Daily Wear");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Malabar Gold Ring FRTMN40133",
    code: "FRTMN40133",
    price: 23780,
    category: "Gold Rings",
    subcategory: "Daily Wear",
    availability: "In Stock",
    images: [Ring1, Ring2, Ring3],
    sizes: [
      { value: "11", label: "11 (51.2 mm)" },
      { value: "12", label: "12 (52.2 mm)" },
      { value: "13", label: "13 (53.1 mm)" },
      { value: "14", label: "14 (54.1 mm)" },
      { value: "15", label: "15 (55.1 mm)" },
    ],
    purities: [
      { value: "22K", label: "22K Gold" },
      { value: "18K", label: "18K Gold" },
      { value: "14K", label: "14K Gold" },
    ],
    occasions: [
      { value: "Daily Wear", label: "Daily Wear" },
      { value: "Party Wear", label: "Party Wear" },
      { value: "Wedding", label: "Wedding" },
    ],
    priceBreakdown: {
      gold: 19421,
      otherStone: 15,
      making: 3651,
      tax: 693,
    },
    dispatchDate: "June 25, 2025",
    features: [
      "BIS Hallmarked 916 Gold",
      "Handcrafted Design",
      "Traditional Motifs",
      "Lifetime Warranty",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-warmGrey">
            <li>
              <a href="/" className="hover:text-golden">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="hover:text-golden">
                Gold
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="hover:text-golden">
                Rings
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="hover:text-golden">
                {product.subcategory}
              </a>
            </li>
            <li>/</li>
            <li className="text-maroon">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Zoomable Image */}
            <div className="max-w-[600px] mx-auto rounded-lg bg-white overflow-hidden border">
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={3}
                doubleClick={{ disabled: true }}
                wheel={{ step: 0.1 }}
              >
                <TransformComponent>
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-golden"
                      : "border-gray-200"
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
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-serif font-bold text-maroon mb-2">
                {product.name}
              </h1>
              <p className="text-gray-700 text-md mb-4">
                Product Code: {product.code}
              </p>
              <p className="text-gray-800 text-sm mb-4">
                Free Shipping In India | Hallmarked jewellery available for sale
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.availability === "In Stock"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.availability}
                </span>
              </div>
            </div>

            <div className="text-3xl font-medium text-maroon mb-6">
              ₹{product.price.toLocaleString()}
              <p className="text-gray-500 text-xs mb-4">
                (Inclusive of all taxes)
              </p>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full h-10">
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Purity</label>
                <Select
                  value={selectedPurity}
                  onValueChange={setSelectedPurity}
                >
                  <SelectTrigger className="w-full h-10">
                    <SelectValue placeholder="Select Purity" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.purities.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        {p.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Occasion
                </label>
                <Select
                  value={selectedOccasion}
                  onValueChange={setSelectedOccasion}
                >
                  <SelectTrigger className="w-full h-10">
                    <SelectValue placeholder="Select Occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.occasions.map((o) => (
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-lg">
              <h3 className="font-medium mb-5">Price Breakdown</h3>
              <div className="flex items-stretch text-center text-sm text-gray-800 divide-x divide-gray-300">
                <div className="flex-1 px-2">
                  <div className="text-gray-900 text-md font-medium">Gold</div>
                  <div className="font-medium text-lg text-gray-700">
                    ₹{product.priceBreakdown.gold.toLocaleString()}
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="text-gray-900 text-md font-medium">Stone</div>
                  <div className="font-medium text-lg text-gray-700">
                    ₹{product.priceBreakdown.otherStone.toLocaleString()}
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="text-gray-900 text-md font-medium">
                    Making
                  </div>
                  <div className="font-medium text-lg text-gray-700">
                    ₹{product.priceBreakdown.making.toLocaleString()}
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="text-gray-900 text-md font-medium">Tax</div>
                  <div className="font-medium text-lg text-gray-700">
                    ₹{product.priceBreakdown.tax.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity & Buy Now */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                </Button>

                <Button
                  size="lg"
                  className="w-full bg-maroon hover:bg-red-800 text-white"
                >
                  Buy Now
                </Button>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>Dispatch by: {product.dispatchDate}</p>

              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  100% Certified by <br /> International Standards
                </span>

                <div className="w-px h-6 bg-gray-300" />

                <img
                  src={Hallmarked}
                  alt="BIS Hallmark"
                  className="h-20 w-auto object-contain"
                />

                <div className="w-px h-6 bg-gray-300" />

                <img
                  src={IGIDiamonds}
                  alt="Certified Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
