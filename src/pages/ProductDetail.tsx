
import React, { useState } from 'react';
import { Heart, ShoppingCart, Minus, Plus, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('13');
  const [selectedColor, setSelectedColor] = useState('yellow');
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
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&crop=center"
    ],
    sizes: [
      { value: '11', label: '11 (51.2 mm)' },
      { value: '12', label: '12 (52.2 mm)' },
      { value: '13', label: '13 (53.1 mm)' },
      { value: '14', label: '14 (54.1 mm)' },
      { value: '15', label: '15 (55.1 mm)' }
    ],
    colors: [
      { value: 'yellow', label: 'Yellow Gold', color: '#FFD700' },
      { value: 'rose', label: 'Rose Gold', color: '#E7B5A4' },
      { value: 'white', label: 'White Gold', color: '#F8F8FF' }
    ],
    priceBreakdown: {
      gold: 19421,
      otherStone: 15,
      making: 3651,
      tax: 693
    },
    dispatchDate: "June 25, 2025",
    tags: ["Free Shipping in India", "Hallmarked Jewellery"],
    features: [
      "BIS Hallmarked 916 Gold",
      "Handcrafted Design",
      "Traditional Motifs",
      "Lifetime Warranty"
    ]
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-warmGrey">
            <li><a href="/" className="hover:text-golden">Home</a></li>
            <li>/</li>
            <li><a href="#" className="hover:text-golden">Gold</a></li>
            <li>/</li>
            <li><a href="#" className="hover:text-golden">Rings</a></li>
            <li>/</li>
            <li><a href="#" className="hover:text-golden">{product.subcategory}</a></li>
            <li>/</li>
            <li className="text-maroon">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover cursor-zoom-in"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-golden' : 'border-gray-200'
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
              <h1 className="text-3xl font-serif font-bold text-maroon mb-2">{product.name}</h1>
              <p className="text-warmGrey mb-4">Product Code: {product.code}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-green-100 text-green-800">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.availability === 'In Stock' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.availability}
                </span>
              </div>
            </div>

            <div className="text-4xl font-bold text-golden mb-6">
              ₹{product.price.toLocaleString()}
            </div>

            {/* Size Selector */}
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue />
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

            {/* Color Selector */}
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedColor === color.value ? 'border-maroon' : 'border-gray-300'
                    } relative overflow-hidden`}
                    style={{ backgroundColor: color.color }}
                  >
                    {selectedColor === color.value && (
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Price Breakdown</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Gold:</span>
                  <span>₹{product.priceBreakdown.gold.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Other Stone:</span>
                  <span>₹{product.priceBreakdown.otherStone.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Making:</span>
                  <span>₹{product.priceBreakdown.making.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>₹{product.priceBreakdown.tax.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>₹{product.price.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Wishlist
                </Button>
                
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-maroon hover:bg-red-800 text-white"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            <div className="text-sm text-warmGrey">
              <p><strong>Dispatch by:</strong> {product.dispatchDate}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-warmGrey">
                    <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
