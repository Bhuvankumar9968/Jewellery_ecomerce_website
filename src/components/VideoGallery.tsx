import React from 'react';

const videos = [
  {
    id: 1,
    embed: 'https://www.youtube.com/embed/E4mivcycvDE?autoplay=1&mute=1&loop=1&playlist=E4mivcycvDE&controls=1&rel=0',
  },
  {
    id: 2,
    embed: 'https://www.youtube.com/embed/7oOgNMacJU0?controls=0&rel=0',
  },
  {
    id: 3,
    embed: 'https://www.youtube.com/embed/IRABgkL-_b0?controls=0&rel=0',
  },
];

const VideoGallery = () => {
  return (
    <section className="bg-white py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-4">
          Video Gallery
        </h2>
        <p className="text-warmGrey text-lg max-w-2xl mx-auto">
          Explore our elegant collection through visuals that speak beauty and craftsmanship.
        </p>
      </div>

      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden xl:flex gap-6 h-[500px]">
          {/* Left Video (70%) */}
          <div className="w-[70%] h-full rounded overflow-hidden">
            <iframe
              src={videos[0].embed}
              title="Main Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Right Videos (30%) */}
          <div className="w-[30%] flex flex-col gap-4 h-full">
            {videos.slice(1).map((vid, i) => (
              <div
                key={i}
                className="relative flex-1 rounded overflow-hidden group"
              >
                <iframe
                  src={vid.embed}
                  title={`Video ${i + 2}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  className="w-full h-full pointer-events-none group-hover:pointer-events-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="xl:hidden flex flex-col gap-4">
          {/* Left Video - full width and 16:9 */}
          <div className="rounded overflow-hidden aspect-video">
            <iframe
              src={videos[0].embed}
              title="Main Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Right Videos Side by Side */}
          <div className="grid grid-cols-2 gap-4">
            {videos.slice(1).map((vid, i) => (
              <div
                key={i}
                className="relative rounded overflow-hidden aspect-video group"
              >
                <iframe
                  src={vid.embed}
                  title={`Video ${i + 2}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  className="w-full h-full pointer-events-none group-hover:pointer-events-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
