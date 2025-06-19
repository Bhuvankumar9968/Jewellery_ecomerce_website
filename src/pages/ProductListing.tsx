
import React, { useState } from 'react';
import { Filter, Grid, List, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductListing = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const products = [
    {
      id: 1,
      name: "Malabar Gold Ring FRTMN40133",
      code: "FRTMN40133",
      price: 23780,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&crop=center",
      category: "Gold Rings",
      metal: "Gold",
      gender: "Women",
      occasion: "Daily Wear"
    },
    {
      id: 2,
      name: "Diamond Earrings DEF456",
      code: "DEF456",
      price: 45690,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop&crop=center",
      category: "Diamond Earrings",
      metal: "Gold",
      gender: "Women",
      occasion: "Festive"
    },
    {
      id: 3,
      name: "Traditional Bangle Set TBS789",
      code: "TBS789",
      price: 32450,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop&crop=center",
      category: "Gold Bangles",
      metal: "Gold",
      gender: "Women",
      occasion: "Wedding"
    },
    {
      id: 4,
      name: "Pearl Necklace PNS101",
      code: "PNS101",
      price: 28900,
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&h=300&fit=crop&crop=center",
      category: "Pearl Jewelry",
      metal: "Gold",
      gender: "Women",
      occasion: "Party"
    },
    {
      id: 5,
      name: "Men's Gold Chain MGC202",
      code: "MGC202",
      price: 67800,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop&crop=center",
      category: "Men's Jewelry",
      metal: "Gold",
      gender: "Men",
      occasion: "Daily Wear"
    },
    {
      id: 6,
      name: "Kids Gold Earrings KGE303",
      code: "KGE303",
      price: 12500,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop&crop=center",
      category: "Kids Jewelry",
      metal: "Gold",
      gender: "Kids",
      occasion: "Daily Wear"
    }
  ];

  const FilterSidebar = () => (
    <div className="w-80 bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-maroon">Filters</h3>
        <Filter className="w-5 h-5 text-warmGrey" />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Category</h4>
        <div className="space-y-2">
          {['Rings', 'Earrings', 'Necklaces', 'Bangles', 'Chains'].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label htmlFor={category} className="text-sm text-warmGrey">{category}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Metal Type Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Metal Type</h4>
        <div className="space-y-2">
          {['Gold', 'Diamond', 'Platinum', 'Silver'].map((metal) => (
            <div key={metal} className="flex items-center space-x-2">
              <Checkbox id={metal} />
              <label htmlFor={metal} className="text-sm text-warmGrey">{metal}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={100000}
            step={1000}
            className="mb-3"
          />
          <div className="flex justify-between text-sm text-warmGrey">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Gender</h4>
        <div className="space-y-2">
          {['Women', 'Men', 'Kids', 'Unisex'].map((gender) => (
            <div key={gender} className="flex items-center space-x-2">
              <Checkbox id={gender} />
              <label htmlFor={gender} className="text-sm text-warmGrey">{gender}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Occasion Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Occasion</h4>
        <div className="space-y-2">
          {['Daily Wear', 'Wedding', 'Festive', 'Party', 'Office'].map((occasion) => (
            <div key={occasion} className="flex items-center space-x-2">
              <Checkbox id={occasion} />
              <label htmlFor={occasion} className="text-sm text-warmGrey">{occasion}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover-lift">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-warmGrey mb-1">{product.category}</p>
        <h3 className="font-semibold text-maroon mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-xs text-warmGrey mb-3">Code: {product.code}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-golden">₹{product.price.toLocaleString()}</span>
          <Button 
            size="sm" 
            className="bg-maroon hover:bg-red-800 text-white"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );

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
            <li className="text-maroon">Rings</li>
          </ol>
        </nav>

        <div className="flex gap-8">
          <FilterSidebar />
          
          <div className="flex-1">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-serif font-bold text-maroon">Gold Rings</h1>
              
              <div className="flex items-center space-x-4">
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewType === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewType('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewType === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewType('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className={`grid gap-6 ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm" className="bg-maroon">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductListing;
