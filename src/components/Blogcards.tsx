import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({
  imageUrl,
  date,
  readTime,
  headline,
  category = "Lifestyle", // Default category
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogdetails`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg overflow-hidden h-full flex flex-col text-sm cursor-pointer group transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
        {/* Category Pill */}
        <span className="absolute top-2 right-2 bg-golden backdrop-blur text-xs text-black px-4 py-2 rounded-full z-10 font-medium shadow-sm">
          {category}
        </span>

        {/* Image */}
        <img
          src={imageUrl}
          alt={headline}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="p-3 flex flex-col flex-1">
        <p className="text-sm text-gray-500 mb-1">
          {date} • {readTime}
        </p>
        <h2 className="font-medium text-2xl text-gray-700 group-hover:text-[#800000] transition-colors duration-300 min-h-[48px] font-serif">
          {headline}
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
