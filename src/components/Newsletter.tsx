
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-16 golden-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Stay Updated with Sri Swarna Kanchi
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Subscribe to our newsletter for exclusive offers, new collections, and jewelry care tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address"
              className="flex-1 bg-white border-none"
            />
            <Button 
              className="bg-maroon hover:bg-red-800 text-white px-8"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-white/80 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
