import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import thumbnail1 from '../assets/thumbnail-1.jpg'; 
import thumbnail2 from '../assets/thumbnail-2.jpg'; 
import thumbnail3 from '../assets/thumbnail-3.jpg'; 
import thumbnail4 from '../assets/thumbnail-4.jpg'; 
import thumbnail5 from '../assets/thumbnail-5.jpg'; 
import thumbnail6 from '../assets/thumbnail-6.jpg';
import thumbnail7 from '../assets/thumbnail-7.jpg'; 
import thumbnail8 from '../assets/thumbnail-8.jpg'; 
import thumbnail9 from '../assets/thumbnail-9.jpg';
import profileLogoUrl from '../assets/instagram-icon.jpg'; // Update with your actual profile logo URL

// --- CONFIGURATION ---
const instagramProfileUrl = 'https://www.instagram.com/sriswarnakanchi/';
const instagramUsername = 'Swarna Kanchi';

// --- YOUR INSTAGRAM POSTS WITH REAL, WORKING THUMBNAIL URLS ---
const instaPosts = [
  { 
    url: 'https://www.instagram.com/reel/DMmRwFOJ0Mp/', 
    type: 'reel',
    thumbnailUrl: thumbnail1
  },
  { 
    url: 'https://www.instagram.com/p/DMmQ7CkPezv/', 
    type: 'image',
    thumbnailUrl: thumbnail2
  },
  { 
    url: 'https://www.instagram.com/p/DMj0sAIoDU0/', 
    type: 'image',
    thumbnailUrl: thumbnail3
  },
  { 
    url: 'https://www.instagram.com/p/DMcFeg2T043/', 
    type: 'image',
    thumbnailUrl: thumbnail4 
  }, 
  { 
    url: 'https://www.instagram.com/reel/DLpREqoqorT/', 
    type: 'reel',
    thumbnailUrl: thumbnail5
  },
  { 
    url: 'https://www.instagram.com/reel/DLbnDxJzkQM/', 
    type: 'reel',
    thumbnailUrl: thumbnail6
  },
  { 
    url: 'https://www.instagram.com/reel/DLZ0muOSpkm/', 
    type: 'reel',
    thumbnailUrl: thumbnail7
  },
  { 
    url: 'https://www.instagram.com/reel/DLZoCMQPIg9/', 
    type: 'reel',
    thumbnailUrl: thumbnail8
  },
  { 
    url: 'https://www.instagram.com/reel/DLKlAAKpT1a/', 
    type: 'reel',
    thumbnailUrl: thumbnail9
  },
];

// --- Icon Components (No changes) ---
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" /></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3" /><line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
);
const ButtonInstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3" /><line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
);

const InstagramSection = () => {

  const renderSlide = (post, index) => (
    <SwiperSlide key={index}>
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="block aspect-[9/16] rounded-lg relative group overflow-hidden bg-black/80">
        <img src={post.thumbnailUrl} alt={`Instagram Post ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"/>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 flex items-center justify-center transition-colors duration-300">
          {post.type === 'reel' ? <PlayIcon /> : <InstagramIcon />}
        </div>
      </a>
    </SwiperSlide>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 sm:space-x-4">
            <img src={profileLogoUrl} alt={`${instagramUsername} profile picture`} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/50"/>
            <span className="font-bold text-lg sm:text-2xl text-regural hidden sm:block font-serif">{instagramUsername}</span>
          </a>
          <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-maroon text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
            <ButtonInstagramIcon />
            <span className="hidden sm:inline">Follow Us</span>
            <span className="sm:hidden">Follow</span>
          </a>
        </div>

        {/* Desktop Swiper */}
        <Swiper modules={[Autoplay]} spaceBetween={16} slidesPerView={6} autoplay={{ delay: 0, disableOnInteraction: false }} speed={3000} loop={true} className="hidden md:block">
          {instaPosts.map(renderSlide)}
        </Swiper>
        {/* Mobile Swiper */}
        <Swiper modules={[Autoplay]} spaceBetween={12} slidesPerView={3} autoplay={{ delay: 0, disableOnInteraction: false }} speed={3000} loop={true} className="md:hidden">
          {instaPosts.map(renderSlide)}
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramSection;