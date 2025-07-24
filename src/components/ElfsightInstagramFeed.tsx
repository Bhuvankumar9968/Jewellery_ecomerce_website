import React, { useEffect } from 'react';

const ElfsightInstagramFeed = () => {
  useEffect(() => {
    // This logic handles loading the Elfsight script.
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup
    };
  }, []);

  return (
    // We've added this wrapper div with a unique class name.
    <div className="custom-elfsight-container">
      <div
        className="elfsight-app-3c34dbeb-1577-4918-90b3-2542551766eb"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightInstagramFeed;