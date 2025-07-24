import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/Blogcards';
import BlogImage from '@/assets/Blog.png';

const blogPosts = [
  {
    id: 1,
    imageUrl: BlogImage,
    date: 'July 24, 2025',
    readTime: '2 min read',
    headline: 'The Art of Layering: How to Style Your Jewelry',
    category: 'Style',
  },
  {
    id: 2,
    imageUrl: BlogImage,
    date: 'July 22, 2025',
    readTime: '2 min read',
    headline: 'Top 5 Ring Designs That Broke the Internet',
    category: 'Trending',
  },
  {
    id: 3,
    imageUrl: BlogImage,
    date: 'July 20, 2025',
    readTime: '2 min read',
    headline: 'Gold or Platinum? Here’s What Gen Z Chooses',
    category: 'Luxury',
  },
];

const BlogDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* Full-Width Image */}
      <div className="w-full px-4 md:px-0 max-w-4xl mx-auto mt-6">
        <img
          src={BlogImage}
          alt="Blog Cover"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="container mx-auto py-10">
        <div className="w-full md:w-[60%] mx-auto">
          {/* Headline */}
          <h1 className="text-4xl font-medium mb-4 leading-snug font-serif text-maroon">
            The Art of Layering: How to Style Your Jewelry
          </h1>

          {/* Meta */}
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <span>July 24, 2025</span>
            <span className="mx-2 text-xs">•</span>
            <span>2 min read</span>
            <span className="mx-2 text-xs">•</span>
            <span>by Team 360</span>
          </div>

          {/* Description */}
          <div className="text-gray-800 space-y-4 leading-relaxed">
            <p>Layering jewelry is more than a trend – it’s a statement. Here’s how you master the art:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Start with a focal piece, like a bold pendant or choker.</li>
              <li>Mix textures – don’t be afraid to combine gold, silver, and beads.</li>
              <li>Vary lengths for depth and movement.</li>
              <li>Balance dainty chains with statement items.</li>
              <li>Don’t forget earrings and rings to complete the vibe.</li>
            </ul>
            <p>Layering lets your personality shine. So go wild, mix metals, and wear what makes you feel like a boss. 💍✨</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque repellendus atque sunt reiciendis officiis. Necessitatibus nemo dolores similique ut, itaque iste? Doloribus ullam eos labore deserunt saepe explicabo optio facere a, fugit ex corrupti rerum provident amet sequi voluptate! Sed aspernatur velit sint, cupiditate corrupti dolores expedita laudantium laboriosam, accusantium eligendi, voluptas aut culpa quod facere repellendus natus explicabo vero. Ipsa illo nesciunt maxime impedit quae iste consequuntur, eaque totam quod molestiae vel atque. Aspernatur eligendi magni reprehenderit et quam incidunt? Nam, ut! In eum impedit aliquid laboriosam repudiandae animi iste adipisci harum! Odio minus placeat magni laudantium accusantium, illo eveniet perferendis enim praesentium et modi. Debitis facere pariatur quasi iure cumque voluptatibus, adipisci nam asperiores esse eius maxime consectetur qui perspiciatis nostrum soluta praesentium modi quaerat ut ea alias? A fugiat dolor assumenda veritatis dicta sapiente, natus tempore earum, quod voluptatibus animi consequatur laborum quos iusto libero officia eos quisquam. Quidem debitis exercitationem assumenda veniam, suscipit facere sed cum ab eum, culpa maiores aliquam libero dolores cumque quaerat possimus ipsa? Dolore vel ducimus itaque quaerat et hic laborum soluta.</p>
          </div>

                    {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['Jewelry', 'Style Tips', 'Layering', 'Fashion'].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-gray-200 text-sm hover:bg-maroon hover:text-white transition cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-10" />

      {/* Related Posts */}
      <div className="px-4 py-12">
        <h2 className="text-4xl font-medium font-serif text-center mb-10 text-maroon">
          Related Posts
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
