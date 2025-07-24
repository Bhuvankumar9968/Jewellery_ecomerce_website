import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/Blogcards';
import BlogBanner from '@/assets/herocarousel-1.jpg';
import BlogImage from '@/assets/Blog.png'; // Example image, replace with actual blog images

const blogPosts = [
  {
    id: 1,
    imageUrl: BlogImage,
    date: "July 24, 2025",
    readTime: "2 min read",
    headline: "The Art of Layering: How to Style Your Jewelry",
    category: "Style",
  },
  {
    id: 2,
    imageUrl: BlogImage,
    date: "July 22, 2025",
    readTime: "2 min read",
    headline: "Top 5 Ring Designs That Broke the Internet",
    category: "Trending",
  },
  {
    id: 3,
    imageUrl: BlogImage,
    date: "July 20, 2025",
    readTime: "2 min read",
    headline: "Gold or Platinum? Here’s What Gen Z Chooses",
    category: "Luxury",
  },
  {
    id: 4,
    imageUrl: BlogImage,
    date: "July 18, 2025",
    readTime: "2 min read",
    headline: "Accessorize Like a Boss: Minimalist Trends 2025",
    category: "Minimalism",
  },
  {
    id: 5,
    imageUrl: BlogImage,
    date: "July 15, 2025",
    readTime: "2 min read",
    headline: "Art Meets Jewelry: New-Age Statement Pieces",
    category: "Design",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* Banner */}
      <div className="w-full">
        <img
          src={BlogBanner}
          alt="Blog Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-10">
        {/* First Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {blogPosts.slice(0, 2).map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.slice(2, 5).map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
