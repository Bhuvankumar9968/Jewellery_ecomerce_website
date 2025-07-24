import React from 'react';

// --- Configuration ---
const instagramProfileUrl = 'https://www.instagram.com/sriswarnakanchi/';
const instagramUsername = 'sriswarnakanchi';

// TODO:
// 1. Fill in the real captions for your posts.
// 2. Mark which posts are videos by setting `isReel: true`.
const instagramPosts = [
  {
    postUrl: 'https://www.instagram.com/p/DMZ-6NXNboJ/',
    embedUrl: 'https://www.instagram.com/p/DMZ-6NXNboJ/embed/',
    caption: 'REPLACE THIS: This is a static image post.',
    isReel: false, // This is an image
  },
  {
    postUrl: 'https://www.instagram.com/reel/DLbnDxJzkQM/',
    embedUrl: 'https://www.instagram.com/reel/DLbnDxJzkQM/embed/captioned/',
    caption: 'REPLACE THIS: This reel will now autoplay.',
    isReel: true, // This is a video reel
  },
  {
    postUrl: 'https://www.instagram.com/reel/DLKklgPNhg8/',
    embedUrl: 'https://www.instagram.com/reel/DLKklgPNhg8/embed/captioned/',
    caption: 'REPLACE THIS: Another autoplaying video.',
    isReel: true, // This is a video reel
  },
  {
    postUrl: 'https://www.instagram.com/p/DLHX3KDtkbK/',
    embedUrl: 'https://www.instagram.com/p/DLHX3KDtkbK/embed/',
    caption: 'REPLACE THIS: Just a beautiful static image.',
    isReel: false, // This is an image
  },
  {
    postUrl: 'https://www.instagram.com/reel/DLCgrbLP_21/',
    embedUrl: 'https://www.instagram.com/reel/DLCgrbLP_21/embed/captioned/',
    caption: 'REPLACE THIS: And one more autoplaying reel!',
    isReel: true, // This is a video reel
  },
  {
    postUrl: 'https://www.instagram.com/p/C8o3g1yS-I5/',
    embedUrl: 'https://www.instagram.com/p/C8o3g1yS-I5/embed/',
    caption: 'REPLACE THIS: Static post example.',
    isReel: false,
  },
  {
    postUrl: 'https://www.instagram.com/p/C8o3XgES-Z7/',
    embedUrl: 'https://www.instagram.com/p/C8o3XgES-Z7/embed/',
    caption: 'REPLACE THIS: Another static post example.',
    isReel: false,
  },
  {
    postUrl: 'https://www.instagram.com/reel/C8o3T_oS-Oq/', // Example Reel
    embedUrl: 'https://www.instagram.com/reel/C8o3T_oS-Oq/embed/captioned/',
    caption: 'REPLACE THIS: This final reel will also autoplay.',
    isReel: true,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* --- Header Row --- */}
        <div className="flex justify-between items-center mb-8 px-2">
          {/* Left Side: Logo and Username */}
          <div className="flex items-center space-x-4">
            {/* TODO: Replace this div with your actual logo */}
            <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div>
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-gray-900"
              >
                {instagramUsername}
              </a>
              <p className="text-sm text-gray-500">Follow us on Instagram</p>
            </div>
          </div>

          {/* Right Side: Follow Button */}
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            {/* Instagram Icon SVG */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.11 0-3.467.012-4.695.068-2.61.12-3.834 1.344-3.954 3.954-.056 1.228-.067 1.584-.067 4.695s.011 3.467.067 4.695c.12 2.61 1.344 3.834 3.954 3.954 1.228.056 1.584.067 4.695.067s3.467-.011 4.695-.067c2.61-.12 3.834-1.344 3.954-3.954.056-1.228.067-1.584.067-4.695s-.011-3.467-.067-4.695c-.12-2.61-1.344-3.834-3.954-3.954C15.467 3.977 15.11 3.965 12 3.965zm0 2.969a5.066 5.066 0 100 10.132 5.066 5.066 0 000-10.132zm0 8.232a3.166 3.166 0 110-6.332 3.166 3.166 0 010 6.332zm4.39-8.31a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
            </svg>
            <span>Follow</span>
          </a>
        </div>

        {/* --- 4-Column Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full aspect-[4/5] overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <iframe
                  src={post.embedUrl}
                  title={`Instagram Post ${index + 1}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                  className="w-full h-full"
                  style={{
                    transform: 'scale(1.3)',
                    marginTop: '-48px',
                    pointerEvents: 'none',
                  }}
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 ease-in-out flex items-center justify-center p-4">
                <p className="text-white text-center text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;