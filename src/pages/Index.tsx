
import React from 'react';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import FeaturedCollections from '@/components/FeaturedCollections';
import DiamondJewellerySection from '@/components/DiamondJewellerySection';
import EarringCollectionSection from '@/components/EarringCollectionSection';
import GoldJewellerySection from '@/components/GoldJewellerySection';
import GemstoneCollection from '@/components/GemstoneJewellerySection';
import PlatinumSection from '@/components/PlatinumJewellerySection';
import ShopByGender from '@/components/ShopByGender';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProductShowcase from '@/components/ProductShowcase';
// import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main>
        <HeroCarousel />
        <ProductShowcase />
        <DiamondJewellerySection />
        <GoldJewellerySection />
        <EarringCollectionSection />
        <GemstoneCollection />
        <PlatinumSection />
        <ShopByGender />
        <FeaturedCollections />
        {/* <WhyChooseUs /> */}
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
